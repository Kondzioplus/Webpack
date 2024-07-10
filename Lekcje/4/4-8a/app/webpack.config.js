const webpack = require('webpack');
const _ = require('lodash');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        
          type: 'asset/resource',
          generator: {
          filename: './fonts/[name][ext]'
} 
        
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[ext]'
        }
        


      },
    {
      test: /\.html$/,
      use: [
      
          {
              loader: 'html-loader',
              
          }
      ]
  }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin ({
      template: './src/template.html',
      filename: 'index.html',
    }),
    new webpack.LoaderOptionsPlugin
  ],
  resolve: {
    extensions: ['.*', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};