// reducer 函数定义
import { GET_BANNAERDATA, GET_RECOMMENDATA } from './constants'

// homeMultidata 相关
const initialHomeState = {
  banners: [],
  recommends: []
}
const homeReducer = (state = initialHomeState, actions) => {
  switch (actions.type) {
    case GET_BANNAERDATA:
      return { ...state, banners: actions.banners }
    case GET_RECOMMENDATA:
      return { ...state, recommends: actions.recommends }
    default:
      return { ...state }
  }
}

export default homeReducer
