import { PureComponent } from 'react'
import store from '../store'

// 创建一个高阶函数: 用于连接 state 以及 dispatch
// mapStateProps: 依赖的 state 数据源
// mapDispatchToProps: 依赖的 dispatch 函数
export function connect(mapStateProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    // 返回一个组件
    return class extends PureComponent {
      constructor(props) {
        super(props)
        // 当前组件维护的 store
        this.state = {
          storeState: this.getStoreState()
        }
      }

      componentDidMount() {
        console.log('高阶组件挂载成功')
        this.unsubscribe = store.subscribe(() => {
          console.log('监听到变更了: ', store.getState())
          // 更新 render 函数,重新进行页面渲染
          this.setState({
            storeState: this.getStoreState()
          })
        })
      }

      componentWillUnmount() {
        // 取消订阅
        console.log('高阶组件卸载成功')
        this.unsubscribe()
      }

      // 获取最新的 store state 数据
      getStoreState() {
        return mapStateProps(store.getState())
      }

      render() {
        // 将数据传递至子组件
        return <WrappedComponent {...this.props} {...this.getStoreState()} {...mapDispatchToProps(store.dispatch)} />
      }
    }
  }
}
