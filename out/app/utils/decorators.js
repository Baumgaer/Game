"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const lodash_1 = require("lodash");
const Binding_1 = require("~bdo/lib/Binding");
const util_1 = require("~bdo/utils/util");
const on_change_1 = require("on-change");
function watched() {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                const stringKey = key.toString();
                const capitalizedProp = util_1.ucFirst(stringKey);
                const that = this;
                const initFunc = `on${capitalizedProp}Init`;
                const changeFunc = `on${capitalizedProp}Change`;
                const addFunc = `on${capitalizedProp}Add`;
                const removeFunc = `on${capitalizedProp}Remove`;
                if (!Reflect.hasMetadata("bindings", this))
                    Reflect.defineMetadata("bindings", {}, this);
                const mData = Reflect.getMetadata("bindings", this);
                let reflect = true;
                if (newVal instanceof Binding_1.Binding) {
                    if (!(key in mData))
                        mData[stringKey] = [];
                    if (!mData[stringKey].includes(newVal))
                        mData[stringKey].push(newVal);
                    newVal.bind(this, key);
                    newVal = newVal.valueOf();
                    reflect = false;
                }
                if (newVal instanceof Array || lodash_1.isObject(newVal)) {
                    newVal = on_change_1.default(newVal, (_path, value, previousValue) => {
                        const newObjectKeys = Object.keys(value);
                        const oldObjectKeys = Object.keys(previousValue);
                        const newLength = newObjectKeys.length;
                        const oldLength = oldObjectKeys.length;
                        if (newLength > oldLength && addFunc in this) {
                            for (const added of newObjectKeys) {
                                if (!oldObjectKeys.includes(added)) {
                                    that[addFunc](added);
                                    break;
                                }
                            }
                        }
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
                if (newVal === Reflect.getMetadata(key, this))
                    return;
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                }
                else
                    Reflect.defineMetadata(key, newVal, this);
                if (mData[stringKey] && reflect) {
                    for (const binding of mData[stringKey]) {
                        binding.object[binding.property] = newVal;
                    }
                }
                if (changeFunc in this && Reflect.getMetadata(`init${capitalizedProp}`, this))
                    that[changeFunc]();
                if (initFunc in this && !Reflect.getMetadata(`init${capitalizedProp}`, this))
                    that[initFunc]();
                Reflect.defineMetadata(`init${capitalizedProp}`, true, this);
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.watched = watched;
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
        if ("HTMLElement" in global && ctor.prototype instanceof HTMLElement) {
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
            return f;
        }
    };
}
exports.baseConstructor = baseConstructor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBeUM7QUFDekMsOENBQTJDO0FBQzNDLDBDQUEwQztBQUMxQyx5Q0FBaUM7QUFVakMsU0FBZ0IsT0FBTztJQUNuQixPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRy9ELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxHQUFHLEVBQUUsU0FBUyxHQUFHO2dCQUNiLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUNELEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxNQUFXO2dCQUN6QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pDLE1BQU0sZUFBZSxHQUFHLGNBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxJQUFJLEdBQW1CLElBQUksQ0FBQztnQkFFbEMsTUFBTSxRQUFRLEdBQUcsS0FBSyxlQUFlLE1BQU0sQ0FBQztnQkFDNUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxlQUFlLFFBQVEsQ0FBQztnQkFDaEQsTUFBTSxPQUFPLEdBQUcsS0FBSyxlQUFlLEtBQUssQ0FBQztnQkFDMUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxlQUFlLFFBQVEsQ0FBQztnQkFHaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztv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