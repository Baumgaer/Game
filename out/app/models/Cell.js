"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chunk_1 = require("./Chunk");
const lodash_1 = require("lodash");
class Cell {
    constructor(params) {
        this.x = 0;
        this.y = 0;
        this.cave = 0;
        this.river = 0;
        this.humidity = 0;
        this.temperature = 0;
        this.chunk = new Chunk_1.Chunk();
        lodash_1.merge(this, params);
    }
}
exports.Cell = Cell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9hcHAvbW9kZWxzL0NlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBZ0M7QUFDaEMsbUNBQStCO0FBUS9CLE1BQWEsSUFBSTtJQXlEYixZQUFZLE1BQTBCO1FBbEQvQixNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBUWQsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLFNBQUksR0FBVyxDQUFDLENBQUM7UUFRakIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQVFsQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBUXJCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBUXhCLFVBQUssR0FBVSxJQUFJLGFBQUssRUFBRSxDQUFDO1FBRzlCLGNBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBNURELG9CQTREQyJ9