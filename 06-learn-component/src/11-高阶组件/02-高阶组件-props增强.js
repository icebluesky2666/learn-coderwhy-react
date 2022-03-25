import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    const { name, level, region } = this.props
    return (
      <div>
        <h2>Home</h2>
        <span>{`名称：${name} 等级：${level} 地区：${region}`}</span>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    const { name, level, region } = this.props
    return (
      <div>
        <h2>About</h2>
        <span>{`名称：${name} 等级：${level} 地区：${region}`}</span>
      </div>
    )
  }
}

// 定义一个高阶组件用于补充: 地区字段(region)
function withRegionField(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region="中国" />
  }
}

const RegionHome = withRegionField(Home)
const RegionAbout = withRegionField(About)

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: '小小石',
      level: 20
    }
  }

  render() {
    return (
      <div>
        <RegionHome {...this.state} />
        <RegionAbout {...this.state} />
      </div>
    )
  }
}
