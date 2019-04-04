"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const Test_1 = require("./../../models/Test");
class BaseResolver {
    meep() {
        return 'test';
    }
    test(id) {
        let test = new Test_1.Test();
        test.id = 'id';
        test.description = 'joa gä?';
        test.title = 'Voll der titel von' + id;
        return test;
    }
}
tslib_1.__decorate([
    type_graphql_1.Query(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
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
        let test = new Test_1.Test();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvcmVzb2x2ZXIvVGVzdFJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUFvRDtBQUNwRCw4Q0FBMkM7QUFPM0MsTUFBTSxZQUFZO0lBUWQsSUFBSTtRQUNBLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFTRCxJQUFJLENBQVksRUFBVTtRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBbEJHO0lBREMsb0JBQUssRUFBRTs7Ozt3Q0FHUDtBQVNEO0lBQU0sbUJBQUEsa0JBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OzRDQUFjLFdBQUk7d0NBTWhDO0FBVUwsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFhLFNBQVEsWUFBWTtJQVNsRCxJQUFJLENBQWEsRUFBVTtRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBQ0osQ0FBQTtBQVBHO0lBREMsb0JBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsV0FBSSxDQUFDO0lBQ3BCLG1CQUFBLGtCQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7Ozs0Q0FBYyxXQUFJO3dDQU1qQztBQWZnQixZQUFZO0lBRGhDLHVCQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQUksQ0FBQztHQUNILFlBQVksQ0FnQmhDO2tCQWhCb0IsWUFBWSJ9