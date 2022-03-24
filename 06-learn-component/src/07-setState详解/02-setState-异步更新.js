import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    console.log('组件 render 函数执行:', this.state.counter)
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        {/* onClick 是 React 合成事件 */}
        <button onClick={() => this.increment()}>加1</button>
        <hr />
        <button onClick={() => this.incrementSync()}>async/await 同步加1</button>
        <hr />
        <button onClick={() => this.incrementCallback()}>callback 同步加1</button>
        <hr />
        <button onClick={() => this.incrementCallback()}>setTimeout 同步加1</button>
        <hr />
        <button id="app-btn">DOM 原生点击 同步加1</button>
      </div>
    )
  }

  componentDidMount() {
    const appBtn = document.getElementById('app-btn')
    appBtn.addEventListener('click', () => {
      this.setState({
        counter: this.state.counter + 1
      })
      console.log('组件 原生DOM:', this.state.counter) // 1
    })
  }

  componentDidUpdate() {
    console.log('组件 componentDidUpdate 函数执行:', this.state.counter)
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
    // 保持 state 和 props 的同步性
    // React 内部设计为异步的想法是合并同一时间的的 setState,不让 render 函数频繁渲染,以防出现一些开发中未知的问题
    // this.setState({
    //   counter: this.state.counter + 2
    // })
    // this.setState({
    //   counter: this.state.counter + 3
    // })
    // 第一次进入 counter 的值应该从默认值 0 + 1 变成 1,然而我们发现这时打印 counter 还是 0
    // 证明其实 setState 是一个异步函数
    console.log('组件 increment:', this.state.counter) // 0
  }

  // 1.通过 async/await 使得 setState 函数变成同步
  async incrementSync() {
    const res = await this.setState({
      counter: this.state.counter + 1
    })
    // console.log(res) // undefined
    console.log('组件 incrementSync:', this.state.counter) // 1
  }

  // 2.通过回调函数的方式变成同步
  incrementCallback() {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      (res) => {
        // console.log(res) // undefined
        console.log('组件 incrementCallback', this.state.counter) // 1
      }
    )
  }

  // 3.将 setState 放到 setTimeout 中
  incrementSetTimeout() {
    setTimeout(() => {
      this.setState({
        counter: this.state.counter + 1
      })
      console.log('组件 incrementSetTimeout:', this.state.counter) // 1
    }, 0)
  }
}
