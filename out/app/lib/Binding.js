"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("~bdo/utils/util");
const Modification_1 = require("~bdo/lib/Modification");
const metadata_1 = require("~bdo/utils/metadata");
class Binding {
    constructor(object, property, mode = "ReadWrite") {
        this.object = object;
        this.property = property;
        this.mode = mode;
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
        if (this.mode === "WriteOnly")
            return new Modification_1.Modification(undefined);
        return this.object[this.property];
    }
    reflectToInitiators(newVal) {
        if (newVal instanceof Modification_1.Modification)
            newVal = newVal.valueOf();
        if (this.initiator[this.initiatorProperty] === newVal || this.mode === "WriteOnly")
            return;
        const mData = metadata_1.getMetadata(this.object, "bindings");
        if (mData) {
            const bindings = mData.get(this.property);
            if (bindings)
                for (const binding of bindings)
                    binding.initiator[binding.initiatorProperty] = newVal;
        }
    }
    reflectToObject(newVal) {
        if (newVal instanceof Modification_1.Modification)
            newVal = newVal.valueOf();
        if (this.object[this.property] === newVal || this.mode === "ReadOnly")
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
                            return metadata_1.getWildcardMetadata(that.object, that.property).valueOf() || initialValue;
                    },
                    set: function modelSet(newVal) {
                        if (newVal === that.object[that.property])
                            return;
                        if (that.descriptor && that.descriptor.set)
                            that.descriptor.set.call(that.object, newVal);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUQ7QUFDekQsd0RBQXFEO0FBQ3JELGtEQUF1RjtBQXdCdkYsTUFBYSxPQUFPO0lBMkRoQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsT0FBb0IsV0FBVztRQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUtqQixJQUFJLFVBQVUsR0FBbUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlHLE1BQU0saUJBQWlCLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFeEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ2hCLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTO2dCQUFFLE1BQU07WUFDdEIsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxpQkFBaUI7Z0JBQUUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkcsVUFBVSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxVQUFVLElBQUksaUJBQWlCLElBQUksVUFBVSxLQUFLLGlCQUFpQixFQUFFO1lBQ3JFLE1BQU0sS0FBSyxHQUFHLHNCQUFXLENB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