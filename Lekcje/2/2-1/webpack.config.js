var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true, // ciągłe nasłuchiwanie i tworzenie zamiast wpisywać w terminalu "npm run build".
    devtool: 'source-map' // pokazuje błedy w moich plikach zamiast w BUNDLE.
}