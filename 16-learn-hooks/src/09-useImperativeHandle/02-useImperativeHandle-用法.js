import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const FInput = forwardRef((props, ref) => {
  const innerRef = useRef()
  useImperativeHandle(ref, () => ({
    setFocus: () => {
      innerRef.current.focus()
    },
    setContent: (content) => {
      innerRef.current.value += content
    }
  }))
  return <input ref={innerRef} type="text" />
})

export default function HookImperativeHandleDemo() {
  const inputRef = useRef()

  return (
    <div>
      <h3>useImperativeHandle用法</h3>
      <FInput ref={inputRef} />
      <button onClick={() => inputRef.current.setFocus()}>聚焦</button>
      <button onClick={() => inputRef.current.setContent('我是内容')}>填充内容</button>
    </div>
  )
}
