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
    @baseConstructor({ isAbstract: true, collectionName: "BDOTest" })
    abstract class BDOTest extends ctor {

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
         * @type {string[]}
         * @memberof BDOTest
         */
        @attribute((_type) => [String]) public tester: string[] = [];

    }
    return BDOTest;

}
