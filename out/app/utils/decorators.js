"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const lodash_1 = require("lodash");
const Binding_1 = require("~bdo/lib/Binding");
const util_1 = require("~bdo/utils/util");
const environment_1 = require("~bdo/utils/environment");
const on_change_1 = require("on-change");
function watched(params = {}) {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                if (propDesc && propDesc.get) {
                    return propDesc.get.call(this);
                }
                else
                    return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                const capitalizedProp = util_1.ucFirst(stringKey);
                const that = this;
                const initFunc = params.onInit || `on${capitalizedProp}Init`;
                const changeFunc = params.onChange || `on${capitalizedProp}Change`;
                const addFunc = params.onAdd || `on${capitalizedProp}Add`;
                const removeFunc = params.onRemove || `on${capitalizedProp}Remove`;
                if (newVal instanceof Array || lodash_1.isObject(newVal)) {
                    newVal = on_change_1.default(newVal, (path, value, previousValue) => {
                        const newObjectKeys = Object.keys(value);
                        const oldObjectKeys = Object.keys(previousValue);
                        const newLength = newObjectKeys.length;
                        const oldLength = oldObjectKeys.length;
                        if (newLength > oldLength && addFunc in this) {
                            for (const added of newObjectKeys) {
                                if (!oldObjectKeys.includes(added)) {
                                    that[addFunc](value[added], path);
                                    break;
                                }
                            }
                        }
                        if (newLength < oldLength && removeFunc in this) {
                            for (const removed of oldObjectKeys) {
                                if (!newObjectKeys.includes(removed)) {
                                    that[removeFunc](previousValue[removed], path);
                                    break;
                                }
                            }
                        }
                        if (newLength === oldLength && changeFunc in this) {
                            if (Reflect.getMetadata(`init${capitalizedProp}`, this))
                                that[changeFunc](value, path);
                        }
                    }, { isShallow: Boolean(params.isShallow) });
                }
                if (newVal === this[stringKey])
                    return;
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                }
                else
                    Reflect.defineMetadata(key, newVal, this);
                if (changeFunc in this && Reflect.getMetadata(`init${capitalizedProp}`, this))
                    that[changeFunc]();
                if (initFunc in this && !Reflect.getMetadata(`init${capitalizedProp}`, this))
                    that[initFunc](newVal);
                Reflect.defineMetadata(`init${capitalizedProp}`, true, this);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.watched = watched;
function property(_params = {}) {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        if (!Reflect.hasMetadata("definedProperties", target)) {
            Reflect.defineMetadata("definedProperties", new Array(), target);
        }
        const propertyMap = Reflect.getMetadata("definedProperties", target);
        propertyMap.push(key.toString());
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                if (propDesc && propDesc.get) {
                    return propDesc.get.call(this);
                }
                else
                    return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                if (newVal === this[key.toString()])
                    return;
                processBinding(this, key, newVal, propDesc);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.property = property;
function attribute(_params = {}) {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                if (propDesc && propDesc.get) {
                    return propDesc.get.call(this);
                }
                else
                    return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                if (newVal === this[stringKey])
                    return;
                const initMetaName = `${stringKey}AttrInitialized`;
                newVal = processBinding(this, key, newVal, propDesc);
                if (environment_1.isBrowser() && this instanceof HTMLElement) {
                    const attrValue = this.getAttribute(stringKey);
                    if (!Reflect.getMetadata(initMetaName, this) && attrValue) {
                        Reflect.defineMetadata(initMetaName, true, this);
                        Reflect.set(this, stringKey, attrValue);
                        this[key.toString()] = attrValue;
                        return;
                    }
                    else
                        Reflect.defineMetadata(initMetaName, true, this);
                    if (attrValue !== newVal)
                        this.setAttribute(stringKey, newVal);
                }
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.attribute = attribute;
function baseConstructor(constParamsIndex = 0) {
    const lifeCycle = (object, args) => {
        let constParams = args[constParamsIndex];
        if (!(constParams instanceof Object))
            constParams = {};
        lodash_1.merge(object, constParams);
        if ("constructedCallback" in object)
            object.constructedCallback(...args);
    };
    return (ctor) => {
        if (environment_1.isBrowser() && ctor.prototype instanceof HTMLElement) {
            return class extends ctor {
                constructor(...args) {
                    super(...args);
                    lifeCycle(this, args);
                }
            };
        }
        else {
            const original = ctor;
            const f = function newConstructor(...args) {
                const instance = new original(...args);
                lifeCycle(instance, args);
                return instance;
            };
            f.prototype = original.prototype;
            Object.keys(original).forEach((name) => { f[name] = original[name]; });
            Reflect.defineMetadata("design:type", {
                name: original.name
            }, f);
            return f;
        }
    };
}
exports.baseConstructor = baseConstructor;
function processBinding(thisArg, key, newVal, propDesc) {
    let reflect = true;
    if (newVal instanceof Binding_1.Binding) {
        newVal.install(thisArg, key);
        reflect = false;
        newVal = newVal.valueOf();
    }
    const initiatorMData = Reflect.getMetadata("initiatorBinding", thisArg);
    const initiatorBinding = initiatorMData ? initiatorMData.get(key.toString()) : undefined;
    if (newVal === thisArg[key])
        return newVal;
    if (propDesc && propDesc.set) {
        propDesc.set.call(thisArg, newVal);
    }
    else
        Reflect.defineMetadata(key, newVal, thisArg);
    if (reflect && initiatorBinding)
        initiatorBinding.reflectToObject(newVal);
    return newVal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBeUM7QUFDekMsOENBQTJDO0FBQzNDLDBDQUEwQztBQUMxQyx3REFBbUQ7QUFDbkQseUNBQWlDO0FBeUhqQyxTQUFnQixPQUFPLENBQUMsU0FBdUIsRUFBRTtJQUM3QyxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQTZCLEVBQUUsRUFBRTtRQUNsRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRy9ELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxHQUFHLEVBQUUsU0FBUyxHQUFHO2dCQUNiLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7b0JBQzFCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2xDOztvQkFBTSxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFDRCxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsTUFBVztnQkFDekIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQyxNQUFNLGVBQWUsR0FBRyxjQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sSUFBSSxHQUFtQixJQUFJLENBQUM7Z0JBRWxDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxlQUFlLE1BQU0sQ0FBQztnQkFDN0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxD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