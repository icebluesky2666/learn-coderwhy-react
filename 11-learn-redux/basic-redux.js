// import/export 的导入导出语法 node13.2.0+ 支持, 在 package.json 中增加 "type": "module", 之前的版本如要使用执行程序时追加 --experimental-modules 参数即可
// 但是这样的话就只能则其一了, 无法使用 common.js 语法
// const redux = require('redux')
import redux from 'redux'

// state: 数据源
const initialState = {
  counter: 0
}

// reducer: 结合 store 与 actions
// 纯函数: 保证没有副作用
function reducer(state = initialState, actions) {
  console.log(state.counter, actions)
  switch (actions.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'ADD_NUMBER':
      return { ...state, counter: state.counter + actions.num }
    case 'SUB_NUMBER':
      return { ...state, counter: state.counter - actions.num }
    default:
      return state
  }
}

// store
// createStore: 初始化时会调用一次 reducer 函数 { type: '@@redux/INIT9.a.3.b.s.i' }
const store = redux.createStore(reducer)

// subscribe: 订阅 state(reducer-函数返回的) 数据更改
store.subscribe(() => {
  console.log('state 数据变更了')
  console.log(`counter: ${store.getState().counter}`)
})

// actions
const action1 = { type: 'INCREMENT' }
const action2 = { type: 'DECREMENT' }
const action3 = { type: 'ADD_NUMBER', num: 10 }
const action4 = { type: 'SUB_NUMBER', num: 20 }

// dispatch: 派发 actions
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
