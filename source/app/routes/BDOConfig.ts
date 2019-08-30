import { BDORoute } from '~bdo/lib/BDORoute';

/**
 * constructs the base for the config route on server and client
 *
 * @export
 * @template TBase
 * @param {TBase} ctor
 */
export function BDOConfigFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Provides basic functionality for the special config route on server and client
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
