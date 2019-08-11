"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("~bdo/utils/metadata");
function setUpdateNamespacedStorage(instance, key, newVal, nsProp = "id") {
    const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
    let nsSuffix = metadata_1.getMetadata(instance, "oldStorageNsSuffix");
    let storageValue;
    if (!nsSuffix)
        nsSuffix = instance[nsProp];
    let ns = `${nsPrefix}_${nsSuffix}`;
    if (key === nsProp || nsSuffix !== instance[nsProp]) {
        nsSuffix = key === nsProp ? newVal : instance[nsProp];
        const newNs = `${nsPrefix}_${nsSuffix}`;
        storageValue = localStorage.getItem(ns);
        if (storageValue) {
            localStorage.removeItem(ns);
            localStorage.setItem(newNs, storageValue);
        }
        ns = newNs;
    }
    else {
        storageValue = localStorage.getItem(ns);
        if (storageValue) {
            storageValue = JSON.parse(storageValue);
        }
        else
            storageValue = {};
        if (newVal === undefined) {
            delete storageValue[key];
            if (!Object.keys(storageValue).length) {
                localStorage.removeItem(ns);
            }
            else
                localStorage.setItem(ns, JSON.stringify(storageValue));
        }
        else
            localStorage.setItem(ns, JSON.stringify(Object.assign(storageValue, { [key]: newVal })));
    }
    metadata_1.defineMetadata(instance, "oldStorageNsSuffix", nsSuffix);
}
exports.setUpdateNamespacedStorage = setUpdateNamespacedStorage;
function getNamespacedStorage(instance, key, nsProp = "id", forceNS) {
    const nsPrefix = Object.getPrototypeOf(instance.constructor).name;
    let nsSuffix = metadata_1.getMetadata(instance, "oldStorageNsSuffix");
    if (nsSuffix !== instance[nsProp])
        nsSuffix = instance[nsProp];
    if (forceNS)
        nsSuffix = forceNS;
    let storageValue = localStorage.getItem(`${nsPrefix}_${nsSuffix}`);
    if (storageValue)
        storageValue = JSON.parse(storageValue);
    if (storageValue && key === "*")
        return storageValue;
    if (storageValue && key in storageValue)
        return storageValue[key];
    return undefined;
}
exports.getNamespacedStorage = getNamespacedStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvY2xpZW50L3RzL3V0aWxzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBa0U7QUFVbEUsU0FBZ0IsMEJBQTBCLENBQUMsUUFBYSxFQUFFLEdBQVcsRUFBRSxNQUFXLEVBQUUsU0FBaUIsSUFBSTtJQUVyRyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEUsSUFBSSxRQUFRLEdBQUcsc0JBQVcsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUMzRCxJQUFJLFlBQWlCLENBQUM7SUFHdEIsSUFBSSxDQUFDLFFBQVE7UUFBRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLElBQUksRUFBRSxHQUFHLEdBQUcsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ25DLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBRWpELFFBQVEsR0FBRyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxNQUFNLEtBQUssR0FBRyxHQUFHLFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUN4QyxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxJQUFJLFlBQVksRUFBRTtZQUNkLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDN0M7UUFDRCxFQUFFLEdBQUcsS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUVILFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksWUFBWSxFQUFFO1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0M7O1lBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV6QixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9COztnQkFBTSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDakU7O1lBQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkc7SUFFRCx5QkFBYyxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBbkNELGdFQW1DQztBQWtCRCxTQUFnQixvQkFBb0IsQ0FBQyxRQUFhLEVBQUUsR0FBVyxFQUFFLFNBQWlCLElBQUksRUFBRSxPQUFnQjtJQUNwRyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEUsSUFBSSxRQUFRLEdBQUcsc0JBQVcsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUMzRCxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQUUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRCxJQUFJLE9BQU87UUFBRSxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ2hDLElBQUksWUFBWSxHQUFRLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN4RSxJQUFJLFlBQVk7UUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxJQUFJLFlBQVksSUFBSSxHQUFHLEtBQUssR0FBRztRQUFFLE9BQU8sWUFBWSxDQUFDO0lBQ3JELElBQUksWUFBWSxJQUFJLEdBQUcsSUFBSSxZQUFZO1FBQUUsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEUsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQVZELG9EQVVDIn0=