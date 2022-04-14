import { useLayoutEffect, useState } from 'react'

export default function HookLayoutEffectCounterDemo() {
  console.log('HookLayoutEffectCounterDemo 组件重新渲染')
  const [counter, setCounter] = useState(0)

  useLayoutEffect(() => {
    console.log('useLayoutEffect 执行')
    if (counter === 0) {
      // let i = 0
      // while (i < 1000000000) {
      //   i++
      // }
      setCounter(Math.random())
    }
  }, [counter])

  // console.log(counter)

  return (
    <div>
      <h3>useLayoutEffect修改counter例子</h3>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(0)}>修改counter为0</button>
    </div>
  )
}
