import React, { PureComponent } from 'react'

// 一层层找
// import About from '../../../about/index'

// 使用别名的方式
import About from '@/components/about'

export default class HomeRecommand extends PureComponent {
  render() {
    return (
      <div>
        <h3>HomeRecommand</h3>
        <About />
      </div>
    )
  }
}
