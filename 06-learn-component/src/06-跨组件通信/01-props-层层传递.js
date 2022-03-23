import React, { Component } from 'react'

function ProfileHeader(props) {
  return (
    <div>
      <h2>昵称：{props.nickName}</h2>
      <h2>等级：{props.level}</h2>
    </div>
  )
}

function Profile(props) {
  return (
    <div>
      <div>我是profile组件</div>
      {/* <ProfileHeader nickName={props.nickName} level={props.level} /> */}

      {/* 小优化: 可以使用 jsx 中的展开符,等价于上面代码的效果 */}
      <ProfileHeader {...props} />
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickName: '小小石',
      level: 10
    }
  }
  render() {
    const { nickName, level } = this.state

    return (
      <div>
        <Profile nickName={nickName} level={level} />
      </div>
    )
  }
}
