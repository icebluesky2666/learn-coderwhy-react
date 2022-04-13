import { createContext } from 'react'

// 定义两个 context 用于共享数据
export const UserContext = createContext({
  name: '小小石',
  age: 18
})
export const ThemeContext = createContext({
  fontSize: 18,
  color: 'red'
})
