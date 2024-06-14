var path = require('path');

module.exports = {
  mode: 'development',
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
        test: /\.(jpg|jpeg|gif|png)$/,
         
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]',
                sourceMap: true,
            }
        
    }
    ]
  }
}