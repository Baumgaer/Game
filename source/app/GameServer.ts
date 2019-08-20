import './../utils/requireOverride';
import { install } from "source-map-support";
import { WebSocketServer } from '~server/lib/WebSocketServer';
import { Request } from 'express';

if (process.env.NODE_ENV === "development") install();

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
