import { DeleteOutlined } from '@ant-design/icons'
import { Comment, Avatar, Tooltip } from 'antd'

export default function CommentItem(props) {
  // console.log(props)
  const { nickName, avatar, text, time } = props.commentInfo
  return (
    <Comment
      author={<a href="#/">{nickName}</a>}
      avatar={<Avatar src={avatar} alt="小小石" />}
      content={text}
      datetime={
        <Tooltip title={time.format('YYYY-MM-DD HH:mm:ss')}>
          <span>{time.fromNow()}</span>
        </Tooltip>
      }
      actions={[
        <span onClick={props.removeItem}>
          <DeleteOutlined /> 删除
        </span>
      ]}
    />
  )
}
