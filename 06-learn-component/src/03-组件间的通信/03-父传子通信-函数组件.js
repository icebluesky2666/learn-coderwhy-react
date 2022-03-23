// import React, { Component } from 'react'

function ChildCpn(props) {
  console.log(props)
  const { name, age, sex } = props

  return (
    <div>
      <h2>子组件展示数据</h2>
      <span>{name + ' ' + age + ' ' + sex}</span>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <ChildCpn name="小小石" age={18} sex="男" />
      <ChildCpn name="z哥" age={20} sex="男" />
    </div>
  )
}
