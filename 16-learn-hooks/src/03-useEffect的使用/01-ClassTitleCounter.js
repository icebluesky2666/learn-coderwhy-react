import React, { PureComponent } from 'react'

// 需求: counter 与网页 title 保持一致
export default class TitleCounter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.setTitleCounter()
  }

  componentDidUpdate(prevProps, prevState) {
    // 上一次的 props 和 state
    // console.log(prevProps, prevState)
    // 当前的
    // console.log(this.props, this.state)
    this.setTitleCounter()
  }

  // 设置网页标题为 counter
  setTitleCounter() {
    console.log('更改网页标题', this.state.counter)
    window.document.title = this.state.counter
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
