import './../utils/requireOverride';
import { WebSocketServer } from '~server/lib/WebSocketServer';
import { Request } from 'express';

/**
 * This server serves a static html page to the client which initializes
 * the webGL game environment.
 *
 * @class GameServer
 * @extends {BaseServer}
 */
class GameServer extends WebSocketServer {
    /**
     * @inheritdoc
     *
     * @protected
     * @param {Request} request
     * @returns {Promise<boolean>}
     * @memberof GameServer
     */
    protected async verifyWebSocketClient(_request: Request): Promise<boolean> {
        return true;
    }
}

const gameServer = new GameServer();
gameServer.start();
