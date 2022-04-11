import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER } from './constants.js'

export const inAction = () => {
  return { type: INCREMENT }
}
export const deAction = () => {
  return { type: DECREMENT }
}
export const addAction = (num) => {
  return { type: ADD_NUMBER, num }
}
export const subAction = (num) => {
  return { type: SUB_NUMBER, num }
}
