import { ServerRoute } from '~server/lib/ServerRoute';
import { BDOApiFactory } from '~bdo/routes/BDOApi';

/**
 * Collects the requested configuration for the client
 *
 * @class Api
 * @extends ReturnType<BDOApiFactory<ServerRoute>>
 */
export default class Api extends BDOApiFactory(ServerRoute) { }
