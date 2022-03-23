import React, { Component } from 'react'
import TabControl from './TabControl'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.titles = ['流行', '新款', '精选']
    this.state = {
      activeIndex: 0
    }
  }

  render() {
    const { activeIndex } = this.state
    return (
      <div>
        <TabControl activeIndex={activeIndex} titles={this.titles} changeIndex={(index) => this.changeIndex(index)} />
      </div>
    )
  }

  changeIndex(index) {
    this.setState({
      activeIndex: index
    })
  }
}
