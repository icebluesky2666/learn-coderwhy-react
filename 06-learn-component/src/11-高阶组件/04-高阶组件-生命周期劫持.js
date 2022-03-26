import React, { PureComponent } from 'react'

// 用于计算组件的渲染时长
const withRenderTime = (WrappedComponent) => {
  return class extends PureComponent {
    constructor(props) {
      super(props)
      this.name = WrappedComponent.name
      this.beginTime = -1
      this.endTime = -1
    }

    // 组件挂载前: 这个函数在高版本的 React 已经被弃用了，加上 UNSAFA 也一样
    // componentWillMount() {
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
      console.log(`${this.name} 组件挂载前触发`)
    }

    componentDidMount() {
      this.endTime = +new Date()
      console.log(`${this.name} 组件挂载成功`)
      const intervalTime = this.endTime - this.beginTime
      console.log(`${this.name} 组件挂载时长：${intervalTime}`)
    }

    render() {
      return <WrappedComponent />
    }
  }
}

function Home() {
  return <div>Home</div>
}

function About() {
  return <div>About</div>
}

const TimeHome = withRenderTime(Home)
const TimeAbout = withRenderTime(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome />
        <TimeAbout />
      </div>
    )
  }
}
