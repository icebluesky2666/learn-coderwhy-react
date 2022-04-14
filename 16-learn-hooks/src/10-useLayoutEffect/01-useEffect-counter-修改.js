import { useEffect, useState } from 'react'

export default function HookEffectCounterDemo() {
  console.log('HookEffectCounterDemo 执行')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('useEffect 执行')
    if (counter === 0) {
      // 定时器属于异步代码,使用没有效果,我们使用同步代码替代
      // let i = 0
      // while (i < 1000000) {
      //   i++
      // }
      setCounter(Math.random())
    }
  }, [counter])

  console.log(counter)

  return (
    <div>
      <h3>useEffect修改counter例子</h3>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(0)}>修改counter为0</button>
    </div>
  )
}
