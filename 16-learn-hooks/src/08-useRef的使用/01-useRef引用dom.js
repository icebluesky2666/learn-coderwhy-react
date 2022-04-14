import React, { useRef } from 'react'

export default function HookRefDemo() {
  const titleRef = useRef()
  const inputRef = useRef()

  const handleUpdateDom = () => {
    titleRef.current.innerHTML = 'Hello React'
    inputRef.current.focus()
    inputRef.current.value = 'Hello React'
  }

  return (
    <div>
      <h3 ref={titleRef}>HookRefDemo</h3>
      <input type="text" ref={inputRef}></input>
      <br />
      <br />
      <button onClick={() => handleUpdateDom()}>点我更新页面DOM数据</button>
    </div>
  )
}
