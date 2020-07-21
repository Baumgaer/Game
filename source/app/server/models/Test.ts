import { BDOTestFactory } from "~bdo/models/BDOTest";
import { ServerModel } from '~server/lib/ServerModel';
import { baseConstructor } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @class Test
 * @extends ReturnType<BDOTestFactory<ServerModel>>
 */
@baseConstructor()
export class Test extends BDOTestFactory(ServerModel) {

    constructor(_params?: ConstParams<Test>) {
        super();
    }

    /**
     * Test
     *
     * @memberof Test
     */
    public test(): void {
        return;
    }
}
