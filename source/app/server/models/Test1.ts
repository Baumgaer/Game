
import { BDOTest1Factory } from "~bdo/models/BDOTest1";
import { Test } from "~server/models/Test";
import { baseConstructor } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @class Test1
 * @extends ReturnType<BDOTest1Factory<Test>>
 */
@baseConstructor()
export class Test1 extends BDOTest1Factory(Test) {

    constructor(params?: ConstParams<Test1>) {
        super(params);
    }

    /**
     * Test
     *
     * @memberof Test1
     */
    public wadde(): void {
        this.bindings.get("title");
    }
}
