/* eslint-disable */
const arp = require('app-root-path');
const path = require('path');
const lodash = require("lodash");

const nodeExternals = require('webpack-node-externals');

const webpackConfigBase = require("./webpack.config.base");

module.exports = (env, options) => {

    ///////////////////////////////////
    // CONFIGURE ENVIRONMENT

    lodash.merge(options, {
        cacheDir: "./var/buildcache/backend",
        tsConfigPath: "./tsconfig.json"
    });

    ///////////////////////////////////
    // LOAD BASE

    const webpackConfigBaseObject = webpackConfigBase(env, options);

    ///////////////////////////////////
    // CONFIGURE BUILD

    const settings = lodash.merge(webpackConfigBaseObject.settings, {
        target: "node",
        entry: {
            WebServer: path.resolve(arp.path, "source", "app", "WebServer.ts"),
            GameServer: path.resolve(arp.path, "source", "app", "GameServer.ts")
        },
        output: {
            path: path.resolve(arp.path, "out", "app", "server")
        },
        node: {
            // Need this when working with express, otherwise the build fails
            __dirname: false,   // if you don't put this is, __dirname
            __filename: false,  // and __filename return blank or /
        },
        externals: [nodeExternals()], // Need this to avoid error when working with Express
    });

    ///////////////////////////////////
    // EXTEND BUILD PLUGINS

    settings.plugins = settings.plugins.concat([]);

    ///////////////////////////////////
    // EXTENDS BUILD MODULE RULES

    settings.module.rules = settings.module.rules.concat([]);

    return settings;
};
