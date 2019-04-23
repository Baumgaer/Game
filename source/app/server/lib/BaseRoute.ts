import { Request, Response, NextFunction, Router } from 'express';
import { renderString } from 'nunjucks';
import { merge } from 'lodash';

/**
 * Provides basic functionality of a route for the express router and encapsulates
 * this framework.
 *
 * @export
 * @abstract
 * @class BaseRoute
 */
export abstract class BaseRoute {
    /**
     * Namespace for the express router as entry point
     *
     * @public
     * @type {string}
     * @memberof BaseRoute
     */
    public routerNameSpace: string = `/${this.constructor.name.toLowerCase()}`;

    /**
     * The name of the template file in views or a string which is already template.
     * If this is null, the pure JSON from templateParams will be sent to the client.
     *
     * @protected
     * @type {string}
     * @memberof BaseRoute
     */
    protected templateString: string | null = this.constructor.name.toLowerCase();

    /**
     * The express router to mount all routes dynamically to the server
     *
     * @private
     * @type {Router}
     * @memberof BaseRoute
     */
    private router: Router = Router();

    constructor() {
        this.routes = ['/'];
    }

    /**
     * Creates rest routes depending on all routes given in a page
     *
     * @param  routes Array of route strings
     */
    set routes(routes: string[] | Router) {
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

    /**
     * Returns the processed routes
     *
     * @return express router object
     */
    get routes(): Router | string[] {
        return this.router;
    }

    /**
     * Returns an object which keys matches the interpolations of the template.
     *
     * @protected
     * @param {Request} _req
     * @param {Response} _resp
     * @returns {Promise<IndexStructure>}
     * @memberof BaseRoute
     */
    protected async templateParams(_req: Request, _resp: Response): Promise<IndexStructure> {
        return {};
    }

    /**
     * Handles the get requests with access checking, template params and response type determination
     *
     * @private
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     * @memberof BaseRoute
     */
    private async handleGet(request: Request, response: Response, next: NextFunction): Promise<void> {
        let templateParams: IndexStructure;
        try {
            templateParams = await this.templateParams(request, response);
        } catch (error) {
            return next(error);
        }

        if (this.templateString === null) {
            response.json(templateParams);
            return;
        }
        const tplParamsForTpl = merge({ process }, templateParams);
        response.render(this.templateString, tplParamsForTpl, async (error, template) => {
            if (error) {
                try {
                    template = await renderString(<string>this.templateString, tplParamsForTpl);
                } catch (error) {
                    return next(error);
                }
            }
            // Send to client
            response.setHeader('Content-Type', 'text/html');
            response.send(template);
        });
    }

    /**
     * Handles the HTTP post requests
     *
     * @private
     * @param {Request} _request
     * @param {Response} _response
     * @param {NextFunction} _next
     * @memberof BaseRoute
     */
    private async handlePost(_request: Request, _response: Response, _next: NextFunction): Promise<void> { }

    /**
     * Handles HTTP put requests
     *
     * @private
     * @param {Request} _request
     * @param {Response} _response
     * @param {NextFunction} _next
     * @memberof BaseRoute
     */
    private async handlePut(_request: Request, _response: Response, _next: NextFunction): Promise<void> { }

    /**
     * Handles HTTP Patch requests
     *
     * @private
     * @param {Request} _request
     * @param {Response} _response
     * @param {NextFunction} _next
     * @memberof BaseRoute
     */
    private async handlePatch(_request: Request, _response: Response, _next: NextFunction): Promise<void> { }

    /**
     * Handles HTTP delete requests
     *
     * @private
     * @param {Request} _request
     * @param {Response} _response
     * @param {NextFunction} _next
     * @memberof BaseRoute
     */
    private async handleDelete(_request: Request, _response: Response, _next: NextFunction): Promise<void> { }
}
