import profileStyle from './style.module.css'

export default function Profile(props) {
  return (
    <div>
      <hr />
      <h3 className={profileStyle.title}>我是Profile组件</h3>
    </div>
  )
}
