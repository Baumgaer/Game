"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nunjucks_1 = require("nunjucks");
const lodash_1 = require("lodash");
const environment_1 = require("~server/utils/environment");
class BaseRoute {
    constructor() {
        this.routerNameSpace = `/${this.constructor.name.toLowerCase()}`;
        this.templateString = this.constructor.name.toLowerCase();
        this.router = express_1.Router();
        this.routes = ['/'];
    }
    set routes(routes) {
        if (routes instanceof Array) {
            for (const route of routes) {
                this.router.get(route, this.handleGet.bind(this));
                this.router.post(route, this.handlePost.bind(this));
                this.router.put(route, this.handlePut.bind(this));
                this.router.delete(route, this.handleDelete.bind(this));
                this.router.patch(route, this.handlePatch.bind(this));
            }
        }
    }
    get routes() {
        return this.router;
    }
    async templateParams(_req, _resp) {
        return {};
    }
    async handleGet(request, response, next) {
        let templateParams;
        try {
            templateParams = await this.templateParams(request, response);
        }
        catch (error) {
            return next(error);
        }
        if (this.templateString === null) {
            response.json(templateParams);
            return;
        }
        const tplParamsForTpl = lodash_1.merge({}, environment_1.globalTemplateVars, templateParams);
        response.render(this.templateString, tplParamsForTpl, async (error, template) => {
            if (error) {
                try {
                    template = await nunjucks_1.renderString(this.templateString, tplParamsForTpl);
                }
                catch (error) {
                    return next(error);
                }
            }
            response.setHeader('Content-Type', 'text/html');
            response.send(template);
        });
    }
    async handlePost(_request, _response, _next) { }
    async handlePut(_request, _response, _next) { }
    async handlePatch(_request, _response, _next) { }
    async handleDelete(_request, _response, _next) { }
}
BaseRoute.attachToServers = ['*'];
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0Jhc2VSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrRTtBQUNsRSx1Q0FBd0M7QUFDeEMsbUNBQStCO0FBQy9CLDJEQUErRDtBQVUvRCxNQUFzQixTQUFTO0lBeUMzQjtRQXJCTyxvQkFBZSxHQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQVVqRSxtQkFBYyxHQUFrQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQVN0RSxXQUFNLEdBQVcsZ0JBQU0sRUFBRSxDQUFDO1FBRzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBT0QsSUFBSSxNQUFNLENBQUMsTUFBeUI7UUFDaEMsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO1lBQ3pCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDekQ7U0FDSjtJQUNMLENBQUM7SUFPRCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQVdTLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBYSxFQUFFLEtBQWU7UUFDekQsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBV08sS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFnQixFQUFFLFFBQWtCLEVBQUUsSUFBa0I7UUFDNUUsSUFBSSxjQUE4QixDQUFDO1FBQ25DLElBQUk7WUFDQSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNqRTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUIsT0FBTztTQUNWO1FBQ0QsTUFBTSxlQUFlLEdBQUcsY0FBSyxDQUFDLEVBQUUsRUFBRSxnQ0FBa0IsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN0RSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDNUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSTtvQkFDQSxRQUFRLEdBQUcsTUFBTSx1QkFBWSxDQUFTLElBQUksQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUM7aUJBQy9FO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjthQUNKO1lBRUQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFXTyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQWlCLEVBQUUsU0FBbUIsRUFBRSxLQUFtQixJQUFtQixDQUFDO0lBV2hHLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBaUIsRUFBRSxTQUFtQixFQUFFLEtBQW1CLElBQW1CLENBQUM7SUFXL0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFpQixFQUFFLFNBQW1CLEVBQUUsS0FBbUIsSUFBbUIsQ0FBQztJQVdqRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQWlCLEVBQUUsU0FBbUIsRUFBRSxLQUFtQixJQUFtQixDQUFDOztBQXRKNUYseUJBQWUsR0FBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBWnBELDhCQW1LQyJ9