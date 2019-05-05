"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const decorators_1 = require("~bdo/utils/decorators");
let Test = class Test {
    constructor(_params) {
        this.id = '0';
        this.title = 'test';
    }
};
tslib_1.__decorate([
    type_graphql_1.Field((_type) => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "description", void 0);
Test = tslib_1.__decorate([
    type_graphql_1.ObjectType(),
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbW9kZWxzL1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQXFEO0FBQ3JELHNEQUF3RDtBQVV4RCxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFJO0lBeUJiLFlBQVksT0FBMEI7UUFsQlQsT0FBRSxHQUFXLEdBQUcsQ0FBQztRQVE5QixVQUFLLEdBQVcsTUFBTSxDQUFDO0lBVUcsQ0FBQztDQUM5QyxDQUFBO0FBbkJ5QjtJQUFyQixvQkFBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxpQkFBRSxDQUFDOztnQ0FBeUI7QUFRckM7SUFBUixvQkFBSyxFQUFFOzttQ0FBK0I7QUFRWjtJQUExQixvQkFBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FBNkI7QUF2QjlDLElBQUk7SUFGaEIseUJBQVUsRUFBRTtJQUNaLDRCQUFlLEVBQUU7O0dBQ0wsSUFBSSxDQTBCaEI7QUExQlksb0JBQUkifQ==