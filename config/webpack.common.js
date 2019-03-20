const webpack = require('webpack');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const METADATA = {
    title: 'Angular starter',
    baseUrl: '/',

};
module.exports = function (options) {
    isProd = ['production', 'live', 'staging'].indexOf(options.env) !== -1;
    return {
        entry: {
            quote: './angular/quote/quote.js',
            policy: './angular/policy/policy.js'
        },

        /*
         * Options affecting the resolving of modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve
         */
        resolve: {

            /*
             * An array of extensions that should be used to resolve modules.
             *
             * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
             */
            extensions: ['.ts', '.js', '.json'],

            // An array of directory names to be resolved to the current directory
            modules: [helpers.root('src'), 'node_modules'],

        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.join(__dirname, 'src')],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }],
            }]
        },
        plugins: [

            new HtmlWebpackPlugin({
                title: 'Quote',
                filename:'quote.html',
                template: 'angular/quote.html',
                chunksSortMode: 'dependency',
                inject: 'head',
                metadata: METADATA
            }),
            new HtmlWebpackPlugin({
                title: 'Policy',
                filename:'policy.html',
                template: 'angular/policy.html',
                chunksSortMode: 'dependency',
                inject: 'head',
                metadata: METADATA
            })
        ],
        optimization: {
            splitChunks: {
                chunks:'all'
            }
        }
    }
};