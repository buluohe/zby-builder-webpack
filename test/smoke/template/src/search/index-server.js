// import React from 'react'
// import ReactDOM from 'react-dom'
// import '../../common'
// import './search.less'
// import './search.css'
// import { a, b } from './tree-shaking'
// import logo from './assets/delete.png'

const React = require('react')
const ReactDOM = require('react-dom')
const logo = require('./assets/delete.png')
const largeNumber = require('zby-large-number')
require('../../common')
require('./search.less')
require('./search.css')

class Search extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      ComText: ''
    }
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      console.log('Text', Text)
      this.setState({ ComText: Text.default })
    })
  }

  render() {
    const { ComText } = this.state
    const resultNum = largeNumber('111', '999')
    return (
      <>
        <div className="css-file">css</div>
        <div className="less-file" onClick={this.loadComponent.bind(this)}>
          less{resultNum}
        </div>
        {ComText ? <ComText /> : null}
        <img src={logo} />
      </>
    )
  }
}

module.exports = <Search />
