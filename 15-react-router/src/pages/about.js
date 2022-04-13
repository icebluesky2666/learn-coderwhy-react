import React from 'react'
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom'

export function AboutHistory() {
  return <h2>我们的企业历史悠久</h2>
}

export function AboutCulture() {
  return <h2>我们的企业文化丰富</h2>
}

export function AboutContact() {
  return <h2>我们的企业联系方式: 68898889</h2>
}

// 通过 state 属性获取
export function AboutJoin() {
  const location = useLocation()
  const state = location.state || {}
  console.log(state)
  return (
    <h2>
      加入我们: 投递简历到xxx@xxx.com
      <p>name: {state.name}</p>
    </h2>
  )
}

function About() {
  const navigate = useNavigate()

  // 跳转到加入我们
  const jumpToJoin = () => {
    navigate(`/about/join`, {
      state: {
        name: 'chen',
        age: 18
      }
    })
  }

  return (
    <div style={{ marginTop: 20 }}>
      <NavLink to="/about">企业历史</NavLink>
      <NavLink to="/about/culture"> 企业文化 </NavLink>
      <NavLink to="/about/contact">联系我们 </NavLink>
      <button onClick={(e) => jumpToJoin()}>加入我们</button>

      <Outlet />
    </div>
  )
}

export default About
