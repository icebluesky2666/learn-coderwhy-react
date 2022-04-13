import React, { PureComponent } from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'

function AboutHistory() {
  return <h2>我们的企业历史悠久</h2>
}

function AboutCulture() {
  return <h2>我们的企业文化丰富</h2>
}

function AboutContact() {
  return <h2>我们的企业联系方式: 68898889</h2>
}

function AboutJoin() {
  return <h2>加入我们: 投递简历到xxx@xxx.com</h2>
}
function About() {
  const navigate = useNavigate()

  // 跳转到加入我们
  const jumpToJoin = () => {
    // console.log(navigate)
    navigate('/about/join')
  }

  return (
    <div style={{ marginTop: 20 }}>
      <NavLink to="/about">企业历史</NavLink>
      <NavLink to="/about/culture"> 企业文化 </NavLink>
      <NavLink to="/about/contact">联系我们 </NavLink>

      <button onClick={(e) => jumpToJoin()}>加入我们</button>

      {/* 嵌套路由 */}
      <Routes>
        {/* index: 默认路由 */}
        <Route index element={<AboutHistory />} />
        <Route path="culture" element={<AboutCulture />} />
        <Route path="contact" element={<AboutContact />} />
        <Route path="join" element={<AboutJoin />} />
      </Routes>
    </div>
  )
}

export default About
