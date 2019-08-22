"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const on_change_1 = require("on-change");
const lodash_1 = require("lodash");
const Binding_1 = require("~bdo/lib/Binding");
const util_1 = require("~bdo/utils/util");
const environment_1 = require("~bdo/utils/environment");
const Deletion_1 = require("~bdo/lib/Deletion");
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
                value = defaultSettings && !params.nullable ? defaultSettings[stringKey] : undefined;
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
    let forceExecution = false;
    if (newVal instanceof Deletion_1.Deletion) {
        newVal = newVal.valueOf();
        forceExecution = true;
    }
    if (!forceExecution && newVal === instance[stringKey])
        return;
    if (newVal && params && params.storeTemporary) {
        newVal = { value: newVal, expires: Date.now() + params.storeTemporary };
        const expirationTimeouts = metadata_1.getMetadata(instance, "expirationTimeout") || {};
        clearTimeout(expirationTimeouts[stringKey]);
        metadata_1.defineMetadata(instance, "expirationTimeout", Object.assign(expirationTimeouts, {
            [stringKey]: setTimeout(() => {
                const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings");
                const delValue = defaultSettings && !params.nullable ? defaultSettings[stringKey] : undefined;
                instance[key] = new Deletion_1.Deletion(delValue);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQix5Q0FBaUM7QUFDakMsbUNBQWtDO0FBQ2xDLDhDQUEyQztBQUMzQywwQ0FBZ0U7QUFDaEUsd0RBQW1EO0FBQ25ELGdEQUE2QztBQUM3QyxrREFBK0c7QUFHL0csK0NBWXNCO0FBb010QixTQUFnQixPQUFPLENBQUMsU0FBdUIsRUFBRTtJQUM3QyxPQUFPLENBQUMsTUFBVyxFQUFFLEdBQTZCLEVBQUUsRUFBRTtRQUNsRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRy9ELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxHQUFHLEVBQUUsU0FBUyxHQUFHO2dCQUNiLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUU7b0JBQzFCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2xDOztvQkFBTSxPQUFPLDhCQUFtQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBQ0QsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLE1BQVc7Z0JBQ3pCLElBQUksQ0FBQyxzQkFBVyxDQUFDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxFQUFFO29CQUMzQyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO3dCQUMxQixRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ25DO29CQUNE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