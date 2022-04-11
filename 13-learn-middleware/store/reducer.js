// reducer 函数定义
import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER } from './constants.js'

// state 数据源
const defaultState = {
  counter: 0
}

export const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + actions.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - actions.num }
    default:
      return state
  }
}
