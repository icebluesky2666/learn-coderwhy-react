import React, { Component } from 'react'
import axios from 'axios'
import request from './service/request'

export default class App extends Component {
  componentDidMount() {
    console.log('App 组件挂载成功')

    // 这边我们用一个网络请求测试网站来学习
    // this.reqGet()
    // this.reqPost()
    // this.reqUserInfo({ name: 'chen' })
    // this.reqAllUserInfo({ name: '小小石' })
    this.reqMineAxios()
  }

  // GET
  // 等价于 axios.get()
  reqGet() {
    axios({
      url: 'https://httpbin.org/get',
      // params 是 get 请求方式的参数传递属性
      params: {
        name: '小小石',
        age: 18
      }
    })
      .then((res) => {
        console.log('\nGET')
        // 返回 Promise 对象 使用 .then 函数接收响应数据处理
        console.log(res)
        // axios 默认包了一层数据结构,用于查看状态码,请求头,请求对象,请求配置信息等等,真正的数据在 data 属性
        console.log(res.data)
      })
      .catch((err) => {
        // 异常捕获
        console.log(err)
      })
  }

  // POST
  // 等价于 axios.post()
  reqPost() {
    axios({
      url: 'https://httpbin.org/post',
      // data 是 post 请求方式的参数传递属性&需要追加 method 属性,否则默认 get 请求发出
      method: 'POST',
      data: {
        name: '小小石',
        age: 18
      }
    })
      .then((res) => {
        console.log('\nPOST')
        console.log(res)
        console.log(res.data)
      })
      .catch((err) => {
        // 异常捕获
        console.log(err)
      })
  }

  // 使用 async、await 关键字同步请求
  // 使用 try {} catch (err) {} 捕获异常
  async reqUserInfo(params) {
    try {
      const result = await axios.get('https://httpbin.org/get', { params })
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }

  // 多个请求同步调用
  reqAllUserInfo(params) {
    const result1 = axios.get('https://httpbin.org/get', params)
    const result2 = result1
    // 内部其实就是调用了 Promise.all 这个函数特性就是等待参数中所有 Promise 对象都调用 resolve 方法后进行统一返回
    axios.all([result1, result2]).then((resArr) => {
      console.log(resArr)
    })
  }

  // 拦截器: interceptors
  reqInterceptor() {
    // 请求拦截
    axios.interceptors.request.use(
      (config) => {
        // 1. 发送请求时,显示 loading 组件
        // 2. 携带 token
        // 3. 统一请求参数携带, 序列化请求参数
        return config
      },
      (err) => {
        return err
      }
    )

    // 响应拦截
    axios.interceptors.response.use(
      (res) => {
        // 1. 根据业务状态码统一处理
        // 2. 封装响应参数
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  // 使用自己封装的 axios 请求
  reqMineAxios() {
    request.get('/get', { params: { name: '111' } }).then(console.log)
  }

  render() {
    return <div>axios</div>
  }
}
