import React, { forwardRef, useRef } from 'react'

// 通过 forwardRef 来获取父组件传递的 ref
const FInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />
})

export default function HookForwardRefDemo() {
  const inputRef = useRef()

  return (
    <div>
      <h3>HookForwardRefDemo</h3>
      <FInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
