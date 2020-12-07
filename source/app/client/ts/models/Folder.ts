
import { BDOFolderFactory } from "~bdo/models/BDOFolder";
import { Artifact } from "~client/models/Artifact";
import { baseConstructor, attribute } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @extends returnType<BDOTest1Factory<Test>>
 */
@baseConstructor()
export class Folder extends BDOFolderFactory(Artifact) {

    @attribute() public parent!: Folder;

    @attribute() public children!: Artifact[];

    @attribute() public tester!: string[];

    constructor(params?: ConstParams<Folder>) {
        super(params);
    }

}
