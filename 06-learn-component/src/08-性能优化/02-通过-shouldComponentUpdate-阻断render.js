import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello React'
    }
  }

  // 通过返回值判断 boolean
  // true: 更新 render
  // false: 不更新 render
  shouldComponentUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
    return false
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.updateMsg()}>更新消息</button>
      </div>
    )
  }

  updateMsg() {
    this.setState({
      message: '你好呀，小小石'
    })
  }
}
