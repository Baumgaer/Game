import { BDOServiceWorkerFactory } from '~bdo/routes/BDOServiceWorker';
import { ServerRoute } from '~server/lib/ServerRoute';
import { BaseServer } from "~server/lib/BaseServer";
import { globalTemplateVars } from '~server/utils/environment';

import { Request, Response, NextFunction } from "express";
import { readFileSync } from "graceful-fs";
import { path as rootPath } from "app-root-path";
import { resolve as resolvePath } from "path";


/**
 * Serves the "home page" of the website to the client
 *
 * @class Home
 * @extends ReturnType<BDOServiceWorkerFactory<ServerRoute>>
 */
export default class ServiceWorker extends BDOServiceWorkerFactory(ServerRoute) {

    private preRenderedServiceWorker!: string;

    constructor(serverInstance: BaseServer) {
        super(serverInstance);
        this.renderServiceWorker();
    }

    protected async templateParams(request: Request, response: Response, next: NextFunction) {
        if (global.process.env.NODE_ENV === "development") this.renderServiceWorker();
        const superParams = await super.templateParams(request, response, next);
        // const fileNameIndex = superParams.scripts.indexOf("ServiceWorker.js");
        // superParams.scripts.splice(fileNameIndex, 1);
        response.setHeader("Content-Type", "application/javascript");
        response.send(this.preRenderedServiceWorker);
        return superParams;
    }

    private renderServiceWorker() {
        const fileBuffer = readFileSync(resolvePath(rootPath, "out/app/client/js/ServiceWorker.js"), { encoding: "utf-8" });
        this.preRenderedServiceWorker = fileBuffer.toString().replace("{{$$serviceWorkerProcess$$}}", JSON.stringify(globalTemplateVars.process).replace(/"/g, "\\\""));
    }
}
