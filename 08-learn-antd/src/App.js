import React, { PureComponent } from 'react'

import FButton from './FButton'
// import HomeRecommand from './components/home/childCpns/home-recommand'

// 使用别名的方式
import HomeRecommand from 'components/home/childCpns/home-recommand'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <FButton />
        <hr />
        <HomeRecommand />
      </div>
    )
  }
}
