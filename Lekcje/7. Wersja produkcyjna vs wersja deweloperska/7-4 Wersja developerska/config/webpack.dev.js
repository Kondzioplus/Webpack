const { merge } = require('webpack-merge');
const parts = require('./webpack.parts');
const path = require('path');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
    //'react-hot-loader/path',
    './src/index.js',
    ],

//   optimization: {
//     splitChunks: {
//       // include all types of chunks
//       chunks: 'all',
//     },
//   },

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
    //parts.DevServer({
    //     contentBase: path.join(__dirname, '../dist')
    // }),
    parts.BrowserSync(),
    //parts.LoaderOptions(),
 ]);

module.exports = merge(config, prod);