import { BDOResolver } from '~bdo/lib/BDOResolver';

/**
 * Test
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOTest
 */
export function BDOTestResolverFactory<TBase extends Constructor<BDOResolver>>(ctor: TBase) {

    /**
     * Test
     *
     * @extends TBase
     */
    abstract class BDOTest extends ctor { }
    return BDOTest;

}
