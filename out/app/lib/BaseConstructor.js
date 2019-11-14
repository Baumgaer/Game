"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Binding_1 = require("~bdo/lib/Binding");
const metadata_1 = require("~bdo/utils/metadata");
const util_1 = require("~bdo/utils/util");
function baseConstructorFactory(ctor, constParamsIndex) {
    class BaseConstructor extends ctor {
        constructor(...params) {
            super(...params);
            this.collectionName = BaseConstructor.collectionName;
            this.databaseName = BaseConstructor.databaseName;
            const constParams = params[constParamsIndex];
            metadata_1.defineMetadata(this, "normalFunctionality", true);
            if (!BaseConstructor.isProceduralComponentConstruction)
                this.invokeLifeCycle(constParams);
        }
        invokeLifeCycle(constParams) {
            if (!(constParams instanceof Object))
                constParams = {};
            let defaultSettings = metadata_1.getMetadata(this, "defaultSettings") || {};
            defaultSettings = Object.assign(defaultSettings, constParams);
            if (util_1.isFunction(this.getNamespacedStorage)) {
                const id = constParams.id || defaultSettings.id;
                const cachedSettings = this.getNamespacedStorage("*", "id", id) || {};
                for (const key in cachedSettings) {
                    if (cachedSettings.hasOwnProperty(key)) {
                        const element = defaultSettings[key];
                        if (element instanceof Binding_1.Binding) {
                            element.setValue(cachedSettings[key]);
                        }
                        else
                            defaultSettings[key] = cachedSettings[key];
                    }
                }
            }
            Object.assign(this, defaultSettings);
            metadata_1.defineMetadata(this, "constructionComplete", true);
            if (util_1.isFunction(this.constructedCallback))
                this.constructedCallback();
        }
    }
    BaseConstructor.className = Object.getPrototypeOf(BaseConstructor).name;
    BaseConstructor.graphQLType = ctor;
    BaseConstructor.collectionName = metadata_1.getMetadata(BaseConstructor, "collectionName");
    BaseConstructor.databaseName = metadata_1.getMetadata(BaseConstructor, "databaseName");
    BaseConstructor.isProceduralComponentConstruction = false;
    return BaseConstructor;
}
exports.baseConstructorFactory = baseConstructorFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnN0cnVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLGtEQUFrRTtBQUNsRSwwQ0FBNkM7QUEwQzdDLFNBQWdCLHNCQUFzQixDQUFDLElBQVMsRUFBRSxnQkFBd0I7SUFRdEUsTUFBTSxlQUFnQixTQUFRLElBQUk7UUFnRTlCLFlBQVksR0FBRyxNQUFhO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBWEwsbUJBQWMsR0FBWSxlQUFlLENBQUMsY0FBYyxDQUFDO1lBUXpELGlCQUFZLEdBQVksZUFBZSxDQUFDLFlBQVksQ0FBQztZQUlqRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3Qyx5QkFBYyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLGlDQUFpQztnQkFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlGLENBQUM7UUFRTSxlQUFlLENBQUMsV0FBd0M7WUFDM0QsSUFBSSxDQUFDLENBQUMsV0FBVyxZQUFZLE1BQU0sQ0FBQztnQkFBRSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZELElBQUksZUFBZSxHQUFpQyxzQkFBVyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvRixlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDOUQsSUFBSSxpQkFBVSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO2dCQUN2QyxNQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsRUFBRSxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEUsS0FBSyxNQUFNLEdBQUcsSUFBSSxjQUFjLEVBQUU7b0JBQzlCLElBQUksY0FBYyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDcEMsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLE9BQU8sWUFBWSxpQkFBTyxFQUFFOzRCQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUN6Qzs7NEJBQU0sZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDckQ7aUJBQ0o7YUFDSjtZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ3JDLHlCQUFjLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksaUJBQVUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQVEsSUFBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDaEYsQ0FBQzs7SUF4RnNCLHlCQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFVeEQsMkJBQVcsR0FBUSxJQUFJLENBQUM7SUFTeEIsOEJBQWMsR0FBWSxzQkFBVyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBU3pFLDRCQUFZLEdBQVksc0JBQVcsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFVOUUsaURBQWlDLEdBQVksS0FBSyxDQUFDO0lBb0RyRSxPQUFPLGVBQWUsQ0FBQztBQUMzQixDQUFDO0FBM0dELHdEQTJHQyJ9