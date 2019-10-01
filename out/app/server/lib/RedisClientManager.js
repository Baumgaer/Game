"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Redis_1 = require("~server/lib/Redis");
const ioredis_1 = tslib_1.__importDefault(require("ioredis"));
const util_1 = require("~bdo/utils/util");
const Logger_1 = require("~server/lib/Logger");
const ConfigManager_1 = require("~server/lib/ConfigManager");
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
    createClient(id, options = {}, subscribe = false) {
        return this.clientCreation(id, options, subscribe, false);
    }
    createThirdPartyClient(id, options = {}) {
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
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            db: config[1].redis.default
        };
        options = util_1.merge(defaultClientSettings, options);
        return new Promise((resolve, reject) => {
            let client;
            if (thirdParty) {
                client = new ioredis_1.default(options);
            }
            else
                client = new Redis_1.Redis(options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkaXNDbGllbnRNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1JlZGlzQ2xpZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBdUQ7QUFDdkQsOERBQThCO0FBQzlCLDBDQUF3QztBQUN4QywrQ0FBNEM7QUFDNUMsNkRBQTBEO0FBRTFELE1BQU0sYUFBYSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUM7SUFDdEIsbUJBQW1CLEVBQUUsSUFBSTtDQUM1QixDQUFDLENBQUM7QUFTSCxNQUFhLG1CQUFvQixTQUFRLEtBQUs7Q0FBSTtBQUFsRCxrREFBa0Q7QUFTbEQsTUFBYSx3QkFBeUIsU0FBUSxLQUFLO0NBQUk7QUFBdkQsNERBQXVEO0FBUXZELE1BQWEsa0JBQWtCO0lBa0MzQjtRQWhCUSxZQUFPLEdBQXVCLElBQUksR0FBRyxFQUFFLENBQUM7SUFnQnhCLENBQUM7SUFQbEIsTUFBTSxDQUFDLFdBQVc7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtZQUM5QixrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQWFNLFlBQVksQ0FBQyxFQUFVLEVBQUUsVUFBZ0MsRUFBRSxFQUFFLFlBQXFCLEtBQUs7UUFDMUYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFVTSxzQkFBc0IsQ0FBQyxFQUFVLEVBQUUsVUFBZ0MsRUFBRTtRQUN4RSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVB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