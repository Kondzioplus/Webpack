const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const config = {
    entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom','react-css-modules'],
  },

    resolve: {
    extensions: ['.*', '.js', '.jsx']
  },
    output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
    
  },
}

const prod = merge([
    parts.loadJS(),
 ]);

module.exports = merge(config, prod);