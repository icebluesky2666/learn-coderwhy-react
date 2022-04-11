import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Profile from './pages/profile'

export default class App extends Component {
  componentDidMount() {
    console.log('App 组件挂载成功')
  }

  render() {
    return (
      <div>
        <h2>React App Template</h2>

        <hr />

        <BrowserRouter>
          <Link to="/">首页 </Link>
          <Link to="/about">关于 </Link>
          <Link to="/profile">我的 </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
