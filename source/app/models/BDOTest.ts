import { baseConstructor, attribute } from '~bdo/utils/decorators';
import { BDOModel } from '~bdo/lib/BDOModel';

/**
 * Test
 *
 * @export
 * @param {*} [ctor=BDOModel]
 * @returns
 */
export function BDOTestFactory<TBase extends Constructor<BDOModel>>(ctor: TBase) {

    /**
     * Test
     *
     * @export
     * @class Test
     */
    @baseConstructor()
    class BDOTest extends ctor {

        /**
         * Test
         *
         * @type {string}
         * @memberof Test
         */
        @attribute({ storeTemporary: 5000 }) public title: string = 'test';

        /**
         * Test
         *
         * @type {string}
         * @memberof Test
         */
        @attribute({ nullable: true }) public description?: string;

    }
    return BDOTest;

}
