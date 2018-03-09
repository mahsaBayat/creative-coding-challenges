const webpack = require('webpack');
const { resolve } = require('path');
const commonConfig = require('./webpack.config.common.js');
const merge = require('webpack-merge');

const host = 'localhost' || process.env.HOST;
const port = 3000 || process.env.PORT;

module.exports = merge(commonConfig, {
    entry: {
        app: ['react-hot-loader/patch', resolve(__dirname, '..', 'demo/main.jsx')],
    },
    output: {
        filename: '[name].js',
        publicPath: '/',
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        host,
        port,
        contentBase: resolve(__dirname, '..', 'demo'),
        compress: true,
        inline: true,
        hot: true,
        open: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
