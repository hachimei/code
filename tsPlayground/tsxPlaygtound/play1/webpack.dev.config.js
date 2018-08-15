const webpack = require('webpack');
let config = require('./webpack.common.config.js');

config.devServer = {
    hot: true,
    publicPath: '/dist/'
}

module.exports = config;