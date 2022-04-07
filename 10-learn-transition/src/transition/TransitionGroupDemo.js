import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './TransitionGroupDemo.css'

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
      names: ['小小石', '小小陈', '小小灰']
    }
  }

  render() {
    const { isShow, names } = this.state
    return (
      // <div>
      //   <CSSTransition key={1} classNames="item" in={isShow} timeout={300} appear>
      //     <div className="item-box">{122}</div>
      //   </CSSTransition>
      //   <CSSTransition key={2} classNames="item" in={isShow} timeout={300} appear>
      //     <p className="item-box">{122}</p>
      //   </CSSTransition>
      // </div>
      <TransitionGroup style={{ marginLeft: '60px' }}>
        <div>
          <button onClick={this.addItem}>追加+</button>
          {names.map((item, index) => {
            return (
              <CSSTransition key={index} classNames="item" in={isShow} timeout={300} appear>
                <p className="item-box">{item}</p>
              </CSSTransition>
            )
          })}
        </div>
      </TransitionGroup>
    )
  }

  addItem = () => {
    this.setState({
      names: [...this.state.names, '小小爱']
    })
  }
}
