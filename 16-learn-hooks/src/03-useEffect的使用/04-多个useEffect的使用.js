import React, { useEffect, useState } from 'react'

export default function MultiEffectHook() {
  const [counter, setCounter] = useState(0)
  const [isLogin, setIsLogin] = useState(false)

  // mount
  useEffect(() => {
    console.log('发起网络请求')
  }, [])

  // mount
  useEffect(() => {
    console.log('订阅事件')
  }, [])

  // 依赖于 counter 是否更新
  useEffect(() => {
    console.log('操作 state 数据 counter:', counter)
  }, [counter])

  // 依赖于 isLogin 是否更新
  useEffect(() => {
    console.log('操作 state 数据 isLogin:', isLogin)
  }, [isLogin])

  // 同时依赖于 counter&isLogin
  useEffect(() => {
    console.log('操作 state 数据', counter, isLogin)
  }, [isLogin, counter])

  return (
    <div>
      <h3>多个useEffect使用</h3>
      <p>counter: {counter}</p>
      <p>是否登录: {isLogin ? '小小石已登录' : '未登录'}</p>
      <button onClick={() => setCounter(counter + 1)}>counter++</button>
      <button onClick={() => setIsLogin(!isLogin)}>切换登录状态</button>
    </div>
  )
}
