import 'reflect-metadata';
import { merge, isObject } from 'lodash';
import { Binding } from "~bdo/lib/Binding";
import { ucFirst } from "~bdo/utils/util";
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
    return (target: any, key: string | symbol) => {
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

                // Setup remembered bound properties on object instance
                if (!Reflect.hasMetadata("bindings", this)) Reflect.defineMetadata("bindings", {}, this);
                const boundMetadata: IndexStructure<string, Binding[]> = Reflect.getMetadata("bindings", this);
                let reflect = true;

                // Create new property descriptor on bound object if it is bound
                if (newVal instanceof Binding) {
                    // Remember all bindings
                    if (!(key in boundMetadata)) boundMetadata[stringKey] = [];
                    if (!boundMetadata[stringKey].includes(newVal)) boundMetadata[stringKey].push(newVal);
                    // Bind to this object
                    newVal.bind(this, key);
                    // Get original value
                    newVal = newVal.valueOf();
                    reflect = false;
                }

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

                // Only execute watching on changes
                if (newVal === Reflect.getMetadata(key, this)) return;
                // Call other property descriptors on binding initializer else set metadata
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                } else Reflect.defineMetadata(key, newVal, this);

                // Reflect value to all bound objects
                if (boundMetadata[stringKey] && reflect) {
                    for (const binding of boundMetadata[stringKey]) {
                        binding.object[binding.property] = newVal;
                    }
                }

                // React on changes
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
 * Constructs an object with its constParams with position constParamsIndex
 *
 * @export
 * @param {number} [constParamsIndex=0] Position of parameters which are used to initialize the object
 * @returns
 */
export function baseConstructor(constParamsIndex: number = 0) {
    return <T extends Constructor>(ctor: T) => {

        /**
         * Constructs an object with its constParams with position constParamsIndex
         *
         * @class BaseConstructor
         * @extends {ctor}
         */
        class BaseConstructor extends ctor {
            constructor(...args: any[]) {
                super(...args);
                let constParams = args[constParamsIndex];
                if (!(constParams instanceof Object)) constParams = {};
                merge(this, constParams);
                if ("constructedCallback" in this) (<IndexStructure>this).constructedCallback();
            }
        }

        return BaseConstructor;
    };
}
