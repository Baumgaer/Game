import { BDOHomeFactory } from '~bdo/routes/BDOHome';
import { ServerRoute } from '~server/lib/ServerRoute';

/**
 * Serves the "home page" of the website to the client
 *
 * @class Home
 * @extends ReturnType<BDOHomeFactory<ServerRoute>>
 */
export default class Home extends BDOHomeFactory(ServerRoute) { }
