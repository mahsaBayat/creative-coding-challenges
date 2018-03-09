const webpack = require('webpack');
const { resolve } = require('path');
const commonConfig = require('./webpack.config.common.js');
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
    entry: {
        app: [resolve(__dirname, '../..', 'src/components/Root.jsx')],
    },
    mode: 'production',
    output: {
        path: resolve(__dirname, '../../', 'dist'),
        filename: '[name]/[hash:8].js',
        pathinfo: true,
        sourcePrefix: '',
        library: 'BroTemplate',
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HashedModuleIdsPlugin(),
    ],
});
