import React, { useState } from 'react'

export default function MultiSateCpn() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  // 初始化
  const initVal = () => {
    setName('小小石')
    setAge(18)
  }

  return (
    <div>
      <h3>多个状态的使用</h3>
      <p>{'name: ' + name}</p>
      <p>{'age: ' + age}</p>
      <button onClick={initVal}>初始化</button>
    </div>
  )
}
