"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = require("~bdo/lib/Property");
const environment_1 = require("~bdo/utils/environment");
const Modification_1 = require("~bdo/lib/Modification");
const util_1 = require("~bdo/utils/util");
class Attribute extends Property_1.Property {
    constructor(object, property, params) {
        super(object, property, params);
        this.inDOMInitialized = false;
    }
    setValue(value) {
        if (this.valueOf() === value || (!this.disableTypeGuard && !this.typeGuard(value)))
            return;
        this.doSetValue(value);
        this.reflectToDOMAttribute(value);
        this.doAutoSave();
    }
    valueOf() {
        let value = super.valueOf();
        if (this.unsavedChange && !this.storeTemporary && !this.doNotPersist && this.object.isBDOModel) {
            value = this.unsavedChange;
        }
        return value;
    }
    reflectToDOMAttribute(value) {
        if (!environment_1.isBrowser() || !(this.object instanceof HTMLElement))
            return;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        const stringKey = this.property.toString();
        const attrValue = this.object.getAttribute(stringKey);
        let setAttribute = true;
        if (!this.inDOMInitialized && attrValue) {
            const valueToSet = util_1.constructTypeOfHTMLAttribute(this.object, this.property);
            this.object[stringKey] = valueToSet;
            this.inDOMInitialized = true;
            setAttribute = false;
        }
        if (setAttribute && attrValue !== JSON.stringify(valueToPass))
            this.object.setAttribute(stringKey, valueToPass);
    }
    doSetValue(value) {
        let valueToPass;
        if (value instanceof Modification_1.Modification) {
            valueToPass = value.valueOf();
        }
        else
            valueToPass = value;
        super.doSetValue(value, false);
        if (!this.object.isBDOModel || this.storeTemporary || this.doNotPersist || (value instanceof Modification_1.Modification && value.type === "update")) {
            this.value = valueToPass;
        }
        else {
            if (valueToPass === undefined && valueToPass !== super.valueOf()) {
                this.unsavedChange = new Modification_1.Modification();
            }
            else
                this.unsavedChange = valueToPass;
        }
        if (value === super.valueOf())
            this.unsavedChange = undefined;
    }
    doAutoSave() {
        if (!this.autoSave)
            return;
        if (typeof this.autoSave === "boolean")
            this.object.save(this.property);
        if (typeof this.autoSave === "number" && !this.autoSaveTimeout) {
            this.autoSaveTimeout = setTimeout(() => {
                this.object.save(this.property);
                delete this.autoSaveTimeout;
            }, Math.abs(this.autoSave));
        }
    }
}
exports.Attribute = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQStEO0FBc0UvRCxNQUFhLFNBQTJELFNBQVEsbUJBQVE7SUFxRXBGLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxNQUF5QjtRQUN6RCxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQVoxQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFhNUMsQ0FBQztJQVFNLFFBQVEsQ0FBQyxLQUErQjtRQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFBRSxPQUFPO1FBQzNGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBUU0sT0FBTztRQUNWLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUM1RixLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM5QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFVUyxxQkFBcUIsQ0FBQyxLQUFVO1FBQ3RDLElBQUksQ0FBQyx1QkFBUyxFQUFFLElB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