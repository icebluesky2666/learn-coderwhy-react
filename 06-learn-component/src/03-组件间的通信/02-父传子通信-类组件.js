import React, { Component } from 'react'

class ChildCpn extends Component {
  // constructor(props) {
  //   // 这一步在 ReactBaseClasses 中的 Component 函数已经帮我们做过了
  //   super(props)
  //   this.props = props
  // }

  render() {
    const { name, age, sex } = this.props
    return (
      <div>
        <h2>子组件展示数据</h2>
        <span>{name + ' ' + age + ' ' + sex}</span>
      </div>
    )
  }
}

export default function App() {
  return (
    <div>
      <ChildCpn name="小小石" age={18} sex="男" />
      <ChildCpn name="z哥" age={20} sex="男" />
    </div>
  )
}
