"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const open_simplex_noise_1 = require("open-simplex-noise");
const util_1 = require("~bdo/utils/util");
const Cell_1 = require("./Cell");
class Chunk {
    constructor(params) {
        this.x = 0;
        this.y = 0;
        this.size = 64;
        this.grid = [];
        this.simplexCave = open_simplex_noise_1.makeNoise2D(1);
        this.simplexRiver = open_simplex_noise_1.makeNoise2D(2);
        this.simplexTemperature = open_simplex_noise_1.makeNoise2D(3);
        this.simplexHumidity = open_simplex_noise_1.makeNoise2D(4);
        util_1.merge(this, params);
        this.generateGrid();
    }
    generateGrid() {
        for (let row = 0; row < this.size; row++) {
            if (!this.grid[row]) {
                this.grid.push([]);
            }
            for (let col = 0; col < this.size; col++) {
                const xCoordinate = col + this.x * this.size;
                const yCoordinate = row + this.y * this.size;
                this.grid[row].push(new Cell_1.Cell({
                    x: xCoordinate,
                    y: yCoordinate,
                    cave: this.simplexCave(xCoordinate / 100, yCoordinate / 100),
                    river: this.simplexRiver(xCoordinate / 500, yCoordinate / 500),
                    temperature: this.simplexTemperature(xCoordinate / 2500, yCoordinate / 2500),
                    humidity: this.simplexHumidity(xCoordinate / 2500, yCoordinate / 2500),
                    chunk: this
                }));
            }
        }
    }
}
exports.Chunk = Chunk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2h1bmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zb3VyY2UvYXBwL21vZGVscy9DaHVuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFpRDtBQUNqRCwwQ0FBd0M7QUFDeEMsaUNBQThCO0FBUTlCLE1BQWEsS0FBSztJQXNFZCxZQUFZLE1BQTJCO1FBL0RoQyxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBUWQsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLFNBQUksR0FBWSxFQUFFLENBQUM7UUFTaEIsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQVNwQixnQkFBVyxHQUFHLGdDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFTN0IsaUJBQVksR0FBRyxnQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBUzlCLHVCQUFrQixHQUFHLGdDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFTcEMsb0JBQWUsR0FBRyxnQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3ZDLFlBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFRUyxZQUFZO1FBQ2xCLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBWSxJQUFJLENBQUMsSUFBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtZQUNELEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBWSxJQUFJLENBQUMsSUFBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUNoRCxNQUFNLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyRCxNQUFNLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUVyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDZixJQUFJLFdBQUksQ0FBQztvQkFDTCxDQUFDLEVBQUUsV0FBVztvQkFDZCxDQUFDLEVBQUUsV0FBVztvQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7b0JBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsV0FBVyxHQUFHLEdBQUcsQ0FBQztvQkFDOUQsV0FBVyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEdBQUcsSUFBSSxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQzVFLFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDdEUsS0FBSyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUNMLENBQUM7YUFDTDtTQUNKO0lBQ0wsQ0FBQztDQUNKO0FBeEdELHNCQXdHQyJ9