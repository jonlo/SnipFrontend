var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

var API_URL = {
    production: JSON.stringify('prod-url'),
    development: JSON.stringify('http://localhost:3000/')
}
var devMode = true;

module.exports = {
    entry: ['babel-polyfill', './src/scripts/index.js','./src/styles/main.css'],
    watch: true,
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                        sourceMap: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // only enable hot in development
                            hmr: devMode,
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: devMode
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true         // webpack@2.x and newer
                        }
                    },
                    {
                        loader: 'url-loader',
                        options: { limit: 8192 }
                    }
                ]
            },
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
                /*use: [
                    {
                        loader: 'ttf-loader',
                        options: {
                            name: './font/[hash].[ext]'
                        }
                    }
                ]*/
            }
        ]
    }, plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env.MEDIATOR_JS_COV': JSON.stringify('development')
        }),
        //new BundleAnalyzerPlugin()
    ], optimization: {
        minimize: false
    },
};