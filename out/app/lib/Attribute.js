"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Property_1 = require("~bdo/lib/Property");
const environment_1 = require("~bdo/utils/environment");
const Modification_1 = require("~bdo/lib/Modification");
const util_1 = require("~bdo/utils/util");
const Errors_1 = require("~bdo/lib/Errors");
const lodash_1 = require("lodash");
class Attribute extends Property_1.Property {
    constructor(object, property, params) {
        super(object, property, params);
        this.inDOMInitialized = false;
    }
    setValue(value) {
        if (value === this.ownValue || !this.disableTypeGuard && !this.typeGuard(value))
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
    proxyHandler(_path, _changedVal, _prevVal, attrReflectsToObj = true) {
        const value = this.value;
        if (value === undefined || value === null)
            return;
        this.doSetValue(util_1.getProxyTarget(value), false);
        this.reflectToDOMAttribute(value, attrReflectsToObj);
        this.doAutoSave();
    }
    reflectToDOMAttribute(value, setValue = true) {
        if (!environment_1.isBrowser() || !(this.object instanceof HTMLElement))
            return;
        if (value instanceof Modification_1.Modification && value.type === "delete" && !util_1.isPrimitive(value))
            setValue = false;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        const stringKey = this.property.toString();
        const attrValue = this.object.getAttribute(stringKey);
        let setAttribute = true;
        if (!this.inDOMInitialized && attrValue) {
            this.inDOMInitialized = true;
            setAttribute = false;
            const valueToSet = util_1.constructTypeOfHTMLAttribute(this.object, this.property);
            if (setValue)
                this.object[stringKey] = valueToSet;
        }
        const pTarget = util_1.getProxyTarget(valueToPass);
        if (setAttribute && attrValue !== pTarget && attrValue !== JSON.stringify(pTarget).replace(/\"/g, "'")) {
            this.inDOMInitialized = true;
            this.object.setAttribute(stringKey, pTarget, setValue);
        }
    }
    doSetValue(value, modifyValue = true) {
        let valueToPass;
        if (value instanceof Modification_1.Modification) {
            valueToPass = value.valueOf();
        }
        else
            valueToPass = value;
        super.doSetValue(value, false, true);
        if (!this.object.isBDOModel || this.storeTemporary || this.doNotPersist || (value instanceof Modification_1.Modification && value.type === "update")) {
            const proxyfied = this.proxyfyValue(valueToPass);
            if (modifyValue)
                this.value = proxyfied;
            this.ownValue = proxyfied;
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
        if (this.autoSave && (this.doNotPersist || this.storeTemporary)) {
            throw new Errors_1.ConfigurationError("You have turned on autosave but at the same time it is forbidden to persist the value or it is just temporary?");
        }
        if (!this.autoSave || !lodash_1.isFunction(this.object.save) || this.unsavedChange === undefined)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQTRGO0FBQzVGLDRDQUFxRDtBQUNyRCxtQ0FBb0M7QUFzRXBDLE1BQWEsU0FBMkQsU0FBUSxtQkFBUTtJQXFFcEYsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQXlCO1FBQ3pELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBWjFCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQWE1QyxDQUFDO0lBUU0sUUFBUSxDQUFDLEtBQWdDO1FBQzVDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDeEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFRTSxPQUFPO1FBQ1YsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzVGLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQVFNLFlBQVksQ0FBQyxLQUFjLEVBQUUsV0FBa0IsRUFBRSxRQUFl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