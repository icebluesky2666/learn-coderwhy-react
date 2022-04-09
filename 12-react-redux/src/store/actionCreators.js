import axios from 'axios'

// actions 创建
import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER } from './constants.js'

// +1
export const inAction = () => {
  return { type: INCREMENT }
}

// -1
export const deAction = () => {
  return { type: DECREMENT }
}

// +num
export const addAction = (num) => {
  return { type: ADD_NUMBER, num }
}

// -num
export const subAction = (num) => {
  return { type: SUB_NUMBER, num }
}

// redux-thunk 可以使得 dispatch 中参数 action 为一个函数,且将 dispatch 作为参数传入
// 我们可以在这个函数中进行异步操作,等拿到返回结果后,在分发 dispatch 去变更 state 信息
export const getHomeMultidata = async (dispatch, getState) => {
  // getState: 可以拿到 state 中的信息
  // console.log(getState())
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  console.log(res)
}
