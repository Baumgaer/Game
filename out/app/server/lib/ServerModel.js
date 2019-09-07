"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorators_1 = require("~bdo/utils/decorators");
const BDOModel_1 = require("~bdo/lib/BDOModel");
let ServerModel = class ServerModel extends BDOModel_1.BDOModel {
    constructor() {
        super(...arguments);
        this.isServerModel = true;
    }
    async save(_prop) {
        return new Promise((resolve, _reject) => {
            resolve();
        });
    }
};
ServerModel.isServerModel = true;
tslib_1.__decorate([
    decorators_1.property(),
    tslib_1.__metadata("design:type", Boolean)
], ServerModel.prototype, "isServerModel", void 0);
ServerModel = tslib_1.__decorate([
    decorators_1.baseConstructor()
], ServerModel);
exports.ServerModel = ServerModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci9saWIvU2VydmVyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtFO0FBQ2xFLGdEQUE2QztBQVk3QyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsbUJBQVE7SUFEekM7O1FBbUJnQyxrQkFBYSxHQUFZLElBQUksQ0FBQztJQWdCOUQsQ0FBQztJQVBVLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBYTtRQUMzQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBRXBDLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBRUosQ0FBQTtBQXhCMEIseUJBQWEsR0FBWSxJQUFJLENBQUM7QUFRekM7SUFBWCxxQkFBUSxFQUFFOztrREFBK0M7QUFsQmpELFdBQVc7SUFEdkIsNEJBQWUsRUFBRTtHQUNMLFdBQVcsQ0FrQ3ZCO0FBbENZLGtDQUFXIn0=