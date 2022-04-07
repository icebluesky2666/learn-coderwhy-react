// 这个文件用于演练 moment 这个日期库
import React, { Component } from 'react'
import moment from 'moment'

export default class MomentUse extends Component {
  render() {
    // 一个 Moment 的对象: 日期是今天开始
    // console.log(moment(''))
    // console.log(moment(undefined))
    // 2.4+开始支持上面的说明
    // console.log(moment([]))
    // console.log(moment({}))

    // 指定时间日期
    // console.log(moment('2022-04-01'))
    // console.log(moment('2013-02-08 24:00:00.000'))

    // 返回一个时间戳
    // console.log(moment().valueOf())

    // 判断是否能够正常被解析
    // console.log(moment().isValid())
    return (
      <div>
        <h3>moment的基本使用</h3>
        <p>最基本的使用：{moment().format()}</p>
        <p>{moment().format('YYYY-MM-DD HH:mm:ss.SSS')}</p>
        <p>{moment().fromNow()}</p>
        <p>{moment().toNow()}</p>
      </div>
    )
  }
}
