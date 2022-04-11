import store from './store/index.js'
import { addAction } from './store/actionCreators.js'

// 2. 函数的基础上进行优化,直接修改原有的 dispatch
// 保存一份 store.dispatch 信息
const originDispatch = store.dispatch

// 专有名词叫做: monkeyinpatch
function dispatchAndLogging(action) {
  console.log('dispatch 前 ———— ', store.getState())
  originDispatch(action)
  console.log('dispatch 后 ———— ', store.getState())
}

store.dispatch = dispatchAndLogging
store.dispatch(addAction(10))
