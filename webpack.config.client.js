/* eslint-disable */
const arp = require('app-root-path');
const path = require('path');
const webpack = require('webpack');
const fs = require('graceful-fs');
const rimraf = require('rimraf');
const lodash = require("lodash");

const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const lessPluginCleanCSS = require('less-plugin-clean-css');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfigBase = require("./webpack.config.base");

module.exports = (env, options) => {

    ///////////////////////////////////
    // CONFIGURE ENVIRONMENT
    lodash.merge(options, {
        cacheDir: "./var/buildcache/frontend",
        tsConfigPath: "./source/app/client/ts/tsconfig.json"
    });

    ///////////////////////////////////
    // LOAD BASE
    const webpackConfigBaseObject = webpackConfigBase(env, options);

    ///////////////////////////////////
    // CONFIGURE BUILD
    const settings = lodash.merge(webpackConfigBaseObject.settings, {
        target: "web",
        entry: {
            WebClient: [
                path.resolve(arp.path, "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"),
                path.resolve(arp.path, "source", "app", "client", "ts", "WebClient.ts")
            ]
        },
        output: {
            path: path.resolve(arp.path, "out", "app", "client", "js")
        },
        node: {
            fs: "empty"
        }
    });

    ///////////////////////////////////
    // EXTEND BUILD PLUGINS
    // @ts-expect-error
    settings.plugins = settings.plugins.concat([
        new webpack.NormalModuleReplacementPlugin(/nunjucks$/, resource => {
            resource.request = resource.request.replace(/nunjucks/, "nunjucks/browser/nunjucks-slim");
        }),
        new FilterWarningsPlugin({
            exclude: [
                /Critical dependency: the request of a dependency is an expression/
            ]
        }),
        new CleanWebpackPlugin({
            protectWebpackAssets: true,
            cleanOnceBeforeBuildPatterns: ["!*.md", "*.bundle.js"],
            cleanStaleWebpackAssets: false
        }),
        new EventHooksPlugin({
            done: () => {
                // Cleanup annoying output of client because of type only imports triggered by ts-node...
                const tsOutDir = path.resolve(arp.path, "out", "app", "client", "ts");
                if (fs.existsSync(tsOutDir)) rimraf.sync(tsOutDir);
            }
        })
    ]);

    ///////////////////////////////////
    // EXTENDS BUILD MODULE RULES
    // @ts-expect-error
    settings.module.rules = settings.module.rules.concat([{
        test: /\.less$/,
        use: [webpackConfigBaseObject.cacheLoaderSettings("styles"), webpackConfigBaseObject.threadLoaderSettings(),
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

    return settings;
};
