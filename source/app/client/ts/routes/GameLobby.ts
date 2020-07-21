import { ClientRoute } from '~client/lib/ClientRoute';
import { BDOGameLobbyFactory } from '~bdo/routes/BDOGameLobby';

/**
 * Represents the game window which initializes the logic of the game itself.
 *
 * @extends ReturnType<BaseRouteFactory<RouteType>>
 */
export default class GameLobby extends BDOGameLobbyFactory(ClientRoute) {

    /**
     * @inheritdoc
     *
     * @protected
     * @returns The template params to use additionally to them from server
     * @memberof GameLobby
     */
    protected async templateParams(): Promise<IndexStructure> {
        return {
            test: 'lol'
        };
    }
}
