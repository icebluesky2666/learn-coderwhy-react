// import React from 'react'
import { useRoutes, NavLink } from 'react-router-dom'
import routes from './router'

import './App.css'

function App() {
  const elements = useRoutes(routes)
  const links = [
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

  // 返回了 ReactDom 对象
  console.log(elements)

  return (
    <div>
      <h2>React App Template</h2>

      <hr />

      <nav>
        {links.map((item) => {
          return (
            <li key={item.title}>
              <NavLink to={item.to} className={({ isActive }) => (isActive ? 'link-active' : '')}>
                {item.title}
              </NavLink>
            </li>
          )
        })}
      </nav>

      {elements}
    </div>
  )
}

export default App
