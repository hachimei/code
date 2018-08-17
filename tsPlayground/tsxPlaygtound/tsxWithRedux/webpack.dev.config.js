const webapck = require('webpack');
const config = require('./webpack.common.config.js');

config.devServer = {
    hot: true,
    publicPath: '/dist/'
}

config.plugins.push(new webapck.HotModuleReplacementPlugin());

config.mode = 'development';

module.exports = config;