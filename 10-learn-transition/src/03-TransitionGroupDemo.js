import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './css/transitionGroup.css'

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
      names: ['小小石', '小小陈', '小小灰']
    }
  }

  // 添加元素
  addItem = () => {
    this.setState({
      names: [...this.state.names, `小小爱-${(Date.now() + '').substring(7)}`]
    })
  }

  // 删除元素
  removeItem(index) {
    this.setState({
      names: this.state.names.filter((_, indey) => index !== indey)
    })
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
      <>
        <button onClick={this.addItem}>追加名称</button>
        <TransitionGroup>
          {names.map((item, index) => {
            return (
              // 使用 item 作为 key 值时,添加会出现问题,但是我们是学习,真正开发时 key 肯定会选择唯一的
              <CSSTransition key={item} classNames="item" timeout={300}>
                <div className="item-box">
                  <span>{item}——</span>
                  <button onClick={this.removeItem.bind(this, index)}>删除</button>
                </div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </>
    )
  }
}
