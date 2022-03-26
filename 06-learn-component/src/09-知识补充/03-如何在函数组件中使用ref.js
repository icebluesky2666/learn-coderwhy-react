import React, { createRef, PureComponent, forwardRef } from 'react'

const Profile = forwardRef((props, ref) => {
  console.log(props, ref)
  return <h2 ref={ref}>Profile</h2>
})

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.profileRef = createRef()
  }

  render() {
    return (
      <div>
        <Profile ref={this.profileRef} />
        <button onClick={() => this.printRefInfo()}>打印ref信息</button>
      </div>
    )
  }

  printRefInfo() {
    console.log(this.profileRef)
  }
}
