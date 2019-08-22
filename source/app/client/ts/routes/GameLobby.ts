import { ClientRoute } from '~client/lib/ClientRoute';
import { BDOGameLobbyFactory } from '~bdo/routes/BDOGameLobby';

/**
 * Test
 *
 * @export
 * @class GameLobby
 * @extends {BaseRouteFactory(RouteType)}
 */
export default class GameLobby extends BDOGameLobbyFactory(ClientRoute) {

    /**
     * @inheritdoc
     *
     * @protected
     * @param {IndexStructure} params
     * @returns {Promise<IndexStructure>}
     * @memberof GameLobby
     */
    protected async templateParams(): Promise<IndexStructure> {
        return {
            test: 'lol'
        };
    }
}
