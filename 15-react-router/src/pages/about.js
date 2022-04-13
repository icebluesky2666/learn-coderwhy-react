import React, { PureComponent } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'

function AboutHistory() {
  return <h2>我们的企业历史悠久</h2>
}

function AboutCulture() {
  return <h2>我们的企业文化丰富</h2>
}

function AboutContact() {
  return <h2>我们的企业联系方式: 68898889</h2>
}
export default class About extends PureComponent {
  render() {
    return (
      <div>
        <NavLink to="/about">企业历史</NavLink>
        <NavLink to="/about/culture"> 企业文化 </NavLink>
        <NavLink to="/about/contact">联系我们</NavLink>

        {/* 嵌套路由 */}
        <Routes>
          {/* index: 默认路由 */}
          <Route index element={<AboutHistory />} />
          <Route path="culture" element={<AboutCulture />} />
          <Route path="contact" element={<AboutContact />} />
        </Routes>
      </div>
    )
  }
}
