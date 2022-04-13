import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  // (development)严格模式下组件渲染会被调用两次: 用于测试组件是否存在一些异常情况
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
)
