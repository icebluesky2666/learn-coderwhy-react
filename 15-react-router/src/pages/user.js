import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export default class User extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // isLogin: false
      isLogin: true
    }
  }

  render() {
    return (
      <div>
        {this.state.isLogin ? (
          <h2>我是 User 组件: 小小石</h2>
        ) : (
          // 重定向路由
          <Navigate replace to="/login" />
        )}
      </div>
    )
  }
}
