"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const on_change_1 = require("on-change");
const lodash_1 = require("lodash");
const Binding_1 = require("~bdo/lib/Binding");
const util_1 = require("~bdo/utils/util");
const environment_1 = require("~bdo/utils/environment");
const metadata_1 = require("~bdo/utils/metadata");
const type_graphql_1 = require("type-graphql");
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
                    return metadata_1.getWildcardMetadata(this, key.toString());
            },
            set: function set(newVal) {
                if (!metadata_1.getMetadata(this, "normalFunctionality")) {
                    if (propDesc && propDesc.set) {
                        propDesc.set.call(this, newVal);
                    }
                    return;
                }
                const stringKey = key.toString();
                const capitalizedProp = util_1.ucFirst(stringKey);
                const that = this;
                const initFunc = params.onInit || `on${capitalizedProp}Init`;
                const changeFunc = params.onChange || `on${capitalizedProp}Change`;
                const addFunc = params.onAdd || `on${capitalizedProp}Add`;
                const remFunc = params.onRemove || `on${capitalizedProp}Remove`;
                const initPropMarkerVals = metadata_1.getMetadata(this, "initPropMarker") || {};
                if (newVal instanceof Array || lodash_1.isObject(newVal)) {
                    newVal = on_change_1.default(newVal, (path, value, previousValue) => {
                        const newKeys = Object.keys(value);
                        const oldKeys = Object.keys(previousValue);
                        const newLen = newKeys.length;
                        const oldLen = oldKeys.length;
                        const caseDetectExec = (cdParams) => {
                            if (cdParams.len1 > cdParams.len2 && cdParams.func in this) {
                                for (const modified of cdParams.keys1) {
                                    if (!cdParams.keys2.includes(modified)) {
                                        that[cdParams.func](value[modified], path);
                                        break;
                                    }
                                }
                            }
                        };
                        caseDetectExec({ len1: newLen, len2: oldLen, func: addFunc, keys1: newKeys, keys2: oldKeys });
                        caseDetectExec({ len1: oldLen, len2: newLen, func: remFunc, keys1: oldKeys, keys2: newKeys });
                        if (newLen === oldLen && changeFunc in this && initPropMarkerVals[stringKey]) {
                            that[changeFunc](value, path);
                        }
                    }, { isShallow: Boolean(params.isShallow) });
                }
                if (initFunc in this && !initPropMarkerVals[stringKey])
                    that[initFunc](newVal);
                if (changeFunc in this && initPropMarkerVals[stringKey] && newVal !== that[stringKey]) {
                    that[changeFunc](newVal);
                }
                metadata_1.defineMetadata(this, "initPropMarker", Object.assign(initPropMarkerVals, { [stringKey]: true }));
                if (newVal === this[stringKey])
                    return;
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                }
                else
                    metadata_1.defineWildcardMetadata(this, stringKey, newVal);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.watched = watched;
function property(params = {}) {
    return (target, key) => {
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedProperties");
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, params, propDesc);
            },
            set: function set(newVal) {
                setter(this, key, newVal, params, propDesc);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.property = property;
function attribute(typeFunc, params) {
    return (target, key) => {
        if (typeFunc && !(typeFunc instanceof Function) && !params)
            params = typeFunc;
        if (!params)
            params = {};
        if (typeFunc instanceof Function && params)
            type_graphql_1.Field(typeFunc, params)(target, key);
        else if (typeFunc instanceof Function)
            type_graphql_1.Field(typeFunc)(target, key);
        else if (params)
            type_graphql_1.Field(params)(target, key);
        else
            type_graphql_1.Field()(target, key);
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedAttributes");
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, params, propDesc);
            },
            set: function set(newVal) {
                setter(this, key, newVal, params, propDesc);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.attribute = attribute;
function baseConstructor(name, options, constParamsIndex = 0) {
    return (ctor) => {
        const prototype = Object.getPrototypeOf(ctor);
        if (prototype.name === "BaseConstructor") {
            Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));
        }
        if (name && (typeof name === "number"))
            constParamsIndex = name;
        if (name && (typeof name === "object"))
            options = name;
        if (name && ((typeof name === "object") || (typeof name === "number")))
            name = undefined;
        if (options && (typeof options === "number"))
            constParamsIndex = options;
        if (options && (typeof options === "number"))
            options = undefined;
        if ("isBDOModel" in ctor) {
            if (name && (typeof name === "string") && options && (typeof options === "object")) {
                type_graphql_1.ObjectType(name, options)(ctor);
            }
            else if (name && (typeof name === "string")) {
                type_graphql_1.ObjectType(name)(ctor);
            }
            else if (options && (typeof options === "object")) {
                type_graphql_1.ObjectType(options)(ctor);
            }
            else
                type_graphql_1.ObjectType()(ctor);
        }
        if (options && (typeof options === "object" && options.isAbstract))
            return ctor;
        class BaseConstructor extends ctor {
            constructor(...params) {
                super(...params);
                let constParams = params[constParamsIndex];
                if (!(constParams instanceof Object))
                    constParams = {};
                metadata_1.defineMetadata(this, "normalFunctionality", true);
                let defaultSettings = metadata_1.getMetadata(this, "defaultSettings") || {};
                defaultSettings = Object.assign(defaultSettings, constParams);
                if ("getNamespacedStorage" in this) {
                    const cachedSettings = this.getNamespacedStorage("*", "id", constParams.id);
                    defaultSettings = Object.assign(defaultSettings, cachedSettings);
                }
                Object.assign(this, defaultSettings);
                metadata_1.defineMetadata(this, "constructionComplete", true);
                if ("constructedCallback" in this)
                    this.constructedCallback(...params);
            }
        }
        BaseConstructor.graphQLType = ctor;
        if (environment_1.isBrowser() && ctor.isBaseComponent) {
            customElements.define(util_1.pascalCase2kebabCase(ctor.name), BaseConstructor, {
                extends: BaseConstructor.extends
            });
        }
        return BaseConstructor;
    };
}
exports.baseConstructor = baseConstructor;
exports.query = type_graphql_1.Query;
exports.arg = type_graphql_1.Arg;
exports.args = type_graphql_1.Args;
exports.resolver = type_graphql_1.Resolver;
exports.root = type_graphql_1.Root;
exports.mutation = type_graphql_1.Mutation;
exports.subscription = type_graphql_1.Subscription;
exports.pubSub = type_graphql_1.PubSub;
exports.inputType = type_graphql_1.InputType;
function shouldUpdateNsStorage(instance, key, params) {
    if (!params || !params.saveInLocalStorage || !environment_1.isBrowser())
        return false;
    const keyShouldBeUpdated = metadata_1.getMetadata(instance, "keyShouldBeUpdated") || {};
    if (keyShouldBeUpdated[key])
        return true;
    if ("getNamespacedStorage" in instance && instance.getNamespacedStorage(key) === undefined) {
        metadata_1.defineMetadata(instance, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [key]: true }));
        return true;
    }
    return Boolean(metadata_1.getMetadata(instance, "constructionComplete"));
}
function beforePropertyDescriptors(target, key, mDataName) {
    const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
    if (!Reflect.hasMetadata(mDataName, target))
        metadata_1.defineMetadata(target, mDataName, new Array());
    const map = metadata_1.getMetadata(target, mDataName);
    map.push(key.toString());
    return propDesc;
}
function getter(instance, key, params, propDesc) {
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        return defaultSettings[key.toString()];
    }
    const stringKey = key.toString();
    if (propDesc && propDesc.get) {
        return propDesc.get.call(instance);
    }
    else {
        let value = metadata_1.getWildcardMetadata(instance, stringKey);
        if (params && params.saveInLocalStorage && "getNamespacedStorage" in instance) {
            value = instance.getNamespacedStorage(stringKey);
        }
        if (value && params && params.storeTemporary) {
            if (value.expires < Date.now()) {
                const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings");
                value = defaultSettings ? defaultSettings[stringKey] : undefined;
            }
            else
                value = value.value;
        }
        return value;
    }
}
function setter(instance, key, newVal, params, propDesc) {
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        Object.assign(defaultSettings, { [key]: newVal });
        metadata_1.defineMetadata(instance, "defaultSettings", defaultSettings);
        return;
    }
    const stringKey = key.toString();
    const initiatorMData = metadata_1.getMetadata(instance, "initiatorBinding");
    const initiatorBinding = initiatorMData ? initiatorMData.get(stringKey) : undefined;
    let reflect = true;
    if (newVal instanceof Binding_1.Binding) {
        newVal.install(instance, stringKey);
        reflect = false;
        newVal = newVal.valueOf();
        if (newVal === instance[key])
            return;
    }
    if (newVal instanceof Deletion)
        newVal = newVal.valueOf();
    if (newVal === instance[stringKey])
        return;
    if (newVal && params && params.storeTemporary) {
        newVal = { value: newVal, expires: Date.now() + params.storeTemporary };
        const expirationTimeouts = metadata_1.getMetadata(instance, "expirationTimeout") || {};
        clearTimeout(expirationTimeouts[stringKey]);
        metadata_1.defineMetadata(instance, "expirationTimeout", Object.assign(expirationTimeouts, {
            [stringKey]: setTimeout(() => {
                const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings");
                instance[key] = new Deletion(defaultSettings ? defaultSettings[stringKey] : undefined);
            }, params.storeTemporary)
        }));
    }
    if (propDesc && propDesc.set) {
        propDesc.set.call(instance, newVal);
    }
    else
        metadata_1.defineWildcardMetadata(instance, stringKey, newVal);
    if (reflect && initiatorBinding)
        initiatorBinding.reflectToObject(newVal);
    if (environment_1.isBrowser()) {
        if (shouldUpdateNsStorage(instance, stringKey, params) && "setUpdateNamespacedStorage" in instance) {
            instance.setUpdateNamespacedStorage(stringKey, newVal);
        }
        const definedAttributes = metadata_1.getMetadata(instance, "definedAttributes");
        if (instance instanceof HTMLElement && definedAttributes && definedAttributes.includes(stringKey)) {
            const initMetaVal = metadata_1.getMetadata(instance, "attrInitialized") || {};
            const attrValue = instance.getAttribute(stringKey);
            if (!initMetaVal[stringKey] && attrValue) {
                metadata_1.defineMetadata(instance, "attrInitialized", Object.assign(initMetaVal, { [stringKey]: true }));
                Reflect.set(instance, stringKey, attrValue);
                instance[stringKey] = attrValue;
                return;
            }
            else
                metadata_1.defineMetadata(instance, "attrInitialized", Object.assign(initMetaVal, { [stringKey]: true }));
            if (attrValue !== newVal)
                instance.setAttribute(stringKey, newVal);
        }
    }
}
class Deletion {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQix5Q0FBaUM7QUFDakMsbUNBQWtDO0FBQ2xDLDhDQUEyQztBQUMzQywwQ0FBZ0U7QUFDaEUsd0RBQW1EO0FBQ25ELGtEQUErRztBQUcvRywrQ0FZc0I7QUF3THRCLFNBQWdCLE9BQU8sQ0FBQyxTQUF1QixFQUFFO0lBQzdDLE9BQU8sQ0FBQyxNQUFXLEVBQUUsR0FBNkIsRUFBRSxFQUFFO1FBQ2xELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHL0QsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2hDLEdBQUcsRUFBRSxTQUFTLEdBQUc7Z0JBQ2IsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRTtvQkFDMUIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEM7O29CQUFNLE9BQU8sOEJBQW1CLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFDRCxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsTUFBVztnQkFDekIsSUFBSSxDQUFDLHNCQUFXLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDLEVBQUU7b0JBQzNDLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7d0JBQzFCLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDbkM7b0JBQ0QsT0FBTztpQkFDVjtn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