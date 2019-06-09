import 'reflect-metadata';
import { merge } from 'lodash';
import { Binding } from "~bdo/lib/Binding";

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
                // Setup remembered bound properties on object instance
                if (!Reflect.hasMetadata("bindings", this)) Reflect.defineMetadata("bindings", {}, this);
                const boundMetadata: IndexStructure<string, Binding[]> = Reflect.getMetadata("bindings", this);
                const stringKey = key.toString();
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
                if ("constructedCallback" in this) (<any>this).constructedCallback();
            }
        }

        return BaseConstructor;
    };
}
