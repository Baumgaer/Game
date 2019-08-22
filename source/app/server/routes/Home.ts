import { BDOHomeFactory } from '~bdo/routes/BDOHome';
import { ServerRoute } from '~root/app/server/lib/ServerRoute';

/**
 * Test
 *
 * @export
 * @class GameLobby
 * @extends {BaseRouteFactory(BDOGameLobby)}
 */
export default class Home extends BDOHomeFactory(ServerRoute) { }
