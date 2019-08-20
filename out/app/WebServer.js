"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./../utils/requireOverride");
const source_map_support_1 = require("source-map-support");
const BaseServer_1 = require("~server/lib/BaseServer");
if (process.env.NODE_ENV === "development")
    source_map_support_1.install();
class WebServer extends BaseServer_1.BaseServer {
}
const webServer = new WebServer();
webServer.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL2FwcC9XZWJTZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0M7QUFDcEMsMkRBQTZDO0FBQzdDLHVEQUFvRDtBQUVwRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWE7SUFBRSw0QkFBTyxFQUFFLENBQUM7QUFRdEQsTUFBTSxTQUFVLFNBQVEsdUJBQVU7Q0FBSTtBQUV0QyxNQUFNLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2xDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyJ9