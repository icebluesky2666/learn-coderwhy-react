import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello World',
      name: '小小石'
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.changeText()}>修改消息信息</button>
        <hr />
        <button onClick={() => this.moreSetState()}>多次修改消息信息</button>
        <hr />
        <button onClick={() => this.moreSetStateReduce()}>多次修改消息信息累加</button>
      </div>
    )
  }

  changeText() {
    this.setState({
      message: '你好呀，小小石'
    })

    // 其实是 setState 内部帮我们做了下面这一步,这样 name 属性才不会被覆盖
    // Object.assign({}, this.state, { message: '你好呀。小小石' })
  }

  moreSetState() {
    // React 内部将批量的 setState 进行合并,变成一个链表结构(queue),使用 do while 依次处理,保留最后的结果,更新render
    this.setState({
      message: this.state.message + ' 你好呀，小小石1'
    })

    this.setState({
      message: this.state.message + ' 你好呀，小小石2'
    })
  }

  moreSetStateReduce() {
    // 使用函数形式接收回调参数然后进行合并s
    this.setState((prevState, props) => {
      console.log(prevState, props)
      return {
        message: prevState.message + ' 小小石1'
      }
    })

    this.setState((prevState, props) => {
      console.log(prevState, props)
      return {
        message: prevState.message + ' 小小石2'
      }
    })
  }
}
