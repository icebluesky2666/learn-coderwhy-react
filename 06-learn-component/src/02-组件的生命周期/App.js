import React, { Component } from 'react'

class Cpn extends Component {
  render() {
    return <div>我是Cpn组件</div>
  }

  componentWillUnmount() {
    console.log('执行了 Cpn 组件的 will unmount')
  }
}

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      isShow: true
    }

    console.log('执行了组件的 constructor')
  }

  render() {
    console.log('执行了组件的 render')

    const { count, isShow } = this.state

    return (
      <div>
        <h2>当前计数：{count}</h2>
        <button onClick={() => this.addCount()}>+</button>

        <hr />

        <button onClick={() => this.changeCpnShow()}>切换Cpn</button>
        {isShow && <Cpn />}
      </div>
    )
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  componentDidMount() {
    console.log('执行了组件的 mount')
  }

  componentDidUpdate() {
    console.log('执行了组件的 update')
  }
}
