"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Binding_1 = require("~bdo/lib/Binding");
const metadata_1 = require("~bdo/utils/metadata");
function beforePropertyDescriptors(target, key, mDataName) {
    const propDesc = Reflect.getOwnPropertyDescriptor(target, key);
    if (!Reflect.hasMetadata(mDataName, target))
        metadata_1.defineMetadata(target, mDataName, new Array());
    const map = metadata_1.getMetadata(target, mDataName);
    map.push(key.toString());
    return propDesc;
}
exports.beforePropertyDescriptors = beforePropertyDescriptors;
function getter(instance, key, propDesc) {
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        return defaultSettings[key.toString()];
    }
    const stringKey = key.toString();
    if (propDesc && propDesc.get) {
        return propDesc.get.call(instance);
    }
    else {
        const mData = metadata_1.getWildcardMetadata(instance, stringKey);
        if (mData)
            return mData.valueOf();
        return undefined;
    }
}
exports.getter = getter;
function setter(instance, key, newVal, propDesc) {
    if (!metadata_1.getMetadata(instance, "normalFunctionality")) {
        const defaultSettings = metadata_1.getMetadata(instance, "defaultSettings") || {};
        Object.assign(defaultSettings, { [key]: newVal });
        metadata_1.defineMetadata(instance, "defaultSettings", defaultSettings);
        return;
    }
    const stringKey = key.toString();
    if (instance[stringKey] === newVal)
        return;
    const mData = metadata_1.getWildcardMetadata(instance, stringKey);
    const initiatorMData = metadata_1.getMetadata(instance, "initiatorBinding");
    const initiatorBinding = initiatorMData ? initiatorMData.get(stringKey) : undefined;
    if (newVal instanceof Binding_1.Binding) {
        newVal.install(instance, stringKey);
        newVal = newVal.valueOf();
    }
    mData.setValue(newVal);
    if (initiatorBinding)
        initiatorBinding.reflectToObject(newVal);
    if (propDesc && propDesc.set)
        propDesc.set.call(instance, newVal);
}
exports.setter = setter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC91dGlscy9mcmFtZXdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMkM7QUFDM0Msa0RBQXVGO0FBYXZGLFNBQWdCLHlCQUF5QixDQUFDLE1BQVcsRUFBRSxHQUFXLEVBQUUsU0FBd0I7SUFFeEYsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUcvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1FBQUUseUJBQWMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksS0FBSyxFQUFVLENBQUMsQ0FBQztJQUNwRyxNQUFNLEdBQUcsR0FBRyxzQkFBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQWEsQ0FBQztJQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUM7QUFURCw4REFTQztBQVdELFNBQWdCLE1BQU0sQ0FBQyxRQUFhLEVBQUUsR0FBb0IsRUFBRSxRQUFtQjtJQUMzRSxJQUFJLENBQUMsc0JBQVcsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsRUFBRTtRQUMvQyxNQUFNLGVBQWUsR0FBRyxzQkFBVyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2RSxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUMxQztJQUNELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQzFCLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEM7U0FBTTtRQUNILE1BQU0sS0FBSyxHQUFHLDhCQUFtQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RCxJQUFJLEtBQUs7WUFBRSxPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxPQUFPLFNBQVMsQ0FBQztLQUNwQjtBQUNMLENBQUM7QUFiRCx3QkFhQztBQWNELFNBQWdCLE1BQU0sQ0FBQyxRQUFhLEVBQUUsR0FBb0IsRUFBRSxNQUFXLEVBQUUsUUFBbUI7SUFFeEYsSUFBSSxDQUFDLHNCQUFXLENBQUMsUUFBUSxFQUFFLHFCQUFxQixDQUFDLEVBQUU7UUFDL0MsTUFBTSxlQUFlLEdBQUcsc0JBQVcsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEQseUJBQWMsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDN0QsT0FBTztLQUNWO0lBQ0QsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBR2pDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLE1BQU07UUFBRSxPQUFPO0lBQzNDLE1BQU0sS0FBSyxHQUFHLDhCQUFtQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxNQUFNLGNBQWMsR0FBRyxzQkFBVyxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFFcEYsSUFBSSxNQUFNLFlBQVksaUJBQU8sRUFBRTtRQUUzQixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzdCO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV2QixJQUFJLGdCQUFnQjtRQUFFLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUvRCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRztRQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBM0JELHdCQTJCQyJ9