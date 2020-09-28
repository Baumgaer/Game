import { install } from "source-map-support";
import { WebSocketServer } from '~server/lib/WebSocketServer';  // eslint-disable-line
import { Request } from 'express';

if (process.env.NODE_ENV === "development") install();

/**
 * This server serves a static html page to the client which initializes
 * the webGL game environment.
 *
 * @extends WebSocketServer
 */
class GameServer extends WebSocketServer {
    /**
     * @inheritdoc
     *
     * @protected
     * @param _request The request given by the http server
     * @returns true if the user is allowed to access this server and false else
     * @memberof GameServer
     */
    protected async verifyWebSocketClient(_request: Request): Promise<boolean> {
        return true;
    }
}

const gameServer = new GameServer();
gameServer.start();
