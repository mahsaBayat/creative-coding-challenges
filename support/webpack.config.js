const { resolve } = require('path');

const host = '0.0.0.0' || process.env.HOST;
const port = 3000 || process.env.PORT;

module.exports = {
  entry: {
    app: './demo/index.js',
  },
  output: {
    filename: '[name].js',
    publicPath: `http://${host}:${port}`,
    path: resolve(__dirname, '../dist'),
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
};
