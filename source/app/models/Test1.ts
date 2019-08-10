import { Test } from './Test';
import { baseConstructor, property } from "~bdo/utils/decorators";

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
    @property({ saveInLocalStorage: true, storeTemporary: 10000 }) public oha: string = 'test';

    constructor(_params?: ConstParams<Test1>) {
        super();
    }

    /**
     * Test
     *
     * @returns
     * @memberof Test1
     */
    public doSomething() {
        return "lol";
    }
}
