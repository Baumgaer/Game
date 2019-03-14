import { BaseServer } from './server/lib/BaseServer';
import { FastifyRequest, FastifyReply } from 'fastify';
import { IncomingMessage, OutgoingMessage } from 'http';

/**
 * This server serves a static html page to the client which initializes
 * the webGL game environment.
 *
 * @class GameServer
 * @extends {BaseServer}
 */
class GameServer extends BaseServer {
    /**
     * Test
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof GameServer
     */
    protected async routeCollection(): Promise<void> {
        this.server.route({
            method: 'GET',
            url: '/',
            handler: this.serveIndex.bind(this)
        });
    }

    /**
     * Serves the static html page
     *
     * @private
     * @param {FastifyRequest<IncomingMessage>} request
     * @param {FastifyReply<OutgoingMessage>} reply
     * @memberof GameServer
     */
    private async serveIndex(
        _request: FastifyRequest<IncomingMessage>,
        reply: FastifyReply<OutgoingMessage>
    ): Promise<void> {
        reply.view('index', {
            hello: 'world'
        });
    }
}

let gameServer = new GameServer();
gameServer.start();
