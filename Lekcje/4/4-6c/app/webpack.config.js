// Import dependencies.
const webpack = require('webpack');
const _ = require('lodash');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


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
                },
                
                
                  {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                  },
                  {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name].[ext]'
                    }
                    

       
                  },
                
            ]
        },
        plugins: [ 
            
            new FaviconsWebpackPlugin('./favicon.ico'),
           
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
        ],
        devServer: {
            static: path.resolve(__dirname, 'dist')
        },
        
    };
};