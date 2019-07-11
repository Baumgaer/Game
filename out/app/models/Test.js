"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorators_1 = require("~bdo/utils/decorators");
const BDOModel_1 = require("~bdo/lib/BDOModel");
let Test = class Test extends BDOModel_1.BDOModel {
    constructor() {
        super(...arguments);
        this.title = 'test';
    }
};
tslib_1.__decorate([
    decorators_1.attribute(),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "title", void 0);
tslib_1.__decorate([
    decorators_1.attribute({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Test.prototype, "description", void 0);
Test = tslib_1.__decorate([
    decorators_1.baseConstructor()
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbW9kZWxzL1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1FO0FBQ25FLGdEQUE2QztBQVM3QyxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsbUJBQVE7SUFEbEM7O1FBU3dCLFVBQUssR0FBVyxNQUFNLENBQUM7SUFTL0MsQ0FBQztDQUFBLENBQUE7QUFUZ0I7SUFBWixzQkFBUyxFQUFFOzttQ0FBK0I7QUFRWjtJQUE5QixzQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FBNkI7QUFoQmxELElBQUk7SUFEaEIsNEJBQWUsRUFBRTtHQUNMLElBQUksQ0FpQmhCO0FBakJZLG9CQUFJIn0=