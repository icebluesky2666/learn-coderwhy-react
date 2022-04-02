import { PureComponent } from 'react'
import classNames from 'classnames'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isActive: true
    }
  }

  render() {
    const { isActive } = this.state

    return (
      <div>
        <h2 className={'foo bar active title'}>我是标题1</h2>
        {/* 需要手动添加空格 */}
        <h2 className={'title' + (isActive ? ' active' : '')}>我是标题1</h2>
        {/* 数组形式 */}
        <h2 className={['hello', isActive ? 'active' : ''].join(' ')}>hello</h2>

        {/* classnames 库的使用 */}
        {/* active */}
        <h2 className={classNames({ active: isActive })}>你好</h2>
        {/* 1 */}
        <h2 className={classNames(null, undefined, 0, 1)}>你好</h2>
        {/* b c */}
        <h2 className={classNames('b', [{ c: true, d: false }])}>你好</h2>
      </div>
    )
  }
}
