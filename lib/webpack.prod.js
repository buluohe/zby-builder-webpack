const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const merge = require('webpack-merge')
const cssnano = require('cssnano')

const baseConfig = require('./webpack.base.js')

const prodConfig = {
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExpressively: /\.css$/g,
      cssProcessor: cssnano
    }),
    // 打包时排除某些库
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://now8.gtimg.com/now/lib/16.8.6/react.min.js',
          global: 'React'
        },
        {
          module: 'react-dom',
          entry: 'https://now8.gtimg.com/now/lib/16.8.6/react-dom.min.js',
          global: 'ReactDOM'
        }
      ]
    })
  ],
  mode: 'production',
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        common: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  }
}
module.exports = merge(baseConfig, prodConfig)
