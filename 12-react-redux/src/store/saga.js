import axios from 'axios'
import { takeEvery, takeLatest, put, all } from 'redux-saga/effects'
import { getBannerAction, getRecommendAction } from './actionCreators'
import * as actionsType from './constants'

// FETCH_HOME_MULTIDATA: 拦截后执行的操作
// 内部会将该生成器函数循环遍历执行 next()
function* reqHomeMultidata() {
  // saga 帮助我们把 Promise.then 的结果返回出来的 Promise.then((res) => next)
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  console.log(res.data.data)
  const data = res.data.data
  // 如果我们想要 saga 帮我们分发 dispatch, 使用 put
  // yield put(getBannerAction(data.banner.list))
  // yield put(getRecommendAction(data.recommend.list))
  // 可以使用 all 来统一执行处理 put
  yield all([put(getBannerAction(data.banner.list)), put(getRecommendAction(data.recommend.list))])
}

function* mySaga() {
  // takeEvery: 监听指定 action 的每次触发以及拦截处理,第一个参数为 actions.type,第二个参数还是一个生成器函数(拦截后需要执行的操作/异步请求等等)
  // takeLatest: 监听指定 actions 触发,但是永远至触发最新一次
  yield takeEvery(actionsType.FETCH_HOME_MULTIDATA, reqHomeMultidata)
  // yield all([takeEvery(actionsType.FETCH_HOME_MULTIDATA, reqHomeMultidata)])
}

export default mySaga
