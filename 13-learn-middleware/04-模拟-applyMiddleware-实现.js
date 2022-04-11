import store from './store/index.js'
import { addAction } from './store/actionCreators.js'

// 4. 模拟 applyMiddleware 函数实现

// 日志中间件
function patchLogging(store) {
  const next = store.dispatch
  function dispatchAndLogging(action) {
    console.log('dispatch 前 ———— ', store.getState())
    next(action)
    console.log('dispatch 后 ———— ', store.getState())
  }
  return dispatchAndLogging
}

// thunk 中间件
function patchThunk(store) {
  const next = store.dispatch
  function dispatchAndThunk(action) {
    // 通过 map 映射
    const mapAction = {
      function: () => {
        action(store.dispatch, store.getState)
      },
      object: () => {
        next(action)
      },
      undefined: () => {
        console.log('undefined 类型无法处理')
      }
    }
    mapAction[typeof action]()
    // 通过 if 判断
    // const actionType = typeof action
    // if (actionType === 'function') {
    //   action(store.dispatch, store.getState)
    // } else if (actionType === 'object') {
    //   // 直接调用
    //   next(action)
    // }
  }
  // 返回一个封装好的 dispatch 函数
  return dispatchAndThunk
}

// 这个就不是纯函数了,因为内部直接修改了 store.dispatch 数据
function applyMiddleware(...middlewares) {
  // 拷贝一份,以免数据污染,middlewares是一个数组,上面
  // 形参的...是代表可选参数,可以传入多个
  // 下面的...是代表数组的解构,扩展运算符
  const newMiddlewaers = [...middlewares]
  while (newMiddlewaers.length) {
    // 依次执行中间件
    store.dispatch = newMiddlewaers.pop()(store)
  }
}

applyMiddleware(patchLogging, patchThunk)
store.dispatch(addAction(199))
store.dispatch(addAction(199))
