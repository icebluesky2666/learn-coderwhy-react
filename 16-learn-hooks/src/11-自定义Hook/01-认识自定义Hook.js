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

export default function CustomSampleHook() {
  useSubscribeLogging()
  return (
    <div>
      <h3>CustomSampleHook</h3>
    </div>
  )
}
