import React, { Component, createRef, PureComponent } from 'react'

class Counter extends PureComponent {
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
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleRef2: createRef(),
      counterRef: createRef()
    }
    this.titleRef3 = null
  }

  render() {
    const { titleRef2, counterRef } = this.state
    return (
      <div>
        {/* <h2 ref="字符串/对象/函数">Hello React</h2> */}
        <h2 ref="titleRef1">Hello React</h2>
        <h2 ref={titleRef2}>Hello React</h2>
        <h2 ref={(ref) => (this.titleRef3 = ref)}>Hello React</h2>
        <button onClick={() => this.changeText()}>通过ref改变文本内容</button>
        <hr />
        <Counter ref={counterRef} />
        <button onClick={() => this.addCounter()}>增加 Counter 组件的计数</button>
      </div>
    )
  }

  changeText() {
    const { titleRef2 } = this.state
    const titleRef3 = this.titleRef3
    // TIP: this.refs 这种获取方式已经在 React 中被废弃
    const titleRef1 = this.refs.titleRef1
    // 1.字符串方式
    titleRef1.innerHTML = 'Hello JS'
    // 2.对象方式: 通过 current 来获取到当前 DOM 元素
    titleRef2.current.innerHTML = 'Hello Jquery'
    // 3.回调函数方式
    titleRef3.innerHTML = 'Hello TypeScript'
    console.log(titleRef1)
    console.log(titleRef2)
    console.log(titleRef3)
  }

  addCounter() {
    // 拿到的是一个 ref 对象,可以直接调用内部的函数,属性等等...
    // console.log(this.state.counterRef.current)
    const counterObj = this.state.counterRef.current
    counterObj.increment()
  }
}
