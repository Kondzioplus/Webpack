// Import dependencies.
const webpack = require('webpack');
const _ = require('lodash');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

// Export configuration.
module.exports = (env) => {
   
    env = (_.isPlainObject(env)) ? env : {};
    env = (_.isEmpty(env)) ? {dev: true} : env;
    if (!_.has(env, 'dev') && !_.has(env, 'prod') && !_.has(env, 'test')) {
        throw new Error('Missing environment property on webpack command.');
    }
    return {
        
        context: path.resolve(__dirname, 'src'),
        entry: './js/app.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                  },
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src'),
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                            // Here you should change 'env' to '@babel/preset-env'
                                presets: ['@babel/preset-env'],
  },
                        }
                    ]
                }
            ]
        },
        plugins: [ 
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new FaviconsWebpackPlugin('./favicon.ico')
        ],
        devServer: {
            static: path.resolve(__dirname, 'dist')
        },
        
    };
};