import { BDOTestFactory } from '~bdo/models/BDOTest';
import { baseConstructor, property, watched } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @export
 * @param {*} [ctor=BDOTestFactory()]
 * @returns
 */
export function BDOTest1Factory<TBase extends ReturnType<typeof BDOTestFactory>>(ctor: TBase) {

    /**
     * Test
     *
     * @export
     * @class Test1
     * @extends {Test}
     */
    @baseConstructor({ isAbstract: true })
    abstract class BDOTest1 extends ctor {

        /**
         * Test
         *
         * @type {string}
         * @memberof Test1
         */
        @watched() @property({ saveInLocalStorage: true }) public oha: string = 'test';

        /**
         * Test
         *
         * @returns
         * @memberof Test1
         */
        public doSomething() {
            return "lol";
        }

        /**
         * Test
         *
         * @protected
         * @param {string} value
         * @memberof Test1
         */
        protected onOhaInit(_value: string) {
            // console.log(value);
        }
    }
    return BDOTest1;
}
