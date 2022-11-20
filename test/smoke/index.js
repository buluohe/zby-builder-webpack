const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const prodConfig = require('../../lib/webpack.prod.js')
const Mocha = require('mocha')

const mocha = new Mocha({
  timeout: 10000
})
process.chdir(path.join(__dirname, 'template'))

rimraf('./dist', () => {
  webpack(prodConfig, (error, stats) => {
    if (error) {
      console.log('err', error)
      process.exit(2)
    }
    console.log(
      'stats',
      stats.toString({
        colors: true,
        modules: false,
        chilidren: false
      })
    )

    console.log('开始执行测试用例')
    mocha.addFile(path.join(__dirname, './css-js-test.js'))
    mocha.addFile(path.join(__dirname, './html-test.js'))
    mocha.run()
  })
})
