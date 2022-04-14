import { createContext, useContext } from 'react'

// 定义两个 context 用于共享数据
export const UserContext = createContext({
  name: '小小石',
  age: 18
})
export const ThemeContext = createContext({
  fontSize: 18,
  color: 'red'
})

// 自定义 Hook,用于获取 Context 数据
export const useUserThemeContext = () => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  return [user, theme]
}
