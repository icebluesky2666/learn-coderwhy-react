import React, { PureComponent } from 'react'
import { Input, Button } from 'antd'
import moment from 'moment'

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  // 重新渲染
  render() {
    const { text } = this.state
    return (
      <>
        <Input.TextArea
          value={text}
          onChange={(event) => this.handleInputChange(event)}
          rows={3}
          placeholder="这里可以发表您想说的话"
          style={{ margin: '10px 0' }}
        />
        <Button disabled={text ? false : true} type="primary" onClick={this.addComment}>
          发表评论
        </Button>
      </>
    )
  }

  // 处理输入框的变更
  handleInputChange(event) {
    const text = event.target.value
    this.setState({ text })
  }

  // 增加评论
  addComment = () => {
    const text = this.state.text
    // 包一层 评论对象
    const info = {
      id: Date.now(),
      nickName: '小小石',
      avatar: 'https://joeschmoe.io/api/v1/random',
      text,
      // 可扩性会更好一点
      time: moment()
    }
    console.log(`评论内容: ${text}`)
    // console.log(info)
    this.props.addComment(info)
    // 清空输入的评论
    this.setState({ text: '' })
  }
}
