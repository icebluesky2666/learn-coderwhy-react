import store from './store/index.js'
import { addAction } from './store/actionCreators.js'

// 1. 封装一个函数: 函数内部在调用 dispatch 前后做打印
function dispatchAndLogging(action) {
  console.log('dispatch 前 ———— ', store.getState())
  store.dispatch(action)
  console.log('dispatch 后 ———— ', store.getState())
}

dispatchAndLogging(addAction(100))
