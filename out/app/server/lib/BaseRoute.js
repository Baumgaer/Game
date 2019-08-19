"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lodash_1 = require("lodash");
const environment_1 = require("~server/utils/environment");
const Logger_1 = require("~server/lib/Logger");
const logger = new Logger_1.Logger();
function BaseRouteFactory(RouteType) {
    class BaseRoute extends RouteType {
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
                lodash_1.merge(templateParams, environment_1.globalTemplateVars);
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
        async handlePost(_request, _response, _next) { }
        async handlePut(_request, _response, _next) { }
        async handlePatch(_request, _response, _next) { }
        async handleDelete(_request, _response, _next) { }
    }
    return BaseRoute;
}
exports.BaseRouteFactory = BaseRouteFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0Jhc2VSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrRTtBQUNsRSxtQ0FBK0I7QUFDL0IsMkRBQStEO0FBRy9ELCtDQUE0QztBQUU1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBUzVCLFNBQWdCLGdCQUFnQixDQUE4QyxTQUFnQjtJQVUxRixNQUFlLFNBQVUsU0FBUyxTQUE4QztRQXFDNUUsWUFBWSxjQUEwQjtZQUNsQyxLQUFLLEVBQUUsQ0FBQztZQS9CSSxrQkFBYSxHQUFZLElBQUksQ0FBQztZQWdDMUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDekMsQ0FBQztRQXhCRCxJQUFXLE1BQU07WUFDYixNQUFNLGFBQWEsR0FBRyxnQkFBTSxFQUFFLENBQUM7WUFDL0IsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUM3QixhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxD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