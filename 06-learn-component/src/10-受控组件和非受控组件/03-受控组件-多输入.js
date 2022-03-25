import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'default-userName',
      password: 'default-password'
    }
  }

  render() {
    const { userName, password } = this.state
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            用户：
            <input
              id="userName"
              type="text"
              placeholder="请输入用户名称"
              name="userName"
              value={userName}
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
          <br />
          <label>
            密码：
            <input
              id="password"
              type="text"
              placeholder="请输入密码"
              name="password"
              value={password}
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
          <br />
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    console.log(event)
    // 阻止 submit 事件的默认提交
    event.preventDefault()
  }

  handleChange(event) {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
}
