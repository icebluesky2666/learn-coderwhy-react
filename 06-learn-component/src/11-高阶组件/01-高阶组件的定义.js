import React, { PureComponent } from 'react'

class Profile extends PureComponent {
  render() {
    return <h2>Profile：{this.props.name}</h2>
  }
}

// 定义一个高阶组件
function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  // 可以通过这个属性来定义组件名称
  NewComponent.displayName = 'FengComponent'

  return NewComponent
}

const CustomComponet = enhanceComponent(Profile)

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: '小小石'
    }
  }

  render() {
    return (
      <div>
        <CustomComponet {...this.state} />
      </div>
    )
  }
}
