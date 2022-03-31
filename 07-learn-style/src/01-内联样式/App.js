import React, { PureComponent } from 'react'

// 我注释
export default class App extends PureComponent {
  render() {
    const pStyle = {
      color: 'blue',
      textDecoration: 'underline'
    }

    return (
      <div>
        <span style={pStyle}>我就是一个span标签</span>
        <h2 style={{ color: 'red' }}>我是App组件</h2>
      </div>
    )
  }
}
