const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { plugins } = require('../webpack.config');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin'); 
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports.loadJS = ({
    test = /\.(js|jsx)$/,
    exclude = /node_modules/,
} = {}) => {

    return {
        module : {
            rules : [{
                test,
                exclude,
                use: ['babel-loader']
            }]
        }
    }
}

module.exports.loadCSS = () => {

    return {
        module : {
            rules : [
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
            ]
        }
    }
}

module.exports.loadImages = () => {
    return {
        module : {
            rules : [{
                test: /\.(png|jpe?g|gif|jpg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[ext]'
                },
            }]
        }
    }
}

module.exports.loadFonts = () => {
    return {
        module : {
            rules : [{
                test: /\.(woff|woff2)$/,
        
                type: 'asset/resource',
                generator: {
                filename: './fonts/[name][ext]'
      } 
            }]
        }
    }
}

module.exports.loadHTML = ({
    pluginOptions
} = {}) => {
    return {
        module : {
            rules : [{
                test: /\.html$/,
                use: [
                {
                    loader: 'html-loader',
              
                }
                     ]
            }]
        },
        plugins : [
            new HtmlWebpackPlugin (pluginOptions),
        ]
    }
}

module.exports.loadFavicon = () => {
    return {
        plugins : [
            new FaviconsWebpackPlugin('./favicon.ico'),
        ]
    }
}

module.exports.loadSplitChunks = () => {
    return {
        plugins : [
            new webpack.optimize.SplitChunksPlugin({
                name:'vendor',
               
              }),
        ]
    }
}

// module.exports.DevServer = ({
//     port = 8080,
//     //hot = true,
//     //overlay = true,
      
    
//     contentBase
// } = {}) => {

//     // const plugins = [];
//     // if (hot) {
//     //     plugins.push(new webpack.HotModuleReplacementPlugin());
//     // }
//     return {
//         port,
//         contentBase,
//         //hot,
//         //overlay,
//     }
//     plugins
    
// }

module.exports.BrowserSync = ({
    host = 'localhost',
    port = 9100,
    proxy = 'http://localhost:8080',
    options = {
        reload: false
    }
} = {}) => {
    return {
        plugins: [
            new BrowserSyncPlugin({
                       host,
                       port,
                       proxy,
                   }, {
                       options,
                   })
        ]
    }
}
//  module.exports.LoaderOptions = ({
//     options = {
//     context: __dirname,
//     overlay: true,
//   }
//  } = {}) => {
//     return {
//         plugins : [
//             new webpack.LoaderOptionsPlugin({
                
//             },
//         {
//             options,
//         }),
//         ]
//     }
//  }