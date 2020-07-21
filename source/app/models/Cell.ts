import { Chunk } from './Chunk';
import { baseConstructor } from '~bdo/utils/decorators';

/**
 * Test
 */
@baseConstructor()
export class Cell {
    /**
     * The absolute x coordinate of the cell
     *
     * @memberof Cell
     */
    public x: number = 0;

    /**
     * The absolute y coordinate of the cell
     *
     * @memberof Cell
     */
    public y: number = 0;

    /**
     * The value used to determine wether this cell is a part of a cave
     *
     * @memberof Cell
     */
    public cave: number = 0;

    /**
     * The value used to determine wether the cell is a part of a river
     *
     * @memberof Cell
     */
    public river: number = 0;

    /**
     * The value to determine wether the cell is part of a wet or dry biome
     *
     * @memberof Cell
     */
    public humidity: number = 0;

    /**
     * The value to determine wether the cell is part of a hot or cold biome
     *
     * @memberof Cell
     */
    public temperature: number = 0;

    /**
     * The parent chunk for access to its functions
     *
     * @memberof Cell
     */
    public chunk: Chunk = new Chunk();

    constructor(_params?: ConstParams<Cell>) {
        // Nothing to do her
    }
}
