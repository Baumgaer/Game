import 'reflect-metadata';
import { merge, isObject } from 'lodash';
import { Binding } from "~bdo/lib/Binding";
import { ucFirst } from "~bdo/utils/util";
import { isBrowser } from "~bdo/utils/environment";
import onChange from "on-change";

/**
 * Propergates the assigned value to the assigned object and receives property
 * changes from the object.
 *
 * @export
 * @param {IndexStructure} params
 * @returns {PropertyDecorator}
 */
export function watched(): PropertyDecorator {
    return (target: any, key: string | symbol | number) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

        // Create new property with getter and setter
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                const stringKey = key.toString();
                const capitalizedProp = ucFirst(stringKey);
                const that: IndexStructure = this;

                const initFunc = `on${capitalizedProp}Init`;
                const changeFunc = `on${capitalizedProp}Change`;
                const addFunc = `on${capitalizedProp}Add`;
                const removeFunc = `on${capitalizedProp}Remove`;

                // Observe objects and arrays of any changes
                if (newVal instanceof Array || isObject(newVal)) {
                    newVal = onChange(<IndexStructure>newVal, (_path, value, previousValue) => {
                        const newObjectKeys = Object.keys(<object>value);
                        const oldObjectKeys = Object.keys(<object>previousValue);
                        const newLength = newObjectKeys.length;
                        const oldLength = oldObjectKeys.length;

                        // Case: added
                        if (newLength > oldLength && addFunc in this) {
                            for (const added of newObjectKeys) {
                                if (!oldObjectKeys.includes(added)) {
                                    that[addFunc](added);
                                    break;
                                }
                            }
                        }

                        // Case: removed
                        if (newLength < oldLength && removeFunc in this) {
                            for (const removed of oldObjectKeys) {
                                if (!newObjectKeys.includes(removed)) {
                                    that[removeFunc](removed);
                                    break;
                                }
                            }
                        }
                    });
                }

                // Only execute watching on changes reference types like array
                // will not be effected by this constraint.
                if (newVal === Reflect.getMetadata(key, this)) return;
                // Call other property descriptors on binding initializer else set metadata
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                } else Reflect.defineMetadata(key, newVal, this);

                // React on variable changes
                if (changeFunc in this && Reflect.getMetadata(`init${capitalizedProp}`, this)) that[changeFunc]();
                if (initFunc in this && !Reflect.getMetadata(`init${capitalizedProp}`, this)) that[initFunc]();
                Reflect.defineMetadata(`init${capitalizedProp}`, true, this);
            },
            enumerable: true,
            configurable: true
        });
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
function processBinding(thisArg: any, key: string | number | symbol, newVal: any, propDesc?: PropertyDescriptor): any {
    const stringKey = key.toString();
    // Setup remembered bound properties on object instance
    if (!Reflect.hasMetadata("bindings", thisArg)) Reflect.defineMetadata("bindings", {}, thisArg);
    const mData: IndexStructure<string, Array<Binding<any, any>>> = Reflect.getMetadata("bindings", thisArg);
    let reflect = true;

    // Create new property descriptor on bound object if it is bound
    if (newVal instanceof Binding) {
        // Remember all bindings
        if (!(key in mData)) mData[stringKey] = [];
        if (!mData[stringKey].includes(newVal)) mData[stringKey].push(newVal);
        // Bind to thisArg object
        newVal.bind(thisArg, key);
        // Get original value
        newVal = newVal.valueOf();
        reflect = false;
    }

    // Only execute watching on changes
    if (newVal === Reflect.getMetadata(key, thisArg)) return newVal;
    // Call other property descriptors on binding initializer else set metadata
    if (propDesc && propDesc.set) {
        propDesc.set.call(thisArg, newVal);
    } else Reflect.defineMetadata(key, newVal, thisArg);

    if (mData[stringKey] && reflect) {
        for (const binding of mData[stringKey]) {
            if (binding.object[binding.property] !== newVal) binding.object[binding.property] = newVal;
        }
    }
    return newVal;
}

/**
 * Marks an component property as a real property and avoids setting the
 * corresponding attribute. Also it maintains the "properties" values of a
 * component.
 *
 * @export
 * @returns {PropertyDecorator}
 */
export function property(): PropertyDecorator {
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
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                if (newVal === Reflect.getMetadata(key, this)) return;
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
export function attribute(): PropertyDecorator {
    return (target: any, key: string | symbol) => {
        // Get previous defined property descriptor for chaining
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);

        // Define new metadata property
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal: any) {
                if (newVal === Reflect.getMetadata(key, this)) return;
                const stringKey = key.toString();
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
            // copy prototype so intanceof operator still works
            f.prototype = original.prototype;
            // Copy static members
            Object.keys(original).forEach((name: string) => { f[name] = (<any>original)[name]; });
            // return new constructor (will override original)
            return f;
        }
    };
}
