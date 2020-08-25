import { BDOTestFactory } from "~bdo/models/BDOTest";
import { ClientModel } from '~client/lib/ClientModel';
import { baseConstructor } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @extends ReturnType<BDOTestFactory<BDOModel>>
 */
@baseConstructor({ collectionName: "Test" })
export class Test2 extends BDOTestFactory(ClientModel) {

    constructor(_params?: ConstParams<Test2>) {
        super();
    }

    /**
     * Test
     *
     * @memberof Test
     */
    public test() {
        // Just do nothing
    }

    public ohajane() {
        return;
    }
}
