import OpenSimplexNoise from 'open-simplex-noise';
import { merge } from 'lodash';
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
    protected grid: Array<Array<Cell>> = [];

    /**
     * The seed to generate cave values of a cell
     *
     * @protected
     * @type {OpenSimplexNoise}
     * @memberof Chunk
     */
    protected simplexCave: OpenSimplexNoise = new OpenSimplexNoise(1);

    /**
     * The seed to generate river values of a cell
     *
     * @protected
     * @type {OpenSimplexNoise}
     * @memberof Chunk
     */
    protected simplexRiver: OpenSimplexNoise = new OpenSimplexNoise(2);

    /**
     * The seed to generate temperature values of a cell
     *
     * @protected
     * @type {OpenSimplexNoise}
     * @memberof Chunk
     */
    protected simplexTemperature: OpenSimplexNoise = new OpenSimplexNoise(3);

    /**
     * The seed to generate humidity values of a cell
     *
     * @protected
     * @type {OpenSimplexNoise}
     * @memberof Chunk
     */
    protected simplexHumidity: OpenSimplexNoise = new OpenSimplexNoise(4);

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
        for (let row = 0; row < <number>this.size; row++) {
            if (!this.grid[row]) {
                this.grid.push([]);
            }
            for (let col = 0; col < <number>this.size; col++) {
                let xCoordinate = col + this.x * <number>this.size;
                let yCoordinate = row + this.y * <number>this.size;

                this.grid[row].push(
                    new Cell({
                        x: xCoordinate,
                        y: yCoordinate,
                        cave: this.simplexCave.noise2D(xCoordinate / 100, yCoordinate / 100),
                        river: this.simplexRiver.noise2D(xCoordinate / 500, yCoordinate / 500),
                        temperature: this.simplexTemperature.noise2D(xCoordinate / 2500, yCoordinate / 2500),
                        humidity: this.simplexHumidity.noise2D(xCoordinate / 2500, yCoordinate / 2500),
                        chunk: this
                    })
                );
            }
        }
    }
}
