"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./../utils/requireOverride");
const BaseServer_1 = require("~server/lib/BaseServer");
class WebServer extends BaseServer_1.BaseServer {
    async routeCollection() {
        this.app.get('/', this.serveIndex.bind(this));
    }
    async serveIndex(_request, reply) {
        if (_request.session)
            _request.session.name = 'huch?';
        reply.render('index', {
            hello: 'world'
        });
    }
}
const webServer = new WebServer();
webServer.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL2FwcC9XZWJTZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0M7QUFDcEMsdURBQW9EO0FBU3BELE1BQU0sU0FBVSxTQUFRLHVCQUFVO0lBUXBCLEtBQUssQ0FBQyxlQUFlO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFVTyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQWlCLEVBQUUsS0FBZTtRQUN2RCxJQUFJLFFBQVEsQ0FBQyxPQUFPO1lBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3RELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVELE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7QUFDbEMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDIn0=