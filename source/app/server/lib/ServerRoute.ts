import { Request, Response, NextFunction, Router } from 'express';
import { merge, toURIPathPart } from '~bdo/utils/util';
import { globalTemplateVars } from '~server/utils/environment';
import { BDORoute } from '~bdo/lib/BDORoute';
import { BaseServer } from "~server/lib/BaseServer";

/**
 * Provides basic functionality of a route for the express router and encapsulates
 * this framework.
 *
 * @export
 * @abstract
 * @class BaseRoute
 */
export class ServerRoute extends BDORoute {

    /**
     * This is for better identification of server routes and instance check
     *
     * @memberof BaseRoute
     */
    public readonly isServerRoute: boolean = true;

    /**
     * @inheritdoc
     *
     * @readonly
     * @type {Router}
     * @memberof BaseRoute
     */
    public get router(): Router {
        const expressRouter = Router();
        for (let route of this.routes) {
            route = toURIPathPart(route);
            expressRouter.get(route, this.handleGet.bind(this));
            expressRouter.post(route, this.handlePost.bind(this));
            expressRouter.put(route, this.handlePut.bind(this));
            expressRouter.delete(route, this.handleDelete.bind(this));
            expressRouter.patch(route, this.handlePatch.bind(this));
        }
        return expressRouter;
    }

    /**
     * Holds a reference to the current server instance
     *
     * @protected
     * @type {BaseServer}
     * @memberof BaseRoute
     */
    protected serverInstance!: BaseServer;

    constructor(serverInstance: BaseServer) {
        super();
        this.serverInstance = serverInstance;
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @abstract
     * @param {Request} _request
     * @returns {Promise<IndexStructure>}
     * @memberof BaseRoute
     */
    protected async templateParams(request: Request): Promise<IndexStructure> {
        return super.templateParams(request);
    }

    /**
     * @inheritdoc
     *
     * @private
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     * @memberof BaseRoute
     */
    protected async handleGet(request: Request, response: Response, next: NextFunction): Promise<void> {
        let templateParams: IndexStructure;
        let content: string | null = null;

        try {
            templateParams = await this.templateParams(request);
            merge(templateParams, globalTemplateVars);
        } catch (error) {
            return next(error);
        }

        if (!this.jsonOnly) content = this.renderTemplate(templateParams);
        if (request.header("X-Game-As-JSON") || !content || this.jsonOnly) {
            response.setHeader('Content-Type', 'Application/json');
            response.json(templateParams);
            return;
        }
        response.setHeader('Content-Type', 'text/html');
        response.send(content);
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
    private async handlePost(_request: Request, _response: Response, _next: NextFunction): Promise<void> {
        throw new Error("Not implemented");
    }

    /**
     * Handles HTTP put requests
     *
     * @private
     * @param {Request} _request
     * @param {Response} _response
     * @param {NextFunction} _next
     * @memberof BaseRoute
     */
    private async handlePut(_request: Request, _response: Response, _next: NextFunction): Promise<void> {
        throw new Error("Not implemented");
    }

    /**
     * Handles HTTP Patch requests
     *
     * @private
     * @param {Request} _request
     * @param {Response} _response
     * @param {NextFunction} _next
     * @memberof BaseRoute
     */
    private async handlePatch(_request: Request, _response: Response, _next: NextFunction): Promise<void> {
        throw new Error("Not implemented");
    }

    /**
     * Handles HTTP delete requests
     *
     * @private
     * @param {Request} _request
     * @param {Response} _response
     * @param {NextFunction} _next
     * @memberof BaseRoute
     */
    private async handleDelete(_request: Request, _response: Response, _next: NextFunction): Promise<void> {
        throw new Error("Not implemented");
    }
}
