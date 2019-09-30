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
    discard(_attr) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci9saWIvU2VydmVyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtFO0FBQ2xFLGdEQUE2QztBQVk3QyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsbUJBQVE7SUFBekM7O1FBa0JnQyxrQkFBYSxHQUFZLElBQUksQ0FBQztJQXVEOUQsQ0FBQztJQTlDVSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQWlDO1FBQy9DLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFTTSxPQUFPLENBQUMsS0FBaUM7UUFDNUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFTTSxTQUFTLENBQUMsS0FBaUM7UUFDOUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFRTSxpQkFBaUI7UUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFRTSxpQkFBaUI7UUFDcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FFSixDQUFBO0FBL0QwQix5QkFBYSxHQUFZLElBQUksQ0FBQztBQVF6QztJQUFYLHFCQUFRLEVBQUU7O2tEQUErQztBQWxCakQsV0FBVztJQUR2Qiw0QkFBZSxFQUFFO0dBQ0wsV0FBVyxDQXlFdkI7QUF6RVksa0NBQVcifQ==