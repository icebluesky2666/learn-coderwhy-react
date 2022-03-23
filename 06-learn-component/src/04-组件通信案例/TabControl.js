import React, { Component } from 'react'

export default class TabControl extends Component {
  render() {
    const { titles = [], activeIndex = 0, changeIndex } = this.props
    return (
      <div>
        <div>
          {titles.map((item, index) => (
            <span
              key={item}
              style={{
                display: 'inline-block',
                width: '80px',
                color: activeIndex === index && 'red',
                cursor: 'pointer'
              }}
              onClick={() => changeIndex(index)}
            >
              {item}
            </span>
          ))}
        </div>
        <div>
          <h2>{titles[activeIndex]}</h2>
        </div>
      </div>
    )
  }
}
