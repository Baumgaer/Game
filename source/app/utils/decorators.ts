import 'reflect-metadata';
import onChange from "on-change";
import { isObject } from 'lodash';
import { Binding } from "~bdo/lib/Binding";
import { ucFirst, pascalCase2kebabCase } from "~bdo/utils/util";
import { isBrowser } from "~bdo/utils/environment";
import { getMetadata, defineMetadata, defineWildcardMetadata, getWildcardMetadata } from "~bdo/utils/metadata";
import { ReturnTypeFunc, AdvancedOptions } from "type-graphql/dist/decorators/types";
import { ObjectOptions } from "type-graphql/dist/decorators/ObjectType";
import {
    Field,
    ObjectType,
    Query,
    Arg,
    Args,
    Resolver,
    Root,
    Subscription,
    Mutation,
    PubSub,
    InputType
} from "type-graphql";

interface IWatchParams {
    /**
     * The name of the function which should be called when the value will be initialized.
     * Gets a parameter with initial value.
     *
     * @type {string}
     * @memberof IWatchParams
     */
    onInit?: string;

    /**
     * The name of the function which should be called when the value will be changed
     * Gets a parameter with new value and if it is an object or array it gets
     * additionally a parameter with the path which was changed.
     *
     * @type {string}
     * @memberof IWatchParams
     */
    onChange?: string;

    /**
     * The name of the function which should be called when a value will be added to the array.
     * Gets a parameter with the added value and the path.
     *
     * @type {string}
     * @memberof IWatchParams
     */
    onAdd?: string;

    /**
     * The name of the function which should be called when a value will be removed from the array.
     * Gets a parameter with the removed value and the path.
     *
     * @type {string}
     * @memberof IWatchParams
     */
    onRemove?: string;

    /**
     * If true arrays and object will recursively observed for
     * changes, removes and additions.
     *
     * @default false No recursive observation
     * @type {boolean}
     * @memberof IWatchParams
     */
    isShallow?: boolean;
}

interface ICaseDetectParams {

    /**
     * length of keys1
     *
     * @type {number}
     * @memberof ICaseDetectParams
     */
    len1: number;
    /**
     * length of keys2
     *
     * @type {number}
     * @memberof ICaseDetectParams
     */
    len2: number;

    /**
     * Name of function to execute
     *
     * @type {string}
     * @memberof ICaseDetectParams
     */
    func: string;

    /**
     * First keys to detect the case
     *
     * @type {string[]}
     * @memberof ICaseDetectParams
     */
    keys1: string[];

    /**
     * Second keys to detect the case
     *
     * @type {string[]}
     * @memberof ICaseDetectParams
     */
    keys2: string[];
}

/**
 * This parameters should only be used in models and components other objects
 * should not be effected with this behavior.
 *
 * @interface IPropertyParams
 */
interface IPropertyParams {
    /**
     * If set > 0 the value will expire after x milliseconds
     *
     * @default 0 Means will stored permanently
     * @type {number}
     */
    storeTemporary?: number;

    /**
     * If true the value will be saved in localStorage until its deletion
     * in localStorage or in redis until its deletion in redis.
     * This is useful to relieve heavy databases.
     *
     * @default false Values will NOT be saved in cache
     * @type {boolean}
     */
    saveInLocalStorage?: boolean;
}

/**
 * This parameters will only ba make sense when used in a model.
 * A Component or other objects will not be effected.
 *
 * @interface IAttributeParams
 */
interface IAttributeParams extends AdvancedOptions, IPropertyParams {
    /**
     * If true the value will not be sent to server if value is set
     * or save() will be called.
     *
     * @default false
     * @type {boolean}
     * @memberof IAttributeParams
     */
    noServerInteraction?: boolean;

    /**
     * If true the value will not be sent to client if value is set
     * or save() will be called.
     *
     * @default false
     * @type {boolean}
     * @memberof IAttributeParams
     */
    noClientInteraction?: boolean;

    /**
     * If true the value will not be sent to p2p clients of current client if
     * value is set or save() will be called.
     *
     * @default false
     * @type {boolean}
     * @memberof IAttributeParams
     */
    noP2PInteraction?: boolean;

    /**
     * If true, value will be saved automatically and immediately.
     * If it is a number > 0 the value will be saved automatically but
     * debounced which means that the number is the time in milliseconds of
     * save timeout.
     *
     * @default false
     * @type {(boolean | number)}
     * @memberof IAttributeParams
     */
    autoSave?: boolean | number;
}

type FuncOrAttrParams = ReturnTypeFunc | IAttributeParams;
type nameOrOptsOrIndex = string | ObjectOptions | number;
type optsOrIndex = ObjectOptions | number;

/**
 * reacts on several types of changes of the property / attribute.
 * If no function name is given, it will look for on<PropertyName><Action>.
 *
 * Example: The property is named test and is of type string, then the
 * reactionFunction is called onTestChange.
 *
 * @export
 * @param {IndexStructure} params
 * @returns {PropertyDecorator}
 */
export function watched(params: IWatchParams = {}): PropertyDecorator {
    return (target: any, key: string | symbol | number) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

        // Create new property with getter and setter
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                if (propDesc && propDesc.get) {
                    return propDesc.get.call(this);
                } else return getWildcardMetadata(this, key.toString());
            },
            set: function set(newVal: any) {
                if (!getMetadata(this, "normalFunctionality")) {
                    if (propDesc && propDesc.set) {
                        propDesc.set.call(this, newVal);
                    }
                    return;
                }
                const stringKey = key.toString();
                const capitalizedProp = ucFirst(stringKey);
                const that: IndexStructure = this;

                const initFunc = params.onInit || `on${capitalizedProp}Init`;
                const changeFunc = params.onChange || `on${capitalizedProp}Change`;
                const addFunc = params.onAdd || `on${capitalizedProp}Add`;
                const remFunc = params.onRemove || `on${capitalizedProp}Remove`;

                const initPropMarkerVals = getMetadata(this, "initPropMarker") || {};

                // Observe objects and arrays of any changes
                if (newVal instanceof Array || isObject(newVal)) {
                    newVal = onChange(<IndexStructure>newVal, (path, value, previousValue) => {
                        const newKeys = Object.keys(<object>value);
                        const oldKeys = Object.keys(<object>previousValue);
                        const newLen = newKeys.length;
                        const oldLen = oldKeys.length;

                        /**
                         * Detects case of change and executes corresponding function
                         *
                         * @param {ICaseDetectParams} cdParams
                         */
                        const caseDetectExec = (cdParams: ICaseDetectParams) => {
                            if (cdParams.len1 > cdParams.len2 && cdParams.func in this) {
                                for (const modified of cdParams.keys1) {
                                    if (!cdParams.keys2.includes(modified)) {
                                        that[cdParams.func]((<IndexStructure>value)[<any>modified], path);
                                        break;
                                    }
                                }
                            }
                        };

                        // Case: added
                        caseDetectExec({ len1: newLen, len2: oldLen, func: addFunc, keys1: newKeys, keys2: oldKeys });
                        // Case: removed
                        caseDetectExec({ len1: oldLen, len2: newLen, func: remFunc, keys1: oldKeys, keys2: newKeys });
                        // Case: deep change
                        if (newLen === oldLen && changeFunc in this && initPropMarkerVals[stringKey]) {
                            that[changeFunc](value, path);
                        }
                    }, { isShallow: Boolean(params.isShallow) });
                }

                if (initFunc in this && !initPropMarkerVals[stringKey]) that[initFunc](newVal);
                // React on variable changes
                if (changeFunc in this && initPropMarkerVals[stringKey] && newVal !== that[stringKey]) {
                    that[changeFunc](newVal);
                }
                defineMetadata(this, "initPropMarker", Object.assign(initPropMarkerVals, { [stringKey]: true }));

                // Only execute watching on changes reference types like array
                // will not be effected by this constraint.
                if (newVal === (<IndexStructure>this)[stringKey]) return;
                // Call other property descriptors on binding initializer else set metadata
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                } else defineWildcardMetadata(this, stringKey, newVal);
            },
            enumerable: true,
            configurable: true
        });
    };
}

/**
 * Marks an component property as a real property and avoids setting the
 * corresponding attribute. Also it maintains the "properties" values of a
 * component.
 *
 * @export
 * @returns {PropertyDecorator}
 */
export function property(params: IPropertyParams = {}): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedProperties");
        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, params, propDesc);
            },
            set: function set(newVal: any) {
                setter(this, key, newVal, params, propDesc);
            },
            enumerable: true,
            configurable: true
        });
    };
}

/**
 * Marks a component property as a real attribute and reflects the set values
 * to the attribute dom even it is not a native attribute.
 *
 * If it is a BDOModel it marks the property as an attribute which should be
 * send to server or saved in database.
 *
 * It also do some other logic like data flow, caching and so on. For more
 * information read the property comments.
 *
 * @export
 * @returns {PropertyDecorator}
 */
export function attribute(typeFunc?: FuncOrAttrParams, params?: IAttributeParams): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        if (typeFunc && !(typeFunc instanceof Function) && !params) params = typeFunc;
        if (!params) params = {};

        // Decide which Field should be used
        if (typeFunc instanceof Function && params) Field(typeFunc, params)(target, key);
        else if (typeFunc instanceof Function) Field(typeFunc)(target, key);
        else if (params) Field(params)(target, key);
        else Field()(target, key);
        const propDesc = beforePropertyDescriptors(target, key.toString(), "definedAttributes");
        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return getter(this, key, params, propDesc);
            },
            set: function set(newVal: any) {
                setter(this, key, newVal, params, propDesc);
            },
            enumerable: true,
            configurable: true
        });
    };
}

/**
 * Constructs an object with its constParams with position constParamsIndex.
 * It also defines an graphQL object type if it is a BDOModel
 *
 * @export
 * @param {number} [constParamsIndex=0] Position of parameters which are used to initialize the object
 * @returns
 */
export function baseConstructor(name?: nameOrOptsOrIndex, options?: optsOrIndex, constParamsIndex: number = 0) {

    return (ctor: any) => {
        const prototype = Object.getPrototypeOf(ctor);
        if (prototype.name === "BaseConstructor") {
            Object.setPrototypeOf(ctor, Object.getPrototypeOf(prototype));
        }

        // Determine param types
        if (name && (typeof name === "number")) constParamsIndex = name;
        if (name && (typeof name === "object")) options = name;
        if (name && ((typeof name === "object") || (typeof name === "number"))) name = undefined;
        if (options && (typeof options === "number")) constParamsIndex = options;
        if (options && (typeof options === "number")) options = undefined;

        if ("isBDOModel" in ctor) {
            // Decide which ObjectType to use
            if (name && (typeof name === "string") && options && (typeof options === "object")) {
                ObjectType(name, options)(ctor);
            } else if (name && (typeof name === "string")) {
                ObjectType(name)(ctor);
            } else if (options && (typeof options === "object")) {
                ObjectType(options)(ctor);
            } else ObjectType()(ctor);
        }

        if (options && (typeof options === "object" && options.isAbstract)) return ctor;

        /**
         * Invokes the life cycle of every component and model
         *
         * @class BaseConstructor
         * @extends {ctor}
         */
        class BaseConstructor extends ctor {

            /**
             * Determines the original type of this model - set by the
             * baseConstructor - for the GraphQL resolver
             *
             * @static
             */
            public static readonly graphQLType: any = ctor;

            constructor(...params: any[]) {
                super(...params);
                let constParams = params[constParamsIndex];
                if (!(constParams instanceof Object)) constParams = {};
                defineMetadata(this, "normalFunctionality", true);
                let defaultSettings = getMetadata(this, "defaultSettings") || {};
                defaultSettings = Object.assign(defaultSettings, constParams);
                if ("getNamespacedStorage" in this) {
                    const cachedSettings = this.getNamespacedStorage("*", "id", constParams.id);
                    defaultSettings = Object.assign(defaultSettings, cachedSettings);
                }
                Object.assign(this, defaultSettings);
                defineMetadata(this, "constructionComplete", true);
                if ("constructedCallback" in this) (<any>this).constructedCallback(...params);
            }
        }

        // Register custom Element
        if (isBrowser() && ctor.isBaseComponent) {
            customElements.define(pascalCase2kebabCase(ctor.name), BaseConstructor, {
                extends: BaseConstructor.extends
            });
        }
        return BaseConstructor;
    };
}

export let query = Query;
export let arg = Arg;
export let args = Args;
export let resolver = Resolver;
export let root = Root;
export let mutation = Mutation;
export let subscription = Subscription;
export let pubSub = PubSub;
export let inputType = InputType;

/**
 * Decides wether to update the namespaced storage or not
 *
 * @param {*} instance
 * @param {string} key
 * @param {IPropertyParams} [params]
 * @returns {boolean}
 */
function shouldUpdateNsStorage(instance: any, key: string, params?: IPropertyParams): boolean {
    if (!params || !params.saveInLocalStorage || !isBrowser()) return false;
    const keyShouldBeUpdated = getMetadata(instance, "keyShouldBeUpdated") || {};
    if (keyShouldBeUpdated[key]) return true;
    if ("getNamespacedStorage" in instance && instance.getNamespacedStorage(key) === undefined) {
        defineMetadata(instance, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [key]: true }));
        return true;
    }
    return Boolean(getMetadata(instance, "constructionComplete"));
}

/**
 * Gets the previous property descriptor and sets metadata for later access and
 * identification of properties and attributes.
 *
 * @param {*} target
 * @param {(string | symbol)} key
 * @param {string} mDataName
 * @returns
 */
function beforePropertyDescriptors(target: any, key: string, mDataName: "definedProperties" | "definedAttributes") {
    // Get previous defined property descriptor for chaining
    const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

    // Define metadata for access to attributes for later checks
    if (!Reflect.hasMetadata(mDataName, target)) defineMetadata(target, mDataName, new Array<string>());
    const map = getMetadata(target, mDataName) as string[];
    map.push(key.toString());
    return propDesc;
}

/**
 * Implements the getter of properties and attributes
 *
 * @param {*} instance
 * @param {(string | symbol)} key
 * @param {IAttributeParams} [params]
 * @param {PropertyDescriptor} [propDesc]
 * @returns
 */
function getter(instance: any, key: string | symbol, params?: IAttributeParams, propDesc?: PropertyDescriptor) {
    if (!getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = getMetadata(instance, "defaultSettings") || {};
        return defaultSettings[key.toString()];
    }
    const stringKey = key.toString();
    if (propDesc && propDesc.get) {
        return propDesc.get.call(instance);
    } else {
        let value = getWildcardMetadata(instance, stringKey);
        if (params && params.saveInLocalStorage && "getNamespacedStorage" in instance) {
            value = instance.getNamespacedStorage(stringKey);
        }
        if (value && params && params.storeTemporary) {
            if (value.expires < Date.now()) {
                const defaultSettings = getMetadata(instance, "defaultSettings");
                value = defaultSettings ? defaultSettings[stringKey] : undefined;
            } else value = value.value;
        }
        return value;
    }
}

/**
 * Implements the setter of attribute and property and does the second part of
 * the binding mechanism. First part is to initialize the Binding object.
 * Second part is to bind the components/models to each other
 *
 * @param {*} instance
 * @param {(string | symbol)} key
 * @param {*} newVal
 * @param {IAttributeParams} [params]
 * @param {PropertyDescriptor} [propDesc]
 * @returns
 */
function setter(instance: any, key: string | symbol, newVal: any, params?: IAttributeParams, propDesc?: PropDesc) {
    if (!getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = getMetadata(instance, "defaultSettings") || {};
        Object.assign(defaultSettings, { [key]: newVal });
        defineMetadata(instance, "defaultSettings", defaultSettings);
        return;
    }
    const stringKey = key.toString();
    const initiatorMData = getMetadata(instance, "initiatorBinding");
    const initiatorBinding = initiatorMData ? initiatorMData.get(stringKey) : undefined;
    let reflect = true;

    // install binding
    if (newVal instanceof Binding) {
        // Bind to thisArg object
        newVal.install(instance, stringKey);
        reflect = false;
        newVal = newVal.valueOf();
        if (newVal === instance[key]) return;
    }

    if (newVal instanceof Deletion) newVal = newVal.valueOf();

    if (newVal === instance[stringKey]) return;

    // Add expiration
    if (newVal && params && params.storeTemporary) {
        newVal = { value: newVal, expires: Date.now() + params.storeTemporary };
        const expirationTimeouts = getMetadata(instance, "expirationTimeout") || {};
        clearTimeout(expirationTimeouts[stringKey]);
        defineMetadata(instance, "expirationTimeout", Object.assign(expirationTimeouts, {
            [stringKey]: setTimeout(() => {
                const defaultSettings = getMetadata(instance, "defaultSettings");
                instance[key] = new Deletion(defaultSettings ? defaultSettings[stringKey] : undefined);
            }, params.storeTemporary)
        }));
    }

    // Call other property descriptors or set metadata
    if (propDesc && propDesc.set) {
        propDesc.set.call(instance, newVal);
    } else defineWildcardMetadata(instance, stringKey, newVal);
    if (reflect && initiatorBinding) initiatorBinding.reflectToObject(newVal);

    if (isBrowser()) {
        if (shouldUpdateNsStorage(instance, stringKey, params) && "setUpdateNamespacedStorage" in instance) {
            instance.setUpdateNamespacedStorage(stringKey, newVal);
        }
        // Prefer in DOM defined attributes on initialization
        const definedAttributes = getMetadata(instance, "definedAttributes");
        if (instance instanceof HTMLElement && definedAttributes && definedAttributes.includes(stringKey)) {
            const initMetaVal = getMetadata(instance, "attrInitialized") || {};
            const attrValue = instance.getAttribute(stringKey);

            if (!initMetaVal[stringKey] && attrValue) {
                // Mark as initialized to prevent static attribute
                defineMetadata(instance, "attrInitialized", Object.assign(initMetaVal, { [stringKey]: true }));
                Reflect.set(instance, stringKey, attrValue);
                // Set the real value and redo setter
                (<IndexStructure>instance)[stringKey] = attrValue;
                return;
            } else defineMetadata(instance, "attrInitialized", Object.assign(initMetaVal, { [stringKey]: true }));
            // Reflect property changes to attribute
            if (attrValue !== newVal) instance.setAttribute(stringKey, newVal);
        }
    }
}

/**
 * Forces the setter to use the newVal (undefined) event it's equal to the old value
 *
 * @class Deletion
 */
class Deletion {

    /**
     * The value which should be used to reset the property
     *
     * @private
     * @type {*}
     * @memberof Deletion
     */
    private value: any;

    constructor(value: any) {
        this.value = value;
    }

    /**
     * Returns the original value
     *
     * @returns
     * @memberof Deletion
     */
    public valueOf() {
        return this.value;
    }
}
