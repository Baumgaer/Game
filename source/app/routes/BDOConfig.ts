import { BDORoute } from '~bdo/lib/BDORoute';

/**
 * constructs the base for the config route on server and client
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOConfig
 */
export function BDOConfigFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Provides basic functionality for the special config route on server and client
     *
     * @abstract
     * @extends TBase
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
