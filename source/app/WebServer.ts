import { install } from "source-map-support";
import { BaseServer } from '~server/lib/BaseServer';  // eslint-disable-line

if (process.env.NODE_ENV === "development") install();

/**
 * This will be the server for the website
 *
 * @extends BaseServer
 */
class WebServer extends BaseServer { }

const webServer = new WebServer();
webServer.start();
