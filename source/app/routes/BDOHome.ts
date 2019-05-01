import { BDORoute } from '~bdo/lib/BDORoute';
import { Template } from 'nunjucks';

/**
 * Serves the game lobby to the client
 *
 * @export
 * @class GameLobby
 * @extends {BaseRoute}
 */
export abstract class BDOHome extends BDORoute {

    /**
     * @inheritdoc
     *
     * @static
     * @type {string[]}
     * @memberof GameLobby
     */
    public static attachToServers: string[] = ["WebServer"];

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
    protected templateString: Template = require('~bdo/views/home.njk');

    /**
     * @inheritdoc
     *
     * @protected
     * @returns {Promise<IndexStructure>}
     * @memberof GameLobby
     */
    protected async templateParams(): Promise<IndexStructure> {
        return {
            oha: 'endlich zu Hause =)'
        };
    }
}
