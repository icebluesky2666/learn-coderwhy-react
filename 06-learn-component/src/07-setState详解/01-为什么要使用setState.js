import React, { Component } from 'react'

// 1.App 继承于 Componet 类
// 2.Component 类在 prototype 原型上绑定了 setState 函数
// 3.所以我们可以直接使用 this.setState() 相当于子类继承父类的方法
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>加1</button>
      </div>
    )
  }

  increment() {
    // React 中没有实现类似 vue2 中通过 Object.definePropetry() 来监听数据变化从而重新渲染组件的功能
    // 但是给我们暴露了 setState 函数让我们通知 React 重新渲染
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
