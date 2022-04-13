import React, { useState } from 'react'

export default function ComplexHookState() {
  const [userList, setUserList] = useState([
    {
      name: '小小石',
      age: 18
    },
    {
      name: '小小陈',
      age: 20
    },
    {
      name: '小小灰',
      age: 20
    }
  ])

  // 增加用户
  const addUser = () => {
    const user = {
      name: '小小爱',
      age: 16
    }
    setUserList([...userList, user])
  }

  // 删除用户
  const delUser = (index) => {
    // 拷贝一份列表
    const newList = [...userList]
    setUserList(newList.filter((_, indey) => indey !== index))
  }

  return (
    <>
      <h3>复杂状态的变更</h3>
      <button onClick={addUser}>增加一个人</button>
      <ul>
        {userList.map((item, index) => {
          return (
            <li key={index}>
              <button onClick={() => delUser(index)} style={{ marginRight: 10 }}>
                删除
              </button>
              {item.name}-{item.age}
            </li>
          )
        })}
      </ul>
    </>
  )
}
