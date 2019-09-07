"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Modification_1 = require("~bdo/lib/Modification");
const metadata_1 = require("~bdo/utils/metadata");
const environment_1 = require("~bdo/utils/environment");
const util_1 = require("~bdo/utils/util");
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
        const errorMessage = new Error(`${valueToPass} is not type of ${designType.className || designType.name}`);
        let successful = false;
        if (this.nullable && valueToPass === undefined)
            successful = true;
        if (!successful) {
            if (util_1.isPrimitive(valueToPass)) {
                if (typeof valueToPass === designType.name.toLowerCase())
                    successful = true;
            }
            else if (valueToPass instanceof designType)
                successful = true;
        }
        if (successful && this.onTypeCheck in this.object) {
            successful = this.object[this.onTypeCheck](valueToPass);
        }
        if (!successful) {
            if (this.onTypeCheckFail in this.object) {
                this.object[this.onTypeCheckFail]();
            }
            else
                throw errorMessage;
        }
        else if (this.onTypeCheckSuccess in this.object)
            this.object[this.onTypeCheckSuccess]();
        return successful;
    }
    doSetValue(value, modifyValue) {
        if (this.valueOf() === value || !this.disableTypeGuard && this.typeGuard(value))
            return;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        if (modifyValue)
            this.value = valueToPass;
        this.addExpiration(valueToPass);
        if (this.shouldUpdateNsStorage() && "setUpdateNamespacedStorage" in this.object) {
            this.object.setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
    }
    addExpiration(value) {
        if (value === undefined || !this.storeTemporary)
            return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUFxRDtBQUNyRCxrREFBaUY7QUFDakYsd0RBQW1EO0FBQ25ELDBDQUF1RDtBQXFGdkQsTUFBYSxRQUFRO0lBcUdqQixZQUFZLE1BQVMsRUFBRSxRQUFXLEVBQUUsTUFBd0I7UUFDeEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFNUIsTUFBTSxlQUFlLEdBQUcsY0FBTyxDQUFDLFFBQWtCLENBQUMsQ0FBQztRQUNwRCxNQUFNLGVBQWUsR0FBRyxLQUFLLGVBQWUsZUFBZSxDQUFDO1FBQzVELE1BQU0sV0FBVyxHQUFHLEtBQUssZUFBZSxXQUFXLENBQUM7UUFDcEQsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLGVBQWUsa0JBQWtCLENBQUM7UUFFbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDNUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUM1RyxDQUFDO0lBU00sUUFBUSxDQUFDLEtBQVc7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFD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