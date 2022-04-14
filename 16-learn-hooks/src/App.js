// import { useState } from 'react'

// import ClassCounter from './01-hook初体验/01-Class-Counter'
// import HookCounter from './01-hook初体验/02-hook-Counter'
// import PureHookCounter from './01-hook初体验/03-Purehook-Counter'

// import MultiSateCpn from './02-useState的使用/01-多个状态的使用'
// import ComplexHookState from './02-useState的使用/02-复杂状态的变更方式'

// import PureHookCounter2 from './01-hook初体验/04-Purehook-Counter'

// import TitleCounter from './03-useEffect的使用/01-ClassTitleCounter'
// import HookTitleCounter from './03-useEffect的使用/02-HookTitleCounter'
// import EffectHookCancel from './03-useEffect的使用/03-模拟订阅和取消订阅'
// import MultiEffectHook from './03-useEffect的使用/04-多个useEffect的使用'

// import { UserContext, ThemeContext } from './utils/shareContext'
// import HookContext from './04-useContext的使用/01-useContext初体验'

import HookReducerCpn from './05-useReducer的使用'

function App() {
  // const [show, setShow] = useState(true)

  return (
    <div>
      <h2>React App Template</h2>
      <hr />

      {/* 6. useReducer */}
      <HookReducerCpn />

      {/* 5. useConext */}
      {/* 使用 Provider 的 value */}
      {/* <UserContext.Provider value={{ name: '小陈', age: 20 }}>
        <ThemeContext.Provider value={{ fontSize: 100, color: 'blue' }}>
          <HookContext />
        </ThemeContext.Provider>
      </UserContext.Provider> */}
      {/* 使用默认值 */}
      {/* <HookContext /> */}

      {/* 4. 多个useEffect */}
      {/* <MultiEffectHook /> */}

      {/* 3. useEffect */}
      {/* <TitleCounter /> */}
      {/* <HookTitleCounter /> */}

      {/* <button onClick={() => setShow(!show)}>切换组件订阅</button>
      {show && <EffectHookCancel />} */}

      {/* Hook 补充 */}
      {/* <PureHookCounter2 /> */}

      {/* 2. 复杂状态变更 */}
      {/* <MultiSateCpn />
      <ComplexHookState /> */}

      {/* 1. Hook 初体验 */}
      {/* <ClassCounter />
      <HookCounter />
      <PureHookCounter /> */}
    </div>
  )
}

export default App
