import { ClientRoute } from '~client/lib/ClientRoute';
import { BDOConfigFactory } from '~bdo/routes/BDOConfig';

/**
 * Test
 *
 * @export
 * @class GameLobby
 * @extends {BaseRouteFactory(RouteType)}
 */
export default class Config extends BDOConfigFactory(ClientRoute) { }
