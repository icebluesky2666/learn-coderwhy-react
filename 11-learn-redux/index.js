import store from './store/index.js'
import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER } from './store/constants.js'

// 订阅 state 变更
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: INCREMENT })
store.dispatch({ type: INCREMENT })
store.dispatch({ type: DECREMENT })
store.dispatch({ type: ADD_NUMBER, num: 100 })
store.dispatch({ type: SUB_NUMBER, num: 100 })
