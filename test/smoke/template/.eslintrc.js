module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  rules: {
    semi: 0,
    'comma-dangle': ['error', 'never'],
    'no-console': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // 有一些 event 的时候，不需要 role 属性，不需要其他解释
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/alt-text': [0],
    'jsx-a11y/click-events-have-key-events': 0
  }
}
