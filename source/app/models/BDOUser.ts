import { BDOModel } from '~bdo/lib/BDOModel';
import { attribute, baseConstructor } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOTest1
 */
export function BDOUserFactory<TBase extends Constructor<BDOModel>>(ctor: TBase) {

    /**
     * Test
     *
     * @extends TBase
     */
    @baseConstructor({ isAbstract: true })
    abstract class BDOUser extends ctor {

        @attribute() public password!: string;

        @attribute() public eMail!: string;

        @attribute() public firstName?: string;

        @attribute() public lastName?: string;

        @attribute() public otherNames: string[] = [];
    }
    return BDOUser;
}
