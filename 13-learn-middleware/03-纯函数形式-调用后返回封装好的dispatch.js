import store from './store/index.js'
import { addAction } from './store/actionCreators.js'

// 3. 将之前的操作进行封装: 编写一个纯函数,调用函数后返回封装好dispatch,我们自己来赋值

// logging 中间件函数模拟
function patchLogging(store) {
  const next = store.dispatch
  function dispatchAndLogging(action) {
    console.log('dispatch 前 ———— ', store.getState())
    next(action)
    console.log('dispatch 后 ———— ', store.getState())
  }
  return dispatchAndLogging
}

// thunk 中间件函数模拟
function patchThunk(store) {
  const next = store.dispatch
  function dispatchAndThunk(action) {
    // function or object?
    const actionType = typeof action
    if (actionType === 'function') {
      // 调用 action 函数,将 dispatch 和 getState 函数作为参数传递过去
      // TIP: 这里做了拦截了,不要在调用 next 了,多此一举
      // next(action(store.dispatch, store.getState))
      action(store.dispatch, store.getState)
    } else if (actionType === 'object') {
      // 直接调用
      next(action)
    }
  }
  // 返回一个封装好的 dispatch 函数
  return dispatchAndThunk
}

// 测试 action 函数形式
const foo = (dispatch, getState) => {
  // 可以进行一些异步操作
  console.log('thunk ———— ', dispatch, getState)
  dispatch(addAction(10))
}

store.dispatch = patchLogging(store)
store.dispatch = patchThunk(store)

store.dispatch(addAction(10))
store.dispatch(foo)
