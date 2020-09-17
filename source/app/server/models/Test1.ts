
import { BDOTest1Factory } from "~bdo/models/BDOTest1";
import { Test } from "~server/models/Test";
import { baseConstructor, attribute } from "~bdo/utils/decorators";

interface MyTest {
    title: number
}

/**
 * Test
 *
 * @class Test1
 * @extends ReturnType<BDOTest1Factory<Test>>
 */
@baseConstructor()
export class Test1 extends BDOTest1Factory(Test) {

    @attribute({ autoSave: 100, doNotPersist: true }) public testTesten!: MyTest;

    @attribute() public aTest!: Test1 & MyTest;

    @attribute() public aUnion!: Test | MyTest | string | number | boolean[];

    @attribute() public aString?: string = "ja Ne...";

    @attribute() public aNumber = 1;

    @attribute() public aBoolean: boolean | null = true;

    @attribute() public aDate = new Date();


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
