"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("~bdo/utils/util");
const Field_1 = require("~bdo/lib/Field");
const framework_1 = require("~bdo/utils/framework");
const metadata_1 = require("~bdo/utils/metadata");
const iniBindName = "initiatorBinding";
const bindName = "bindings";
class Binding {
    constructor(object, property, mode = "ReadWrite") {
        this.object = object;
        this.property = property;
        this.mode = mode;
        this.descriptor = this.getOriginalPropertyDescriptor(this.object, this.property);
    }
    setValue(value) {
        this.value = value;
    }
    valueOf() {
        return this.value || this.object[this.property];
    }
    install(initiator, property) {
        this.initiator = initiator;
        this.initiatorProperty = property;
        this.initiatorDescriptor = this.getOriginalPropertyDescriptor(this.initiator, this.initiatorProperty);
        if (!Reflect.hasMetadata(iniBindName, this.initiator))
            metadata_1.defineMetadata(this.initiator, iniBindName, new Map());
        if (!Reflect.hasMetadata(bindName, this.object))
            metadata_1.defineMetadata(this.object, bindName, new Map());
        const initiatorMData = metadata_1.getMetadata(this.initiator, iniBindName) || new Map();
        const initiatorBinding = initiatorMData.get(this.initiatorProperty);
        if (initiatorBinding)
            initiatorBinding.remove();
        const mData = metadata_1.getMetadata(this.object, bindName) || new Map();
        if (!mData.has(this.property))
            mData.set(this.property, []);
        mData.get(this.property).push(this);
        initiatorMData.set(this.initiatorProperty, this);
        const fieldMDataName = `field:${this.property}`;
        const objectField = metadata_1.getWildcardMetadata(this.object, this.property);
        const initiatorField = metadata_1.getWildcardMetadata(this.initiator, this.initiatorProperty);
        let field = metadata_1.getWildcardMetadata(this.object, fieldMDataName);
        if (!field)
            metadata_1.defineWildcardMetadata(this.object, fieldMDataName, new Field_1.Field(this.object, this.property));
        field = metadata_1.getWildcardMetadata(this.object, fieldMDataName);
        field.addField(objectField);
        field.addField(initiatorField);
        this.replaceDescriptor();
        Reflect.set(this.initiator, this.initiatorProperty, this.valueOf());
    }
    remove() {
        const objectValue = this.object[this.property];
        const initiatorValue = this.initiator[this.initiatorProperty];
        const objectMData = metadata_1.getMetadata(this.object, bindName);
        const objectBindings = objectMData ? objectMData.get(this.property) : undefined;
        const initiatorMData = metadata_1.getMetadata(this.initiator, iniBindName);
        const initiatorBinding = initiatorMData ? initiatorMData.get(this.initiatorProperty.toString()) : undefined;
        const fieldMDataName = `field:${this.property}`;
        const field = metadata_1.getWildcardMetadata(this.object, fieldMDataName);
        if (initiatorBinding) {
            if (initiatorMData)
                initiatorMData.delete(this.initiatorProperty.toString());
            this.restoreDescriptor(this.initiator, this.initiatorProperty, initiatorValue, this.initiatorDescriptor);
            field.removeField(metadata_1.getWildcardMetadata(this.initiator, this.initiatorProperty));
        }
        if (objectBindings) {
            util_1.removeElementFromArray(objectBindings, this);
            field.removeField(metadata_1.getWildcardMetadata(this.object, this.property));
            if (!objectBindings.length) {
                if (objectMData)
                    objectMData.delete(this.property);
                this.restoreDescriptor(this.object, this.property, objectValue, this.descriptor);
                metadata_1.defineWildcardMetadata(this.object, fieldMDataName, null);
            }
        }
    }
    replaceDescriptor() {
        const that = this;
        Reflect.deleteProperty(this.object, this.property);
        Reflect.defineProperty(this.object, this.property, {
            get: function bindingGet() {
                if (that.mode === "WriteOnly" && this === that.initiator)
                    return undefined;
                return framework_1.getter(that.object, that.property, "field");
            },
            set: function bindingSet(newVal) {
                if (that.mode === "ReadOnly" && this === that.initiator)
                    return;
                framework_1.setter(that.object, that.property, newVal, "field");
            },
            configurable: true,
            enumerable: true
        });
        const bindingDesc = Reflect.getOwnPropertyDescriptor(this.object, this.property);
        Reflect.deleteProperty(this.initiator, this.initiatorProperty);
        Reflect.defineProperty(this.initiator, this.initiatorProperty, bindingDesc);
        metadata_1.defineMetadata(this.object, "bindingDescriptor", bindingDesc);
    }
    restoreDescriptor(object, property, value, descriptor) {
        Reflect.deleteProperty(object, property);
        if (descriptor) {
            Reflect.defineProperty(this.initiator, this.initiatorProperty, descriptor);
        }
        object[property.toString()] = value;
    }
    getOriginalPropertyDescriptor(object, key) {
        let descriptor = Reflect.getOwnPropertyDescriptor(object, key);
        let mDataName = bindName;
        let prototype = object;
        if (object === this.initiator)
            mDataName = iniBindName;
        while (!descriptor) {
            prototype = Object.getPrototypeOf(prototype);
            if (!prototype)
                break;
            if (prototype.constructor.name === "BaseConstructor")
                prototype = Object.getPrototypeOf(prototype);
            descriptor = Reflect.getOwnPropertyDescriptor(prototype, key);
        }
        let searchDescriptorInBindings = false;
        if (descriptor) {
            if (descriptor.set && descriptor.set.name === "bindingSet")
                searchDescriptorInBindings = true;
            if (descriptor.get && descriptor.get.name === "bindingGet")
                searchDescriptorInBindings = true;
        }
        if (searchDescriptorInBindings) {
            const mData = metadata_1.getMetadata(object, mDataName);
            const bindings = mData ? mData.get(key.toString()) : undefined;
            if (bindings) {
                if (bindings instanceof Array) {
                    descriptor = bindings[0].descriptor;
                }
                else
                    descriptor = bindings.initiatorDescriptor;
            }
        }
        return descriptor;
    }
}
exports.Binding = Binding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbGliL0JpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUQ7QUFFekQsMENBQXVDO0FBQ3ZDLG9EQUFzRDtBQUN0RCxrREFBK0c7QUFJL0csTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUM7QUFDdkMsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBc0I1QixNQUFhLE9BQU87SUEwRWhCLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxPQUFvQixXQUFXO1FBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFLTSxRQUFRLENBQUMsS0FBVztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBUU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBU00sT0FBTyxDQUFDLFNBQVksRUFBRSxRQUFXO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBR3RHLElBQUksQ0FBQyxPQUFPLENBQUMs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