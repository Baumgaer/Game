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
    decorators_1.attribute((_type) => type_graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "id", void 0);
tslib_1.__decorate([
    decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "title", void 0);
tslib_1.__decorate([
    decorators_1.attribute({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "description", void 0);
Test = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbW9kZWxzL1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQWtDO0FBQ2xDLHNEQUFtRTtBQUNuRSxnREFBNkM7QUFTN0MsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSyxTQUFRLG1CQUFRO0lBeUI5QixZQUFZLE9BQTBCO1FBQ2xDLEtBQUssRUFBRSxDQUFDO1FBbkJxQixPQUFFLEdBQVcsR0FBRyxDQUFDO1FBUTlCLFVBQUssR0FBVyxNQUFNLENBQUM7SUFZM0MsQ0FBQztDQUNKLENBQUE7QUFyQjZCO0lBQXpCLHNCQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGlCQUFFLENBQUM7O2dDQUF5QjtBQVFyQztJQUFaLHNCQUFTLEVBQUU7O21DQUErQjtBQVFaO0lBQTlCLHNCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lDQUE2QjtBQXZCbEQsSUFBSTtJQURoQiw0QkFBZSxFQUFFOztHQUNMLElBQUksQ0E0QmhCO0FBNUJZLG9CQUFJIn0=