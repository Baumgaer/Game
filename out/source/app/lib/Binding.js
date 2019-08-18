"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("~bdo/utils/util");
const metadata_1 = require("~bdo/utils/metadata");
class Binding {
    constructor(object, property) {
        this.object = object;
        this.property = property;
        let descriptor = Reflect.getOwnPropertyDescriptor(this.object, this.property);
        const bindingDescriptor = metadata_1.getMetadata(this.object, "bindingDescriptor");
        let prototype = this.object;
        while (!descriptor) {
            prototype = Object.getPrototypeOf(prototype);
            if (!prototype)
                break;
            if (prototype.constructor.name === "BaseConstructor")
                prototype = Object.getPrototypeOf(prototype);
            descriptor = Reflect.getOwnPropertyDescriptor(prototype, this.property);
        }
        if (descriptor && bindingDescriptor && descriptor === bindingDescriptor) {
            const mData = metadata_1.getMetadata(this.object, "bindings");
            const bindings = mData ? mData.get(this.property) : undefined;
            if (bindings)
                this.descriptor = bindings[0].descriptor;
        }
        if (!this.descriptor)
            this.descriptor = descriptor;
    }
    valueOf() {
        return this.object[this.property];
    }
    reflectToInitiators(newVal) {
        const mData = metadata_1.getMetadata(this.object, "bindings");
        if (mData) {
            const bindings = mData.get(this.property);
            if (bindings)
                for (const binding of bindings)
                    binding.initiator[binding.initiatorProperty] = newVal;
        }
    }
    reflectToObject(newVal) {
        if (this.object[this.property] === newVal)
            return;
        this.object[this.property] = newVal;
    }
    install(initiator, property) {
        this.initiator = initiator;
        this.initiatorProperty = property.toString();
        if (!Reflect.hasMetadata("initiatorBinding", this.initiator)) {
            metadata_1.defineMetadata(this.initiator, "initiatorBinding", new Map());
        }
        const initiatorMData = metadata_1.getMetadata(this.initiator, "initiatorBinding") || new Map();
        const initiatorBinding = initiatorMData.get(this.initiatorProperty);
        if (initiatorBinding)
            initiatorBinding.remove();
        this.bind();
        initiatorMData.set(this.initiatorProperty, this);
    }
    remove() {
        const objectValue = this.object[this.property];
        const initiatorValue = this.initiator[this.initiatorProperty];
        const objectMData = metadata_1.getMetadata(this.object, "bindings");
        const objectBindings = objectMData ? objectMData.get(this.property) : undefined;
        const initiatorMData = metadata_1.getMetadata(this.initiator, "initiatorBinding");
        const initiatorBinding = initiatorMData ? initiatorMData.get(this.initiatorProperty) : undefined;
        if (objectBindings) {
            util_1.removeElementFromArray(objectBindings, this);
            if (!objectBindings.length) {
                if (objectMData)
                    objectMData.delete(this.property);
                this.restoreDescriptor(this.object, this.property, objectValue, this.descriptor);
            }
        }
        if (initiatorBinding) {
            if (initiatorMData)
                initiatorMData.delete(this.initiatorProperty);
            this.restoreDescriptor(this.initiator, this.initiatorProperty, initiatorValue, this.initiatorDescriptor);
        }
    }
    bind() {
        if (!Reflect.hasMetadata("bindings", this.object))
            metadata_1.defineMetadata(this.object, "bindings", new Map());
        const mData = metadata_1.getMetadata(this.object, "bindings");
        const initialValue = this.object[this.property];
        if (mData) {
            if (!mData.has(this.property)) {
                mData.set(this.property, []);
                const that = this;
                Reflect.deleteProperty(this.object, this.property);
                Reflect.defineProperty(this.object, this.property, {
                    get: function modelGet() {
                        if (that.descriptor && that.descriptor.get) {
                            return that.descriptor.get.call(that.object);
                        }
                        else
                            return metadata_1.getWildcardMetadata(that.object, that.property) || initialValue;
                    },
                    set: function modelSet(newVal) {
                        if (newVal === that.object[that.property])
                            return;
                        if (that.descriptor && that.descriptor.set) {
                            that.descriptor.set.call(that.object, newVal);
                        }
                        else
                            metadata_1.defineWildcardMetadata(that.object, that.property, newVal);
                        that.reflectToInitiators(newVal);
                    },
                    configurable: true,
                    enumerable: true
                });
                const bindingDescriptor = Reflect.getOwnPropertyDescriptor(this.object, this.property);
                metadata_1.defineMetadata(this.object, "bindingDescriptor", bindingDescriptor);
            }
            const definitelyDefinedBindings = mData.get(this.property);
            if (definitelyDefinedBindings) {
                let alreadyBound = false;
                for (const [index, binding] of definitelyDefinedBindings.entries()) {
                    if (binding.initiator === this.initiator && binding.initiatorProperty === this.initiatorProperty) {
                        definitelyDefinedBindings[index] = this;
                        alreadyBound = true;
                        break;
                    }
                }
                if (!alreadyBound)
                    definitelyDefinedBindings.push(this);
            }
        }
    }
    restoreDescriptor(object, property, value, descriptor) {
        Reflect.deleteProperty(object, property);
        if (descriptor) {
            Reflect.defineProperty(this.initiator, this.initiatorProperty, descriptor);
        }
        object[property.toString()] = value;
    }
}
exports.Binding = Binding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUQ7QUFDekQsa0RBQStHO0FBcUIvRyxNQUFhLE9BQU87SUFrRGhCLFlBQVksTUFBUyxFQUFFLFFBQVc7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFLekIsSUFBSSxVQUFVLEdBQW1DLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RyxNQUFNLGlCQUFpQixHQUFHLHNCQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRXhFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUNoQixTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUztnQkFBRSxNQUFNO1lBQ3RCLElBQUksU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssaUJBQWlCO2dCQUFFLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25HLFVBQVUsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksVUFBVSxJQUFJLGlCQUFpQixJQUFJLFVBQVUsS0FBSyxpQkFBaUIsRUFBRTtZQUNyRSxNQUFNLEtBQUssR0FBRyxzQkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbkQsTUFBTSxRQUFRLEdBQUcsS0FB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