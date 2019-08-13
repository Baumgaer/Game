"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BDOTest_1 = require("~bdo/models/BDOTest");
const BDOModel_1 = require("~bdo/lib/BDOModel");
const decorators_1 = require("~bdo/utils/decorators");
let Test = class Test extends BDOTest_1.BDOTestFactory(BDOModel_1.BDOModel) {
    constructor(_params) {
        super();
    }
    test() {
    }
};
Test = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL21vZGVscy9UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFxRDtBQUNyRCxnREFBNkM7QUFDN0Msc0RBQXdEO0FBVXhELElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUssU0FBUSx3QkFBYyxDQUFDLG1CQUFRLENBQUM7SUFFOUMsWUFBWSxPQUEyQjtRQUNuQyxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFPTSxJQUFJO0lBRVgsQ0FBQztDQUNKLENBQUE7QUFkWSxJQUFJO0lBRGhCLDRCQUFlLEVBQUU7O0dBQ0wsSUFBSSxDQWNoQjtBQWRZLG9CQUFJIn0=