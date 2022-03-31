import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'
import './style.css'

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2 className="title">我是App</h2>
        <Home />
        <Profile />
      </div>
    )
  }
}
