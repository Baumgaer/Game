import { BDOTestFactory } from "~bdo/models/BDOTest";
import { ClientModel } from '~client/lib/ClientModel';
import { baseConstructor } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @export
 * @class Test
 * @extends {BDOTestFactory(BDOModel)}
 */
@baseConstructor({ collectionName: "Test" })
export class Test extends BDOTestFactory(ClientModel) {

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
