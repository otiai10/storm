import type { StorageArea } from "../interface";
import type { TypeCheckFunc } from "../types";

export type Schema = { [key: string]: TypeCheckFunc };

type ModelConstructor<T> = {
    new(props?: any): T;
    __ns__(): string;
    __area__: StorageArea;
    __rawdict__(): { [key: string]: any };
    __nextID__(ensemble?: { [key: string]: any }): string;

    list<T>(): Promise<T[]>;

    schema: Schema;
};

class IDProvider {
    static __nextID__: (ensemble?: { [key: string]: any }) => string = this.timestampID;
    static timestampID(): string {
        return String(Date.now());
    }
    static sequentialID(ensemble: { [key:string]: any} = {}): string {
        const last = Object.keys(ensemble).map(id => parseInt(id, 10)).sort((prev, next) => (prev < next) ? -1 : 1).pop();
        return String((last || 0) + 1);
    }
}

export class Model extends IDProvider {

    static __namespace__?: string;
    static __ns__<T>(this: ModelConstructor<T>): string {
        return this["__namespace__"] ?? this.name;
    }
    static __area__: StorageArea = chrome?.storage?.local;

    static schema: Schema = {};

    static useStorage(area: StorageArea) {
        this.__area__ = area;
    }

    static async __rawdict__<T>(this: ModelConstructor<T>): Promise<{ [key: string]: any }> {
        const namespace: string = this.__ns__();
        const ensemble = await this.__area__.get(namespace);
        return ((ensemble || {})[namespace] || {});
    }

    static new<T>(this: ModelConstructor<T>, props?: Record<string, any>, _id?: string): T {
        const instance: T = new this(props);
        instance["_id"] = _id ?? null;
        Object.entries<any>(props || {}).map(([key, value]) => {
            instance[key] = value;
        });
        return instance;
    }

    static async create<T>(this: ModelConstructor<T>, props?: Record<string, any>): Promise<T> {
        return await this["new"](props).save();
    }

    static async list<T>(this: ModelConstructor<T>): Promise<T[]> {
        const dict = await this.__rawdict__();
        const res: T[] = [];
        for (let id in dict) {
            const instance = this["new"](dict[id], id) as Model;
            await instance.decode(dict[id]);
            res.push(instance as T);
        }
        return res;
    }

    static async filter<T>(this: ModelConstructor<T>, func: (v: T, i?: number, arr?: T[]) => boolean): Promise<T[]> {
        return (await this.list()).filter<T>(func as any);
    }

    static async find<T>(this: ModelConstructor<T>, id: string): Promise<T | null> {
        const dict = await this.__rawdict__();
        if (!dict[id]) return null;
        const instance = this["new"](dict[id], id) as Model;
        await instance.decode(dict[id]);
        return instance as T;
    }

    static async drop<T>(this: ModelConstructor<T>): Promise<void> {
        await this.__area__.set({ [this.__ns__()]: {} });
        return;
    }

    public _id: string | null;

    async save<T>(this: T & Model): Promise<T> {
        const parent = (this.constructor as ModelConstructor<T>);
        const dict = await parent.__rawdict__();
        if (!this._id) this._id = parent.__nextID__(dict);
        dict[this._id!] = this;
        await parent.__area__.set({ [parent.__ns__()]: dict });
        return this;
    }

    async delete<T>(this: T & Model): Promise<T> {
        const parent = (this.constructor as ModelConstructor<T>);
        const dict = await parent.__rawdict__();
        delete dict[this._id];
        await parent.__area__.set({ [parent.__ns__()]: dict });
        delete this._id;
        return this;
    }

    async update<T>(this: T & Model, props: Record<string, any>): Promise<T> {
        Object.keys(props).map(key => {
            if (this.hasOwnProperty(key)) this[key] = props[key];
        });
        return this.save();
    }

    // TODO: See https://github.com/otiai10/chomex/blob/main/src/Model/index.ts#L330-L348
    // public decode<T>(this: T, obj: { [key: string]: any }) {
    //     Object.keys(obj).map(key => {
    //         this[key] = obj[key];
    //     });
    //     return this;
    // }
    async decode<T>(this: T & Model, raw: { [prop: string]: any }): Promise<T> {
        const { schema } = (this.constructor as ModelConstructor<T>);
        for (let key in schema) {
            if (!this.hasOwnProperty(key)) continue;
            if (!raw.hasOwnProperty(key)) continue;
            if (typeof schema[key].load == "function") {
                this[key] = await schema[key].load(raw[key]);
            } else {
                this[key] = raw[key];
            }
        }
        return this;
    }

    // TODO: See https://github.com/otiai10/chomex/blob/main/src/Model/index.ts#L350-L373
    // public encode<T>(this: T): { [key: string]: any } {
    //     const encoded: { [key: string]: any } = {};
    //     for (const prop in this) {
    //         if (!this.hasOwnProperty(prop)) {
    //             continue;
    //         }
    //         encoded[prop] = this[prop];
    //     }
    //     return encoded;
    // }
}
