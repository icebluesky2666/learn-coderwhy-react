import React, { useEffect } from 'react'

// React约定: 使用 use 开头定义的函数
function useSubscribeLogging(cpnName) {
  useEffect(() => {
    console.log(`${cpnName} 组件被激活`)
    return () => {
      console.log(`${cpnName} 组件已经销毁`)
    }
  })
}

function Home() {
  useSubscribeLogging('Home')
  return <h4>Home</h4>
}

function About() {
  useSubscribeLogging('About')
  return <h4>About</h4>
}

export default function CustomSampleHook() {
  useSubscribeLogging('CustomSampleHook')
  return (
    <div>
      <h3>CustomSampleHook</h3>
      <Home />
      <About />
    </div>
  )
}
