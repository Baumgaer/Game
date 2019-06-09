"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const decorators_1 = require("~bdo/utils/decorators");
const BDOModel_1 = require("~bdo/lib/BDOModel");
let Test = class Test extends BDOModel_1.BDOModel {
    constructor(_params) {
        super();
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
    decorators_1.baseConstructor(),
    type_graphql_1.ObjectType(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbW9kZWxzL1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQXFEO0FBQ3JELHNEQUF3RDtBQUN4RCxnREFBNkM7QUFVN0MsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSyxTQUFRLG1CQUFRO0lBeUI5QixZQUFZLE9BQTBCO1FBQ2xDLEtBQUssRUFBRSxDQUFDO1FBbkJpQixPQUFFLEdBQVcsR0FBRyxDQUFDO1FBUTlCLFVBQUssR0FBVyxNQUFNLENBQUM7SUFZdkMsQ0FBQztDQUNKLENBQUE7QUFyQnlCO0lBQXJCLG9CQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGlCQUFFLENBQUM7O2dDQUF5QjtBQVFyQztJQUFSLG9CQUFLLEVBQUU7O21DQUErQjtBQVFaO0lBQTFCLG9CQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lDQUE2QjtBQXZCOUMsSUFBSTtJQUZoQiw0QkFBZSxFQUFFO0lBQ2pCLHlCQUFVLEVBQUU7O0dBQ0EsSUFBSSxDQTRCaEI7QUE1Qlksb0JBQUkifQ==