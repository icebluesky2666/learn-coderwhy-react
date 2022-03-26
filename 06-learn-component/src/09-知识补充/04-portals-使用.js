import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(this.props.children, document.querySelector('#modal'))
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Modal>
          <h3>我是 Modal 组件的内容</h3>
        </Modal>
      </div>
    )
  }
}
