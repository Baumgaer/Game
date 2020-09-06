
import { BDOFolderFactory } from "~bdo/models/BDOFolder";
import { Artifact } from "~client/models/Artifact";
import { baseConstructor, attribute } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @extends returnType<BDOTest1Factory<Test>>
 */
@baseConstructor({ treeType: "nested-set" })
export class Folder extends BDOFolderFactory(Artifact) {

    @attribute((_type) => Folder.graphQLType, { isTreeParent: true }) public parent!: Folder;

    @attribute(() => [Artifact.graphQLType], { isTreeChildArray: true }) public children!: Artifact[];

    constructor(params?: ConstParams<Folder>) {
        super(params);
    }

}
