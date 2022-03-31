import React from 'react'
// v18.0.0 的使用方式
import reactDOM from 'react-dom/client'

import App from './App.js'

// 其实简单看了下,就是获取的这个根元素将不在render函数中进行传递存储
const root = reactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)
