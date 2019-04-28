import { BaseRouteFactory } from '~client/lib/BaseRoute';
import { BDOGameLobby } from '~bdo/routes/BDOGameLobby';

/**
 * Test
 *
 * @export
 * @class GameLobby
 * @extends {BaseRouteFactory(RouteType)}
 */
export default class GameLobby extends BaseRouteFactory(BDOGameLobby) {

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
