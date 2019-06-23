import 'reflect-metadata';
import { merge, isObject } from 'lodash';
import { Binding } from "~bdo/lib/Binding";
import { ucFirst } from "~bdo/utils/util";
import { isBrowser } from "~bdo/utils/environment";
import onChange from "on-change";

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

/**
 * This parameters should only be used in models and components other objects
 * should not be effected with this behavior.
 *
 * @interface IPropertyParams
 */
interface IPropertyParams {
    /**
     * If set the value will be stored in a cache map for the time in
     * milliseconds.
     *
     * @default 0 Means will stored permanently
     * @type {number}
     */
    StoreTemporaryInObject?: number;

    /**
     * If true the value will be saved in localStorage until its deletion
     * in localStorage or in redis until its deletion in redis.
     *
     * @default false Values will NOT be saved in cache
     * @type {boolean}
     */
    saveInCache?: boolean;
}

/**
 * This parameters will only ba make sense when used in a model.
 * A Component or other objects will not be effected.
 *
 * @interface IAttributeParams
 */
interface IAttributeParams {
    /**
     * If true the value will not be sent to client or server if value is set
     * or save() will be called.
     *
     * @default false
     * @type {boolean}
     */
    noClientServerInteraction?: boolean;

    /**
     * If true the value will NOT be saved in localStorage until its deletion
     * in localStorage or in redis until  its deletion in redis.
     *
     * @default false Values will be saved in cache
     * @type {boolean}
     */
    neverSaveInCache?: boolean;

    /**
     * If set the value will be stored in a cache map for the time in
     * milliseconds. The IndexedDb on client side or database on server side
     * will be omitted.
     *
     * @default 0 Means will stored permanently
     * @type {number}
     */
    StoreTemporaryInObject?: number;
}

/**
 * Propergates the assigned value to the assigned object and receives property
 * changes from the object.
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
                } else return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                const stringKey = key.toString();
                const capitalizedProp = ucFirst(stringKey);
                const that: IndexStructure = this;

                const initFunc = params.onInit || `on${capitalizedProp}Init`;
                const changeFunc = params.onChange || `on${capitalizedProp}Change`;
                const addFunc = params.onAdd || `on${capitalizedProp}Add`;
                const removeFunc = params.onRemove || `on${capitalizedProp}Remove`;

                // Observe objects and arrays of any changes
                if (newVal instanceof Array || isObject(newVal)) {
                    newVal = onChange(<IndexStructure>newVal, (path, value, previousValue) => {
                        const newObjectKeys = Object.keys(<object>value);
                        const oldObjectKeys = Object.keys(<object>previousValue);
                        const newLength = newObjectKeys.length;
                        const oldLength = oldObjectKeys.length;

                        // Case: added
                        if (newLength > oldLength && addFunc in this) {
                            for (const added of newObjectKeys) {
                                if (!oldObjectKeys.includes(added)) {
                                    that[addFunc]((<IndexStructure>value)[<any>added], path);
                                    break;
                                }
                            }
                        }

                        // Case: removed
                        if (newLength < oldLength && removeFunc in this) {
                            for (const removed of oldObjectKeys) {
                                if (!newObjectKeys.includes(removed)) {
                                    that[removeFunc]((<IndexStructure>previousValue)[<any>removed], path);
                                    break;
                                }
                            }
                        }

                        // Case: deep change
                        if (newLength === oldLength && changeFunc in this) {
                            if (Reflect.getMetadata(`init${capitalizedProp}`, this)) that[changeFunc](value, path);
                        }

                    }, { isShallow: Boolean(params.isShallow) });
                }

                // Only execute watching on changes reference types like array
                // will not be effected by this constraint.
                if (newVal === (<IndexStructure>this)[stringKey]) return;
                // Call other property descriptors on binding initializer else set metadata
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                } else Reflect.defineMetadata(key, newVal, this);

                // React on initial variable changes
                if (changeFunc in this && Reflect.getMetadata(`init${capitalizedProp}`, this)) that[changeFunc]();
                if (initFunc in this && !Reflect.getMetadata(`init${capitalizedProp}`, this)) that[initFunc](newVal);
                Reflect.defineMetadata(`init${capitalizedProp}`, true, this);
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
export function property(_params: IPropertyParams = {}): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        // Get previous defined property descriptor for chaining
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

        // Define metadata for access to properties like this.attributes
        if (!Reflect.hasMetadata("definedProperties", target)) {
            Reflect.defineMetadata("definedProperties", new Array<string>(), target);
        }
        const propertyMap: string[] = Reflect.getMetadata("definedProperties", target);
        propertyMap.push(key.toString());

        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                if (propDesc && propDesc.get) {
                    return propDesc.get.call(this);
                } else return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                if (newVal === (<IndexStructure>this)[key.toString()]) return;
                processBinding(this, key, newVal, propDesc);
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
 * @export
 * @returns {PropertyDecorator}
 */
export function attribute(_params: IAttributeParams = {}): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        // Get previous defined property descriptor for chaining
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                if (propDesc && propDesc.get) {
                    return propDesc.get.call(this);
                } else return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                const stringKey = key.toString();
                if (newVal === (<IndexStructure>this)[stringKey]) return;
                const initMetaName = `${stringKey}AttrInitialized`;
                newVal = processBinding(this, key, newVal, propDesc);
                // Prefer in DOM defined attributes on initialization
                if (isBrowser() && this instanceof HTMLElement) {
                    const attrValue = this.getAttribute(stringKey);
                    if (!Reflect.getMetadata(initMetaName, this) && attrValue) {
                        // Mark as initialized to prevent static attribute
                        Reflect.defineMetadata(initMetaName, true, this);
                        Reflect.set(this, stringKey, attrValue);
                        // Set the real value and redo setter
                        (<IndexStructure>this)[key.toString()] = attrValue;
                        return;
                    } else Reflect.defineMetadata(initMetaName, true, this);
                    // Reflect property changes to attribute
                    if (attrValue !== newVal) this.setAttribute(stringKey, newVal);
                }
            },
            enumerable: true,
            configurable: true
        });
    };
}

/**
 * Constructs an object with its constParams with position constParamsIndex
 *
 * @export
 * @param {number} [constParamsIndex=0] Position of parameters which are used to initialize the object
 * @returns
 */
export function baseConstructor(constParamsIndex: number = 0) {

    /**
     * Implements the life cycle of all decorated objects
     *
     * @param {*} object
     * @param {any[]} args
     */
    const lifeCycle = (object: any, args: any[]) => {
        let constParams = args[constParamsIndex];
        if (!(constParams instanceof Object)) constParams = {};
        merge(object, constParams);
        if ("constructedCallback" in object) object.constructedCallback(...args);
    };

    return <T extends Constructor>(ctor: T) => {
        // If the ctor is an HTMLElement, it is necessary to extend the class
        // because web components have a special construction behavior.
        // Otherwise the constructor will be wrapped to make sure to see the
        // right object in console for better debugging
        if (isBrowser() && ctor.prototype instanceof HTMLElement) {
            /**
             * Constructs an object with its constParams with position constParamsIndex
             *
             * @class BaseConstructor
             * @extends {ctor}
             */
            return class extends ctor {
                constructor(...args: any[]) {
                    super(...args);
                    lifeCycle(this, args);
                }
            };
        } else {
            const original = ctor;
            // the new constructor behavior
            const f: any = function newConstructor(...args: any[]) {
                const instance = new original(...args);
                lifeCycle(instance, args);
                return instance;
            };
            // copy prototype so instanceof operator still works
            f.prototype = original.prototype;
            // Copy static members
            Object.keys(original).forEach((name: string) => { f[name] = (<any>original)[name]; });
            Reflect.defineMetadata("design:type", {
                name: original.name
            }, f);
            // return new constructor (will override original)
            return f;
        }
    };
}

/**
 * Does the second part of the binding mechanism.
 * First part is to initialize the Binding object.
 * Second part is to bind the components/models to each other
 *
 * @param {*} thisArg The object on which the binding is working on
 * @param {(string | number | symbol)} key The property name
 * @param {*} newVal The new value of the property
 * @param {PropertyDescriptor} [propDesc] The original property descriptor
 * @returns {*} The value of the binding
 */
function processBinding(thisArg: any, key: string | symbol | number, newVal: any, propDesc?: PropertyDescriptor): any {
    let reflect = true;

    // Create new property descriptor on bound object if it is bound
    if (newVal instanceof Binding) {
        // Bind to thisArg object
        newVal.install(thisArg, key);
        reflect = false;
        newVal = newVal.valueOf();
    }

    const initiatorMData: Map<string, Binding<any, any>> | undefined = Reflect.getMetadata("initiatorBinding", thisArg);
    const initiatorBinding = initiatorMData ? initiatorMData.get(key.toString()) : undefined;

    // Only execute watching on changes
    if (newVal === thisArg[key]) return newVal;
    // Call other property descriptors on binding initializer else set metadata
    if (propDesc && propDesc.set) {
        propDesc.set.call(thisArg, newVal);
    } else Reflect.defineMetadata(key, newVal, thisArg);

    if (reflect && initiatorBinding) initiatorBinding.reflectToObject(newVal);
    return newVal;
}
