
import { BDOTest1Factory } from "~bdo/models/BDOTest1";
import { Test } from "~client/models/Test";
import { baseConstructor, attribute } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @extends returnType<BDOTest1Factory<Test>>
 */
@baseConstructor({ collectionName: "Test1" })
export class Test1 extends BDOTest1Factory(Test) {

    @attribute(() => [Test]) public testTesten: Test[] = [new Test()];

    constructor(params?: ConstParams<Test1>) {
        super(params);
    }

    /**
     * Test
     *
     * @returns The unsaved changes of this parent model
     * @memberof Test1
     */
    public async wadde(): Promise<IndexStructure | undefined> {
        const test = await Test1.getInstanceByID(this.id);
        if (test) return test.getUnsavedChanges();
        return;
    }
}
