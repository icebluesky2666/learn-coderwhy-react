import { useState } from 'react'

function Counter() {
  const [counter, setState] = useState(0)

  return (
    <div>
      <h3>当前计数: {counter}</h3>
      <button onClick={() => setState(counter + 1)}>+1</button>
      <button onClick={() => setState(counter - 1)}>-1</button>
    </div>
  )
}

export default Counter
