import React from 'react'
import { connect } from 'react-redux'
import { subAction } from '../store/counter/actionCreators'

function About(props) {
  console.log(props)

  return (
    <div>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={() => props.subCounter(1)}>-1</button>
      <button onClick={() => props.subCounter(5)}>-5</button>
      <h2>Banner</h2>
      <ul>
        {props.banners.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
      <h2>Recommend</h2>
      <ul>
        {props.recommends.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateProps = (state) => {
  return {
    counter: state.counterInfo.counter,
    banners: state.homeDataInfo.banners,
    recommends: state.homeDataInfo.recommends
  }
}
const mapDispatchToProps = (dispatch) => ({
  subCounter: (num) => dispatch(subAction(num))
})

export default connect(mapStateProps, mapDispatchToProps)(About)
