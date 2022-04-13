import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h3>当前计数: {counter}</h3>
        <button onClick={() => this.setState({ counter: counter + 1 })}>+1</button>
        <button onClick={() => this.setState({ counter: counter - 1 })}>-1</button>
      </div>
    )
  }
}
