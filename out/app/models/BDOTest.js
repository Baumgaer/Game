"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorators_1 = require("~bdo/utils/decorators");
function BDOTestFactory(ctor) {
    let BDOTest = class BDOTest extends ctor {
        constructor() {
            super(...arguments);
            this.title = 'test';
        }
    };
    tslib_1.__decorate([
        decorators_1.attribute({ storeTemporary: 5000 }),
        tslib_1.__metadata("design:type", String)
    ], BDOTest.prototype, "title", void 0);
    tslib_1.__decorate([
        decorators_1.attribute({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], BDOTest.prototype, "description", void 0);
    BDOTest = tslib_1.__decorate([
        decorators_1.baseConstructor()
    ], BDOTest);
    return BDOTest;
}
exports.BDOTestFactory = BDOTestFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbW9kZWxzL0JET1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1FO0FBVW5FLFNBQWdCLGNBQWMsQ0FBc0MsSUFBVztJQVMzRSxJQUFNLE9BQU8sR0FBYixNQUFNLE9BQVEsU0FBUSxJQUFJO1FBRDFCOztZQVNnRCxVQUFLLEdBQVcsTUFBTSxDQUFDO1FBVXZFLENBQUM7S0FBQSxDQUFBO0lBVndDO1FBQXBDLHNCQUFTLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUErQjtJQVFwQztRQUE5QixzQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztnREFBNkI7SUFoQnpELE9BQU87UUFEWiw0QkFBZSxFQUFFO09BQ1osT0FBTyxDQWtCWjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBRW5CLENBQUM7QUE5QkQsd0NBOEJDIn0=