import React, { Component } from 'react'
// 第一种方式: 使用 props 中的 children 来获取传入的子标签数据,用于展示
// 缺点: 位置必须固定
import NavBar from './NavBar'

export default class App extends Component {
  render() {
    return (
      <NavBar>
        <span>left</span>
        <span>center</span>
        <span>right</span>
      </NavBar>
    )
  }
}
