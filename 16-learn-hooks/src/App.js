import { useState } from 'react'

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

// import HookReducerCpn from './05-useReducer的使用'

// import HookCallbackDemo1 from './06-useCallback的使用/01-不会进行性能优化的写法'
// import HookCallbackDemo2 from './06-useCallback的使用/02-会进行性能优化的写法'

// import HookMemoComplexCalc from './07-useMemo的使用/01-useMemo复杂计算时的性能优化'
// import HookMemoSonCpn from './07-useMemo的使用/02-useMemo子组件应用'

// import HookRefDemo from './08-useRef的使用/01-useRef引用dom'
// import HookRefDemo02 from './08-useRef的使用/02-useRef引用其它数据'

// import HookForwardRefDemo from './09-useImperativeHandle/01-回顾-forwardRef-用法'
// import HookImperativeHandleDemo from './09-useImperativeHandle/02-useImperativeHandle-用法'

// import HookEffectCounterDemo from './10-useLayoutEffect/01-useEffect-counter-修改'
// import HookLayoutEffectCounterDemo from './10-useLayoutEffect/02-useLayoutEffect-counter-修改'

import CustomSampleHook from './11-自定义Hook/01-认识自定义Hook'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <h2>React App Template</h2>
      <hr />
      {/* 12. 自定义Hook */}
      {show && <CustomSampleHook />}

      {/* 11. useLayoutEffect */}
      {/* <HookEffectCounterDemo /> */}
      {/* <HookLayoutEffectCounterDemo /> */}

      {/* 10. useImperativeHandle */}
      {/* <HookForwardRefDemo /> */}
      {/* <HookImperativeHandleDemo /> */}

      {/* 9. useRef */}
      {/* <HookRefDemo /> */}
      {/* <HookRefDemo02 /> */}

      {/* 8. useMemo */}
      {/* <HookMemoComplexCalc /> */}
      {/* <HookMemoSonCpn /> */}

      {/* 7. useCallback */}
      {/* <HookCallbackDemo1 /> */}
      {/* <HookCallbackDemo2 /> */}

      {/* 6. useReducer */}
      {/* <HookReducerCpn /> */}

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
