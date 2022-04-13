import React, { useEffect, useState } from 'react'

export default function EffectHookCancel() {
  const [count, setCount] = useState(0)

  // 第二个参数传入一个空数组后, update 事件不在触发
  useEffect(() => {
    console.log('订阅了一些事件')
    return handleUnmount
  }, [])

  function handleUnmount() {
    console.log('取消订阅')
  }

  return (
    <div>
      <h3>EffectHookCancel</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
