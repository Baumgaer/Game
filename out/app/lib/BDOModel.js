"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Binding_1 = require("~bdo/lib/Binding");
class BDOModel {
    get bindings() {
        const bindings = Reflect.getMetadata("bindings", this);
        return bindings ? bindings : new Map();
    }
    bind(property) {
        return new Binding_1.Binding(this, property);
    }
}
exports.BDOModel = BDOModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUEyQztBQVEzQyxNQUFzQixRQUFRO0lBVTFCLElBQWMsUUFBUTtRQUNsQixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFVTSxJQUFJLENBQStELFFBQVc7UUFDakYsT0FBTyxJQUFJLGlCQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBdUIsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUExQkQsNEJBMEJDIn0=