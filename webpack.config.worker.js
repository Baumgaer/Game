/* eslint-disable */
const arp = require('app-root-path');
const path = require('path');
const lodash = require("lodash");

const webpackConfigBase = require("./webpack.config.client");

module.exports = (env, options, returnConfigObject) => {

    ///////////////////////////////////
    // CONFIGURE ENVIRONMENT

    const inherited = Object.assign({}, options);
    Object.assign(options, {
        cacheDir: "./var/buildcache/worker",
        analyzerFileName: "worker.json",
        manifestFileName: "workerChunksManifest.json",
        cleanupPatterns: ["!*.md", "worker.*.js"]
    }, inherited);

    ///////////////////////////////////
    // LOAD BASE
    const webpackConfigObject = webpackConfigBase(env, options, true);

    ///////////////////////////////////
    // CONFIGURE BUILD
    const settings = lodash.merge(webpackConfigObject.settings, {
        target: "webworker",
        output: {
            chunkFilename: "worker.[name].js"
        },
        optimization: {
            splitChunks: false
        }
    });

    ///////////////////////////////////
    // WORKERS ENTRIES ONLY

    settings.entry = {
        ServiceWorker: path.resolve(arp.path, "source", "app", "client", "ts", "ServiceWorker.ts")
    }

    ///////////////////////////////////
    // EXTEND BUILD PLUGINS

    settings.plugins = settings.plugins.concat([]);

    ///////////////////////////////////
    // EXTENDS BUILD MODULE RULES

    settings.module.rules = settings.module.rules.concat([]);

    return returnConfigObject ? webpackConfigObject : settings;
};
