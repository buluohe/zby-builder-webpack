const assert = require('assert')

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base')

  console.log('baseConfig', baseConfig)
  it('entry', () => {
    assert.equal(
      baseConfig.entry.index,
      '/Users/zhangboyu/zby-project/zby-study/play-webpack/builder-wepback/test/smoke/template/src/index/index.js'
    )
    assert.equal(
      baseConfig.entry.search,
      '/Users/zhangboyu/zby-project/zby-study/play-webpack/builder-wepback/test/smoke/template/src/search/index.js'
    )
  })
})
