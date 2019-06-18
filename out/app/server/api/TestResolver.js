"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Test_1 = require("~bdo/models/Test");
class BaseResolver {
    resolverName() {
        return this.constructor.name;
    }
}
tslib_1.__decorate([
    type_graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], BaseResolver.prototype, "resolverName", null);
let TestResolver = class TestResolver extends BaseResolver {
};
TestResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(Test_1.Test)
], TestResolver);
exports.default = TestResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvYXBpL1Rlc3RSZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBK0M7QUFDL0MsMkNBQXdDO0FBT3hDLE1BQU0sWUFBWTtJQVFQLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ2pDLENBQUM7Q0FDSjtBQUhHO0lBREMsb0JBQUssRUFBRTs7OztnREFHUDtBQVVMLElBQXFCLFlBQVksR0FBakMsTUFBcUIsWUFBYSxTQUFRLFlBQVk7Q0FBSSxDQUFBO0FBQXJDLFlBQVk7SUFEaEMsdUJBQVEsQ0FBQyxXQUFJLENBQUM7R0FDTSxZQUFZLENBQXlCO2tCQUFyQyxZQUFZIn0=