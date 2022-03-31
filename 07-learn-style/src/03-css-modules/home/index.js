import homeStyle from './style.module.css'

export default function Home(props) {
  return (
    <div>
      <hr />
      <h3 className={homeStyle.title}>我是Home组件</h3>
    </div>
  )
}
