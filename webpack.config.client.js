/* eslint-disable */
const arp = require('app-root-path');
const path = require('path');
const webpack = require('webpack');
const fs = require('graceful-fs');
const lodash = require("lodash");

const lessPluginCleanCSS = require('less-plugin-clean-css');
const EventHooksPlugin = require('event-hooks-webpack-plugin');

const webpackConfigBase = require("./webpack.config.base");

module.exports = (env, options, returnConfigObject) => {

    ///////////////////////////////////
    // CONFIGURE ENVIRONMENT

    const inherited = Object.assign({}, options);
    Object.assign(options, {
        cacheDir: "./var/buildcache/frontend",
        tsConfigPath: "./source/app/client/ts/tsconfig.json",
        scriptDir: "./source/app/client/ts",
        analyzerFileName: "frontend.json",
        cleanupPatterns: ["!*.md", "client.*.js"]
    }, inherited);

    ///////////////////////////////////
    // LOAD BASE
    const webpackConfigObject = webpackConfigBase(env, options, true);

    ///////////////////////////////////
    // CONFIGURE BUILD
    const settings = lodash.merge(webpackConfigObject.settings, {
        target: "web",
        entry: {
            WebClient: [
                path.resolve(arp.path, "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"),
                path.resolve(arp.path, "source", "app", "client", "ts", "WebClient.ts")
            ]
        },
        output: {
            path: path.resolve(arp.path, "out", "app", "client", "js"),
            chunkFilename: "client.[name].js"
        },
        node: {
            fs: "empty"
        }
    });

    ///////////////////////////////////
    // EXTEND BUILD PLUGINS

    settings.plugins = settings.plugins.concat([
        new webpack.NormalModuleReplacementPlugin(/nunjucks$/, resource => {
            resource.request = resource.request.replace(/nunjucks/, "nunjucks/browser/nunjucks-slim");
        }),
        new EventHooksPlugin({
            done: () => {
                const source = path.resolve(arp.path, "node_modules", "source-map-support", "browser-source-map-support.js");
                const target = path.resolve(arp.path, "out", "app", "client", "js", "browser-source-map-support.js");
                fs.copyFile(source, target, (error) => {
                    if (error) console.error(error);
                    console.info("Copied Browser-source-map-support to client");
                });
            }
        })
    ]);

    ///////////////////////////////////
    // EXTENDS BUILD MODULE RULES

    settings.module.rules = settings.module.rules.concat([{
        test: /\.less$/,
        use: [webpackConfigObject.cacheLoaderSettings("styles"), webpackConfigObject.threadLoaderSettings(),
        {
            loader: 'to-string-loader'
        },
        {
            loader: 'css-loader',
            options: {
                url: false,
                esModule: false
            }
        },
        {
            loader: 'less-loader',
            options: { lessOptions: { url: false, plugins: [new lessPluginCleanCSS({ advanced: true })] } }
        }]
    }]);

    return returnConfigObject ? webpackConfigObject : settings;
};
