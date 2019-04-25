import { Request, Response, NextFunction, Router } from 'express';
import { merge } from 'lodash';
import { globalTemplateVars } from '~server/utils/environment';
import { BDORoute } from '~bdo/lib/BDORoute';

/**
 * Test
 *
 * @export
 * @template TBase
 * @param {TBase} RouteType
 * @returns
 */
export function BaseRouteFactory<TBase extends AbstractConstructor<BDORoute>>(RouteType: TBase) {

    /**
     * Provides basic functionality of a route for the express router and encapsulates
     * this framework.
     *
     * @export
     * @abstract
     * @class BaseRoute
     */
    abstract class BaseRoute extends (RouteType as unknown as Constructor<BDORoute>) {

        /**
         * This is for better identification of server routes and instance check
         *
         * @memberof BaseRoute
         */
        public readonly isServerRoute: boolean = true;

        /**
         * Returns the processed routes
         *
         * @return express router object
         */
        get router(): Router {
            const expressRouter = Router();
            for (const route of this.routes) {
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

    return BaseRoute;
}
