import { baseConstructor, attribute, property } from '~bdo/utils/decorators';
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
    @baseConstructor({ isAbstract: true, collectionName: "BDOTest" })
    abstract class BDOTest extends ctor {

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

        /**
         * Test
         *
         * @type {Object}
         * @memberof BDOTest
         */
        @property({ nullable: true }) public testObj?: Object = {};

    }
    return BDOTest;

}
