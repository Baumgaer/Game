// import { makeNoise2D } from 'open-simplex-noise';
import { merge } from '~bdo/utils/util';
import { Cell } from './Cell';

/**
 * Test
 *
 * @export
 * @class Chunk
 */
export class Chunk {
    /**
     * The absolute x coordinate
     *
     * @type {number}
     * @memberof Chunk
     */
    public x: number = 0;

    /**
     * The absolute y coordinate
     *
     * @type {number}
     * @memberof Chunk
     */
    public y: number = 0;

    /**
     * The square size
     *
     * @type {number}
     * @memberof Chunk
     */
    public size?: number = 64;

    /**
     * The cell collection based on the square size
     *
     * @protected
     * @type {Array<any>}
     * @memberof Chunk
     */
    protected grid: Cell[][] = [];

    /**
     * The seed to generate cave values of a cell
     *
     * @protected
     * @type {OpenSimplexNoise}
     * @memberof Chunk
     */
    protected simplexCave = null; // makeNoise2D(1);

    /**
     * The seed to generate river values of a cell
     *
     * @protected
     * @type {OpenSimplexNoise}
     * @memberof Chunk
     */
    protected simplexRiver = null; // makeNoise2D(2);

    /**
     * The seed to generate temperature values of a cell
     *
     * @protected
     * @type {OpenSimplexNoise}
     * @memberof Chunk
     */
    protected simplexTemperature = null; // makeNoise2D(3);

    /**
     * The seed to generate humidity values of a cell
     *
     * @protected
     * @type {OpenSimplexNoise}
     * @memberof Chunk
     */
    protected simplexHumidity = null; // makeNoise2D(4);

    constructor(params?: ConstParams<Chunk>) {
        merge(this, params);
        this.generateGrid();
    }

    /**
     * Initializes a new grid based on the chunks coordinates
     *
     * @protected
     * @memberof Chunk
     */
    protected generateGrid() {
        for (let row = 0; row < (<number>this.size); row++) {
            if (!this.grid[row]) {
                this.grid.push([]);
            }
            for (let col = 0; col < (<number>this.size); col++) {
                // const xCoordinate = col + this.x * <number>this.size;
                // const yCoordinate = row + this.y * <number>this.size;

                // this.grid[row].push(
                //     new Cell({
                //         x: xCoordinate,
                //         y: yCoordinate,
                //         cave: this.simplexCave(xCoordinate / 100, yCoordinate / 100),
                //         river: this.simplexRiver(xCoordinate / 500, yCoordinate / 500),
                //         temperature: this.simplexTemperature(xCoordinate / 2500, yCoordinate / 2500),
                //         humidity: this.simplexHumidity(xCoordinate / 2500, yCoordinate / 2500),
                //         chunk: this
                //     })
                // );
            }
        }
    }
}
