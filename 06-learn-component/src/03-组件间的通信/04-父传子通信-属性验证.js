import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildCpn(props) {
  console.log(props)
  const { names, name, age, sex } = props

  return (
    <div>
      <h2>子组件展示数据</h2>
      <span>{name + ' ' + age + ' ' + sex}</span>

      {/* <span>{NaN}</span> */}

      <ul>
        {names.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

// 属性类型验证
ChildCpn.propTypes = {
  // isRequired: 必传
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  names: PropTypes.array
}

// 默认值设置
ChildCpn.defaultProps = {
  name: '111',
  age: 0,
  sex: '男',
  names: []
}

// 如果转换到类组件应该怎么写呢？
class ChildCpn2 extends Component {
  // 加上 static 修饰符,这是在 ES6 中的 class fields 写法
  static propTypes = {}
  static defaultProps = {}
}

export default function App() {
  return (
    <div>
      <ChildCpn name="小小石" age={18} sex="男" names={['11', '00']} />
      <ChildCpn name="z哥" age={20} sex="男" names={['00', '11']} />
      <ChildCpn />
    </div>
  )
}
