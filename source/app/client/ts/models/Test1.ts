
import { BDOTest1Factory } from "~bdo/models/BDOTest1";
import { Test } from "~client/models/Test";
import { baseConstructor, attribute, property, watched } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @export
 * @class Test1
 * @extends {BDOTest1Factory()}
 */
@baseConstructor({ collectionName: "Test1" })
export class Test1 extends BDOTest1Factory(Test) {

    /**
     * test
     *
     * @type {string}
     * @memberof Test1
     */
    @attribute({ autoSave: 3000 }) public testSave: string = "123";

    /**
     * Test
     *
     * @type {string[]}
     * @memberof Test1
     */
    @watched({ onChange: "onTestArrayAdd" }) @property() public testArray: string[] = [];

    constructor(params?: ConstParams<Test1>) {
        super(params);
    }

    /**
     * test
     *
     * @memberof Test1
     */
    public onTestArrayAdd() {
        console.log("juhuuu"); // tslint:disable-line
    }

    /**
     * Test
     *
     * @memberof Test1
     */
    public wadde() {
        this.bindings.get("title");
    }
}
