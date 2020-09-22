/* eslint-disable */
const os = require('os');
const path = require('path');
const arp = require('app-root-path');

const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin;

module.exports = (_env, options) => {

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
            filename: "[name].js",
            //chunkFilename: '[name].bundle.js',
            pathinfo: !isDevelopment
        },
        devtool: isDevelopment ? 'cheap-eval-source-map' : '', // use cheap-eval-source-map when sourcemaps are broken
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".njk", ".less"],
            alias: {
                //less path resolve. "~" is replaced by less-loader
                "static": path.resolve(arp.path, "source", "app", "client"),
                //views path resolve
                "~static/views": path.resolve(arp.path, "out", "app", "client", "views"),
                "~bdo/views": path.resolve(arp.path, "out", "app", "views"),
                "~server/views": path.resolve(arp.path, "out", "app", "server", "views")
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
                        beautify: false
                    },
                    sourceMap: false
                }
            })]
        }
    };

    ///////////////////////////////////
    // EXTEND BUILD PLUGINS
    // @ts-expect-error
    if (!isDevelopment) settings.plugins = settings.plugins.concat([new BundleAnalyzerPlugin()]);

    ///////////////////////////////////
    // EXTEND OPTIMIZATION OPTIONS
    if (!isDevelopment) {
        settings.optimization.splitChunks = {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                    reuseExistingChunk: true
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
                    chunks: "initial"
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

    return {
        settings,
        cacheLoaderSettings,
        threadLoaderSettings
    }

};
