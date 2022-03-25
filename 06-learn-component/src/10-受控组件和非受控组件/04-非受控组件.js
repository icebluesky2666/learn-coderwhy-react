import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.userNameRef = createRef()
    // this.state = {
    // }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.userNameRef} />
        <br />
        <br />
        <button onClick={() => this.handleClick()}>获取userName的值</button>
      </div>
    )
  }

  handleClick() {
    const userName = this.userNameRef.current.value
    console.log(userName)
    alert(userName)
  }
}
