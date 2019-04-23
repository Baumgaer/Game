import './../utils/requireOverride';
import { WebSocketServer } from '~server/lib/WebSocketServer';
import { ConfigManager } from '~server/lib/ConfigManager';
import { Request } from 'express';
import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';

const configManager = ConfigManager.getInstance();

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

    /**
     * @inheritdoc
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof GameServer
     */
    protected async routeCollection(): Promise<void> {
        const config = await configManager.get('paths');
        this.singleRouteCollection(resolve(rootPath, config.routes, 'GameLobby.js'));
        this.singleRouteCollection(resolve(rootPath, config.routes, 'Config.js'));
    }
}

const gameServer = new GameServer();
gameServer.start();
