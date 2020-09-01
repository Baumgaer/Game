import { BDOHomeFactory } from '~bdo/routes/BDOHome';
import { ServerRoute } from '~server/lib/ServerRoute';
import template from "~server/views/HomeRoute.njk";

/**
 * Serves the "home page" of the website to the client
 *
 * @class Home
 * @extends ReturnType<BDOHomeFactory<ServerRoute>>
 */
export default class Home extends BDOHomeFactory(ServerRoute) {

    templateString = template;
}
