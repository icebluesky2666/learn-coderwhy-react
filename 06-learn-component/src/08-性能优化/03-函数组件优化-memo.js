import React, { Component, PureComponent, memo } from 'react'

// memo 函数
const Header = memo(function () {
  console.log('Header 调用')
  return <h2>我是Header部分</h2>
})

function Main() {
  console.log('Main 调用')
  return (
    <div>
      <h2>我是Main部分</h2>
      <Banner />
      <ProductList />
    </div>
  )
}

// 通过 PureComponent 继承的组件可以自动判断 props/state 变更，从而是否需要更新 render 函数
class Banner extends PureComponent {
  render() {
    console.log('Banner 调用')
    return <h3>我是Banner部分</h3>
  }
}

function ProductList() {
  return (
    <ul>
      <li>商品数据1</li>
      <li>商品数据2</li>
      <li>商品数据3</li>
      <li>商品数据4</li>
    </ul>
  )
}

function Footer() {
  console.log('Footer 调用')
  return <h2>我是Footer部分</h2>
}

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
        <button onClick={() => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
