import React from 'react'
import { connect } from 'react-redux'
import { addAction, getHomeMultidata } from '../store/actionCreators'

function Home(props) {
  console.log(props)

  props.getHomeData()

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
  addCounter: (num) => dispatch(addAction(num)),
  getHomeData: () => dispatch(getHomeMultidata)
})

export default connect(mapStateProps, mapDispatchToProps)(Home)
