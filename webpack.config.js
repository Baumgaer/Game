const arp = require('app-root-path');
const path = require('path');
const os = require('os');
const webpack = require('webpack');
const fs = require('graceful-fs');
const crypto = require('crypto');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const projectStructureUtils = require('./out/utils/projectStructure');

const appDir = path.resolve(arp.path, "source", "app");
const routesDir = path.resolve(arp.path, "source", "app", "client", "routes");
const notStartWith = path.resolve(appDir, "server");
const virtualEntryPointFilePath = path.resolve(arp.path, "var", "tmp", "virtualEntryPoint.ts");

let lastVirtualEntryPointHash = '';

module.exports = {
    entry: () => new Promise((resolve) => {
        const md5 = crypto.createHash("md5");
        const entryPoints = [
            path.resolve(arp.path, "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"),
            virtualEntryPointFilePath
        ];
        const virtualEntryPoints = [];
        projectStructureUtils.walk(appDir, (file) => {
            if (file.endsWith(".ts") &&
                !file.endsWith(".d.ts") &&
                !file.startsWith(notStartWith) &&
                path.dirname(file) !== appDir &&
                path.dirname(file) !== routesDir
            ) {
                entryPoints.push(file);
                if (file.startsWith(path.resolve(appDir, "client", "ts", "routes"))) {
                    virtualEntryPoints.push(path.basename(file).replace(".ts", ""));
                }
            }
        }).then(() => {
            const fileContent = `(<any>window).virtualRoutes = ${JSON.stringify(virtualEntryPoints)};\n`;
            const currentVirtualEntryPointHash = md5.update(fileContent).digest('hex');
            if (currentVirtualEntryPointHash != lastVirtualEntryPointHash) {
                lastVirtualEntryPointHash = currentVirtualEntryPointHash;
                fs.writeFileSync(virtualEntryPointFilePath, fileContent);
            }
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
    devtool: 'inline-source-map',
    optimization: {
        noEmitOnErrors: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial"
                },
                templates: {
                    test: /\.njk/,
                    name: "templates",
                    chunks: "initial"
                }
            }
        }
    },
    watchOptions: {
        ignored: ["node_modules", "var/**/*"]
    },
    plugins: [
        new LiveReloadPlugin(),
        new webpack.WatchIgnorePlugin([path.basename(virtualEntryPointFilePath)]),
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
        new FilterWarningsPlugin({
            exclude: /Critical dependency: the request of a dependency is an expression/
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
                        workers: (os.cpus().length - 1),
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
