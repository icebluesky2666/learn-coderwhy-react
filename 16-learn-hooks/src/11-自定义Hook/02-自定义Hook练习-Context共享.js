import React from 'react'
import { useUserThemeContext } from '../utils/hookContext'

export default function HookContextShare() {
  const [user, theme] = useUserThemeContext()

  console.log(user, theme)

  return (
    <div>
      <h3>HookContextShare</h3>
      <p>{JSON.stringify(user)}</p>
      <p>{JSON.stringify(theme)}</p>
    </div>
  )
}
