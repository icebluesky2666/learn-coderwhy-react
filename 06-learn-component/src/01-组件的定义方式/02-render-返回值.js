import React, { Component } from 'react'

export default class App extends Component {
  render() {
    // return '1'
    // return 1
    return (
      // 数组 或 frgments 使得 render 方法可以返回多个元素
      [<div>App</div>, <div>App2</div>]
    )
  }
}
