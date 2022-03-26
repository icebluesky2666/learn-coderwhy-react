import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {
  // Warning: Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code
  UNSAFE_componentWillMount() {
    console.log('Home UNSAFE_componentWillMount')
  }

  render() {
    // Warning: A string ref, "testRef", has been found within a strict mode tree.
    return <h2 ref="testRef">Home</h2>
  }
}

class Profile extends PureComponent {
  render() {
    return <h2>Profile</h2>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </>
    )
  }
}
