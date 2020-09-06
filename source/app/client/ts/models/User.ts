
import { BDOUserFactory } from "~bdo/models/BDOUser";
import { ClientModel } from "~client/lib/ClientModel";
import { Artifact } from "~client/models/Artifact";
import { baseConstructor, attribute } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @extends returnType<BDOTest1Factory<Test>>
 */
@baseConstructor()
export class User extends BDOUserFactory(ClientModel) {

    @attribute((_type) => [Artifact.graphQLType], { hasRelation: { oneToMany: [(_type) => Artifact.graphQLType, (artifact) => (<Artifact>artifact).creator], isRelationOwner: true } })
    public artifacts!: Artifact[];

    constructor(_params?: ConstParams<User>) {
        super();
    }

}
