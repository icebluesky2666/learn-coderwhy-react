import React, { useReducer } from 'react'

function reducer(prevState, action) {
  switch (action.type) {
    case 'increment':
      return prevState + 1
    default:
      return prevState
  }
}

export default function HookReducerCpn() {
  const [counter, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h3>useReducer初体验</h3>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <p>counter: {counter}</p>
    </div>
  )
}
