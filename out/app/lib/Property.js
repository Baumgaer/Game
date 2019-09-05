"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Modification_1 = require("~bdo/lib/Modification");
const metadata_1 = require("~bdo/utils/metadata");
const environment_1 = require("~bdo/utils/environment");
class Property {
    constructor(object, property, params) {
        this.object = object;
        this.property = property;
        Object.assign(this, params);
    }
    setValue(value) {
        if (this.valueOf() === value)
            return;
        let valueToPass = value;
        if (value instanceof Modification_1.Modification)
            valueToPass = value.valueOf();
        this.value = valueToPass;
        this.addExpiration();
        if (this.shouldUpdateNsStorage() && "setUpdateNamespacedStorage" in this.object) {
            this.object.setUpdateNamespacedStorage(this.property.toString(), valueToPass);
        }
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
    addExpiration() {
        if (this.value === undefined || !this.storeTemporary)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9Qcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdEQUFxRDtBQUNyRCxrREFBa0U7QUFDbEUsd0RBQW1EO0FBZ0RuRCxNQUFhLFFBQVE7SUFxRWpCLFlBQVksTUFBUyxFQUFFLFFBQVcsRUFBRSxNQUF3QjtRQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBU00sUUFBUSxDQUFDLEtBQVc7UUFDdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSztZQUFFLE9BQU87UUFDckMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksS0FBSyxZQUFZLDJCQUFZO1lBQUUsV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSw0QkFBNEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzVELElBQUksQ0FBQyxNQUFPLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNuRztJQUNMLENBQUM7SUFVTSxPQUFPO1FBQ1YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJ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