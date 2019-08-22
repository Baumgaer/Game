import { BDORoute } from '~bdo/lib/BDORoute';

/**
 * Test
 *
 * @export
 * @template TBase
 * @param {TBase} ctor
 */
export function BDOConfigFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Test
     *
     * @export
     * @abstract
     * @class BDOConfig
     * @extends {BDORoute}
     */
    abstract class BDOConfig extends ctor {
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

    return BDOConfig;
}
