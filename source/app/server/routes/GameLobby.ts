import { BDOGameLobbyFactory } from '~bdo/routes/BDOGameLobby';
import { ServerRoute } from '~root/app/server/lib/ServerRoute';

/**
 * Test
 *
 * @export
 * @class GameLobby
 * @extends {BaseRouteFactory(BDOGameLobby)}
 */
export default class GameLobby extends BDOGameLobbyFactory(ServerRoute) { }
