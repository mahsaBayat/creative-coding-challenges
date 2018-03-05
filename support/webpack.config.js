const webpack = require('webpack');
const { resolve } = require('path');

const host = '0.0.0.0' || process.env.HOST;
const port = 3030 || process.env.PORT;

module.exports = {
    entry: {
        app: ['react-hot-loader/patch', resolve(__dirname, 'demo/main.jsx')],
    },
    output: {
        filename: '[name].js',
        publicPath: `http://${host}:${port}`,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        host,
        port,
        contentBase: `${__dirname}/demo`,
        compress: true,
        inline: true,
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
