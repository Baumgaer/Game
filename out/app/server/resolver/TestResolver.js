"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Test_1 = require("./../../models/Test");
class BaseResolver {
    meep(id) {
        return id;
    }
    test(id) {
        const test = new Test_1.Test();
        test.id = 'id';
        test.description = 'joa gä?';
        test.title = 'Voll der titel von' + id;
        return test;
    }
}
tslib_1.__decorate([
    type_graphql_1.Query(),
    tslib_1.__param(0, type_graphql_1.Arg('hahahaha')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", String)
], BaseResolver.prototype, "meep", null);
tslib_1.__decorate([
    tslib_1.__param(0, type_graphql_1.Arg('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Test_1.Test)
], BaseResolver.prototype, "test", null);
let TestResolver = class TestResolver extends BaseResolver {
    test(id) {
        const test = new Test_1.Test();
        test.id = id;
        test.title = 'Voll der titel...';
        return test;
    }
};
tslib_1.__decorate([
    type_graphql_1.Query((_returns) => Test_1.Test),
    tslib_1.__param(0, type_graphql_1.Arg('lol')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Test_1.Test)
], TestResolver.prototype, "test", null);
TestResolver = tslib_1.__decorate([
    type_graphql_1.Resolver((_of) => Test_1.Test)
], TestResolver);
exports.default = TestResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvcmVzb2x2ZXIvVGVzdFJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUFvRDtBQUNwRCw4Q0FBMkM7QUFPM0MsTUFBTSxZQUFZO0lBUVAsSUFBSSxDQUFrQixFQUFVO1FBQ25DLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQVNNLElBQUksQ0FBWSxFQUFVO1FBQzdCLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0o7QUFsQkc7SUFEQyxvQkFBSyxFQUFFO0lBQ0ssbUJBQUEsa0JBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTs7Ozt3Q0FFM0I7QUFTRDtJQUFhLG1CQUFBLGtCQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs0Q0FBYyxXQUFJO3dDQU12QztBQVVMLElBQXFCLFlBQVksR0FBakMsTUFBcUIsWUFBYSxTQUFRLFlBQVk7SUFTM0MsSUFBSSxDQUFhLEVBQVU7UUFDOUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKLENBQUE7QUFQRztJQURDLG9CQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQztJQUNiLG1CQUFBLGtCQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7Ozs0Q0FBYyxXQUFJO3dDQU14QztBQWZnQixZQUFZO0lBRGhDLHVCQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQztHQUNILFlBQVksQ0FnQmhDO2tCQWhCb0IsWUFBWSJ9