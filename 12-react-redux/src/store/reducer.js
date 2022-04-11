// reducer 函数定义
import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER, GET_BANNAERDATA, GET_RECOMMENDATA } from './constants'

// state 数据源
const defaultState = {
  counter: 0,
  banners: [],
  // 推荐数据
  recommends: []
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
    case GET_BANNAERDATA:
      return { ...state, banners: actions.banners }
    case GET_RECOMMENDATA:
      return { ...state, recommends: actions.recommends }
    default:
      return state
  }
}
