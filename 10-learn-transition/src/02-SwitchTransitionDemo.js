import React, { PureComponent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './css/switchTransition.css'

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOn: true
    }
  }

  render() {
    const { isOn } = this.state
    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition classNames="btn" key={isOn ? 'on' : 'off'} timeout={300}>
            <button className="btn-box" onClick={() => this.setState({ isOn: !isOn })}>
              {isOn ? 'on' : 'off'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
