"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lodash_1 = require("lodash");
const environment_1 = require("~server/utils/environment");
function BaseRouteFactory(RouteType) {
    class BaseRoute extends RouteType {
        constructor() {
            super(...arguments);
            this.isServerRoute = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0Jhc2VSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrRTtBQUNsRSxtQ0FBK0I7QUFDL0IsMkRBQStEO0FBVy9ELFNBQWdCLGdCQUFnQixDQUE4QyxTQUFnQjtJQVUxRixNQUFlLFNBQVUsU0FBUyxTQUE4QztRQUFoRjs7WUFPb0Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUEyR2xELENBQUM7UUFsR0csSUFBSSxNQUFNO1lBQ04sTUFBTSxhQUFhLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO1lBQy9CLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDMUQsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMzRDtZQUNELE9BQU8sYUFBYSxDQUFDO1FBQ3pCLENBQUM7UUFXUyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQWdCO1lBQzNDLE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBV1MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFnQixFQUFFLFFBQWtCLEVBQUUsSUFBa0I7WUFDOUUsSUFBSSxjQUE4QixDQUFDO1lBQ25DLElBQUksT0FBTyxHQUFrQixJQUFJLENBQUM7WUFFbEMsSUFBSTtnQkFDQSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRCxjQUFLLENBQUMsY0FBYyxFQUFFLGdDQUFrQixDQUFDLENBQUM7YUFDN0M7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMvRCxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN2RCxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM5QixPQUFPO2FBQ1Y7WUFDRCxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFXTyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQWlCLEVBQUUsU0FBbUIsRUFBRSxLQUFtQixJQUFtQixDQUFDO1FBV2hHLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBaUIsRUFBRSxTQUFtQixFQUFFLEtBQW1CLElBQW1CLENBQUM7UUFXL0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFpQixFQUFFLFNBQW1CLEVBQUUsS0FBbUIsSUFBbUIsQ0FBQztRQVdqRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQWlCLEVBQUUsU0FBbUIsRUFBRSxLQUFtQixJQUFtQixDQUFDO0tBQzdHO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQS9IRCw0Q0ErSEMifQ==