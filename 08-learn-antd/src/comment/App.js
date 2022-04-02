import React, { PureComponent } from 'react'

import Comments from './commponents'

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ width: '500px', margin: '0 auto', paddingTop: '20px' }}>
        <h2 style={{ margin: 0 }}>评论小案例</h2>
        <Comments />
      </div>
    )
  }
}
