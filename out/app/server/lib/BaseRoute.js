"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nunjucks_1 = require("nunjucks");
const lodash_1 = require("lodash");
const Logger_1 = require("~server/lib/Logger");
const logger = new Logger_1.Logger();
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
            templateParams = lodash_1.merge({ process }, await this.templateParams(request, response));
        }
        catch (error) {
            return next(error);
        }
        response.render(this.templateString, templateParams, async (error, template) => {
            if (error) {
                logger.debug(error);
                try {
                    template = await nunjucks_1.renderString(this.templateString, templateParams);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0Jhc2VSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrRTtBQUNsRSx1Q0FBd0M7QUFDeEMsbUNBQStCO0FBQy9CLCtDQUE0QztBQUU1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBVTVCLE1BQXNCLFNBQVM7SUE0QjNCO1FBcEJPLG9CQUFlLEdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1FBU2pFLG1CQUFjLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFTL0QsV0FBTSxHQUFXLGdCQUFNLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQU9ELElBQUksTUFBTSxDQUFDLE1BQXlCO1FBQ2hDLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUN6QixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7SUFDTCxDQUFDO0lBT0QsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFXUyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQWEsRUFBRSxLQUFlO1FBQ3pELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQVdPLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLElBQWtCO1FBQzVFLElBQUksY0FBOEIsQ0FBQztRQUNuQyxJQUFJO1lBQ0EsY0FBYyxHQUFHLGNBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNyRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFDRCxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDM0UsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsSUFBSTtvQkFDQSxRQUFRLEdBQUcsTUFBTSx1QkFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7aUJBQ3RFO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjthQUNKO1lBRUQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFXTyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQWlCLEVBQUUsU0FBbUIsRUFBRSxLQUFtQixJQUFrQixDQUFDO0lBVy9GLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBaUIsRUFBRSxTQUFtQixFQUFFLEtBQW1CLElBQWtCLENBQUM7SUFXOUYsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFpQixFQUFFLFNBQW1CLEVBQUUsS0FBbUIsSUFBa0IsQ0FBQztJQVdoRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQWlCLEVBQUUsU0FBbUIsRUFBRSxLQUFtQixJQUFrQixDQUFDO0NBQzVHO0FBakpELDhCQWlKQyJ9