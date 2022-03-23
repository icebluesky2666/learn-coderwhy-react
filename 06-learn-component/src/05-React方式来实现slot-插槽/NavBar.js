import React, { Component } from 'react'
import './style.css'

export default class NavBar extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="nav-bar">
        <div className="nav-item nav-left">{children[0]}</div>
        <div className="nav-item nav-center">{children[1]}</div>
        <div className="nav-item nav-right">{children[2]}</div>
      </div>
    )
  }
}
