import React from 'react'
import { connect } from '../utils/connect'
import { subAction } from '../store/actionCreators'

function About(props) {
  console.log(props)

  return (
    <div>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={() => props.subCounter(1)}>-1</button>
      <button onClick={() => props.subCounter(5)}>-5</button>
    </div>
  )
}

const mapStateProps = (state) => ({
  counter: state.counter
})
const mapDispatchToProps = (dispatch) => ({
  subCounter: (num) => dispatch(subAction(num))
})

export default connect(mapStateProps, mapDispatchToProps)(About)
