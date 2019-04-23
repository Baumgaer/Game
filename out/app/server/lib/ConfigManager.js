"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BDOConfigManager_1 = require("~bdo/lib/BDOConfigManager");
const graceful_fs_1 = require("graceful-fs");
const app_root_path_1 = require("app-root-path");
const path_1 = require("path");
const ini_1 = require("ini");
const lodash_1 = require("lodash");
class ConfigManager extends BDOConfigManager_1.BDOConfigManager {
    static getInstance() {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }
    getForClient(config) {
        config = config.replace(/\/{0,1}\.\.\/{0,1}/g, "");
        return this.get(`client/${config}`);
    }
    set(_config) {
        throw new Error('Method not implemented.');
    }
    async load(config) {
        const temp = {};
        let environment = 'server';
        if (config.includes("/"))
            [environment, config] = config.split("/");
        const appRoot = path_1.resolve(app_root_path_1.path, 'out', 'app');
        const bdoDefault = path_1.resolve(appRoot, 'config', `${config}.ini`);
        const bdoEnv = path_1.resolve(appRoot, 'config', process.env.NODE_ENV || '', `${config}.ini`);
        const serverDefault = path_1.resolve(appRoot, environment, 'config', `${config}.ini`);
        const serverEnv = path_1.resolve(appRoot, environment, 'config', process.env.NODE_ENV || '', `${config}.ini`);
        const configs = await Promise.all([
            this.getFile(bdoDefault),
            this.getFile(bdoEnv),
            this.getFile(serverDefault),
            this.getFile(serverEnv)
        ]);
        for (const configString of configs) {
            const parsedConf = ini_1.parse(configString);
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
        return new Promise((resolver, reject) => {
            graceful_fs_1.access(path, graceful_fs_1.constants.F_OK, (accessError) => {
                if (accessError)
                    return resolver('');
                graceful_fs_1.readFile(path, 'utf-8', (readError, data) => {
                    if (readError)
                        return reject(readError);
                    resolver(data);
                });
            });
        });
    }
}
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9Db25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTZEO0FBQzdELDZDQUEwRDtBQUMxRCxpREFBaUQ7QUFDakQsK0JBQStCO0FBQy9CLDZCQUE0QjtBQUM1QixtQ0FBK0I7QUFTL0IsTUFBYSxhQUFjLFNBQVEsbUNBQWdCO0lBa0J4QyxNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUN6QixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7U0FDaEQ7UUFDRCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQVVNLFlBQVksQ0FBQyxNQUFjO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQVNNLEdBQUcsQ0FBQyxPQUFlO1FBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBVVMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFjO1FBQy9CLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDM0IsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEUsTUFBTSxPQUFPLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hE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