import { reducer as counterReducer } from './counter'
import { reducer as homeReducer } from './home'

import { combineReducers } from 'redux'

// reducer 函数定义
// function reducer(state = {}, actions) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, actions),
//     homeDataInfo: homeReducer(state.homeDataInfo, actions)
//   }
// }

const reducer = combineReducers({
  counterInfo: counterReducer,
  homeDataInfo: homeReducer
})

export default reducer
