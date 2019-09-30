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
    async save(_attr) {
        return Promise.resolve();
    }
    discardChange(_attr) {
        throw new Error("Method not implemented.");
    }
    discardChanges() {
        throw new Error("Method not implemented.");
    }
    isUnsaved(_attr) {
        throw new Error("Method not implemented.");
    }
    hasUnsavedChanges() {
        throw new Error("Method not implemented.");
    }
    getUnsavedChanges() {
        throw new Error("Method not implemented.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci9saWIvU2VydmVyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtFO0FBQ2xFLGdEQUE2QztBQVk3QyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsbUJBQVE7SUFBekM7O1FBa0JnQyxrQkFBYSxHQUFZLElBQUksQ0FBQztJQWlFOUQsQ0FBQztJQXhEVSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWlDO1FBQy9DLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFTTSxhQUFhLENBQUMsS0FBaUM7UUFDbEQsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFRTSxjQUFjO1FBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBU00sU0FBUyxDQUFDLEtBQWlDO1FBQzlDLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUU0saUJBQWlCO1FBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBUU0saUJBQWlCO1FBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBRUosQ0FBQTtBQXpFMEIseUJBQWEsR0FBWSxJQUFJLENBQUM7QUFRekM7SUFBWCxxQkFBUSxFQUFFOztrREFBK0M7QUFsQmpELFdBQVc7SUFEdkIsNEJBQWUsRUFBRTtHQUNMLFdBQVcsQ0FtRnZCO0FBbkZZLGtDQUFXIn0=