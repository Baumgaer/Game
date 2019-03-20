"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BDOConfigManager_1 = require("./../../lib/BDOConfigManager");
class ConfigManager extends BDOConfigManager_1.BDOConfigManager {
    getInstance() {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }
    constructor() {
        super();
    }
    load(_config) {
        throw new Error('Method not implemented.');
    }
    get(_config) {
        throw new Error('Method not implemented.');
    }
    set(_config) {
        throw new Error('Method not implemented.');
    }
    doCache(_config) {
        throw new Error('Method not implemented.');
    }
}
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9Db25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQWdGO0FBV2hGLE1BQWEsYUFBYyxTQUFRLG1DQUFnQjtJQVMvQyxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDekIsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUtELElBQUksQ0FBQyxPQUFlO1FBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBS0QsR0FBRyxDQUFDLE9BQWU7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUtELEdBQUcsQ0FBQyxPQUFlO1FBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFLRCxPQUFPLENBQUMsT0FBZTtRQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBL0NELHNDQStDQyJ9