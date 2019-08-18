"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Test1_1 = require("~server/models/Test1");
const decorators_1 = require("~bdo/utils/decorators");
class BaseResolver {
    resolverName(_id) {
        return this.constructor.name;
    }
}
tslib_1.__decorate([
    decorators_1.query(),
    tslib_1.__param(0, decorators_1.arg("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", String)
], BaseResolver.prototype, "resolverName", null);
let TestResolver = class TestResolver extends BaseResolver {
    lalala(id) {
        return new Test1_1.Test1({
            id,
            title: "hahahahahahahahahahahahaha",
            description: "hicks...",
            oha: "joah"
        });
    }
};
tslib_1.__decorate([
    decorators_1.query((_returns) => Test1_1.Test1.graphQLType),
    tslib_1.__param(0, decorators_1.arg("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Test1_1.Test1)
], TestResolver.prototype, "lalala", null);
TestResolver = tslib_1.__decorate([
    decorators_1.resolver(Test1_1.Test1)
], TestResolver);
exports.default = TestResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvYXBpL1Rlc3RSZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnREFBNkM7QUFDN0Msc0RBQTZEO0FBTzdELE1BQU0sWUFBWTtJQVFQLFlBQVksQ0FBWSxHQUFXO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztDQUNKO0FBSEc7SUFEQyxrQkFBSyxFQUFFO0lBQ2EsbUJBQUEsZ0JBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OztnREFFN0I7QUFVTCxJQUFxQixZQUFZLEdBQWpDLE1BQXFCLFlBQWEsU0FBUSxZQUFZO0lBVTNDLE1BQU0sQ0FBWSxFQUFVO1FBQy9CLE9BQU8sSUFBSSxhQUFLLENBQUM7WUFDYixFQUFFO1lBQ0YsS0FBSyxFQUFFLDRCQUE0QjtZQUNuQyxXQUFXLEVBQUUsVUFBVTtZQUN2QixHQUFHLEVBQUUsTUFBTTtTQUNkLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFBO0FBUkc7SUFEQyxrQkFBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxhQUFLLENBQUMsV0FBVyxDQUFDO0lBQ3hCLG1CQUFBLGdCQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs0Q0FBYyxhQUFLOzBDQU8xQztBQWpCZ0IsWUFBWTtJQURoQyxxQkFBUSxDQUFDLGFBQUssQ0FBQztHQUNLLFlBQVksQ0FrQmhDO2tCQWxCb0IsWUFBWSJ9