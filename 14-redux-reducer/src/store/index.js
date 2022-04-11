import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'

// saga
import createSagaMiddleware from 'redux-saga'
import sagaFunc from './saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// 创建一个 saga 实例对象中间件
const sagaMiddleware = createSagaMiddleware()

const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)
const store = createStore(reducer, composeEnhancers(storeEnhancer))

// 启动 saga 中间件: 参数需要一个生成器函数
sagaMiddleware.run(sagaFunc)

export default store
