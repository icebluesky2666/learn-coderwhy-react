import React, { useMemo, useState } from 'react'

// 计算 1至count 的值
function calcCountTotal(count) {
  let total = 0
  for (let i = 1; i <= count; i++) {
    total += i
  }
  return total
}

export default function HookMemoComplexCalc() {
  console.log('HookMemoComplexCalc 组件重新渲染')

  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  // 抽离代码出去,并且使用 useMemo 来返回结果,函数依赖于count,count不更新,函数不执行
  const total = useMemo(() => {
    console.log('useMemo 内函数执行')
    return calcCountTotal(count)
  }, [count])

  // 计算 1至count 的值
  // let total = 0
  // for (let i = 1; i <= count; i++) {
  //   total += i
  // }

  return (
    <div>
      <h3>HookMemoComplexCalc</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      <button onClick={() => setShow(!show)}>show切换</button>
      <p>count: {count}</p>
      <p>total: {total}</p>
    </div>
  )
}
