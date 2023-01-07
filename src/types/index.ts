import { createPrimitiveTypeChecker } from "./primitive";
import { createDateTypeChecker } from "./date";
import { modelTypeChecker } from "./model";

export const Types = {
    /**
     * Primitive types
     */
    bool:   createPrimitiveTypeChecker('bool',   (value) => typeof value === 'boolean'),
    number: createPrimitiveTypeChecker('number', (value) => typeof value === 'number'),
    string: createPrimitiveTypeChecker("string", (value) => typeof value === "string"),
    object: createPrimitiveTypeChecker('object', (value) => typeof value === 'object'),
    array:  createPrimitiveTypeChecker('array',  (value) => Array.isArray(value)),

    /**
     * Built-in object types
     */
    date: createDateTypeChecker(),

    /**
     * Reference object types
     */
    model: modelTypeChecker,
};

