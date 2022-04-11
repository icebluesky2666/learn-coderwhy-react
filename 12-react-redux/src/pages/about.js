import React from 'react'
import { connect } from 'react-redux'
import { subAction } from '../store/actionCreators'

function About(props) {
  console.log(props)

  return (
    <div>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={() => props.subCounter(1)}>-1</button>
      <button onClick={() => props.subCounter(5)}>-5</button>
      <h2>首页</h2>
      <ul>
        {props.banners.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <h2>推荐</h2>
      <ul>
        {props.recommends.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends
})
const mapDispatchToProps = (dispatch) => ({
  subCounter: (num) => dispatch(subAction(num))
})

export default connect(mapStateProps, mapDispatchToProps)(About)
