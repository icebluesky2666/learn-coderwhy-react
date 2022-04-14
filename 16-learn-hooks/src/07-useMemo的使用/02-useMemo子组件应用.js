import React, { memo, useMemo, useState } from 'react'

const FInfo = memo((props) => {
  console.log('FInfo 组件重新渲染')
  const { name, age } = props.info
  return (
    <p>
      名字:{name} 年龄: {age}
    </p>
  )
})

export default function HookMemoSonCpn() {
  console.log('HookMemoSonCpn 组件重新渲染')
  const [show, setShow] = useState(false)
  // 其实这里是一个局部变量, 每次父组件重新渲染时都会被执行(重新赋值),组件上memo只会进行浅层比较,导致即使值未更新组件也会重新渲染
  // const info = { name: '小小石', age: 18 }

  // 有两个解决方案
  // 1. 使用 useState, 值不更新就会用上一次的 state
  // 2. 使用 useMemo, 自定义更新依赖项
  const info = useMemo(() => {
    return { name: '小小石', age: 18 }
  }, [])

  return (
    <div>
      <h3>HookMemoSonCpn</h3>
      <button onClick={() => setShow(!show)}>show切换</button>
      <FInfo info={info} />
    </div>
  )
}
