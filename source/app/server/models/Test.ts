import { BDOTestFactory } from "~bdo/models/BDOTest";
import { BDOModel } from '~bdo/lib/BDOModel';
import { baseConstructor } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @export
 * @class Test
 * @extends {BDOTestFactory(BDOModel)}
 */
@baseConstructor()
export class Test extends BDOTestFactory(BDOModel) {

    constructor(_params?: ConstParams<Test>) {
        super();
    }

    /**
     * Test
     *
     * @memberof Test
     */
    public test() {

    }
}
