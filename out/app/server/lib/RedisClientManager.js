"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis_1 = require("~server/lib/Redis");
const IORedis = require("ioredis");
const lodash_1 = require("lodash");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkaXNDbGllbnRNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1JlZGlzQ2xpZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUF1RDtBQUN2RCxtQ0FBbUM7QUFDbkMsbUNBQStCO0FBQy9CLCtDQUE0QztBQUM1Qyw2REFBMEQ7QUFFMUQsTUFBTSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztJQUN0QixtQkFBbUIsRUFBRSxJQUFJO0NBQzVCLENBQUMsQ0FBQztBQVNILE1BQWEsbUJBQW9CLFNBQVEsS0FBSztDQUFHO0FBQWpELGtEQUFpRDtBQVNqRCxNQUFhLHdCQUF5QixTQUFRLEtBQUs7Q0FBRztBQUF0RCw0REFBc0Q7QUFRdEQsTUFBYSxrQkFBa0I7SUFrQzNCO1FBaEJRLFlBQU8sR0FBdUIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWdCekIsQ0FBQztJQVBqQixNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFO1lBQzlCLGtCQUFrQixDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDMUQ7UUFDRCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBYU0sWUFBWSxDQUFDLEVBQVUsRUFBRSxVQUFnQyxFQUFFLEVBQUUsWUFBcUIsS0FBSztRQUMxRixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFtQixDQUFDO0lBQ2hGLENBQUM7SUFVTSxzQkFBc0IsQ0FBQyxFQUFVLEVBQUUsVUFBZ0MsRUFBRTtRQUN4RSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUEyQixDQUFDO0lBQ25GLENBQUM7SUFTTSxTQUFTLENBQUMsRUFBVTtRQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFTTSxVQUFVLENBQUMsRUFBVTtRQUN4QixPQUFPLElBQUksT0FBTyxDQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzVDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxPQUFPLE1BQU0sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsQ0FBQzthQUM1QztZQUNELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxNQUFNO29CQUFFLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVFNLGNBQWM7UUFDakIsT0FBTyxJQUFJLE9BQU8sQ0FBVSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDMUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxNQUFNLFFBQVEsR0FBNEIsRUFBRSxDQUFDO1lBQzdDLEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO2dCQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMxQztZQUNELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBYU8sS0FBSyxDQUFDLGNBQWMsQ0FDeEIsRUFBVSxFQUNWLE9BQTZCLEVBQzdCLFNBQWtCLEVBQ2xCLFVBQW1CO1FBRW5CLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsTUFBTSxxQkFBcUIsR0FBRztZQUMxQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2xELElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBVSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUM3QixFQUFFLEVBQVUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPO1NBQ3RDLENBQUM7UUFDRixPQUFPLEdBQUcsY0FBSyxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxPQUFPLENBQXdCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzFELElBQUksTUFBNkIsQ0FBQztZQUNsQyxJQUFJLFVBQVUsRUFBRTtnQkFDWixNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0gsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQy9CO1lBQ0MsTUFBNEIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLElBQUksU0FBUyxFQUFFO2dCQUNYLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxFQUFFO29CQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFFLE1BQTJCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEYsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLE1BQTJCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwRSxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBRSxNQUEyQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUN0QixJQUFJLENBQUMsZUFBZSxDQUFFLE1BQTJCLENBQUMsQ0FBQztZQUN2RCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBRSxNQUEyQixDQUFDLENBQUM7Z0JBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVNPLGFBQWEsQ0FBQyxLQUFhO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFTTyxnQkFBZ0IsQ0FBQyxLQUFZO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUMvQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFO1lBQzVELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBUU8sZUFBZSxDQUFDLE1BQWE7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsTUFBTSxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVNPLGlCQUFpQixDQUFDLE1BQWEsRUFBRSxLQUFhO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSx1QkFBdUIsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBUU8sYUFBYSxDQUFDLE1BQWE7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsTUFBTSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBVU8sZUFBZSxDQUFDLE1BQWEsRUFBRSxLQUFhLEVBQUUsTUFBbUI7UUFDckUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixLQUFLLE1BQU0sUUFBUSxJQUFnQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFJekQsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDaEM7U0FDSjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLE1BQU0sQ0FBQyxFQUFFLG1CQUFtQixLQUFLLGdCQUFnQixNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFVTyxhQUFhLENBQUMsTUFBYSxFQUFFLEtBQVk7UUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQVUsTUFBTyxDQUFDLGNBQWM7WUFBUSxNQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDakUsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKO0FBbFFELGdEQWtRQyJ9