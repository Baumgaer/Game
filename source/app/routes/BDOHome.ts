import { BDORoute } from '~bdo/lib/BDORoute';
import { Template } from 'nunjucks';

/**
 * Test
 *
 * @export
 * @template TBase
 * @param {TBase} ctor
 */
export function BDOHomeFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Serves the game lobby to the client
     *
     * @export
     * @class GameLobby
     * @extends {BaseRoute}
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
         * @memberof BDOHome
         */
        protected templateString: Template = require('~bdo/views/home.njk');

        /**
         * @inheritdoc
         *
         * @protected
         * @returns {Promise<IndexStructure>}
         * @memberof BDOHome
         */
        protected async templateParams(): Promise<IndexStructure> {
            return {
                oha: 'endlich zu Hause =)'
            };
        }
    }

    return BDOHome;
}
