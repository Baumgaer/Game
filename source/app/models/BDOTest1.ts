import { BDOTestFactory } from '~bdo/models/BDOTest';
import { baseConstructor, attribute } from "~bdo/utils/decorators";
import { Column } from "typeorm";

/**
 * Test
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOTest1
 */
export function BDOTest1Factory<TBase extends ReturnType<typeof BDOTestFactory>>(ctor: TBase) {

    /**
     * Test
     *
     * @extends TBase
     */
    @baseConstructor({ isAbstract: true, collectionName: "BDOTest1" })
    abstract class BDOTest1 extends ctor {

        /**
         * Test
         *
         * @type {string}
         * @memberof Test
         */
        @Column() @attribute({ description: "tester..." }) public title: string = 'test';

        /**
         * Test
         *
         * @returns A test string
         * @memberof Test1
         */
        public doSomething() {
            return "lol";
        }

        /**
         * Test
         *
         * @protected
         * @param _value The initialization value
         * @memberof Test1
         */
        protected onOhaInit(_value: string) {
            // console.log(value);
        }
    }
    return BDOTest1;
}
