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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnN0cnVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLGtEQUFrRTtBQUNsRSwwQ0FBNkM7QUErRDdDLFNBQWdCLHNCQUFzQixDQUE4QyxJQUFPLEVBQUUsZ0JBQXdCO0lBUWpILE1BQU0sZUFBZ0IsU0FBUSxJQUFJO1FBZ0U5QixZQUFZLEdBQUcsTUFBYTtZQUN4QixLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQVhMLG1CQUFjLEdBQVksZUFBZSxDQUFDLGNBQWMsQ0FBQztZQVF6RCxpQkFBWSxHQUFZLGVBQWUsQ0FBQyxZQUFZLENBQUM7WUFJakUsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDN0MseUJBQWMsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQ0FBaUM7Z0JBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RixDQUFDO1FBUU0sZUFBZSxDQUFDLFdBQXdDO1lBQzNELElBQUksQ0FBQyxDQUFDLFdBQVcsWUFBWSxNQUFNLENBQUM7Z0JBQUUsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2RCxJQUFJLGVBQWUsR0FBMkMsc0JBQVcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekcsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlELElBQUksaUJBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEVBQUUsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDO2dCQUNoRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RFLEtBQUssTUFBTSxHQUFHLElBQUksY0FBYyxFQUFFO29CQUM5QixJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3BDLE1BQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxPQUFPLFlBQVksaUJBQU8sRUFBRTs0QkFDNUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt5QkFDekM7OzRCQUFNLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3JEO2lCQUNKO2FBQ0o7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNyQyx5QkFBYyxDQUFDLElBQUksRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxJQUFJLGlCQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pFLENBQUM7O0lBeEZzQix5QkFBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBVXhELDJCQUFXLEdBQUcsSUFBSSxDQUFDO0lBU25CLDhCQUFjLEdBQVksc0JBQVcsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQVN6RSw0QkFBWSxHQUFZLHNCQUFXLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBVTlFLGlEQUFpQyxHQUFZLEtBQUssQ0FBQztJQW9EckUsT0FBTyxlQUFlLENBQUM7QUFDM0IsQ0FBQztBQTNHRCx3REEyR0MifQ==