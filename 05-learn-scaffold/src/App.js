// 同时导入 React 以及内部 Component 函数
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  // 渲染
  render() {
    const { count } = this.state
    return (
      <div>
        <h2>当前计数：{count}</h2>
        <button>-</button>
        <button>+</button>
      </div>
    )
  }
}
