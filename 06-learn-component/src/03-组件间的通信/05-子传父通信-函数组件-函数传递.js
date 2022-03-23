import React, { Component } from 'react'

function ChildCpn(props) {
  const { handleMessage } = props

  return (
    <div>
      <h2>我是 ChildCpn 组件</h2>
      <button onClick={() => handleMessage('你好呀')}>点我告诉父组件消息</button>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.handleMessage('小小石')}>直接触发父组件事件</button>
        <ChildCpn handleMessage={(arg1, arg2) => this.handleMessage(arg1, arg2)} />
      </div>
    )
  }

  handleMessage(msg) {
    console.log(this)
    console.log(msg)
  }
}
