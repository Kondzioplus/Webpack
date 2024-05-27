var path = require('path');

var config = {};
// punkt wejścia
config.entry = './src/print.js';

// punkt wyjscia
config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
}

module.exports = config;