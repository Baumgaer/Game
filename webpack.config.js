const arp = require('app-root-path');
const path = require('path');
const os = require('os');
const webpack = require('webpack');
const fs = require('graceful-fs');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const projectStructureUtils = require('./out/utils/projectStructure');

module.exports = {
    entry: () => new Promise((resolve) => {
        const entryPoints = [
            path.resolve(arp.path, "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js")
        ];
        const appDir = path.resolve(arp.path, "source", "app");
        const notStartWith = path.resolve(appDir, "server");
        projectStructureUtils.walk(path.resolve(arp.path, "source", "app"), (file) => {
            if (file.endsWith(".ts") && !file.endsWith(".d.ts") && !file.startsWith(notStartWith) && path.dirname(file) !== appDir) {
                entryPoints.push(file);
            }
        }).then(() => {
            resolve(entryPoints);
        });
    }),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "out", "app", "client", "js")
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".njk"],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: "./source/app/client/ts/tsconfig.json"
            })
        ]
    },
    devtool: 'source-map',
    optimization: {
        noEmitOnErrors: true
    },
    watchOptions: {
        ignored: ["node_modules"]
    },
    plugins: [
        new LiveReloadPlugin(),
        new ForkTsCheckerWebpackPlugin({
            useTypescriptIncrementalApi: true,
            tsconfig: path.resolve(arp.path, "source", "app", "client", "ts", "tsconfig.json")
        }),
        new ForkTsCheckerNotifierWebpackPlugin({
            title: 'Frontend',
            excludeWarnings: false
        }),
        new webpack.NormalModuleReplacementPlugin(/type-graphql$/, resource => {
            resource.request = resource.request.replace(/type-graphql/, "type-graphql/dist/browser-shim");
        }),
        new EventHooksPlugin({
            shouldEmit: () => {
                let shouldEmit = false;
                try {
                    fs.accessSync(path.resolve(arp.path, ".git", "index.lock"), fs.constants.F_OK);
                } catch (error) {
                    shouldEmit = true;
                }
                return shouldEmit;
            }
        })
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'cache-loader',
                    options: {
                        cacheDirectory: path.resolve(arp.path, "var", "buildcache", "frontend", "typescript")
                    }
                },
                {
                    loader: 'thread-loader',
                    options: {
                        // there should be 1 cpu for the fork-ts-checker-webpack-plugin
                        workers: Math.floor((os.cpus().length - 1) / 2),
                        poolRespawn: false,
                        poolTimeout: Infinity // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
                    }
                },
                {
                    loader: 'ts-loader',
                    options: {
                        happyPackMode: true // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
                    }
                }
            ]
        }, {
            test: /\.(njk|nunjucks)$/,
            use: [
                {
                    loader: 'cache-loader',
                    options: {
                        cacheDirectory: path.resolve(arp.path, "var", "buildcache", "frontend", "templates")
                    }
                },
                {
                    loader: 'thread-loader',
                    options: {
                        // there should be 1 cpu for the fork-ts-checker-webpack-plugin
                        workers: Math.floor((os.cpus().length - 1) / 2),
                        poolRespawn: false,
                        poolTimeout: Infinity // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
                    }
                },
                {
                    loader: 'nunjucks-loader'
                }
            ]
        }]
    }
};
