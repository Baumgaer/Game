import { BDORoute, minimumAccessRights } from '~bdo/lib/BDORoute';

/**
 * constructs the base for the home route on server and client
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOTest
 */
export function BDOServiceWorkerFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Provides basic functionality for the "home page" of the website
     *
     * @extends TBase
     */
    abstract class BDOServiceWorker extends ctor {


        /**
         * @inheritdoc
         *
         * @memberof BDOServiceWorker
         */
        public routerNameSpace = '/ServiceWorker.js';

        /**
         * @inheritdoc
         *
         * @protected
         * @memberof BDOServiceWorker
         */
        protected access: minimumAccessRights = "public";
    }

    return BDOServiceWorker;
}
