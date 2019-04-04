"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis_1 = require("./Redis");
const lodash_1 = require("lodash");
const Logger_1 = require("./Logger");
const logger = new Logger_1.Logger({
    preventConsolePrint: true
});
class ClientNotExistError extends Error {
}
exports.ClientNotExistError = ClientNotExistError;
class ClientAlreadyExistsError extends Error {
}
exports.ClientAlreadyExistsError = ClientAlreadyExistsError;
class RedisClientManager {
    constructor() {
        this.clients = new Map();
    }
    static getInstance() {
        if (!RedisClientManager.instance) {
            RedisClientManager.instance = new RedisClientManager();
        }
        return RedisClientManager.instance;
    }
    createClient(id, options, subscribe) {
        const defaults = {
            retryStrategy: this.retryStrategy.bind(this),
            reconnectOnError: this.reconnectOnError.bind(this)
        };
        options = lodash_1.merge(defaults, options);
        return new Promise((resolve, reject) => {
            if (this.clients.has(id)) {
                return reject(new ClientAlreadyExistsError(`Redis client ${id} already exists`));
            }
            const client = new Redis_1.Redis(options);
            client.id = id;
            if (subscribe) {
                client.on('message', (topic, params) => {
                    this.onClientMessage(client, topic, JSON.parse(params));
                });
            }
            client.on('error', (error) => {
                reject(this.onClientError(client, error));
            });
            client.on('reconnecting', (times) => {
                this.onClientReconnect(client, times);
            });
            client.on('connect', () => {
                this.onClientConnect(client);
            });
            client.on('ready', () => {
                this.onClientReady(client);
                resolve(client);
            });
        });
    }
    getClient(id) {
        return this.clients.get(id);
    }
    killClient(id) {
        return new Promise((resolve, reject) => {
            const client = this.getClient(id);
            if (!client) {
                return reject(new ClientNotExistError());
            }
            client.quit();
            client.on('close', () => {
                logger.info(`Redis Client "${id}" is dead`);
                if (client)
                    client.removeAllListeners();
                resolve(this.clients.delete(id));
            });
        });
    }
    killAllClients() {
        return new Promise(async (resolve) => {
            const clients = this.clients.keys();
            const promises = [];
            for (const client of clients) {
                promises.push(this.killClient(client));
            }
            await Promise.all(promises);
            resolve(true);
        });
    }
    retryStrategy(times) {
        return Math.min(times * 100, 3000);
    }
    reconnectOnError(error) {
        const targetError = 'READONLY';
        if (error.message.slice(0, targetError.length) === targetError) {
            return true;
        }
        return false;
    }
    onClientConnect(client) {
        logger.info(`Redis client ${client.id} is connected`);
    }
    onClientReconnect(client, times) {
        logger.info(`${client.id} is reconnecting in ${times}ms`);
    }
    onClientReady(client) {
        logger.info(`Redis client ${client.id} is ready`);
        this.clients.set(client.id, client);
    }
    onClientMessage(client, topic, params) {
        if (client.topics.has(topic)) {
            for (const callback of client.topics.get(topic)) {
                callback.apply(this, params);
            }
        }
        logger.info(`Redis client ${client.id} received topic ${topic} with params ${params}`);
    }
    onClientError(client, error) {
        logger.error(`RedisClientError of ${client.id}: ${error}`);
        if (client.reloadFunction)
            client.reloadFunction();
        return error;
    }
}
exports.RedisClientManager = RedisClientManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkaXNDbGllbnRNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1JlZGlzQ2xpZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE2QztBQUU3QyxtQ0FBK0I7QUFDL0IscUNBQWtDO0FBRWxDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDO0lBQ3RCLG1CQUFtQixFQUFFLElBQUk7Q0FDNUIsQ0FBQyxDQUFDO0FBU0gsTUFBYSxtQkFBb0IsU0FBUSxLQUFLO0NBQUc7QUFBakQsa0RBQWlEO0FBU2pELE1BQWEsd0JBQXlCLFNBQVEsS0FBSztDQUFHO0FBQXRELDREQUFzRDtBQVF0RCxNQUFhLGtCQUFrQjtJQWtDM0I7UUFoQlEsWUFBTyxHQUF1QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBZ0J6QixDQUFDO0lBUGpCLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsa0JBQWtCLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztTQUMxRDtRQUNELE9BQU8sa0JBQWtCLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFhTSxZQUFZLENBQUMsRUFBVSxFQUFFLE9BQXFCLEVBQUUsU0FBbUI7UUFDdEUsTUFBTSxRQUFRLEdBQUc7WUFDYixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3JELENBQUM7UUFDRixPQUFPLEdBQUcsY0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksT0FBTyxDQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzFDLElBQUksSUFB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