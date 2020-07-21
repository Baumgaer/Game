import { ClientRoute } from '~client/lib/ClientRoute';
import { BDOConfigFactory } from '~bdo/routes/BDOConfig';

/**
 * This is a special route for getting and setting the config.
 * It is not possible to get the config via graphQL api because is is too
 * dynamic so you cant write a true type for it.
 *
 * @extends ReturnType<BaseRouteFactory<RouteType>>
 */
export default class Config extends BDOConfigFactory(ClientRoute) { }
