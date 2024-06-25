const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode: 'production',
  entry: './src/index.js',
  performance: {
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']

      },
      {
        test: /\.(scss|css)$/,

        use: [

          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader:'sass-loader',

          }
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[ext]'
        }



      },
      {
        test: /\.(woff|woff2)$/,

          type: 'asset/resource',
          generator: {
          filename: './fonts/[name][ext]'
} 

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

    new HtmlWebpackPlugin ({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.LoaderOptionsPlugin,
    new webpack.HotModuleReplacementPlugin(),
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