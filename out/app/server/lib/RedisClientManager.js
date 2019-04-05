"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis_1 = require("./Redis");
const IORedis = require("ioredis");
const lodash_1 = require("lodash");
const Logger_1 = require("./Logger");
const ConfigManager_1 = require("./ConfigManager");
const configManager = ConfigManager_1.ConfigManager.getInstance();
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
        return this.clientCreation(id, options, subscribe || false, false);
    }
    createThirdPartyClient(id, options) {
        return this.clientCreation(id, options, false, true);
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
    async clientCreation(id, options, subscribe, thirdParty) {
        const config = await Promise.all([configManager.get('ports'), configManager.get('databases')]);
        const defaultClientSettings = {
            retryStrategy: this.retryStrategy.bind(this),
            reconnectOnError: this.reconnectOnError.bind(this),
            host: 'localhost',
            port: config[0].redis,
            db: config[1].redis.default
        };
        options = lodash_1.merge(defaultClientSettings, options);
        return new Promise((resolve, reject) => {
            let client;
            if (thirdParty) {
                client = new IORedis(options);
            }
            else {
                client = new Redis_1.Redis(options);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkaXNDbGllbnRNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1JlZGlzQ2xpZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE2QztBQUM3QyxtQ0FBbUM7QUFDbkMsbUNBQStCO0FBQy9CLHFDQUFrQztBQUNsQyxtREFBZ0Q7QUFFaEQsTUFBTSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztJQUN0QixtQkFBbUIsRUFBRSxJQUFJO0NBQzVCLENBQUMsQ0FBQztBQVNILE1BQWEsbUJBQW9CLFNBQVEsS0FBSztDQUFHO0FBQWpELGtEQUFpRDtBQVNqRCxNQUFhLHdCQUF5QixTQUFRLEtBQUs7Q0FBRztBQUF0RCw0REFBc0Q7QUFRdEQsTUFBYSxrQkFBa0I7SUFrQzNCO1FBaEJRLFlBQU8sR0FBdUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWdCekIsQ0FBQztJQVBqQixNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO1lBQzlCLGtCQUFrQixDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDMUQ7UUFDRCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBYU0sWUFBWSxDQUFDLEVBQVUsRUFBRSxPQUE2QixFQUFFLFNBQW1CO1FBQzlFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsSUFBSSxLQUFLLEVBQUUsS0FBSyxDQUFtQixDQUFDO0lBQ3pGLENBQUM7SUFVTSxzQkFBc0IsQ0FBQyxFQUFVLEVBQUUsT0FBNkI7UUFDbkUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElB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