"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorators_1 = require("~bdo/utils/decorators");
function BDOTest1Factory(ctor) {
    let BDOTest1 = class BDOTest1 extends ctor {
        constructor() {
            super(...arguments);
            this.oha = 'test';
        }
        doSomething() {
            return "lol";
        }
        onOhaInit(_value) {
        }
    };
    tslib_1.__decorate([
        decorators_1.property({ saveInLocalStorage: true }),
        tslib_1.__metadata("design:type", String)
    ], BDOTest1.prototype, "oha", void 0);
    BDOTest1 = tslib_1.__decorate([
        decorators_1.baseConstructor({ isAbstract: true, collectionName: "BDOTest1" })
    ], BDOTest1);
    return BDOTest1;
}
exports.BDOTest1Factory = BDOTest1Factory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzREFBa0U7QUFTbEUsU0FBZ0IsZUFBZSxDQUFrRCxJQUFXO0lBVXhGLElBQWUsUUFBUSxHQUF2QixNQUFlLFFBQVMsU0FBUSxJQUFJO1FBQXBDOztZQVFtRCxRQUFHLEdBQVcsTUFBTSxDQUFDO1FBc0J4RSxDQUFDO1FBZFUsV0FBVztZQUNkLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFTUyxTQUFTLENBQUMsTUFBYztRQUVsQyxDQUFDO0tBQ0osQ0FBQTtJQXRCMkM7UUFBdkMscUJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FBNkI7SUFSekQsUUFBUTtRQUR0Qiw0QkFBZSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLENBQUM7T0FDbkQsUUFBUSxDQThCdEI7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBMUNELDBDQTBDQyJ9