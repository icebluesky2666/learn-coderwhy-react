import { useState } from 'react'

function Counter() {
  const [counter, setState] = useState(0)

  return (
    <div>
      <h3>当前计数: {counter}</h3>
      <button onClick={() => setState(counter + 1)}>+1</button>
      <button onClick={() => setState(counter - 1)}>-1</button>
      {/* 使用函数形式, 参数是上一次的 state 值 */}
      {/* 函数对比直接传入值: 每次都会执行, 直接传入值可能会进行合并 */}
      <button onClick={() => setState((prevCounter) => prevCounter + 10)}>+10</button>
    </div>
  )
}

export default Counter
