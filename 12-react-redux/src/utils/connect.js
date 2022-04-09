import React, { PureComponent } from 'react'
// import store from '../store'

// 优化: 不对业务进行依赖,独立组件
import { storeContext } from './context'

// 创建一个高阶函数: 用于连接 state 以及 dispatch
// mapStateProps: 依赖的 state 数据源
// mapDispatchToProps: 依赖的 dispatch 函数
export function connect(mapStateProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props)
        console.log('context: ', context)
        // 当前组件维护的 store
        this.state = {
          storeState: context.getState()
        }
      }

      componentDidMount() {
        console.log('高阶组件挂载成功')
        this.unsubscribe = this.context.subscribe(() => {
          console.log('监听到变更了: ', this.context.getState())
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
        return mapStateProps(this.context.getState())
      }

      render() {
        // 将数据传递至子组件
        return (
          <WrappedComponent {...this.props} {...this.getStoreState()} {...mapDispatchToProps(this.context.dispatch)} />
        )
      }
    }

    EnhanceComponent.contextType = storeContext

    return EnhanceComponent
  }
}
