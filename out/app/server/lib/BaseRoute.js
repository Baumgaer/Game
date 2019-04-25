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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0Jhc2VSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrRTtBQUNsRSxtQ0FBK0I7QUFDL0IsMkRBQStEO0FBVy9ELFNBQWdCLGdCQUFnQixDQUE4QyxTQUFnQjtJQVUxRixNQUFlLFNBQVUsU0FBUyxTQUE4QztRQUFoRjs7WUFPb0Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUE0RmxELENBQUM7UUFyRkcsSUFBSSxNQUFNO1lBQ04sTUFBTSxhQUFhLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO1lBQy9CLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDMUQsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMzRDtZQUNELE9BQU8sYUFBYSxDQUFDO1FBQ3pCLENBQUM7UUFXUyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxJQUFrQjtZQUM5RSxJQUFJLGNBQThCLENBQUM7WUFDbkMsSUFBSSxPQUFPLEdBQWtCLElBQUksQ0FBQztZQUVsQyxJQUFJO2dCQUNBLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BELGNBQUssQ0FBQyxjQUFjLEVBQUUsZ0NBQWtCLENBQUMsQ0FBQzthQUM3QztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2dCQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQy9ELFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3ZELFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzlCLE9BQU87YUFDVjtZQUNELFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQVdPLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBaUIsRUFBRSxTQUFtQixFQUFFLEtBQW1CLElBQW1CLENBQUM7UUFXaEcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFpQixFQUFFLFNBQW1CLEVBQUUsS0FBbUIsSUFBbUIsQ0FBQztRQVcvRixLQUFLLENBQUMsV0FBVyxDQUFDLFFBQWlCLEVBQUUsU0FBbUIsRUFBRSxLQUFtQixJQUFtQixDQUFDO1FBV2pHLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBaUIsRUFBRSxTQUFtQixFQUFFLEtBQW1CLElBQW1CLENBQUM7S0FDN0c7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBaEhELDRDQWdIQyJ9