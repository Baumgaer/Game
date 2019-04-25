import { BDORoute } from '~bdo/lib/BDORoute';

/**
 * Test
 *
 * @export
 * @abstract
 * @class BDOConfig
 * @extends {BDORoute}
 */
export abstract class BDOConfig extends BDORoute {
    /**
     * @inheritdoc
     *
     * @type {string[]}
     * @memberof Config
     */
    public routes: string[] = ["/:name"];

    /**
     * @inheritdoc
     *
     * @memberof Config
     */
    protected jsonOnly = true;
}
