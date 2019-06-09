import 'reflect-metadata';
import { merge } from 'lodash';

/**
 * Propergates the assigned value to the assigned model and receives property
 * changes from the model.
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
                if (!Reflect.hasMetadata("watched", this)) {
                    Reflect.defineMetadata("watched", {}, this);
                }
                const watchedMetadata = Reflect.getMetadata("watched", this);
                let reflectToModel = true;

                if (newVal.__watched__) {
                    watchedMetadata[key] = {
                        model: newVal.__watched__.model,
                        property: newVal.__watched__.property,
                        descriptor: Reflect.getOwnPropertyDescriptor(
                            newVal.__watched__.model, newVal.__watched__.property)
                    };
                    const metadata = watchedMetadata[key];
                    const that: IndexStructure = this;

                    Reflect.defineMetadata(metadata.property, metadata.model[metadata.property], metadata.model);
                    Reflect.deleteProperty(metadata.model, metadata.property);
                    Reflect.defineProperty(metadata.model, metadata.property, {
                        get: function modelGet() {
                            return Reflect.getMetadata(metadata.property, metadata.model);
                        },
                        set: function modelSet(modelNewVal: any) {
                            that[key.toString()] = modelNewVal;
                            if (metadata.descriptor && metadata.descriptor.set) {
                                metadata.descriptor.set.call(metadata.model, modelNewVal);
                            } else Reflect.defineMetadata(metadata.property, modelNewVal, metadata.model);
                        },
                        configurable: true,
                        enumerable: true
                    });
                    newVal = newVal.valueOf();
                    reflectToModel = false;
                }

                if (newVal === Reflect.getMetadata(key, this)) return;
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                } else Reflect.defineMetadata(key, newVal, this);

                if (watchedMetadata[key] && reflectToModel) {
                    watchedMetadata[key].model[watchedMetadata[key].property] = newVal;
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
