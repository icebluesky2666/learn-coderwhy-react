import React, { Component } from 'react'

class CounterButton extends Component {
  render() {
    const { handleClick } = this.props
    return <button onClick={handleClick}>子组件+</button>
  }
}

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.count}</h2>
        <button onClick={() => this.addCount()}>父组件+</button>
        <CounterButton handleClick={() => this.addCount()} />
      </div>
    )
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    })
  }
}
