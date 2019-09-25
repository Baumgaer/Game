"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Modification_1 = require("~bdo/lib/Modification");
const metadata_1 = require("~bdo/utils/metadata");
const environment_1 = require("~bdo/utils/environment");
const util_1 = require("~bdo/utils/util");
const Errors_1 = require("~bdo/lib/Errors");
const on_change_1 = tslib_1.__importDefault(require("on-change"));
const lodash_1 = require("lodash");
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
        if (!util_1.isProxy(value) && this.saveInLocalStorage && lodash_1.isFunction(this.object.getNamespacedStorage)) {
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
        if (!error && lodash_1.isFunction(idxStructObj[this.onTypeCheck]))
            error = idxStructObj[this.onTypeCheck](valueToPass);
        if (error) {
            if (lodash_1.isFunction(idxStructObj[this.onTypeCheckFail])) {
                idxStructObj[this.onTypeCheckFail](error);
            }
            else if (lodash_1.isFunction(idxStructObj.onTypeCheckFail)) {
                idxStructObj.onTypeCheckFail(error);
            }
            else
                throw error;
        }
        else if (lodash_1.isFunction(idxStructObj[this.onTypeCheckSuccess]))
            idxStructObj[this.onTypeCheckSuccess]();
        return !(Boolean(error).valueOf());
    }
    proxyHandler(_path, _changedVal, _prevVal, _attrReflectsToObj = true) {
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
        if (this.shouldUpdateNsStorage() && lodash_1.isFunction(this.object.setUpdateNamespacedStorage)) {
            this.object.setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
    }
    proxyfyValue(value) {
        if (value instanceof Array) {
            value = on_change_1.default.target(value);
            return on_change_1.default(value, (path, changedVal, prevVal) => {
                if (this.proxyHandlerReplacement) {
                    this.proxyHandlerReplacement(path, changedVal, prevVal, false);
                }
                else
                    this.proxyHandler(path, changedVal, prevVal, false);
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
        if (lodash_1.isFunction(this.object.getNamespacedStorage) &&
            this.object.getNamespacedStorage(stringKey) === undefined) {
            metadata_1.defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(metadata_1.getMetadata(this.object, "constructionComplete"));
    }
}
exports.Property = Property;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBcUQ7QUFDckQsa0RBQWlGO0FBQ2pGLHdEQUFtRDtBQUNuRCwwQ0FBZ0U7QUFDaEUsNENBQTRDO0FBQzVDLGtFQUFpQztBQUNqQyxtQ0FBb0M7QUEyRXBDLE1BQWEsUUFBUTtJQTZGakIsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQXdCO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLE1BQU0sZUFBZSxHQUFHLGNBQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7UUFDcEQsTUFBTSxlQUFlLEdBQUcsS0FBSyxlQUFlLGVBQWUsQ0FBQztRQUM1RCxNQUFNLFdBQVcsR0FBRyxLQUFLLGVBQWUsV0FBVyxDQUFDO1FBQ3BELE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxlQUFlLGtCQUFrQixDQUFDO1FBRWxFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQzVGLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzVFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDNUcsQ0FBQztJQVNNLFFBQVEsQ0FBQyxLQUFnQztRQUM1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