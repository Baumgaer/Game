import { ClientRoute } from '~client/lib/ClientRoute';
import { BDOHomeFactory } from '~bdo/routes/BDOHome';

/**
 * This route represents the "home page" of the website on client side
 *
 * @extends ReturnType<BaseRouteFactory<RouteType>>
 */
export default class Home extends BDOHomeFactory(ClientRoute) { }
