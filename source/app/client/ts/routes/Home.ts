import { ClientRoute } from '~client/lib/ClientRoute';
import { BDOHomeFactory } from '~bdo/routes/BDOHome';

/**
 * This route represents the "home page" of the website on client side
 *
 * @export
 * @class GameLobby
 * @extends {BaseRouteFactory(RouteType)}
 */
export default class Home extends BDOHomeFactory(ClientRoute) { }
