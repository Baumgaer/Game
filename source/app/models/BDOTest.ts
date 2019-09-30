import { baseConstructor, attribute, watched } from '~bdo/utils/decorators';
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
        @attribute({ autoSave: true }) public title: string = 'test';

        /**
         * Test
         *
         * @type {string[]}
         * @memberof BDOTest
         */
        @watched() @attribute((_type) => [String]) public tester: string[] = [];

        /**
         * Test
         *
         * @protected
         * @param {this["test"]} changed
         * @memberof ViewLink
         */
        protected onTestChange(changed: this["tester"]) {
            console.log("test changed", changed, this);  // tslint:disable-line
        }

        /**
         * Test
         *
         * @protected
         * @param {this["test"]} init
         * @memberof ViewLink
         */
        protected onTesterInit(init: this["tester"]) {
            console.log("tester init", init, this);  // tslint:disable-line
        }

        /**
         * Test
         *
         * @protected
         * @param {this["test"]} changed
         * @memberof ViewLink
         */
        protected onTesterChange(changed: this["tester"]) {
            console.log("tester changed", changed, this);  // tslint:disable-line
        }

        /**
         * Test
         *
         * @protected
         * @param {this["test"]} added
         * @memberof ViewLink
         */
        protected onTesterAdd(added: this["tester"]) {
            console.log("tester added", added, this);  // tslint:disable-line
        }

        /**
         * Test
         *
         * @protected
         * @param {this["test"]} removed
         * @memberof ViewLink
         */
        protected onTesterRemove(removed: this["tester"]) {
            console.log("tester removed", removed, this);  // tslint:disable-line
        }

    }
    return BDOTest;

}
