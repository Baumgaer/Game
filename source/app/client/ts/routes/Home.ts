import { ClientRoute } from '~client/lib/ClientRoute';
import { BDOHomeFactory } from '~bdo/routes/BDOHome';

/**
 * Test
 *
 * @export
 * @class GameLobby
 * @extends {BaseRouteFactory(RouteType)}
 */
export default class Home extends BDOHomeFactory(ClientRoute) { }
