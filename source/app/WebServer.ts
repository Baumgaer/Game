import './../utils/requireOverride';
import { BaseServer } from '~server/lib/BaseServer';
import { Request, Response } from 'express';

/**
 * This will be the server for the website
 *
 * @class WebServer
 * @extends {BaseServer}
 */
class WebServer extends BaseServer { }

const webServer = new WebServer();
webServer.start();
