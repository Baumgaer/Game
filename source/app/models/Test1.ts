import { Test } from './Test';
import { baseConstructor, attribute } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @export
 * @class Test1
 * @extends {Test}
 */
@baseConstructor()
export class Test1 extends Test {

    /**
     * Test
     *
     * @type {string}
     * @memberof Test1
     */
    @attribute() public oha: string = 'test';
}
