import React, { PureComponent, createRef } from 'react'

import MomentUse from '@/comment/commponents/MomentUse'
import CommentInput from '@/comment/commponents/CommentInput'
import CommentItem from '@/comment/commponents/CommentItem'

export default class Comments extends PureComponent {
  constructor(props) {
    super(props)

    this.commentListRef = createRef()
    this.state = {
      // 评论列表
      commentList: []
    }
  }

  // 组件更新挂载完成
  componentDidUpdate() {
    // TODO: 拿到最新添加的评论组件的DOM 获取它的一个 offsetTop
    this.commentListRef.current.scrollTo({
      // 76 每个评论组件的高度 * 多少个
      top: 76 * this.state.commentList.length,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div>
        <div
          ref={this.commentListRef}
          style={{ maxHeight: '300px', overflow: 'hidden', overflowY: 'auto' }}
          className="comment-list"
        >
          {this.state.commentList.map((item) => {
            return <CommentItem key={item.id} commentInfo={item} />
          })}
        </div>
        <CommentInput addComment={this.addComment} />
        {/* <MomentUse /> */}
      </div>
    )
  }

  addComment = (info) => {
    // console.log('我是父组件收到了', info)
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }
}
