import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'default'
    }
  }

  render() {
    const { userName } = this.state
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="userName">
            <input
              id="userName"
              type="text"
              placeholder="请输入用户名称"
              value={userName}
              onChange={(e) => this.handleUserName(e)}
            ></input>
          </label>
          <br />
          <br />
          <input type="submit" value="提交" />
        </form>
        <h2>用户名称：{userName}</h2>
      </div>
    )
  }

  handleSubmit(event) {
    console.log(event)
    // 阻止 submit 事件的默认提交
    event.preventDefault()
  }

  handleUserName(event) {
    console.log(event.target.value)
    this.setState({
      userName: event.target.value
    })
  }
}
