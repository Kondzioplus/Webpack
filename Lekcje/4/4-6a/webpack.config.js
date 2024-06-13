var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {                           
                        }
                    },                     
                    {
                        loader: 'css-loader',
                        options : {
                            url: true,
                            sourceMap: true,
                            minimize: false,                        
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'), // Prefer `dart-sass`
                            sourceMap: true,
                        },
                    },
                    
                ],
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                 
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        sourceMap: true,
                    }
                
            }
            
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            //publicPath: '../'
        }),
        new HtmlWebpackPlugin({
            title: "My App",
            filename: "index.html",
            template: "src/index.html"
        })
    ]
}