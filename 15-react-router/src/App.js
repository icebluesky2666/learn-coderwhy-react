import React, { Component } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Profile from './pages/profile'
import NoMatch from './pages/noMatch'
import User from './pages/user'
import Login from './pages/login'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          to: '/',
          title: '首页'
        },
        {
          to: '/about',
          title: '关于'
        },
        {
          to: '/profile',
          title: '我的'
        },
        {
          to: '/User',
          title: '用户'
        },
        {
          to: '/abc/noMatch',
          title: '啥都不匹配'
        }
      ]
    }
  }

  componentDidMount() {
    console.log('App 组件挂载成功')
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <h2>React App Template</h2>

        <hr />

        <BrowserRouter>
          <nav>
            {this.state.links.map((item) => {
              return (
                <li key={item.title}>
                  <NavLink to={item.to} className={({ isActive }) => (isActive ? 'link-active' : '')}>
                    {item.title}
                  </NavLink>
                </li>
              )
            })}
          </nav>

          {/* <Link to="/about">关于 </Link> */}
          {/* <Link to="/profile">我的 </Link> */}

          <Routes>
            <Route path="/" element={<Home />} />
            {/* 嵌套路由需要添加* */}
            <Route path="/about/*" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<User />} />
            <Route path="/login" element={<Login />} />
            {/* 路由匹配 */}
            {/* <Route path="/:id" element={<User />} /> */}
            {/* 没有匹配上的 */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
