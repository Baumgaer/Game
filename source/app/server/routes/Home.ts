import { BDOHomeFactory } from '~bdo/routes/BDOHome';
import { ServerRoute } from '~server/lib/ServerRoute';

/**
 * Serves the "home page" of the website to the client
 *
 * @export
 * @class Home
 * @extends {BDOHomeFactory(ServerRoute)}
 */
export default class Home extends BDOHomeFactory(ServerRoute) { }
