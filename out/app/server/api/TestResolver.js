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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvYXBpL1Rlc3RSZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBK0M7QUFPL0MsTUFBTSxZQUFZO0lBUVAsWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBSEc7SUFEQyxvQkFBSyxFQUFFOzs7O2dEQUdQO0FBVUwsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFhLFNBQVEsWUFBWTtDQUFJLENBQUE7QUFBckMsWUFBWTtJQURoQyx1QkFBUSxFQUFFO0dBQ1UsWUFBWSxDQUF5QjtrQkFBckMsWUFBWSJ9