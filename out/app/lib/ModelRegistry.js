"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("~bdo/utils/framework");
class ModelRegistry {
    constructor() {
        this.models = new Map();
    }
    static getInstance() {
        if (!ModelRegistry.instance)
            ModelRegistry.instance = new ModelRegistry();
        return ModelRegistry.instance;
    }
    register(model) {
        this.models.set(`${model.className}${model.id}`, model);
    }
    unregister(model) {
        this.models.delete(`${model.className}${model.id}`);
    }
    getModelById(id, constructor) {
        return this.models.get(`${this.getClassName(constructor)}${id}`);
    }
    getModelsByAttributes(attributes) {
        const models = [];
        this.models.forEach((model) => {
            for (const key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    const element = attributes[key];
                    if (!(key in model) || element !== model[key]) {
                        return;
                    }
                }
            }
            models.push(model);
        });
        return models;
    }
    updateID(oldID, constructor) {
        const model = this.models.get(`${this.getClassName(constructor)}${oldID}`);
        if (!model)
            return;
        this.models.delete(`${this.getClassName(constructor)}${oldID}`);
        this.register(model);
    }
    getModelsByCondition(func, mode = "all") {
        const models = [];
        let lastModel;
        for (const model of this.models.values()) {
            if (func(model)) {
                if (mode === "first")
                    return model;
                if (mode === "all")
                    models.push(model);
                if (mode === "last")
                    lastModel = model;
            }
        }
        return mode === "last" ? lastModel : models;
    }
    getClassName(constructor) {
        let className;
        if (framework_1.isBaseConstructor(constructor)) {
            className = constructor.className;
        }
        else if ("className" in constructor) {
            className = constructor.className;
        }
        else if (typeof constructor === "function") {
            className = constructor.name;
        }
        else
            className = constructor.constructor.name;
        return className;
    }
}
exports.ModelRegistry = ModelRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxSZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbGliL01vZGVsUmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvREFBeUQ7QUFXekQsTUFBYSxhQUFhO0lBaUN0QjtRQWRRLFdBQU0sR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWMxQixDQUFDO0lBTGxCLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTtZQUFFLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUMxRSxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQVVNLFFBQVEsQ0FBQyxLQUFlO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVNNLFVBQVUsQ0FBQyxLQUFlO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBVU0sWUFBWSxDQUE2QyxFQUFVLEVBQUUsV0FBYztRQUN0RixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBbUMsQ0FBQztJQUN2RyxDQUFDO0lBVU0scUJBQXFCLENBQUMsVUFBdUM7UUFDaEUsTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7Z0JBQzFCLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDaEMsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksT0FBTyxLQUFzQixLQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQzdELE9BQU87cUJBQ1Y7aUJBQ0o7YUFDSjtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBWU0sUUFBUSxDQUFxQixLQUFjLEVBQUUsV0FBYztRQUM5RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBZU0sb0JBQW9CLENBQUMsSUFBa0MsRUFBRSxPQUFpQyxLQUFLO1FBQ2xHLE1BQU0sTUFBTSxHQUFlLEVBQUUsQ0FBQztRQUM5QixJQUFJLFNBQStCLENBQUM7UUFDcEMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNiLElBQUksSUFBSSxLQUFLLE9BQU87b0JBQUUsT0FBTyxLQUFLLENBQUM7Z0JBQ25DLElBQUksSUFBSSxLQUFLLEtBQUs7b0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxJQUFJLEtBQUssTUFBTTtvQkFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQzFDO1NBQ0o7UUFDRCxPQUFPLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2hELENBQUM7SUFVTyxZQUFZLENBQUMsV0FBNkM7UUFDOUQsSUFBSSxTQUFpQixDQUFDO1FBQ3RCLElBQUksNkJBQWlCLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDaEMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7U0FDckM7YUFBTSxJQUFJLFdBQVcsSUFBSSxXQUFXLEVBQUU7WUFDbkMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7U0FDckM7YUFBTSxJQUFJLE9BQU8sV0FBVyxLQUFLLFVBQVUsRUFBRTtZQUMxQyxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNoQzs7WUFBTSxTQUFTLEdBQVMsV0FBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDdkQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBMUpELHNDQTBKQyJ9