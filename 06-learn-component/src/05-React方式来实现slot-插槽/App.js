import React, { Component } from 'react'
// 第一种方式: 使用 props 中的 children 来获取传入的子标签数据,用于展示
// 缺点: 位置必须固定
import NavBar from './NavBar'

// 第二种方式: 使用指定参数属性传入需要展示的标签数据
import NavBarNew from './NavBar-new'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <span>left</span>
          <span>center</span>
          <span>right</span>
        </NavBar>
        <br />
        <NavBarNew leftSlot={'左侧'} rightSlot={'右侧'} />
      </div>
    )
  }
}
