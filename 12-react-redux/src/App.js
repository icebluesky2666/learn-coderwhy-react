import React, { Component } from 'react'
import store from './store'
import Home from './pages/home'
import About from './pages/about'
// import { ADD_NUMBER, SUB_NUMBER } from './store/constants'
import { addAction, subAction } from './store/actionCreators'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    console.log('App 组件挂载成功')
    this.unSubscribe = store.subscribe(() => {
      console.log('监听到变更了: ', store.getState())
      // 更新 render 函数,重新进行页面渲染
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    // 取消订阅
    console.log('App 组件卸载成功')
    this.unSubscribe()
  }

  // 增加计数器数量
  addCounter = (num) => {
    store.dispatch(addAction(num))
  }

  // 减少计数器数量
  subCounter = (num) => {
    store.dispatch(subAction(num))
  }

  render() {
    return (
      <div>
        React App Template
        <Home {...this.state} addCounter={this.addCounter} />
        <About {...this.state} subCounter={this.subCounter} />
      </div>
    )
  }
}
