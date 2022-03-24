import React, { Component } from 'react'

const UserContext = new React.createContext({
  nickName: '小小石',
  level: -1
})

const ThemeContext = new React.createContext({
  color: 'blue'
})

function ProfileHeader() {
  return (
    // 改成这种写法来接收 context 数据
    <UserContext.Consumer>
      {(context) => {
        const { nickName, level } = context
        return (
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <div>
                  <h2>昵称：{nickName}</h2>
                  <h2>等级：{level}</h2>
                  <h2 style={{ color: theme.color }}>描述</h2>
                </div>
              )
            }}
          </ThemeContext.Consumer>
        )
      }}
    </UserContext.Consumer>
  )
}

// ProfileHeader.contextType = UserContext

function Profile() {
  return (
    <div>
      <div>我是profile组件</div>
      <ProfileHeader />
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickName: '小小陈',
      level: 99
    }
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: 'red' }}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>

        {/* 使用 UserContext 的默认值 */}
        <Profile />
      </div>
    )
  }
}
