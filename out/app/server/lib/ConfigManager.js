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
let configKey = `${clientName}:config`;
class ConfigManager extends BDOConfigManager_1.BDOConfigManager {
    static getInstance() {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }
    constructor() {
        super();
    }
    async getRedis() {
        let clientManager = RedisClientManager_1.RedisClientManager.getInstance();
        let configDB = (await this.load('server:databases')).redis.configuration;
        let client = clientManager.getClient(clientName);
        if (!client) {
            client = await clientManager.createClient(clientName, {
                db: configDB
            });
        }
        return Promise.resolve(client);
    }
    async load(config) {
        let side = config.split(':')[0];
        let configFile = config.split(':')[1];
        let temp = {};
        let appRoot = path_1.resolve(app_root_path_1.path, 'out', 'app');
        let bdoDefault = path_1.resolve(appRoot, 'config', `${configFile}.ini`);
        let bdoEnv = path_1.resolve(appRoot, 'config', process.env.NODE_ENV || '', `${configFile}.ini`);
        let serverDefault = path_1.resolve(appRoot, side, 'config', `${configFile}.ini`);
        let serverEnv = path_1.resolve(appRoot, side, 'config', process.env.NODE_ENV || '', `${configFile}.ini`);
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
    correctDataTypes(obj, doLog) {
        for (const k in obj) {
            if (typeof obj[k] === 'object' && obj[k] !== null) {
                this.correctDataTypes(obj[k]);
            }
            else if (typeof obj[k] === 'string') {
                if (doLog) {
                    console.log(obj[k]);
                }
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
    async get(config, forSide = 'server') {
        let client = await this.getRedis();
        let conf = await client.get(configKey);
        let val = null;
        if (conf) {
            val = conf[config];
        }
        if (!val) {
            val = await this.load(`${forSide}:${config}`);
            await this.doCache(config, val);
        }
        return Promise.resolve(val);
    }
    set(_config) {
        throw new Error('Method not implemented.');
    }
    async doCache(config, value) {
        let client = await this.getRedis();
        value = {
            [config]: value
        };
        client.update(configKey, value);
        return Promise.resolve(true);
    }
}
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9Db25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQWdFO0FBQ2hFLDZDQUEwRDtBQUMxRCxpREFBaUQ7QUFDakQsK0JBQStCO0FBQy9CLDZCQUE0QjtBQUM1QixtQ0FBK0I7QUFDL0IsNkRBQTBEO0FBSTFELElBQUksVUFBVSxHQUFHLGVBQWUsQ0FBQztBQUNqQyxJQUFJLFNBQVMsR0FBRyxHQUFHLFVBQVUsU0FBUyxDQUFDO0FBU3ZDLE1BQWEsYUFBYyxTQUFRLG1DQUFnQjtJQWtCeEMsTUFBTSxDQUFDLFdBQVc7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDekIsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQVNPLEtBQUssQ0FBQyxRQUFRO1FBQ2xCLElBQUksYUFBYSxHQUFHLHVDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JELElBQUksUUFBUSxHQUFHLENBQUMsTUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ2hGLElBQUksTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE1BQU0sR0FBRyxNQUFNLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO2dCQUNsRCxFQUFFLEVBQUUsUUFBUTthQUNmLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFD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