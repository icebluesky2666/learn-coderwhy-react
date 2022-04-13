import React, { useContext } from 'react'
import { UserContext, ThemeContext } from '../utils/shareContext'

export default function HookContext() {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  console.log(user)
  console.log(theme)

  const formatString = (val) => {
    return JSON.stringify(val)
  }

  return (
    <div>
      <h3>useContext初体验</h3>
      <p>{formatString(user)}</p>
      <p>{formatString(theme)}</p>
    </div>
  )
}
