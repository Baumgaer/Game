import { BDOServiceWorkerFactory } from '~bdo/routes/BDOServiceWorker';
import { ServerRoute } from '~server/lib/ServerRoute';
import { BaseServer } from "~server/lib/BaseServer";

import { Request, Response, NextFunction } from "express";
import { readFileSync } from "graceful-fs";
import { path as rootPath } from "app-root-path";
import { resolve as resolvePath } from "path";
import { Environment, runtime, Template } from "nunjucks";


/**
 * Serves the "home page" of the website to the client
 *
 * @class Home
 * @extends ReturnType<BDOServiceWorkerFactory<ServerRoute>>
 */
export default class ServiceWorker extends BDOServiceWorkerFactory(ServerRoute) {

    private workerChunksManifest: Record<string, string[]>;

    constructor(serverInstance: BaseServer) {
        super(serverInstance);
        const fileBuffer = readFileSync(resolvePath(rootPath, "out/app/client/js/ServiceWorker.js"), { encoding: "utf-8" });
        const env = new Environment();
        env.addFilter('json', (value, spaces) => {
            if (value instanceof runtime.SafeString) {
                value = value.toString();
            }
            let stringified = JSON.stringify(value, null, spaces);
            stringified = stringified.replace(/"/g, "\\\"");
            // @ts-expect-error filters is not exposed in types but accessible
            return new env.filters.safe(stringified);
        });
        this.templateString = new Template(fileBuffer.toString(), env);

        const chunkManifest = readFileSync(resolvePath(rootPath, "out", "app", "client", "js", "workerChunksManifest.json"));
        this.workerChunksManifest = JSON.parse(chunkManifest.toString());
    }

    protected async templateParams(request: Request, response: Response, next: NextFunction) {
        const superParams = await super.templateParams(request, response, next);
        superParams.scripts = this.workerChunksManifest.ServiceWorker.map((script) => `/js/${script}`);
        // const fileNameIndex = superParams.scripts.indexOf("ServiceWorker.js");
        // superParams.scripts.splice(fileNameIndex, 1);
        response.setHeader("Content-Type", "application/javascript");
        return superParams;
    }
}
