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
