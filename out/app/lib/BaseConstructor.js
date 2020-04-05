"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Binding_1 = require("~bdo/lib/Binding");
const metadata_1 = require("~bdo/utils/metadata");
const util_1 = require("~bdo/utils/util");
const framework_1 = require("~bdo/utils/framework");
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
            if (framework_1.isComponent(ctor) && util_1.isFunction(this.renderTemplate))
                this.renderTemplate();
            if (framework_1.isComponent(ctor)) {
                if (!ctor.extends) {
                    Object.seal(this);
                }
                else
                    setTimeout(() => Object.seal(this));
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnN0cnVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQmFzZUNvbnN0cnVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLGtEQUFrRTtBQUNsRSwwQ0FBNkM7QUFDN0Msb0RBQW1EO0FBd0VuRCxTQUFnQixzQkFBc0IsQ0FBOEMsSUFBTyxFQUFFLGdCQUF3QjtJQVFqSCxNQUFNLGVBQWdCLFNBQVEsSUFBSTtRQWdFOUIsWUFBWSxHQUFHLE1BQWE7WUFDeEIsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFYTCxtQkFBYyxHQUFZLGVBQWUsQ0FBQyxjQUFjLENBQUM7WUFRekQsaUJBQVksR0FBWSxlQUFlLENBQUMsWUFBWSxDQUFDO1lBSWpFLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzdDLHlCQUFjLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsaUNBQWlDO2dCQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUYsQ0FBQztRQVFNLGVBQWUsQ0FBQyxXQUF3QztZQUMzRCxJQUFJLENBQUMsQ0FBQyxXQUFXLFlBQVksTUFBTSxDQUFDO2dCQUFFLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdkQsSUFBSSxlQUFlLEdBQTJDLHNCQUFXLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pHLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RCxJQUFJLGlCQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxFQUFFLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0RSxLQUFLLE1BQU0sR0FBRyxJQUFJLGNBQWMsRUFBRTtvQkFDOUIsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNwQyxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JDLElBQUksT0FBTyxZQUFZLGlCQUFPLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ3pDOzs0QkFBTSxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNyRDtpQkFDSjthQUNKO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDckMseUJBQWMsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBSSx1QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDaEYsSUFBSSx1QkFBVyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQjs7b0JBQU0sVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM5QztZQUNELElBQUksaUJBQVUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekUsQ0FBQzs7SUE5RnNCLHlCQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFVeEQsMkJBQVcsR0FBRyxJQUFJLENBQUM7SUFTbkIsOEJBQWMsR0FBWSxzQkFBVyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBU3pFLDRCQUFZLEdBQVksc0JBQVcsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFVOUUsaURBQWlDLEdBQVksS0FBSyxDQUFDO0lBMERyRSxPQUFPLGVBQWUsQ0FBQztBQUMzQixDQUFDO0FBakhELHdEQWlIQyJ9