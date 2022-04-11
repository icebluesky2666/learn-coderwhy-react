import React, { Component } from 'react'
import Home from './pages/home'
import About from './pages/about'

import store from './store'
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        React App Template
        <Home />
        <About />
      </Provider>
    )
  }
}
