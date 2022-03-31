import styled from 'styled-components'

// 特点
// 1. props 穿透,组件标签上直接设置
// 2. 直接通过链式调用 .attrs 设置属性
// 3. 动态 state 变量使用
const FInput = styled.input.attrs({
  placeholder: '小小石',
  // 自定义属性
  bgColor: 'red'
})`
  background-color: lightblue;
  /* 在值中使用 */
  border-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`

// 继承
const FSonInput = styled(FInput)`
  /* 使用共享的属性主题颜色 */
  color: ${(props) => props.theme.themeColor};
  font-size: 20px;
`

export default function Profile(props) {
  const state = {
    color: 'purple'
  }
  return (
    <div>
      <hr />
      <FInput type="text" color={state.color} />
      <FSonInput />
      <h3>我是Profile组件</h3>
    </div>
  )
}
