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
        if (!this.shouldDoSetValue(value))
            return;
        this.doSetValue(value);
        this.reflectToDOMAttribute(value);
        this.doAutoSave();
    }
    proxyHandler(_path, _changedVal, _prevVal, attrReflectsToObj = true) {
        const value = this.value;
        if (value === undefined || value === null)
            return;
        this.doSetValue(util_1.getProxyTarget(value));
        this.reflectToDOMAttribute(value, attrReflectsToObj);
        this.doAutoSave();
    }
    getUnsavedChange() { }
    shouldDoSetValue(value, skipGuard = false) {
        if (environment_1.isBrowser() && !this.object.isBDOModel && (this.object instanceof HTMLElement)) {
            const constructedType = util_1.constructTypeOfHTMLAttribute(this.object, this.property);
            if (!this.inDOMInitialized && this.object.getAttribute(this.property) && value !== constructedType) {
                this.object[this.property] = constructedType;
                return false;
            }
        }
        return !(value === this.ownValue || !skipGuard && !this.disableTypeGuard && !this.typeGuard(value));
    }
    reflectToDOMAttribute(value, setValue = true) {
        if (!environment_1.isBrowser() || !(this.object instanceof HTMLElement))
            return;
        const stringKey = this.property.toString();
        const attrValue = this.object.getAttribute(stringKey);
        let setAttribute = true;
        let pTarget;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification) {
            valueToPass = value.valueOf();
            if (value.type === "delete" && !util_1.isPrimitive(value.valueOf()))
                setValue = false;
        }
        if (!this.inDOMInitialized && attrValue) {
            setAttribute = false;
        }
        else
            pTarget = util_1.getProxyTarget(valueToPass);
        this.inDOMInitialized = true;
        if (setAttribute && attrValue !== pTarget && attrValue !== JSON.stringify(pTarget).replace(/\"/g, "'")) {
            this.object.setAttribute(stringKey, pTarget, setValue);
        }
    }
    doAutoSave() {
        if (this.autoSave && this.doNotPersist) {
            throw new Errors_1.ConfigurationError("You have turned on autosave but at the same time it is forbidden to persist the value!");
        }
        if (!this.autoSave || !lodash_1.isFunction(this.object.save))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQThEO0FBRTlELHdEQUFtRDtBQUNuRCx3REFBcUQ7QUFDckQsMENBQTRGO0FBQzVGLDRDQUFxRDtBQUNyRCxtQ0FBb0M7QUFzRXBDLE1BQWEsU0FBMkQsU0FBUSxtQkFBUTtJQTREcEYsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQXlCO1FBQ3pELEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBWjFCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQWE1QyxDQUFDO0lBUU0sUUFBUSxDQUFDLEtBQWdDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTztRQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQVFNLFlBQVksQ0FBQyxLQUFjLEVBQUUsV0FBa0IsRUFBRSxRQUFlLEVBQUUsb0JBQTZCLElBQUk7UUFDdEcsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUk7WUFBRSxPQUFPO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMscUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQVNNLGdCQUFnQixLQUFLLENBQUM7SUFV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