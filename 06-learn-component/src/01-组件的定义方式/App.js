import { Component } from 'react'

// 1. 类组件
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: '你好呀，小小石'
    }
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <span>我是 App 组件</span>
        <h2>{message}</h2>
      </div>
    )
  }
}

// 2. 函数式组件
/**
 * 1.没有this对象
 * 2.没有内部的状态(state)
 * Hook 解决了这个问题
 */
// export default function App() {
//   return (
//     <div>
//       <h2>我是函数式组件</h2>
//     </div>
//   )
// }
