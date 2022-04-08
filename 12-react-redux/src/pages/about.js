import React from 'react'

export default function About(props) {
  return (
    <div>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={() => props.subCounter(1)}>-1</button>
      <button onClick={() => props.subCounter(5)}>-5</button>
    </div>
  )
}
