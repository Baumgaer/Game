"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("./server/lib/BaseServer");
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
let webServer = new WebServer();
webServer.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL2FwcC9XZWJTZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3REFBcUQ7QUFTckQsTUFBTSxTQUFVLFNBQVEsdUJBQVU7SUFRcEIsS0FBSyxDQUFDLGVBQWU7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVVPLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBaUIsRUFBRSxLQUFlO1FBQ3ZELElBQUksUUFBUSxDQUFDLE9BQU87WUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDdEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsS0FBSyxFQUFFLE9BQU87U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBRUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNoQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMifQ==