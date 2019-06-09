"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const lodash_1 = require("lodash");
function watched() {
    return (target, key) => {
        const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: function get() {
                return Reflect.getMetadata(key, this);
            },
            set: function set(newVal) {
                if (!Reflect.hasMetadata("watched", this)) {
                    Reflect.defineMetadata("watched", {}, this);
                }
                const watchedMetadata = Reflect.getMetadata("watched", this);
                let reflectToModel = true;
                if (newVal.__watched__) {
                    watchedMetadata[key] = {
                        model: newVal.__watched__.model,
                        property: newVal.__watched__.property,
                        descriptor: Reflect.getOwnPropertyDescriptor(newVal.__watched__.model, newVal.__watched__.property)
                    };
                    const metadata = watchedMetadata[key];
                    const that = this;
                    Reflect.defineMetadata(metadata.property, metadata.model[metadata.property], metadata.model);
                    Reflect.deleteProperty(metadata.model, metadata.property);
                    Reflect.defineProperty(metadata.model, metadata.property, {
                        get: function modelGet() {
                            return Reflect.getMetadata(metadata.property, metadata.model);
                        },
                        set: function modelSet(modelNewVal) {
                            that[key.toString()] = modelNewVal;
                            if (metadata.descriptor && metadata.descriptor.set) {
                                metadata.descriptor.set.call(metadata.model, modelNewVal);
                            }
                            else
                                Reflect.defineMetadata(metadata.property, modelNewVal, metadata.model);
                        },
                        configurable: true,
                        enumerable: true
                    });
                    newVal = newVal.valueOf();
                    reflectToModel = false;
                }
                if (newVal === Reflect.getMetadata(key, this))
                    return;
                if (propDesc && propDesc.set) {
                    propDesc.set.call(this, newVal);
                }
                else
                    Reflect.defineMetadata(key, newVal, this);
                if (watchedMetadata[key] && reflectToModel) {
                    watchedMetadata[key].model[watchedMetadata[key].property] = newVal;
                }
            },
            enumerable: true,
            configurable: true
        });
    };
}
exports.watched = watched;
function baseConstructor(constParamsIndex = 0) {
    return (ctor) => {
        class BaseConstructor extends ctor {
            constructor(...args) {
                super(...args);
                let constParams = args[constParamsIndex];
                if (!(constParams instanceof Object))
                    constParams = {};
                lodash_1.merge(this, constParams);
                if ("constructedCallback" in this)
                    this.constructedCallback();
            }
        }
        return BaseConstructor;
    };
}
exports.baseConstructor = baseConstructor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvdXRpbHMvZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQixtQ0FBK0I7QUFVL0IsU0FBZ0IsT0FBTztJQUNuQixPQUFPLENBQUMsTUFBVyxFQUFFLEdBQW9CLEVBQUUsRUFBRTtRQUN6QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRy9ELE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNoQyxHQUFHLEVBQUUsU0FBUyxHQUFHO2dCQUNiLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUNELEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxNQUFXO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUU7b0JBQ3ZDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDL0M7Z0JBQ0QsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzdELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQztnQkFFMUIsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO29CQUNwQixlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUc7d0JBQ25CLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUs7d0JBQy9CLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVE7d0JBQ3JDLFVBQVUsRUFB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