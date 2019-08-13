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
        decorators_1.watched(), decorators_1.property({ saveInLocalStorage: true }),
        tslib_1.__metadata("design:type", String)
    ], BDOTest1.prototype, "oha", void 0);
    BDOTest1 = tslib_1.__decorate([
        decorators_1.baseConstructor()
    ], BDOTest1);
    return BDOTest1;
}
exports.BDOTest1Factory = BDOTest1Factory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL21vZGVscy9CRE9UZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzREFBMkU7QUFTM0UsU0FBZ0IsZUFBZSxDQUFrRCxJQUFXO0lBVXhGLElBQU0sUUFBUSxHQUFkLE1BQU0sUUFBUyxTQUFRLElBQUk7UUFEM0I7O1lBUzhELFFBQUcsR0FBVyxNQUFNLENBQUM7UUFzQm5GLENBQUM7UUFkVSxXQUFXO1lBQ2QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQVNTLFNBQVMsQ0FBQyxNQUFjO1FBRWxDLENBQUM7S0FDSixDQUFBO0lBdEJzRDtRQUFsRCxvQkFBTyxFQUFFLEVBQUUscUJBQVEsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FBNkI7SUFSN0UsUUFBUTtRQURiLDRCQUFlLEVBQUU7T0FDWixRQUFRLENBOEJiO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDcEIsQ0FBQztBQTFDRCwwQ0EwQ0MifQ==