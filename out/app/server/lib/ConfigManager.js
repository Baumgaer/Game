"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BDOConfigManager_1 = require("./../../lib/BDOConfigManager");
const graceful_fs_1 = require("graceful-fs");
const app_root_path_1 = require("app-root-path");
const path_1 = require("path");
const ini_1 = require("ini");
const lodash_1 = require("lodash");
const RedisClientManager_1 = require("./RedisClientManager");
let clientName = 'ConfigManager';
class ConfigManager extends BDOConfigManager_1.BDOConfigManager {
    static getInstance() {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }
    async getRedis() {
        let clientManager = RedisClientManager_1.RedisClientManager.getInstance();
        let configDB = (await this.load('databases')).redis.configuration;
        let client = clientManager.getClient(clientName);
        if (!client) {
            client = await clientManager.createClient(clientName, {
                db: configDB
            });
        }
        return Promise.resolve(client);
    }
    async load(config) {
        let temp = {};
        let appRoot = path_1.resolve(app_root_path_1.path, 'out', 'app');
        let bdoDefault = path_1.resolve(appRoot, 'config', `${config}.ini`);
        let bdoEnv = path_1.resolve(appRoot, 'config', process.env.NODE_ENV || '', `${config}.ini`);
        let serverDefault = path_1.resolve(appRoot, 'server', 'config', `${config}.ini`);
        let serverEnv = path_1.resolve(appRoot, 'server', 'config', process.env.NODE_ENV || '', `${config}.ini`);
        let configs = await Promise.all([
            this.getFile(bdoDefault),
            this.getFile(bdoEnv),
            this.getFile(serverDefault),
            this.getFile(serverEnv)
        ]);
        for (const config of configs) {
            let parsedConf = ini_1.parse(config);
            this.correctDataTypes(parsedConf);
            lodash_1.merge(temp, parsedConf);
        }
        return Promise.resolve(temp);
    }
    correctDataTypes(obj) {
        for (const k in obj) {
            if (typeof obj[k] === 'object' && obj[k] !== null) {
                this.correctDataTypes(obj[k]);
            }
            else if (typeof obj[k] === 'string') {
                if (!isNaN(obj[k])) {
                    if (obj[k].toString().indexOf('.') !== -1) {
                        obj[k] = parseFloat(obj[k]);
                    }
                    else {
                        obj[k] = parseInt(obj[k], 10);
                    }
                }
                else if (obj[k].toString().startsWith('[') && obj[k].toString().endsWith(']')) {
                    obj[k] = JSON.parse(obj[k]);
                }
            }
        }
    }
    getFile(path) {
        return new Promise((resolve, reject) => {
            graceful_fs_1.access(path, graceful_fs_1.constants.F_OK, (error) => {
                if (error) {
                    return resolve('');
                }
                graceful_fs_1.readFile(path, 'utf-8', (error, data) => {
                    if (error)
                        return reject(error);
                    resolve(data);
                });
            });
        });
    }
    set(_config) {
        throw new Error('Method not implemented.');
    }
    async getCache(config) {
        let fromLocalCache = this.cache.get(config);
        if (fromLocalCache) {
            return Promise.resolve(fromLocalCache);
        }
        let client = await this.getRedis();
        let conf = await client.get(`${clientName}:${config}`);
        if (conf !== null)
            this.cache.set(config, conf);
        return Promise.resolve(conf);
    }
    async setCache(config, value) {
        this.cache.set(config, value, 60 * 10);
        let client = await this.getRedis();
        client.update(`${clientName}:${config}`, value);
        return Promise.resolve(true);
    }
}
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9Db25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQWdFO0FBQ2hFLDZDQUEwRDtBQUMxRCxpREFBaUQ7QUFDakQsK0JBQStCO0FBQy9CLDZCQUE0QjtBQUM1QixtQ0FBK0I7QUFDL0IsNkRBQTBEO0FBRzFELElBQUksVUFBVSxHQUFHLGVBQWUsQ0FBQztBQVNqQyxNQUFhLGFBQWMsU0FBUSxtQ0FBZ0I7SUFrQnhDLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO1lBQ3pCLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUNoRDtRQUNELE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBU08sS0FBSyxDQUFDLFFBQVE7UUFDbEIsSUFBSSxhQUFhLEdBQUcsdUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxNQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pFLElBQUksTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE1BQU0sR0FBRyxNQUFNLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO2dCQUNsRCxFQUFFLEVBQUUsUUFBUTthQUNmLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFVUyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQWM7UUFDL0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWQs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