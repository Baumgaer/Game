"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let Test = class Test {
    constructor() {
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
    type_graphql_1.ObjectType()
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbW9kZWxzL1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQXFEO0FBU3JELElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7SUFEakI7UUFTSSxPQUFFLEdBQVcsR0FBRyxDQUFDO1FBUVIsVUFBSyxHQUFXLE1BQU0sQ0FBQztJQVVwQyxDQUFDO0NBQUEsQ0FBQTtBQWxCRztJQURDLG9CQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGlCQUFFLENBQUM7O2dDQUNKO0FBUVI7SUFBUixvQkFBSyxFQUFFOzttQ0FBd0I7QUFTaEM7SUFEQyxvQkFBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDTDtBQXpCWixJQUFJO0lBRGhCLHlCQUFVLEVBQUU7R0FDQSxJQUFJLENBMEJoQjtBQTFCWSxvQkFBSSJ9