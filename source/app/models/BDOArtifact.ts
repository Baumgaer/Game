import { baseConstructor, attribute } from '~bdo/utils/decorators';
import { BDOModel } from '~bdo/lib/BDOModel';

/**
 * The most general abstraction of most models. This should hold only attributes
 * which are available on all other models.
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOTest
 */
export function BDOArtifactFactory<TBase extends Constructor<BDOModel>>(ctor: TBase) {

    /**
     * Test
     *
     * @extends TBase
     */
    @baseConstructor({ isAbstract: true })
    abstract class BDOArtifact extends ctor {

        /**
         * A name which should follow the constraints of an operating system to
         * be able to offer integration with them
         *
         * @memberof BDOArtifact
         */
        @attribute() public name!: string;

        /**
         * Size of the content of this artifact. Maybe as file content or
         * aggregated contents of several contents.
         *
         * @memberof BDOArtifact
         */
        @attribute() public size: number = 0;

        /**
         * The date of the creation of this artifact
         *
         * @memberof BDOArtifact
         */
        @attribute() public created: number = Date.now();

        /**
         * The date of the last modification of this artifact
         *
         * @memberof BDOArtifact
         */
        @attribute() public modified: number = Date.now();

    }
    return BDOArtifact;

}
