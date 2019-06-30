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
    }
    get bindings() {
        const bindings = Reflect.getMetadata("bindings", this);
        return bindings ? bindings : new Map();
    }
    bind(property) {
        return new Binding_1.Binding(this, property);
    }
};
BDOModel.graphQLType = Object.getPrototypeOf(BDOModel_1.constructor);
tslib_1.__decorate([
    decorators_1.attribute((_type) => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "id", void 0);
tslib_1.__decorate([
    decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], BDOModel.prototype, "className", void 0);
BDOModel = BDOModel_1 = tslib_1.__decorate([
    decorators_1.baseConstructor({ isAbstract: true })
], BDOModel);
exports.BDOModel = BDOModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL2xpYi9CRE9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtCQUFrQztBQUNsQywrQ0FBa0M7QUFDbEMsOENBQTJDO0FBQzNDLHNEQUFtRTtBQVduRSxJQUFzQixRQUFRLGdCQUE5QixNQUFzQixRQUFRO0lBRDlCO1FBb0JxQyxPQUFFLEdBQVksV0FBVyxTQUFJLEVBQUUsRUFBRSxDQUFDO1FBVXRDLGNBQVMsR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7SUEwQmxHLENBQUM7SUFoQkcsSUFBYyxRQUFRO1FBQ2xCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQVVNLElBQUksQ0FBK0QsUUFBVztRQUNqRixPQUFPLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUF1QixDQUFDO0lBQzdELENBQUM7Q0FDSixDQUFBO0FBN0MwQixvQkFBVyxHQUFRLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBUzVEO0lBQXpCLHNCQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGlCQUFFLENBQUM7O29DQUEwQztBQVV0RDtJQUFaLHNCQUFTLEVBQUU7OzJDQUFrRjtBQTdCNUUsUUFBUTtJQUQ3Qiw0QkFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO0dBQ2hCLFFBQVEsQ0F1RDdCO0FBdkRxQiw0QkFBUSJ9