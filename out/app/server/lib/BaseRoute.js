"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nunjucks_1 = require("nunjucks");
const lodash_1 = require("lodash");
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
        const tplParamsForTpl = lodash_1.merge({ process }, templateParams);
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
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0Jhc2VSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrRTtBQUNsRSx1Q0FBd0M7QUFDeEMsbUNBQStCO0FBVS9CLE1BQXNCLFNBQVM7SUE2QjNCO1FBckJPLG9CQUFlLEdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1FBVWpFLG1CQUFjLEdBQWtCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBU3RFLFdBQU0sR0FBVyxnQkFBTSxFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFPRCxJQUFJLE1BQU0sQ0FBQyxNQUF5QjtRQUNoQyxJQUFJLE1BQU0sWUFBWSxLQUFLLEVBQUU7WUFDekIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN6RDtTQUNKO0lBQ0wsQ0FBQztJQU9ELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBV1MsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFhLEVBQUUsS0FBZTtRQUN6RCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFXTyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxJQUFrQjtRQUM1RSxJQUFJLGNBQThCLENBQUM7UUFDbkMsSUFBSTtZQUNBLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2pFO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7WUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5QixPQUFPO1NBQ1Y7UUFDRCxNQUFNLGVBQWUsR0FBRyxjQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMzRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDNUUsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSTtvQkFDQSxRQUFRLEdBQUcsTUFBTSx1QkFBWSxDQUFTLElBQUksQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUM7aUJBQy9FO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjthQUNKO1lBRUQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFXTyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQWlCLEVBQUUsU0FBbUIsRUFBRSxLQUFtQixJQUFtQixDQUFDO0lBV2hHLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBaUIsRUFBRSxTQUFtQixFQUFFLEtBQW1CLElBQW1CLENBQUM7SUFXL0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFpQixFQUFFLFNBQW1CLEVBQUUsS0FBbUIsSUFBbUIsQ0FBQztJQVdqRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQWlCLEVBQUUsU0FBbUIsRUFBRSxLQUFtQixJQUFtQixDQUFDO0NBQzdHO0FBdkpELDhCQXVKQyJ9