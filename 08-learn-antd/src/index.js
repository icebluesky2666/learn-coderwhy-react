import React from 'react'
// v18.0.0 的使用方式
import reactDOM from 'react-dom/client'

// moment 国际化
// 简体
import 'moment/locale/zh-cn'
// 繁体
// import 'moment/locale/zh-hk'

// 导入 antd 的 css 样式
// import 'antd/dist/antd.css'
import 'antd/dist/antd.less'

// import App from './01-react-class-添加'
// import App from './components/App'
import App from './comment/App'

// 其实简单看了下,就是获取的这个根元素将不在render函数中进行传递存储
const root = reactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)
