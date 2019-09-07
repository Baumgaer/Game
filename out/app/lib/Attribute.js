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
        if (this.valueOf() === value)
            return;
        this.doSetValue(value);
        this.reflectToDOMAttribute(value);
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
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
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
            if (this.autoSave) {
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
        if (value === super.valueOf())
            this.unsavedChange = undefined;
    }
}
exports.Attribute = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQStEO0FBc0UvRCxNQUFhLFNBQTJELFNBQVEsbUJBQVE7SUFxRXBGLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxNQUF5QjtRQUN6RCxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQVoxQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFhNUMsQ0FBQztJQVFNLFFBQVEsQ0FBQyxLQUFXO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUs7WUFBRSxPQUFPO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFLTSxPQUFPO1FBQ1YsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzVGLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQVVTLHFCQUFxQixDQUFDLEtBQVU7UUFDdEMsSUFBSSxDQUFDLHVCQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sWUFBWSxXQUFXLENBQUM7WUFBRSxPQUFPO1FBQ2xFLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLEtBQUssWUFBWSwyQkFB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