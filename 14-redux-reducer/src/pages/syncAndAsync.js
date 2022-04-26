import React, { Component } from 'react'

class SyncAndAsync extends Component {
  // TODO: React18后,下面的同步方法失效
  // "react": "^17.0.2",
  // "react-dom": "^17.0.2",
  constructor(props) {
    super(props)
    this.state = {
      name: 'chen'
    }
  }

  componentDidMount() {
    const oneBtn = document.querySelector('#one-btn')
    oneBtn.addEventListener('click', () => {
      this.setState({ name: 'hao' })
      console.log('点击了', this.state.name)
    })
  }

  addCounter() {
    setTimeout(() => {
      this.setState({ name: 'xiao' })
      console.log('计时器', this.state.name)
    }, 0)
  }

  addCallback() {}

  render() {
    console.log('SyncAndAsync 组件重新渲染')
    const { name } = this.state
    return (
      <div>
        <h3>syncAndAsync</h3>
        <p>{name}</p>
        <h4>第一种同步: 原生DOM事件操作</h4>
        <button id="one-btn">点击我试试</button>

        <h4>第二种同步: 定时器函数</h4>
        <button onClick={() => this.addCounter()}>点击我试试</button>
      </div>
    )
  }
}

export default SyncAndAsync
