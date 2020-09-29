import { Request, Response, NextFunction, Router } from 'express';
import { merge, toURIPathPart } from '~bdo/utils/util';
import { globalTemplateVars } from '~server/utils/environment';
import { BDORoute } from '~bdo/lib/BDORoute';
import { BaseServer } from "~server/lib/BaseServer";
import httpError from "http-errors";
import { readFileSync } from "graceful-fs";
import { path as rootPath } from "app-root-path";
import { resolve as resolvePath } from "path";

/**
 * Provides basic functionality of a route for the express router and encapsulates
 * this framework.
 *
 * @abstract
 * @extends BDORoute
 */
export class ServerRoute extends BDORoute {

    /**
     * This is for better identification of server routes and instance check
     *
     * @memberof ServerRoute
     */
    public static readonly isServerRoute: boolean = true;

    /**
     * @see ServerRoute.isServerRoute
     *
     * @memberof ServerRoute
     */
    public readonly isServerRoute = ServerRoute.isServerRoute;

    /**
     * @inheritdoc
     *
     * @readonly
     * @type {Router}
     * @memberof ServerRoute
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
     * @inheritdoc
     *
     * @protected
     * @memberof ServerRoute
     */
    protected environmentInstance!: BaseServer;

    protected chunkManifest: Record<string, string[]>

    constructor(serverInstance: BaseServer) {
        super(serverInstance);
        const chunkManifest = readFileSync(resolvePath(rootPath, "out", "app", "client", "js", "chunkManifest.json"));
        this.chunkManifest = JSON.parse(chunkManifest.toString());
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @abstract
     * @param request The request given by the http server
     * @returns An object with key => value used for templates to fill variables
     * @memberof ServerRoute
     */
    protected async templateParams(request: Request, response: Response, next: NextFunction): Promise<IndexStructure> {
        const superParams = await super.templateParams(request, response, next);
        superParams.scripts = this.chunkManifest[this.environmentInstance.clientName];
        return superParams;
    }

    /**
     * @inheritdoc
     *
     * @private
     * @param request The request given by the http server
     * @param response The response given by the http server
     * @param next A function which calls the next middleware function
     * @memberof ServerRoute
     */
    protected async handleGet(request: Request, response: Response, next: NextFunction) {
        let templateParams: IndexStructure;
        let content: string | null = null;

        if (response.headersSent) return;

        if (!await this.accessGranted(request)) return next(new httpError.Unauthorized(`Route access is set to ${this.access}`));

        try {
            templateParams = await this.templateParams(request, response, next);
            merge(templateParams, globalTemplateVars, { responseLocals: response.locals });
        } catch (error) {
            return next(new httpError.InternalServerError(String(error)));
        }

        if (response.headersSent) return;

        if (!this.jsonOnly) content = this.renderTemplate(templateParams);
        if (request.header("Content-Type") === "application/json" || !content || this.jsonOnly) {
            response.setHeader('Content-Type', 'application/json');
            response.json(templateParams);
            return;
        }
        if (!response.getHeader("Content-Type")) response.setHeader('Content-Type', 'text/html');
        response.send(content);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param request The request given by the http server
     * @param response The response given by the http server
     * @param next A function which calls the next middleware function
     * @memberof ServerRoute
     */
    protected async handlePost(request: Request, response: Response, next: NextFunction) {
        if (!await this.accessGranted(request)) return this.handleGet(request, response, next);
        return response.end();
    }

    /**
     * Handles HTTP put requests
     *
     * @protected
     * @param _request The request given by the http server
     * @param _response The response given by the http server
     * @param _next A function which calls the next middleware function
     * @memberof ServerRoute
     */
    protected async handlePut(_request: Request, _response: Response, _next: NextFunction): Promise<void> {
        throw new Error("Not implemented");
    }

    /**
     * Handles HTTP Patch requests
     *
     * @protected
     * @param _request The request given by the http server
     * @param _response The response given by the http server
     * @param _next A function which calls the next middleware function
     * @memberof ServerRoute
     */
    protected async handlePatch(_request: Request, _response: Response, _next: NextFunction): Promise<void> {
        throw new Error("Not implemented");
    }

    /**
     * Handles HTTP delete requests
     *
     * @protected
     * @param _request The request given by the http server
     * @param _response The response given by the http server
     * @param _next A function which calls the next middleware function
     * @memberof ServerRoute
     */
    protected async handleDelete(_request: Request, _response: Response, _next: NextFunction): Promise<void> {
        throw new Error("Not implemented");
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param _request The request given by the http server
     * @returns true if granted and false else
     * @memberof ServerRoute
     */
    protected async accessGranted(_request: Request) {
        if (this.access === 'public') return true;
        return false;
    }
}
