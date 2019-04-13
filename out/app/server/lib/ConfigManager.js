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
    set(_config) {
        throw new Error('Method not implemented.');
    }
    async load(config) {
        const temp = {};
        const appRoot = path_1.resolve(app_root_path_1.path, 'out', 'app');
        const bdoDefault = path_1.resolve(appRoot, 'config', `${config}.ini`);
        const bdoEnv = path_1.resolve(appRoot, 'config', process.env.NODE_ENV || '', `${config}.ini`);
        const serverDefault = path_1.resolve(appRoot, 'server', 'config', `${config}.ini`);
        const serverEnv = path_1.resolve(appRoot, 'server', 'config', process.env.NODE_ENV || '', `${config}.ini`);
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
                if (accessError) {
                    return resolver('');
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9Db25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTZEO0FBQzdELDZDQUEwRDtBQUMxRCxpREFBaUQ7QUFDakQsK0JBQStCO0FBQy9CLDZCQUE0QjtBQUM1QixtQ0FBK0I7QUFTL0IsTUFBYSxhQUFjLFNBQVEsbUNBQWdCO0lBa0J4QyxNQUFNLENBQUMsV0FBVztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtZQUN6QixhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7U0FDaEQ7UUFDRCxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQVNNLEdBQUcsQ0FBQyxPQUFlO1FBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBVVMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFjO1FBQy9CLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVoQixNQUFNLE9BQU8sR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsTUFBTSxVQUFVLEdBQUcsY0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELE1BQU0sTUFBTSxHQUFHLGNBQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxHQUFHLE1BQU0sTUFBTSxDQUFDLENBQUM7UUFDdkYsTUFBTSxhQUFhLEdBQUcsY0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxNQUFNLENBQUMsQ0FBQztRQUM1RSxNQUFNLFNBQVMsR0FB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