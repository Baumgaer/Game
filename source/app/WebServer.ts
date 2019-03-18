import { BaseServer } from './server/lib/BaseServer';
import { Request, Response } from 'express';

/**
 * This will be the server for the website
 *
 * @class WebServer
 * @extends {BaseServer}
 */
class WebServer extends BaseServer {
    /**
     * Test
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof GameServer
     */
    protected async routeCollection(): Promise<void> {
        this.app.get('/', this.serveIndex.bind(this));
    }

    /**
     * Serves the static html page
     *
     * @private
     * @param {Request} request
     * @param {Response} reply
     * @memberof GameServer
     */
    private async serveIndex(_request: Request, reply: Response): Promise<void> {
        if (_request.session) _request.session.name = 'huch?';
        reply.render('index', {
            hello: 'world'
        });
    }
}

let webServer = new WebServer();
webServer.start();
