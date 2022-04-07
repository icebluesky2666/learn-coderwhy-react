import React, { Component } from 'react'

// import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
// import CSSTransitionDemo from './transition/CSSTransitionDemo'
import TransitionGroupDemo from './transition/TransitionGroupDemo'
export default class App extends Component {
  componentDidMount() {
    console.log('App 组件挂载成功')
  }

  render() {
    return (
      <div>
        <h2>React App Template</h2>
        {/* <CSSTransitionDemo /> */}
        {/* <SwitchTransitionDemo /> */}
        <TransitionGroupDemo />
      </div>
    )
  }
}
