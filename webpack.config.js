var webpack = require('webpack');


module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "public/build/bundle.js",
        sourceMapFilename: "public/build/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/, /public/]
                },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
                }
                ]
            }
        };