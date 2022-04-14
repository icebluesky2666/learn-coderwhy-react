import React, { useCallback, useState } from 'react'

// 测试: 外部定义一个临时的变量, 用于存储函数的引用, 我在们组件渲染函数时进行赋值, 赋值前后对比是否相等
let func1 = null
let func2 = null

export default function HookCallbackDemo1() {
  const [count, setCount] = useState(0)

  const increment1 = () => {
    console.log('increament1 被执行')
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    console.log('increament2 被执行')
    setCount(count + 1)
  }, [count])

  // TODO: 我还是没太弄懂这个知识点...下次回来看看懂了没
  console.log('func1 对比 increment1', func1 === increment1)
  console.log('func2 对比 increment2', func2 === increment2)
  func1 = increment1
  func2 = increment2

  return (
    <div>
      <h3>HookCallbackDemo1</h3>
      <button onClick={increment1}>increament1+1</button>
      <button onClick={increment2}>increament2+1</button>
      <p>count: {count}</p>
    </div>
  )
}
