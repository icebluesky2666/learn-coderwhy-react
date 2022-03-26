import React, { PureComponent, createContext } from 'react'

// 创建一个组件共享 Context
const UserContext = createContext({
  name: '-',
  age: 0,
  sex: '男'
})

class Home extends PureComponent {
  render() {
    const { name, age, sex } = this.props
    return (
      <div>
        <h2>Home</h2>
        <span>{`姓名：${name} 年龄：${age} 性别：${sex}`}</span>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    const { name, age, sex } = this.props
    return (
      <div>
        <h2>Home</h2>
        <span>{`姓名：${name} 年龄：${age} 性别：${sex}`}</span>
      </div>
    )
  }
}

// 定义一个高阶组件用于补充: 地区字段(region)
function withRegionField(WrappedComponent) {
  return (props) => {
    return <UserContext.Consumer>{(res) => <WrappedComponent {...props} {...res} />}</UserContext.Consumer>
  }
}

const RegionHome = withRegionField(Home)
const RegionAbout = withRegionField(About)

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: '小小石',
      age: 20,
      sex: '男'
    }
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={{ ...this.state }}>
          <RegionHome />
          <RegionAbout />
        </UserContext.Provider>
        <hr />
        <div>
          <RegionHome />
          <RegionAbout />
        </div>
      </div>
    )
  }
}
