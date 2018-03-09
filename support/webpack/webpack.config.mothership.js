const { resolve } = require('path');
const webpackBuildConfig = require('./webpack.config');
const webpackDevConfig = require('./webpack.config.dev');
const merge = require('webpack-merge');

module.exports = merge.smartStrategy({
    entry: 'replace',
    output: 'replace',
    mode: 'replace',
})(webpackBuildConfig, webpackDevConfig, {
    entry: {
        app: ['react-hot-loader/patch', resolve(__dirname, '../..', 'src/components/Root')],
    },
    output: {
        filename: '[name].js',
        publicPath: '/',
        library: 'BroTemplate',
    },
    devServer: {
        contentBase: resolve(__dirname, '../..', 'src/'),
    },
});
