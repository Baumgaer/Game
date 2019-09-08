"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Modification_1 = require("~bdo/lib/Modification");
const metadata_1 = require("~bdo/utils/metadata");
const environment_1 = require("~bdo/utils/environment");
const util_1 = require("~bdo/utils/util");
const Errors_1 = require("~bdo/lib/Errors");
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
        if (this.saveInLocalStorage && "getNamespacedStorage" in this.object) {
            value = this.object.getNamespacedStorage(stringKey);
        }
        if (value && this.storeTemporary) {
            if (this.expires && this.expires < Date.now()) {
                const defaultSettings = metadata_1.getMetadata(this.object, "defaultSettings");
                value = defaultSettings && !this.nullable ? defaultSettings[stringKey] : undefined;
            }
            else
                value = this.value;
        }
        return value;
    }
    typeGuard(value) {
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        const designType = metadata_1.getDesignType(this.object, this.property.toString());
        const typeError = new Errors_1.TypeError(`${valueToPass} is not type of ${designType.className || designType.name}`);
        let error;
        if (!this.nullable && valueToPass === undefined)
            error = typeError;
        if (!error) {
            if (util_1.isPrimitive(valueToPass)) {
                if (typeof valueToPass !== designType.name.toLowerCase())
                    error = typeError;
            }
            else if (!(valueToPass instanceof designType))
                error = typeError;
        }
        if (!error && this.onTypeCheck in this.object) {
            error = this.object[this.onTypeCheck](valueToPass);
        }
        if (error) {
            if (this.onTypeCheckFail in this.object) {
                this.object[this.onTypeCheckFail]();
            }
            else
                throw error;
        }
        else if (this.onTypeCheckSuccess in this.object)
            this.object[this.onTypeCheckSuccess]();
        return !(Boolean(error).valueOf());
    }
    doSetValue(value, modifyValue) {
        if (this.valueOf() === value || (!this.disableTypeGuard && !this.typeGuard(value)))
            return;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        if (modifyValue)
            this.value = valueToPass;
        this.addExpiration(value);
        if (this.shouldUpdateNsStorage() && "setUpdateNamespacedStorage" in this.object) {
            this.object.setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
    }
    addExpiration(value) {
        if (value === undefined || !this.storeTemporary || (value instanceof Modification_1.Modification && value.type === "delete")) {
            return;
        }
        const stringKey = this.property.toString();
        this.expires = Date.now() + this.storeTemporary;
        if (this.expirationTimeout)
            clearTimeout(this.expirationTimeout);
        this.expirationTimeout = setTimeout(() => {
            const defaultSettings = metadata_1.getMetadata(this.object, "defaultSettings");
            const delValue = defaultSettings && !this.nullable ? defaultSettings[stringKey] : undefined;
            this.object[stringKey] = new Modification_1.Modification(delValue);
        }, this.storeTemporary);
    }
    shouldUpdateNsStorage() {
        if (!this.saveInLocalStorage || !environment_1.isBrowser())
            return false;
        const stringKey = this.property.toString();
        const keyShouldBeUpdated = metadata_1.getMetadata(this.object, "keyShouldBeUpdated") || {};
        if (keyShouldBeUpdated[stringKey])
            return true;
        if ("getNamespacedStorage" in this.object &&
            this.object.getNamespacedStorage(stringKey) === undefined) {
            metadata_1.defineMetadata(this.object, "keyShouldBeUpdated", Object.assign(keyShouldBeUpdated, { [stringKey]: true }));
            return true;
        }
        return Boolean(metadata_1.getMetadata(this.object, "constructionComplete"));
    }
}
exports.Property = Property;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUFxRDtBQUNyRCxrREFBaUY7QUFDakYsd0RBQW1EO0FBQ25ELDBDQUF1RDtBQUN2RCw0Q0FBNEM7QUFxRjVDLE1BQWEsUUFBUTtJQXFHakIsWUFBWSxNQUFTLEVBQUUsUUFBVyxFQUFFLE1BQXdCO1FBQ3hELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLE1BQU0sZUFBZSxHQUFHLGNBQU8sQ0FBQyxRQUFrQixDQUFDLENBQUM7UUFDcEQsTUFBTSxlQUFlLEdBQUcsS0FBSyxlQUFlLGVBQWUsQ0FBQztRQUM1RCxNQUFNLFdBQVcsR0FBRyxLQUFLLGVBQWUsV0FBVyxDQUFDO1FBQ3BELE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxlQUFlLGtCQUFrQixDQUFDO1FBRWxFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQzVGLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzVFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDNUcsQ0FBQztJQVNNLFFBQVEsQ0FBQyxLQUFXO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxF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