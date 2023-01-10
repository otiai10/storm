(()=>{var e,t={},n=t&&t.__extends||(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.Types=t.Model=void 0;var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.Types=r.Model=void 0;var o={},i=o&&o.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=o&&o.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}u((r=r.apply(e,t||[])).next())}))},a=o&&o.__generator||function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(o,"__esModule",{value:!0}),o.Model=void 0;var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var n;return i(t,e),t.__ns__=function(){var e;return null!==(e=this.__namespace__)&&void 0!==e?e:this.name},t.useStorage=function(e){this.__area__=e},t.__rawdict__=function(){return c(this,void 0,void 0,(function(){var e;return a(this,(function(t){switch(t.label){case 0:return e=this.__ns__(),[4,this.__area__.get(e)];case 1:return[2,(t.sent()||{})[e]||{}]}}))}))},t.new=function(e,t){var n=new this(e);return n._id=null!=t?t:null,Object.entries(e||{}).map((function(e){var t=e[0],r=e[1];n[t]=r})),n},t.create=function(e){return c(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.new(e).save()];case 1:return[2,t.sent()]}}))}))},t.list=function(){return c(this,void 0,void 0,(function(){var e,t=this;return a(this,(function(n){switch(n.label){case 0:return[4,this.__rawdict__()];case 1:return e=n.sent(),[2,Object.entries(e).map((function(e){var n=e[0],r=e[1];return t.new(r,n)}))]}}))}))},t.filter=function(e){return c(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.list()];case 1:return[2,t.sent().filter(e)]}}))}))},t.find=function(e){return c(this,void 0,void 0,(function(){var t;return a(this,(function(n){switch(n.label){case 0:return[4,this.__rawdict__()];case 1:return[2,(t=n.sent())[e]?this.new(t[e],e):null]}}))}))},t.drop=function(){return c(this,void 0,void 0,(function(){var e;return a(this,(function(t){switch(t.label){case 0:return[4,this.__area__.set((e={},e[this.__ns__()]={},e))];case 1:return t.sent(),[2]}}))}))},t.prototype.save=function(){return c(this,void 0,void 0,(function(){var e,t,n;return a(this,(function(r){switch(r.label){case 0:return[4,(e=this.constructor).__rawdict__()];case 1:return t=r.sent(),this._id||(this._id=e.__nextID__(t)),t[this._id]=this,[4,e.__area__.set((n={},n[e.__ns__()]=t,n))];case 2:return r.sent(),[2,this]}}))}))},t.prototype.delete=function(){return c(this,void 0,void 0,(function(){var e,t,n;return a(this,(function(r){switch(r.label){case 0:return[4,(e=this.constructor).__rawdict__()];case 1:return delete(t=r.sent())[this._id],[4,e.__area__.set((n={},n[e.__ns__()]=t,n))];case 2:return r.sent(),delete this._id,[2,this]}}))}))},t.prototype.update=function(e){return c(this,void 0,void 0,(function(){var t=this;return a(this,(function(n){return Object.keys(e).map((function(n){t.hasOwnProperty(n)&&(t[n]=e[n])})),[2,this.save()]}))}))},t.__area__=null===(n=null===chrome||void 0===chrome?void 0:chrome.storage)||void 0===n?void 0:n.local,t}(function(){function e(){}var t;return e.timestampID=function(){return String(Date.now())},e.sequentialID=function(e){void 0===e&&(e={});var t=Object.keys(e).map((function(e){return parseInt(e,10)})).sort((function(e,t){return e<t?-1:1})).pop();return String((t||0)+1)},t=e,e.__nextID__=t.timestampID,e}());o.Model=u,Object.defineProperty(r,"Model",{enumerable:!0,get:function(){return o.Model}});var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.Types=void 0;var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.createPrimitiveTypeChecker=void 0,l.createPrimitiveTypeChecker=function(e,t){var n=function(n,r,o){if(void 0===r){if(n)throw new Error("".concat(o," is marked as required"));return null}if(!t(r))throw new Error("".concat(o," is not ").concat(e));return null},r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.createDateTypeChecker=void 0,f.createDateTypeChecker=function(){var e=function(e,t,n){if(void 0===t){if(e)throw new Error("".concat(n," is marked as required, but got undefined"));return null}if("function"==typeof t.constructor&&"Date"===t.constructor.name)return null;throw new Error("".concat(n," is supposed to be Date, but got ").concat(t.constructor.name))},t=e.bind(null,!1);return t.isRequired=e.bind(null,!0),t.load=function(e){return new Date(e)},t};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.modelTypeChecker=void 0,d.modelTypeChecker=function(e,t){void 0===t&&(t={});var n=function(e,t,n){if(void 0===t){if(e)throw new Error("".concat(n," is marked as required"));return null}return null},r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r.ref=e,r.load=function(e){return t.eager?e&&void 0!==e._id?r.ref.find(e._id):void 0:new r.ref(e)},r},s.Types={bool:(0,l.createPrimitiveTypeChecker)("bool",(function(e){return"boolean"==typeof e})),number:(0,l.createPrimitiveTypeChecker)("number",(function(e){return"number"==typeof e})),string:(0,l.createPrimitiveTypeChecker)("string",(function(e){return"string"==typeof e})),object:(0,l.createPrimitiveTypeChecker)("object",(function(e){return"object"==typeof e})),array:(0,l.createPrimitiveTypeChecker)("array",(function(e){return Array.isArray(e)})),date:(0,f.createDateTypeChecker)(),model:d.modelTypeChecker},Object.defineProperty(r,"Types",{enumerable:!0,get:function(){return s.Types}});var m={};Object.defineProperty(m,"__esModule",{value:!0}),m.use=void 0,m.use=function(e){return function(e){function t(t,n){var r=[],o=null;0==arguments.length?r=Object.keys(e):t instanceof Function?o=t:t instanceof Array?r=t:t&&(r=[t]),n instanceof Function&&(o=n);var i=r.reduce((function(t,n){var r;return t+n.length+((null===(r=e.getItem(n))||void 0===r?void 0:r.length)||0)}),0);if(!o)return Promise.resolve(i);o(i)}function n(t){if(e.clear(),!t)return Promise.resolve();t()}function r(t,n){if(Object.entries(t).map((function(t){var n=t[0],r=t[1];return e.setItem(n,JSON.stringify(r))})),!n)return Promise.resolve();n()}function o(t,n){if((t instanceof Array?t:[t]).map((function(t){return e.removeItem(t)})),!n)return Promise.resolve();n()}function i(t,n){var r=[],o=null,i={};0==arguments.length?r=Object.keys(e):t instanceof Function?(r=Object.keys(e),o=t):"string"==typeof t?r=[t]:t instanceof Array?r=t:t instanceof Object&&(i=t,0==(r=Object.keys(t)).length&&(r=Object.keys(e))),n instanceof Function&&(o=n);var c=r.reduce((function(t,n){return t[n]=JSON.parse(e.getItem(n)||"null")||i[n]||null,t}),{});if(!o)return Promise.resolve(c);o(c)}function c(e,t){if(!t)return Promise.resolve();t()}function a(e,t){}function u(e,t){}function s(e,t){}var l=null;return{getBytesInUse:t,clear:n,set:r,remove:o,get:i,setAccessLevel:c,onChanged:{addListener:function(e){l=e},hasListener:function(e){return!!l&&l==e},hasListeners:function(){return!!l},removeListener:function(e){this.hasListener(e)&&(l=null)},getRules:a,addRules:u,removeRules:s}}}(e)};var _=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.__area__=m.use(globalThis.localStorage),t}(r.Model);t.Model=_,Object.defineProperty(t,"Types",{enumerable:!0,get:function(){return s.Types}});class p extends t.Model{static __namespace__="Item"}const v=({item:e,refresh:t})=>{const n=1==e.status?{textDecoration:"line-through"}:{};return React.createElement("div",{className:"row"},React.createElement("div",{className:"column column-60"},React.createElement("div",{style:n},e.title),React.createElement("div",{style:{fontSize:"xx-small"}},"id:",e._id," status:",e.status)),React.createElement("div",{className:"column column"},0==e.status?React.createElement("a",{className:"button",onClick:async()=>await e.update({status:1})&&t()},"DONE"):React.createElement("a",{className:"button button-clear",onClick:async()=>await e.update({status:0})&&t()},"UNDO")),React.createElement("div",{className:"column column"},React.createElement("a",{className:"button button-outline",onClick:async()=>await e.delete()&&t()},"DELETE")))},h=()=>{const e=()=>{window.location.reload()},[t,n]=React.useState([]),[r,o]=React.useState("");return React.useEffect((()=>p.list().then(n)),[]),React.createElement("div",{className:"container",style:{paddingTop:"16px"}},React.createElement("div",{className:"row"},React.createElement("div",{className:"column"},React.createElement("h1",null,"TODO App Example by ",React.createElement("a",{href:"https://github.com/otiai10/jstorm"},"jstorm")))),React.createElement("div",{className:"row"},React.createElement("div",{className:"column"},React.createElement("pre",null,React.createElement("code",null,'// Import from "jstorm/browser/local" for localStorage:\nimport { Model } from "jstorm/browser/local";\n\n// Define your model:\nclass Item extends Model {\n    static override __namespace__ = "Item";\n    public title: string;\n    public status: number;\n}\n\n// Now, let\'s begin:')))),React.createElement("div",{className:"row"},React.createElement("div",{className:"column column-40"},React.createElement("input",{type:"text",placeholder:"New item title here",onChange:e=>o(e.target.value)})),React.createElement("div",{className:"column"},React.createElement("input",{type:"button",value:"ADD",onClick:async()=>await p.create({title:r,status:0})&&e()})),React.createElement("div",{className:"column column-40"},React.createElement("pre",null,React.createElement("code",null,"// Insert new item:\nconst item = await Item.create({title: text, status: 0})")))),React.createElement("div",{className:"row"},React.createElement("div",{className:"column column-60"},t.map((t=>React.createElement(v,{key:t._id,item:t,refresh:e})))),React.createElement("div",{className:"column column-40"},React.createElement("pre",null,React.createElement("code",null,"// Update:\nitem.update({status: 1});\n\n// Delete:\nitem.delete();")))))},y=document.getElementById("root");ReactDOM.createRoot(y).render(React.createElement(h,null))})();