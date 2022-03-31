import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Home from '../home'
import Profile from '../profile'

// 创建一个ReactDOM对象-div
// .div 其实是一个函数,外部可以使用标签模版字符串传入参数,内部会根据标签模版字符串进行解析处理,并将样式添加至生成的ReactDOM对象上
const DivWrapper = styled.div`
  font-size: 20px;
  color: blue;
`
// console.log(DivWrapper)

// 样式嵌套功能
const TitleWrapper = styled.div`
  text-decoration: underline;
  .content {
    color: red;
    /* 伪类: 悬浮样式设置 */
    &:hover {
      color: orange;
      cursor: pointer;
    }
    /* 伪元素: 添加内容 */
    &::before {
      content: '伪元素添加的内容 -- ';
    }
  }
`

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ themeColor: 'red' }}>
        <DivWrapper>
          <h2>我是App</h2>
          <TitleWrapper>
            <div className="content">你好呀，我是TitleWrapper组件下的内容，鼠标放上来试试</div>
          </TitleWrapper>
          <Home />
          <Profile />
        </DivWrapper>
      </ThemeProvider>
    )
  }
}
