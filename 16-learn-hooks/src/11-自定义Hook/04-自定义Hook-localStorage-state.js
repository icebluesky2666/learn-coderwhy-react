import React, { useEffect, useState } from 'react'

// 自定义Hook: 同步更新 localStorage 与 state
// (该功能已实现!!!)函数目前功能有限,只支持传入 string 类型的 state
// TODO: 还不够完善,state 为 对象时存在缺陷(可能不止这个哈...),比如传入的 state 会直接覆盖 localStorage 数据,而不是以 localStorage 覆盖 state 数据,目前还无法判定谁是最新的数据
function useStateLocalStorage({ stateKey, state, setStateFunc }) {
  // 该参数必须传入,否则直接抛出异常
  if (!stateKey) {
    throw new Error('The key(stateKey) is required!!!')
  }
  useEffect(() => {
    console.log(`useEffect 执行啦 stateKey: ${stateKey}`)
    // 校验 state,序列化一下传入的数据,以字符串的形式存储
    const strState = state ? JSON.stringify(state) : ''
    console.log(strState)
    if (!strState) {
      // state 没有值,找 localStorage 拿值
      // 注意: 存储使用 stringify,所以解析需要使用 parse
      const resState = JSON.parse(localStorage.getItem(stateKey)) || ''
      setStateFunc(resState)
    } else {
      // 给 localStorage 赋值
      localStorage.setItem(stateKey, strState)
    }
  }, [state])
}

export default function CustomHookLocalStorage() {
  const [name, setName] = useState('')
  const [info, setInfo] = useState({ age: 100 })

  useStateLocalStorage({
    stateKey: 'fName',
    state: name,
    setStateFunc: setName
  })

  useStateLocalStorage({
    stateKey: 'fInfo',
    state: info,
    setStateFunc: setInfo
  })

  const age = info.age

  return (
    <div>
      <h3>CustomHookLocalStorage</h3>
      <p>name: {name}</p>
      <p>info-age: {age}</p>
      <br />
      <button onClick={() => setName(name + '1')}>name+1</button>
      <br />
      <button onClick={() => setName('小小石')}>name=小小石</button>
      <br />
      <button onClick={() => setInfo({ age: age + 1 })}>age+1</button>
      <br />
      <button onClick={() => setInfo({ age: 100 })}>age=100</button>
    </div>
  )
}
