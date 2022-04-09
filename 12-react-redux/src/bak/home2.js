import React from 'react'
import { connect } from '../utils/connect'
import { addAction } from '../store/actionCreators'

function Home(props) {
  console.log(props)

  return (
    <div>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={() => props.addCounter(1)}>+1</button>
      <button onClick={() => props.addCounter(5)}>+5</button>
    </div>
  )
}

const mapStateProps = (state) => ({
  counter: state.counter
})
const mapDispatchToProps = (dispatch) => ({
  addCounter: (num) => dispatch(addAction(num))
})

export default connect(mapStateProps, mapDispatchToProps)(Home)
