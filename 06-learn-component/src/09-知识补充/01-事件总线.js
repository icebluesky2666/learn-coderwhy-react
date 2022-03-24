import React, { PureComponent } from 'react'
import EventBus from 'events'

// 创建事件对象
const eventEmitter = new EventBus.EventEmitter()
const EVENT_NAME = 'sayHello'

class ProfileHeader extends PureComponent {
  // 挂载
  componentDidMount() {
    console.log('mount')

    // 监听"sayHello"事件
    // eventEmitter.addListener(EVENT_NAME, (arg1, arg2) => {
    //   console.log(arg1, arg2)
    // })

    eventEmitter.on(EVENT_NAME, this.handleMsg)
  }

  // 销毁
  componentWillUnmount() {
    console.log('will unmount')
    // TIP: 两个参数都要求要传入
    // eventEmitter.removeListener(EVENT_NAME, this.handleMsg)
    eventEmitter.off(EVENT_NAME, this.handleMsg)
  }

  render() {
    return <h2>我是 ProfileHeader 组件</h2>
  }

  handleMsg(...args) {
    // 使用 ... 扩展运算符接收剩余参数,使之变成一个数组
    console.log(args, args instanceof Array)
  }
}

function Profile() {
  return (
    <div>
      <ProfileHeader />
    </div>
  )
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }

  render() {
    return (
      <div>
        {this.state.isShow && <Profile />}
        <button onClick={() => this.sendMsg()}>我是 App 组件的事件发射器</button>
        <button onClick={() => this.unProfileHeader()}>卸载 ProfileHeader 组件</button>
      </div>
    )
  }

  // 发送事件
  sendMsg() {
    eventEmitter.emit(EVENT_NAME, '小小石', 20)
  }

  unProfileHeader() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
