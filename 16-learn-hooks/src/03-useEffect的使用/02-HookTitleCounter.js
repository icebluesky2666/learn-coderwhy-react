import { useEffect, useState } from 'react'

function HookTitleCounter() {
  const [counter, setState] = useState(0)

  // 第一个参数：钩子函数, 可以模拟 Class 组件生命周期函数
  // mount&update 时都会触发
  useEffect(() => {
    console.log('useEffect 触发')
  })

  return (
    <div>
      <h3>当前计数: {counter}</h3>
      <button onClick={() => setState(counter + 1)}>+1</button>
      <button onClick={() => setState(counter - 1)}>-1</button>
    </div>
  )
}

export default HookTitleCounter
