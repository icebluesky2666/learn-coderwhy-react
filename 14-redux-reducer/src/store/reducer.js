import { reducer as counterReducer } from './counter'
import { reducer as homeReducer } from './home'

// reducer 函数定义
export const reducer = (state = {}, actions) => {
  return {
    counterInfo: counterReducer(state.counterInfo, actions),
    homeDataInfo: homeReducer(state.homeDataInfo, actions)
  }
}
