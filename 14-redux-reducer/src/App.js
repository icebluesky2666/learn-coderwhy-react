import React, { Component } from 'react'
// import Home from './pages/home'
// import About from './pages/about'

// import store from './store'
// import { Provider } from 'react-redux'

import SyncAndAsync from './pages/syncAndAsync'

export default class App extends Component {
  render() {
    return (
      <SyncAndAsync />
      // <Provider store={store}>
      //   React App Template
      //   <Home />
      //   <About />
      // </Provider>
    )
  }
}
