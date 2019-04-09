import { WebSocketServer } from './server/lib/WebSocketServer';
import { Request, Response } from 'express';

/**
 * This server serves a static html page to the client which initializes
 * the webGL game environment.
 *
 * @class GameServer
 * @extends {BaseServer}
 */
class GameServer extends WebSocketServer {
    /**
     * Test
     *
     * @protected
     * @param {Request} request
     * @returns {Promise<boolean>}
     * @memberof GameServer
     */
    protected async verifyWebSocketClient(_request: Request): Promise<boolean> {
        return true;
    }

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
        reply.render('gameLobby', {
            hello: 'world'
        });
    }
}

const gameServer = new GameServer();
gameServer.start();
