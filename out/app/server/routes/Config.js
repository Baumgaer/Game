"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = require("~server/lib/BaseRoute");
const BDOConfig_1 = require("~bdo/routes/BDOConfig");
const ConfigManager_1 = require("~server/lib/ConfigManager");
const configManager = ConfigManager_1.ConfigManager.getInstance();
class Config extends BaseRoute_1.BaseRouteFactory(BDOConfig_1.BDOConfig) {
    async templateParams(request) {
        return configManager.getForClient(request.params.name);
    }
}
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvcm91dGVzL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUF5RDtBQUN6RCxxREFBa0Q7QUFDbEQsNkRBQTBEO0FBRzFELE1BQU0sYUFBYSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7QUFRbEQsTUFBcUIsTUFBTyxTQUFRLDRCQUFnQixDQUFDLHFCQUFTLENBQUM7SUFVakQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFnQjtRQUMzQyxPQUFPLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0o7QUFiRCx5QkFhQyJ9