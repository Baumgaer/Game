"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const util_1 = require("~bdo/utils/util");
const environment_1 = require("~server/utils/environment");
const BDORoute_1 = require("~bdo/lib/BDORoute");
const Logger_1 = require("~server/lib/Logger");
const logger = new Logger_1.Logger();
class ServerRoute extends BDORoute_1.BDORoute {
    constructor(serverInstance) {
        super();
        this.isServerRoute = true;
        this.serverInstance = serverInstance;
    }
    get router() {
        const expressRouter = express_1.Router();
        for (const route of this.routes) {
            expressRouter.get(route, this.handleGet.bind(this));
            expressRouter.post(route, this.handlePost.bind(this));
            expressRouter.put(route, this.handlePut.bind(this));
            expressRouter.delete(route, this.handleDelete.bind(this));
            expressRouter.patch(route, this.handlePatch.bind(this));
        }
        return expressRouter;
    }
    async templateParams(request) {
        return super.templateParams(request);
    }
    async handleGet(request, response, next) {
        let templateParams;
        let content = null;
        if (request.query.flush === "server" && process.env.NODE_ENV === "development") {
            const redirectURL = request.baseUrl + request.path + Object.keys(request.query).map((key) => {
                if (key === "flush")
                    return '';
                return key + '=' + request.query[key];
            }).join('&');
            logger.debug("restarting server");
            response.redirect(redirectURL);
            setTimeout(() => {
                process.exit();
            }, 500);
            return;
        }
        try {
            templateParams = await this.templateParams(request);
            util_1.merge(templateParams, environment_1.globalTemplateVars);
        }
        catch (error) {
            return next(error);
        }
        if (!this.jsonOnly)
            content = this.renderTemplate(templateParams);
        if (request.header("X-Game-As-JSON") || !content || this.jsonOnly) {
            response.setHeader('Content-Type', 'Application/json');
            response.json(templateParams);
            return;
        }
        response.setHeader('Content-Type', 'text/html');
        response.send(content);
    }
    async handlePost(_request, _response, _next) {
        throw new Error("Not implemented");
    }
    async handlePut(_request, _response, _next) {
        throw new Error("Not implemented");
    }
    async handlePatch(_request, _response, _next) {
        throw new Error("Not implemented");
    }
    async handleDelete(_request, _response, _next) {
        throw new Error("Not implemented");
    }
}
exports.ServerRoute = ServerRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci9saWIvU2VydmVyUm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0U7QUFDbEUsMENBQXdDO0FBQ3hDLDJEQUErRDtBQUMvRCxnREFBNkM7QUFFN0MsK0NBQTRDO0FBRTVDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7QUFVNUIsTUFBYSxXQUFZLFNBQVEsbUJBQVE7SUFxQ3JDLFlBQVksY0FBMEI7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUEvQkksa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFnQzFDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUF4QkQsSUFBVyxNQUFNO1FBQ2IsTUFBTSxhQUFhLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO1FBQy9CLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM3QixhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BELGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEQsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRCxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFELGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUks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