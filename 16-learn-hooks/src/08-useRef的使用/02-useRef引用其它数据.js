import React, { useEffect, useRef, useState } from 'react'

// 需求: 点击"更新counter"按钮时页面上同时展示一次的值与当前的值
export default function HookRefDemo02() {
  const [counter, setCounter] = useState(0)
  const numRef = useRef(counter)

  // 我们可以利用"useRef"返回的对象,这个对象在整个生命周期中可以保存不变的特性完成这个功能
  // 也就是说,如果我在组件渲染的时候给了 useRef 一个 count=10 的初始值,哪怕 count 在某个生命周期变更成 20 了,此时的 ref 对象返回值还是 10,只有当你变更 ref.current 才会改变(注意这个操作不会导致重新渲染)
  useEffect(() => {
    numRef.current = counter
  }, [counter])

  useEffect(() => {
    // 组件挂载时直接给 counter + 10
    setCounter(counter + 10)
  }, [])

  return (
    <div>
      <h3>HookRefDemo02</h3>
      <p>counter上一次的值: {numRef.current}</p>
      <p>counter这一次的值: {counter}</p>
      <br />
      <button onClick={() => setCounter(counter + 10)}>增加counter</button>
    </div>
  )
}
