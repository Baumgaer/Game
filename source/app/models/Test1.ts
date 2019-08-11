import { Test } from './Test';
import { baseConstructor, property, watched } from "~bdo/utils/decorators";

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
    @watched() @property({ saveInLocalStorage: true }) public oha: string = 'test';

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
