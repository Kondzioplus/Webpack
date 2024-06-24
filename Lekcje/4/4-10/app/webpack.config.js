const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        
      },
      {
        test: /\.(css)$/,
        
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      
     {
      test: /\.html$/,
      use: [
      
          {
              loader: 'html-loader',
              
          }
      ]
  },
  
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin ({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.LoaderOptionsPlugin
  ],
  resolve: {
    extensions: ['.*', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};