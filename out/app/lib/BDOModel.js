"use strict";
var BDOModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
"use strict";
const uuid_1 = require("uuid");
const type_graphql_1 = require("type-graphql");
const Binding_1 = require("~bdo/lib/Binding");
const decorators_1 = require("~bdo/utils/decorators");
let BDOModel = BDOModel_1 = class BDOModel {
    constructor() {
        this.id = `pending_${uuid_1.v1()}`;
        this.className = Object.getPrototypeOf(this.constructor).name;
        this.isBDOModel = true;
    }
    get bindings() {
        const bindings = Reflect.getMetadata("bindings", this);
        return bindings ? bindings : new Map();
    }
    bind(propName) {
        return new Binding_1.Binding(this, propName);
    }
};
BDOModel.graphQLType = Object.getPrototypeOf(BDOModel_1.constructor);
BDOModel.isBDOModel = true;
tslib_1.__decorate([
    decorators_1.attribute((_type) => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "id", void 0);
tslib_1.__decorate([
    decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "className", void 0);
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", Boolean)
], BDOModel.prototype, "isBDOModel", void 0);
BDOModel = BDOModel_1 = tslib_1.__decorate([
    decorators_1.baseConstructor({ isAbstract: true })
], BDOModel);
exports.BDOModel = BDOModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtCQUFrQztBQUNsQywrQ0FBa0M7QUFDbEMsOENBQTJDO0FBQzNDLHNEQUE2RTtBQVc3RSxJQUFzQixRQUFRLGdCQUE5QixNQUFzQixRQUFRO0lBRDlCO1FBOEJxQyxPQUFFLEdBQVcsV0FBVyxTQUFJLEVBQUUsRUFBRSxDQUFDO1FBVXJDLGNBQVMsR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFRbEUsZUFBVSxHQUFZLElBQUksQ0FBQztJQTBCM0QsQ0FBQztJQWhCRyxJQUFjLFFBQVE7UUFDbEIsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBVU0sSUFBSSxDQUErRCxRQUFXO1FBQ2pGLE9BQU8sSUFBSSxpQkFBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQXVCLENBQUM7SUFDN0QsQ0FBQztDQUNKLENBQUE7QUEvRDBCLG9CQUFXLEdBQVEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7QUFVL0QsbUJBQVUsR0FBWSxJQUFJLENBQUM7QUFTeEI7SUFBekIsc0JBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsaUJBQUUsQ0FBQzs7b0NBQXlDO0FBVXJEO0lBQVosc0JBQVMsRUFBRTs7MkNBQWtGO0FBUWxGO0lBQVgscUJBQVEsRUFBRTs7NENBQTRDO0FBL0NyQyxRQUFRO0lBRDdCLDRCQUFlLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7R0FDaEIsUUFBUSxDQXlFN0I7QUF6RXFCLDRCQUFRIn0=