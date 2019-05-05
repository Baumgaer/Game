"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Chunk_1 = require("./Chunk");
const decorators_1 = require("~bdo/utils/decorators");
let Cell = class Cell {
    constructor(_params) {
        this.x = 0;
        this.y = 0;
        this.cave = 0;
        this.river = 0;
        this.humidity = 0;
        this.temperature = 0;
        this.chunk = new Chunk_1.Chunk();
    }
};
Cell = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cell);
exports.Cell = Cell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbW9kZWxzL0NlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWdDO0FBQ2hDLHNEQUF3RDtBQVN4RCxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFJO0lBeURiLFlBQVksT0FBMkI7UUFsRGhDLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFRZCxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBUWQsU0FBSSxHQUFXLENBQUMsQ0FBQztRQVFqQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBUWxCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFRckIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFReEIsVUFBSyxHQUFVLElBQUksYUFBSyxFQUFFLENBQUM7SUFFUyxDQUFDO0NBQy9DLENBQUE7QUExRFksSUFBSTtJQURoQiw0QkFBZSxFQUFFOztHQUNMLElBQUksQ0EwRGhCO0FBMURZLG9CQUFJIn0=