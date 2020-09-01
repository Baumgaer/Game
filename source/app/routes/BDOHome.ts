import { BDORoute } from '~bdo/lib/BDORoute';

/**
 * constructs the base for the home route on server and client
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOTest
 */
export function BDOHomeFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Provides basic functionality for the "home page" of the website
     *
     * @extends TBase
     */
    abstract class BDOHome extends ctor {

        /**
         * @inheritdoc
         *
         * @static
         * @type {string[]}
         * @memberof BDOHome
         */
        public static attachToServers: string[] = ["WebServer"];

        /**
         * @inheritdoc
         *
         * @memberof BDOHome
         */
        public routerNameSpace = '/';

        /**
         * @inheritdoc
         *
         * @protected
         * @returns Additional template params for server and client
         * @memberof BDOHome
         */
        protected async templateParams(): Promise<IndexStructure> {
            return {
                title: 'endlich zu Hause =)'
            };
        }
    }

    return BDOHome;
}
