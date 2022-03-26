import React, { PureComponent, Fragment } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      friends: [
        { name: '小小石', age: 18 },
        { name: '小小石2', age: 19 },
        { name: '小小石3', age: 20 }
      ]
    }
  }

  render() {
    return (
      // 第一种写法
      // <Fragment>
      //   <h2>App</h2>
      //   <button>我是按钮</button>
      // </Fragment>

      // 短语法
      // <>
      //   <h2>App</h2>
      //   <button>我是按钮</button>
      // </>

      // 如果需要添加 key 的情况,那么需要使用 Fragment
      <>
        {this.state.friends.map((item) => {
          return (
            <Fragment key={item.name}>
              <h2>{item.name}</h2>
              <p>{item.age}</p>
              <hr />
            </Fragment>
          )
        })}
      </>
    )
  }
}
