"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
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
    type_graphql_1.Resolver()
], TestResolver);
exports.default = TestResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvcmVzb2x2ZXIvVGVzdFJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUErQztBQU8vQyxNQUFNLFlBQVk7SUFRUCxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFIRztJQURDLG9CQUFLLEVBQUU7Ozs7Z0RBR1A7QUFVTCxJQUFxQixZQUFZLEdBQWpDLE1BQXFCLFlBQWEsU0FBUSxZQUFZO0NBQUksQ0FBQTtBQUFyQyxZQUFZO0lBRGhDLHVCQUFRLEVBQUU7R0FDVSxZQUFZLENBQXlCO2tCQUFyQyxZQUFZIn0=