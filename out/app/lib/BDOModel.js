"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Binding_1 = require("~bdo/lib/Binding");
class BDOModel {
    get bindings() {
        const bindings = Reflect.getMetadata("bindings", this);
        return bindings ? bindings : {};
    }
    bind(property) {
        const binding = new Binding_1.Binding(this, property);
        if (!Reflect.hasMetadata("bindings", this))
            Reflect.defineMetadata("bindings", {}, this);
        const boundMetadata = Reflect.getMetadata("bindings", this);
        if (!(property in boundMetadata))
            boundMetadata[property] = [];
        boundMetadata[property].push(binding);
        return binding;
    }
}
exports.BDOModel = BDOModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUEyQztBQVEzQyxNQUFzQixRQUFRO0lBUzFCLElBQWMsUUFBUTtRQUNsQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQVVNLElBQUksQ0FBQyxRQUFnQjtRQUN4QixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekYsTUFBTSxhQUFhLEdBQXNDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUM7WUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9ELGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBOUJELDRCQThCQyJ9