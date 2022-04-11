import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addAction } from '../store/counter/actionCreators'
import { fechHomeMultidataAction, getHomeMultidata } from '../store/home/actionCreators'

class Home extends PureComponent {
  // console.log(props)
  // props.getHomeData()
  // props.fetchHomeData()
  componentDidMount() {
    this.props.fetchHomeData()
  }

  render() {
    return (
      <div>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={() => this.props.addCounter(1)}>+1</button>
        <button onClick={() => this.props.addCounter(5)}>+5</button>
      </div>
    )
  }
}

const mapStateProps = (state) => ({
  counter: state.counterInfo.counter
})
const mapDispatchToProps = (dispatch) => ({
  addCounter: (num) => dispatch(addAction(num)),
  getHomeData: () => dispatch(getHomeMultidata),
  // 还是对象的形式
  fetchHomeData: () => dispatch(fechHomeMultidataAction)
})

export default connect(mapStateProps, mapDispatchToProps)(Home)
