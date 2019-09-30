"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Modification_1 = require("~bdo/lib/Modification");
const metadata_1 = require("~bdo/utils/metadata");
const environment_1 = require("~bdo/utils/environment");
const util_1 = require("~bdo/utils/util");
const Errors_1 = require("~bdo/lib/Errors");
const on_change_1 = tslib_1.__importDefault(require("on-change"));
class Property {
    constructor(object, property, params) {
        this.object = object;
        this.property = property;
        Object.assign(this, params);
        const capitalizedProp = util_1.ucFirst(property);
        const onTypeCheckFail = `on${capitalizedProp}TypeCheckFail`;
        const onTypeCheck = `on${capitalizedProp}TypeCheck`;
        const onTypeCheckSuccess = `on${capitalizedProp}TypeCheckSuccess`;
        this.onTypeCheckFail = params ? params.onTypeCheckFail || onTypeCheckFail : onTypeCheckFail;
        this.onTypeCheck = params ? params.onTypeCheck || onTypeCheck : onTypeCheck;
        this.onTypeCheckSuccess = params ? params.onTypeCheckSuccess || onTypeCheckSuccess : onTypeCheckSuccess;
    }
    setValue(value) {
        this.doSetValue(value, true);
    }
    valueOf() {
        const stringKey = this.property.toString();
        let value = this.value;
        if (!util_1.isProxy(value) && this.saveInLocalStorage && util_1.isFunction(this.object.getNamespacedStorage)) {
            value = this.object.getNamespacedStorage(stringKey);
        }
        return value;
    }
    typeGuard(value) {
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        const designType = metadata_1.getDesignType(this.object, this.property.toString());
        const typeError = new Errors_1.TypeError(`${valueToPass} is not type of ${designType.className || designType.name}`);
        const idxStructObj = this.object;
        let error;
        if (!this.nullable && (valueToPass === undefined || valueToPass === null))
            error = typeError;
        if (!error) {
            if (util_1.isPrimitive(valueToPass)) {
                if (typeof valueToPass !== designType.name.toLowerCase()) {
                    if (!this.nullable || !(valueToPass === undefined || valueToPass === null))
                        error = typeError;
                }
            }
            else if (!(valueToPass instanceof designType))
                error = typeError;
        }
        if (!error && util_1.isFunction(idxStructObj[this.onTypeCheck]))
            error = idxStructObj[this.onTypeCheck](valueToPass);
        if (error) {
            if (util_1.isFunction(idxStructObj[this.onTypeCheckFail])) {
                idxStructObj[this.onTypeCheckFail](error);
            }
            else if (util_1.isFunction(idxStructObj.onTypeCheckFail)) {
                idxStructObj.onTypeCheckFail(error);
            }
            else
                throw error;
        }
        else if (util_1.isFunction(idxStructObj[this.onTypeCheckSuccess]))
            idxStructObj[this.onTypeCheckSuccess]();
        return !(Boolean(error).valueOf());
    }
    proxyHandler(_path, _changedVal, _prevVal) {
        const value = this.value;
        if (value === undefined || value === null)
            return;
        this.doSetValue(on_change_1.default.target(value), false);
    }
    shouldDoSetValue(value, skipGuard = false) {
        return !(value === this.ownValue || !skipGuard && !this.disableTypeGuard && !this.typeGuard(value));
    }
    doSetValue(value, modifyValue = true, skipGuard = false) {
        if (!this.shouldDoSetValue(value, skipGuard))
            return;
        let valueToPass;
        if (value instanceof Modification_1.Modification) {
            valueToPass = value.valueOf();
        }
        else
            valueToPass = value;
        if (modifyValue) {
            const proxyfied = this.proxyfyValue(valueToPass);
            this.value = proxyfied;
            this.ownValue = valueToPass;
        }
        if (this.shouldUpdateNsStorage() && util_1.isFunction(this.object.setUpdateNamespacedStorage)) {
            this.object.setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
    }
    proxyfyValue(value) {
        if (value instanceof Array) {
            value = on_change_1.default.target(value);
            return on_change_1.default(value, (path, changedVal, prevVal) => {
                if (this.proxyHandlerReplacement) {
                    this.proxyHandlerReplacement(path, changedVal, prevVal);
                }
                else
                    this.proxyHandler(path, changedVal, prevVal);
            });
        }
        return value;
    }
    shouldUpdateNsStorage() {
        if (!this.saveInLocalStorage || !environment_1.isBrowser())
            return false;
        const stringKey = this.property.toString();
        const keyShouldBeUpdated = metadata_1.getMetadata(this.object, "keyShouldBeUpdated") || {};
        if (keyShouldBeUpdated[stringKey])
            return true;
        if (util_1.isFunction(this.object.getNamespacedStorage) &&
            this.object.getNamespacedStorage(stringKey) === undefined) {
            metadata_1.defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(metadata_1.getMetadata(this.object, "constructionComplete"));
    }
}
exports.Property = Property;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBcUQ7QUFDckQsa0RBQWlGO0FBQ2pGLHdEQUFtRDtBQUNuRCwwQ0FBNEU7QUFDNUUsNENBQTRDO0FBQzVDLGtFQUFpQztBQTJFakMsTUFBYSxRQUFRO0lBNkZqQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsTUFBd0I7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUIsTUFBTSxlQUFlLEdBQUcsY0FBTyxDQUFDLFFBQWtCLENBQUMsQ0FBQztRQUNwRCxNQUFNLGVBQWUsR0FBRyxLQUFLLGVBQWUsZUFBZSxDQUFDO1FBQzVELE1BQU0sV0FBVyxHQUFHLEtBQUssZUFBZSxXQUFXLENBQUM7UUFDcEQsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLGVBQWUsa0JBQWtCLENBQUM7UUFFbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDNUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUM1RyxDQUFDO0lBU00sUUFBUSxDQUFDLEtBQWdDO1FBQzVDLElBQUksQ0FBQyxV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