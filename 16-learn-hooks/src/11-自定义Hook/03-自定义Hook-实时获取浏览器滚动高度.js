import React, { useEffect, useState } from 'react'

// 自定义 Hook 实时获取滚动位置
function useGetScrollHeight() {
  const [scrollPosition, setScrollPosition] = useState(0)

  // 处理滚动事件
  const handleScrollEvent = () => {
    console.log(window.scrollY)
    setScrollPosition(window.scrollY)
  }
  useEffect(() => {
    // 监听
    document.addEventListener('scroll', handleScrollEvent)
    return () => {
      // 销毁
      document.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])
  return scrollPosition
}

export default function CustomHookScrollHeight() {
  // const [scrollY, setScrollY] = useState(0)

  const positionY = useGetScrollHeight()

  return (
    <div style={{ padding: '1000px 0' }}>
      <div style={{ position: 'fixed', left: 10, top: 110 }}>
        <h3>CustomHookScrollHeight</h3>
        <p>scrollHeihgt: {positionY}px</p>
      </div>
    </div>
  )
}
