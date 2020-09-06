import { BDOArtifactFactory } from '~bdo/models/BDOArtifact';
import { baseConstructor } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOTest1
 */
export function BDOFolderFactory<TBase extends ReturnType<typeof BDOArtifactFactory>>(ctor: TBase) {

    /**
     * Test
     *
     * @extends TBase
     */
    @baseConstructor({ isAbstract: true })
    abstract class BDOFolder extends ctor { }
    return BDOFolder;
}
