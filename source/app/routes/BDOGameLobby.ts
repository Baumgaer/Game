import { BDORoute } from '~bdo/lib/BDORoute';
import { Template } from 'nunjucks';

/**
 * Test
 *
 * @export
 * @template TBase
 * @param {TBase} ctor
 */
export function BDOGameLobbyFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Serves the game lobby to the client
     *
     * @export
     * @class GameLobby
     * @extends {BaseRoute}
     */
    abstract class BDOGameLobby extends ctor {

        /**
         * @inheritdoc
         *
         * @static
         * @type {string[]}
         * @memberof GameLobby
         */
        public static attachToServers: string[] = ["GameServer"];

        /**
         * @inheritdoc
         *
         * @memberof GameLobby
         */
        public routerNameSpace = '/';

        /**
         * @inheritdoc
         *
         * @protected
         * @memberof GameLobby
         */
        protected templateString: Template = require('~bdo/views/gameLobby.njk');

        /**
         * @inheritdoc
         *
         * @protected
         * @returns {Promise<IndexStructure>}
         * @memberof GameLobby
         */
        protected async templateParams(): Promise<IndexStructure> {
            return {
                oha: 'OOOOOHAAAAAAAA!!!'
            };
        }
    }

    return BDOGameLobby;
}
