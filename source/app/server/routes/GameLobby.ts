import { BaseRoute } from '~server/lib/BaseRoute';

/**
 * Serves the game lobby to the client
 *
 * @export
 * @class GameLobby
 * @extends {BaseRoute}
 */
export default class GameLobby extends BaseRoute {
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
     * @returns {Promise<IndexStructure>}
     * @memberof GameLobby
     */
    protected async templateParams(): Promise<IndexStructure> {
        return {
            oha: 'OOOOOHAAAAAAAA!!!'
        };
    }
}
