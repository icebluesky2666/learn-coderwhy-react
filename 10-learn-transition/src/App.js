import React, { Component } from 'react'

import CSSTransitionDemo from './01-CSSTransitionDemo'
import SwitchTransitionDemo from './02-SwitchTransitionDemo'
import TransitionGroupDemo from './03-TransitionGroupDemo'

export default class App extends Component {
  componentDidMount() {
    console.log('App 组件挂载成功')
  }

  render() {
    return (
      <div>
        <h2>React App Template</h2>
        <CSSTransitionDemo />

        <hr />

        <SwitchTransitionDemo />

        <hr />

        <TransitionGroupDemo />
      </div>
    )
  }
}
