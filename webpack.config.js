const arp = require('app-root-path');
const path = require('path');
const os = require('os');
const webpack = require('webpack');
const fs = require('graceful-fs');
const crypto = require('crypto');
const mkdirp = require('mkdirp');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const projectStructureUtils = require('./out/utils/projectStructure');

const appDir = path.resolve(arp.path, "source", "app");
const routesDir = path.resolve(arp.path, "source", "app", "client", "routes");
const notStartWith = path.resolve(appDir, "server");
const virtualEntryPointFilePath = path.resolve(arp.path, "var", "tmp", "virtualEntryPoint.ts");

let lastVirtualEntryPointHash = '';

module.exports = (_env, options) => {
    const settings = {
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
                    mkdirp.sync(path.dirname(virtualEntryPointFilePath));
                    fs.writeFileSync(virtualEntryPointFilePath, fileContent);
                }
                resolve(entryPoints);
            });
        }),
        output: {
            filename: "bundle.js",
            path: path.resolve(arp.path, "out", "app", "client", "js"),
            pathinfo: options.mode !== "development"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".njk"],
            alias: {
                "~static/views": path.resolve(arp.path, "out", "app", "client", "views"),
                "~bdo/views": path.resolve(arp.path, "out", "app", "views"),
                "~server/views": path.resolve(arp.path, "out", "app", "server", "views")
            },
            // Add `.ts` and `.tsx` as a resolvable extension.
            plugins: [
                new TsconfigPathsPlugin({
                    configFile: path.resolve(arp.path, "source", "app", "client", "ts", "tsconfig.json"),
                    extensions: [".ts", ".tsx", ".js"]
                })
            ]
        },
        devtool: 'inline-source-map',
        optimization: {
            noEmitOnErrors: true,
            removeAvailableModules: options.mode !== "development",
            removeEmptyChunks: options.mode !== "development",
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
        plugins: [
            new ForkTsCheckerWebpackPlugin({
                useTypescriptIncrementalApi: true,
                checkSyntacticErrors: true,
                tsconfig: path.resolve(arp.path, "source", "app", "client", "ts", "tsconfig.json")
            }),
            new webpack.NormalModuleReplacementPlugin(/type-graphql$/, resource => {
                resource.request = resource.request.replace(/type-graphql/, "type-graphql/dist/browser-shim");
            }),
            new FilterWarningsPlugin({
                exclude: /Critical dependency: the request of a dependency is an expression/
            }),
            new CleanWebpackPlugin({
                protectWebpackAssets: true,
                cleanOnceBeforeBuildPatterns: ["!*.md"],
                cleanStaleWebpackAssets: false
            }),
            new CopyPlugin([{
                from: path.resolve(arp.path, "node_modules", "source-map-support", "browser-source-map-support.js"),
                to: path.resolve(arp.path, "out", "app", "client", "js", "browser-source-map-support.js")
            }])
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
                            poolTimeout: options.watch ? Infinity : 1000 // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
                            transpileOnly: true,
                            experimentalWatchApi: options.watch === true
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
                            poolTimeout: options.watch ? Infinity : 1000 // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
                        }
                    },
                    {
                        loader: 'nunjucks-loader'
                    }
                ]
            }]
        }
    };
    if (options.watch) {
        settings.plugins.push(new webpack.WatchIgnorePlugin([path.basename(virtualEntryPointFilePath)]));
        settings.watchOptions = {
            ignored: ["node_modules", "var/**/*"]
        };
    }

    return settings;
};
