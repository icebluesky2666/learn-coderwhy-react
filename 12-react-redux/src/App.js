import React, { Component } from 'react'
import Home from './pages/home'
import About from './pages/about'
import store from './store'
import { storeContext } from './utils/context'

export default class App extends Component {
  render() {
    return (
      <storeContext.Provider value={store}>
        React App Template
        <Home />
        <About />
      </storeContext.Provider>
    )
  }
}
