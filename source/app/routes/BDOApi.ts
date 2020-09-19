import { BDORoute } from '~bdo/lib/BDORoute';

/**
 * constructs the base for the api route on server and client
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOConfig
 */
export function BDOApiFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Provides the possibility to send, get, update or delete objects in
     * database depending on the className and the ID of the object. If there
     * is no ID provided, a new object will be created when method post is used.
     * When an ID is provided, all given methods will be executed on this specific
     * object.
     *
     * @abstract
     * @extends TBase
     */
    abstract class BDOApi extends ctor {
        /**
         * @inheritdoc
         *
         * @memberof BDOApi
         */
        public routes: string[] = ["/:className", "/:className/:id"];

        /**
         * @inheritdoc
         *
         * @memberof BDOApi
         */
        protected jsonOnly = true;
    }

    return BDOApi;
}
