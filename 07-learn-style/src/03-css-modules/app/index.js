import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'
// css modules 模块化
import appStyle from './style.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2 className={appStyle.title}>我是App</h2>
        <Home />
        <Profile />
      </div>
    )
  }
}
