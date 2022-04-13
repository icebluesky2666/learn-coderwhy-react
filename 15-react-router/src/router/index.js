// import {} from 'react-router-dom'

import Home from '../pages/home'
import About from '../pages/about'
import { AboutHistory, AboutCulture, AboutContact, AboutJoin } from '../pages/about'
import Profile from '../pages/profile'
import User from '../pages/user'
import NoMatch from '../pages/noMatch'
// import Login from '../pages/login'

// 配置路由映射关系
const routes = [
  {
    path: '/',
    title: '首页',
    element: <Home />
  },
  {
    path: '/about',
    title: '关于',
    element: <About />,
    children: [
      {
        index: true,
        element: <AboutHistory />
      },
      {
        path: 'culture',
        element: <AboutCulture />
      },
      {
        path: 'contact',
        element: <AboutContact />
      },
      {
        path: 'join',
        element: <AboutJoin />
      }
    ]
  },
  {
    path: '/profile',
    title: '我的',
    element: <Profile />
  },
  {
    path: '/User',
    title: '用户',
    element: <User />
  },
  {
    path: '*',
    title: '啥都不匹配',
    element: <NoMatch />
  }
]

export default routes
