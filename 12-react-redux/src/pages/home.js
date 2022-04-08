import React from 'react'

export default function Home(props) {
  return (
    <div>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={() => props.addCounter(1)}>+1</button>
      <button onClick={() => props.addCounter(5)}>+5</button>
    </div>
  )
}
