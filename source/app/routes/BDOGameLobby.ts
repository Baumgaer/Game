import { BDORoute } from '~bdo/lib/BDORoute';
import { Template } from 'nunjucks';

/**
 * Serves the game lobby to the client
 *
 * @export
 * @class GameLobby
 * @extends {BaseRoute}
 */
export abstract class BDOGameLobby extends BDORoute {

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
