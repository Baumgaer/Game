"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRoute_1 = require("~server/lib/BaseRoute");
const ConfigManager_1 = require("~server/lib/ConfigManager");
const configManager = ConfigManager_1.ConfigManager.getInstance();
class Config extends BaseRoute_1.BaseRoute {
    constructor() {
        super(...arguments);
        this.templateString = null;
        this.routes = ["/:name"];
    }
    async templateParams(request) {
        return configManager.getForClient(request.params.name);
    }
}
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvcm91dGVzL0NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFrRDtBQUNsRCw2REFBMEQ7QUFHMUQsTUFBTSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQVFsRCxNQUFxQixNQUFPLFNBQVEscUJBQVM7SUFBN0M7O1FBT1csbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFRdEIsV0FBTSxHQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFhekMsQ0FBQztJQUhhLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBZ0I7UUFDM0MsT0FBTyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUNKO0FBNUJELHlCQTRCQyJ9