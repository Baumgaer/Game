import { baseConstructor, attribute } from '~bdo/utils/decorators';
import { BDOModel } from '~bdo/lib/BDOModel';

/**
 * Test
 *
 * @export
 * @class Test
 */
@baseConstructor()
export class Test extends BDOModel {

    /**
     * Test
     *
     * @type {string}
     * @memberof Test
     */
    @attribute() public title: string = 'test';

    /**
     * Test
     *
     * @type {string}
     * @memberof Test
     */
    @attribute({ nullable: true }) public description?: string;
}
