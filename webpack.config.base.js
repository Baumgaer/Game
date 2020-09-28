/* eslint-disable */
const os = require('os');
const path = require('path');
const arp = require('app-root-path');

const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = (_env, options, returnConfigObject) => {

    console.log("operating in mode", options.mode);

    ///////////////////////////////////
    // PROVIDE UTILS

    const isDevelopment = Boolean(options.mode === "development");

    const cacheLoaderSettings = (cacheName) => {
        return {
            loader: 'cache-loader',
            options: {
                cacheDirectory: path.resolve(arp.path, options.cacheDir, cacheName)
            }
        };
    };

    const threadLoaderSettings = () => {
        return {
            loader: 'thread-loader',
            options: {
                // there should be 1 cpu for the fork-ts-checker-webpack-plugin
                workers: Math.max(Math.floor((os.cpus().length) / 2), 1),
                poolRespawn: false,
                poolTimeout: options.watch ? Infinity : 1000 // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
            }
        };
    };

    ///////////////////////////////////
    // CONFIGURE BUILD

    const settings = {
        output: {
            filename: "[name].js"
        },
        devtool: isDevelopment ? 'cheap-eval-source-map' : '', // use cheap-eval-source-map when sourcemaps are broken
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".njk", ".less"],
            alias: {
                //less path resolve. "~" is replaced by less-loader
                "static": path.resolve(arp.path, "source", "app", "client")
            },
            // Add `.ts` and `.tsx` as a resolvable extension.
            plugins: [
                new TsconfigPathsPlugin({
                    configFile: path.resolve(arp.path, options.tsConfigPath),
                    extensions: [".ts", ".tsx", ".js"]
                })
            ]
        },
        plugins: [
            new webpack.ExtendedAPIPlugin(),
            new webpack.DefinePlugin({
                ENVIRONMENTAL_ROUTES_PATH: JSON.stringify(path.resolve(arp.path, options.scriptDir, "routes")),
                ENVIRONMENTAL_MODELS_PATH: JSON.stringify(path.resolve(arp.path, options.scriptDir, "models")),
                ENVIRONMENTAL_INTERFACES_PATH: JSON.stringify(path.resolve(arp.path, options.scriptDir, "interfaces"))
            }),
            new CleanWebpackPlugin({
                protectWebpackAssets: true,
                cleanOnceBeforeBuildPatterns: options.cleanupPatterns ? options.cleanupPatterns.concat(["!*.md"]) : ["!*.md"],
                cleanStaleWebpackAssets: false
            }),
            new ManifestPlugin({
                fileName: options.manifestFileName || "chunkManifest.json",
                sort: (a, b) => {
                    if (a < b) return 1;
                    else if (a > b) return -1;
                    else return 0;
                },
                generate: (_seed, _fileDescriptor, entryPoints) => {
                    return entryPoints;
                }
            }),
            new ForkTsCheckerWebpackPlugin({
                async: true,
                typescript: {
                    enabled: true,
                    configFile: path.resolve(arp.path, options.tsConfigPath),
                    diagnosticOptions: {
                        syntactic: true
                    },
                    profile: true
                }
            }),
            new FilterWarningsPlugin({
                exclude: [
                    /Critical dependency: the request of a dependency is an expression/
                ]
            })
        ],
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: [cacheLoaderSettings("typescript"), threadLoaderSettings(), {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            "@babel/plugin-proposal-nullish-coalescing-operator",
                            "@babel/plugin-proposal-optional-chaining"
                        ],
                        sourceMap: 'inline'
                    }
                }, {
                    loader: 'ts-loader',
                    options: {
                        happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
                        transpileOnly: true,
                        experimentalWatchApi: options.watch === true
                    }
                }]
            }, {
                test: /locales/, // TODO: Test could be more specific
                loader: '@alienfast/i18next-loader',
                // options here
                query: { basenameAsNamespace: true }
            }, {
                test: /\.(njk|nunjucks)$/,
                use: [cacheLoaderSettings("templates"), threadLoaderSettings(), {
                    loader: 'renewed-nunjucks-loader',
                    options: {
                        sourceMap: 'inline',
                        config: path.resolve(arp.path, "nunjucks.config.js"),
                        quiet: true
                    }
                }]
            }]
        },
        optimization: {
            noEmitOnErrors: true,
            removeAvailableModules: !isDevelopment,
            removeEmptyChunks: !isDevelopment,
            minimize: !isDevelopment,
            minimizer: [new TerserPlugin({
                sourceMap: false,
                extractComments: false,
                terserOptions: {
                    warnings: false,
                    compress: true,
                    keep_classnames: true,
                    keep_fnames: true,
                    output: {
                        ecma: 6,
                        comments: false,
                        beautify: false,
                        quote_style: 3
                    },
                    sourceMap: false
                }
            })]
        }
    };

    ///////////////////////////////////
    // EXTEND BUILD PLUGINS

    if (!isDevelopment) settings.plugins = settings.plugins.concat([new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: true,
        generateStatsFile: true,
        statsFilename: path.resolve(arp.path, "var", "webpack", "stats", options.analyzerFileName),
        reportFilename: path.resolve(arp.path, "var", "webpack", "reports", options.analyzerFileName.split(".").map((pathPart, index, array) => {
            if (index === array.length - 1) return "html";
            return pathPart;
        }).join("."))
    })]);

    ///////////////////////////////////
    // EXTEND OPTIMIZATION OPTIONS
    if (!isDevelopment) {
        settings.optimization.splitChunks = {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                },
                templates: {
                    test: /\.njk/,
                    name: "templates",
                    enforce: true,
                    chunks: "initial"
                },
                lib: {
                    test: /[\\/]lib[\\/]/,
                    name: "lib",
                    chunks: "initial",
                    reuseExistingChunk: true
                },
                styles: {
                    test: /\.less/,
                    name: "styles",
                    enforce: true,
                    chunks: "initial"
                }
            }
        };
    }

    ///////////////////////////////////
    // EXTEND WATCH OPTIONS
    if (options.watch) settings.watchOptions = { ignored: ["node_modules", "var/**/*"] };

    const webpackConfigObject = { settings, cacheLoaderSettings, threadLoaderSettings };
    return returnConfigObject ? webpackConfigObject : settings;

};
