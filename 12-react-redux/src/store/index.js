import { createStore, applyMiddleware, compose } from 'redux'
import { reducer } from './reducer'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const storeEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, composeEnhancers(storeEnhancer))

export default store
