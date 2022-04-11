import axios from 'axios'
import { takeEvery, put, all } from 'redux-saga/effects'
import { getBannerAction, getRecommendAction } from './home/actionCreators'
import * as actionsType from './home/constants'

function* reqHomeMultidata() {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  const data = res.data.data
  yield all([put(getBannerAction(data.banner.list)), put(getRecommendAction(data.recommend.list))])
}

function* mySaga() {
  yield takeEvery(actionsType.FETCH_HOME_MULTIDATA, reqHomeMultidata)
}

export default mySaga
