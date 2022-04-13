import ClassCounter from './01-hook初体验/01-Class-Counter'
import HookCounter from './01-hook初体验/02-hook-Counter'
import PureHookCounter from './01-hook初体验/03-Purehook-Counter'

function App() {
  return (
    <div>
      <h2>React App Template</h2>
      <hr />
      <p>App</p>

      <ClassCounter />
      <HookCounter />
      <PureHookCounter />
    </div>
  )
}

export default App
