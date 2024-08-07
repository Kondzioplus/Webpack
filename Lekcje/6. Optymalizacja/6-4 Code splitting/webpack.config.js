const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin'); 
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
  
  mode: 'development',
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom','react-css-modules'],
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  devServer: {
        port: 8080,
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        overlay: true,
    },
 

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: ['babel-loader']
        
      },
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/
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
        test: /\.(png|jpe?g|gif|jpg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name].[ext]'
        },
       
        
        


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
    new webpack.optimize.SplitChunksPlugin({
      name:'vendor',
     
    }),
    new FaviconsWebpackPlugin('./favicon.ico'),
    
    
     new webpack.HotModuleReplacementPlugin(),
    /* new BrowserSyncPlugin({
      host: 'localhost',
      port: 9100,
      proxy: 'http://localhost:8080',
  }, {
      reload: false,
  }) */
  ], 
  resolve: {
    extensions: ['.*', '.js', '.jsx']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
    
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};