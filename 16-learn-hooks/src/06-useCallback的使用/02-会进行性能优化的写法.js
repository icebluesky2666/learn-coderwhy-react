import React, { memo, useCallback, useState } from 'react'

// 父组件更新: 子组件都会重新渲染,利用 memo 高阶函数/组件可以帮我们处理这种情况,对应依赖项更新子组件才会重新渲染
// show 更新时, increment2 并不会重新渲染,由此进行性能优化
// useCallback在什么时候使用?
// 场景: 在将一个组件函数,传递给子元素进行回调时,使用useCallback对函数进行处理
const FButton = memo((props) => {
  console.log(props.title, 'BUTTON 重新渲染')
  return <button onClick={props.increment}>{props.title}+1</button>
})

export default function HookCallbackDemo2() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  const increment1 = () => {
    console.log('increament1 被执行')
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    console.log('increament2 被执行')
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h3>HookCallbackDemo2</h3>
      <button onClick={() => setShow(!show)}>切换show</button>
      <br />
      <FButton title="increment1" increment={increment1} />
      <br />
      <FButton title="increment2" increment={increment2} />
      <p>count: {count}</p>
    </div>
  )
}
