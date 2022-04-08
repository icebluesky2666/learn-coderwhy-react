import React, { Component } from 'react'

import Home from './pages/home'
import About from './pages/about'
export default class App extends Component {
  render() {
    return (
      <div>
        React App Template
        <Home />
        <About />
      </div>
    )
  }
}
