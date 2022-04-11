import axios from 'axios'

import { FETCH_HOME_MULTIDATA, GET_BANNAERDATA, GET_RECOMMENDATA } from './constants.js'

export const getBannerAction = (banners) => {
  return { type: GET_BANNAERDATA, banners }
}
export const getRecommendAction = (recommends) => {
  return { type: GET_RECOMMENDATA, recommends }
}
export const getHomeMultidata = async (dispatch, getState) => {
  try {
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    console.log(res)
  } catch (e) {
    console.log(e)
  }
}
export const fechHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}
