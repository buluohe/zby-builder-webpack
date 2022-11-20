const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.base.js');

const devConfig = {
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only'
  },
  mode: 'development',
  devtool: 'cheap-source-map'
};
module.exports = merge(baseConfig, devConfig);
