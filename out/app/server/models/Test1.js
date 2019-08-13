"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BDOTest1_1 = require("~bdo/models/BDOTest1");
const Test_1 = require("~server/models/Test");
const decorators_1 = require("~bdo/utils/decorators");
let Test1 = class Test1 extends BDOTest1_1.BDOTest1Factory(Test_1.Test) {
    constructor(params) {
        super(params);
    }
    wadde() {
        this.bindings.get("title");
    }
};
Test1 = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Test1);
exports.Test1 = Test1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci9tb2RlbHMvVGVzdDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbURBQXVEO0FBQ3ZELDhDQUEyQztBQUMzQyxzREFBd0Q7QUFVeEQsSUFBYSxLQUFLLEdBQWxCLE1BQWEsS0FBTSxTQUFRLDBCQUFlLENBQUMsV0FBSSxDQUFDO0lBRTVDLFlBQVksTUFBMkI7UUFDbkMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFPTSxLQUFLO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNKLENBQUE7QUFkWSxLQUFLO0lBRGpCLDRCQUFlLEVBQUU7O0dBQ0wsS0FBSyxDQWNqQjtBQWRZLHNCQUFLIn0=