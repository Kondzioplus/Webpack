const { merge } = require('webpack-merge');
const parts = require('./webpack.parts');
const path = require('path');

const config = {
    mode: 'production',
    entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom','react-css-modules'],
  },

  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },

    resolve: {
    extensions: ['.*', '.js', '.jsx']
  },
    output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    
  },
}

const prod = merge([
    parts.loadJS(),
    parts.loadCSS(),
    parts.loadImages(),
    parts.loadFonts(),
    parts.loadHTML({
      pluginOptions: 
      {
        template: path.resolve(__dirname, './../src/index.html'),
        filename: 'index.html',
      }
    }),
    parts.loadFavicon(),
    parts.loadSplitChunks(),
 ]);

module.exports = merge(config, prod);