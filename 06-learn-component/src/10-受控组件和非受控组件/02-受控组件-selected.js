import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      fruits: 'apple'
    }
  }

  render() {
    const { fruits } = this.state
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <select name="fruits" value={fruits} onChange={(e) => this.handleSelectFruits(e)}>
            <option value="orange">橘子</option>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
          </select>
          <br />
          <br />
          <input type="submit" value="提交" />
        </form>
        <h2>选择水果：{fruits}</h2>
      </div>
    )
  }

  handleSubmit(event) {
    console.log(event)
    // 阻止 submit 事件的默认提交
    event.preventDefault()
  }

  handleSelectFruits(event) {
    console.log(event.target.value)
    this.setState({
      fruits: event.target.value
    })
  }
}
