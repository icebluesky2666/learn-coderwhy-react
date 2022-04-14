[生成 vscode 代码片段网站](https://snippet-generator.app/)

[babel 代码转换官网](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.8&externalPlugins=&assumptions=%7B%7D)

## 安装 React 脚手架

```shell
npm install -g create-react-app
```

若提示`Error: EACCES: permission denied`需要提升权限, 使用 sudo

## 创建 React 项目(create-react-app: CRA)

注：项目名称不能包含大写字母

```shell
create-react-app 项目名称

create-react-app 05-learn-scaffold
cd ./05-learn-scaffold
yarn start

# 暴露 webpack 隐藏的配置信息
yarn run eject
```

## 目录说明

PWD：全称为 progressive web app, 即为渐进式 WEB 应用, 这种 Web 存在的形式, 我们也称之为 Web App

**PWA 解决了哪些问题？**

1. 可以添加至主屏幕, 点击主屏幕可以实现启动动画以及隐藏地址栏
2. 实现离线缓存功能, 即使用户手机没有网络, 依然可以使用一些离线功能
3. 实现了消息推送
4. 等等一系列类似于 Native App 相关的功能

```text
/public
  logo192.png // 在 manifest.json 中被使用
  logo512.png // 在 manifest.json 中被使用
  manifest.json // 和 web app 配置相关
  robots.txt // 指定搜索引擎可以或者无法爬取的文件
/src
  App.css // App 组件相关样式
  App.js // App 组件的代码文件
  App.test.js // App 组件的测试代码文件
  index.css / 全局的样式文件
  index.js // 应用程序入口
  logo.svg // 启动相关所看到的 React 旋转图标
  serviceWorker.js // 默认帮助我们写好的注册PWA相关的代码
  setupTests.js // 测试初始化文件

yarn.lock // 依赖库的确定版本信息
```

## 组件化开发

**类组件的定义要求：**

1. 组件的名称必须是大写开头(不管是类组件还是函数组件都是如此)
2. 组件必须继承自 React.Component
3. 类组件必须实现 render 函数(用于渲染 DOM)

**函数式组件特点**

1. 没有 this 对象
2. 没有内部的状态(state)

**render 函数的返回值**

1. React 元素(通常是通过 JSX 创建)
2. 数组 或 fragments
3. Portals：可以渲染子节点到不同的 DOM 子树中
4. 字符串 或 数值 类型：它们在 DOM 中会被渲染为文本节点
5. 布尔类型 或 null：什么都不渲染

## 生命周期函数

1. constructor：组件创建时触发
2. render：组件渲染时触发
3. componentDidMout：组件挂载后触发
4. componentDidUpdate：组件更新时触发-setState() forceState()
5. componentWillUnmount：组件销毁时触发

## 通信

类组件通过 this.props 直接获取, 在组件标签中传入 属性名称={属性值} 的方式

const context = React.createContext({}) 创建一个 context 用于数据共享

给 class 组件绑定上 contextType = context, 内部即可通过 this.context 拿到共享数据

## setState

**是否为异步函数？分成两种情况, React 会更新内部上下文情况选择**

1. 异步：在组件生命周期或 React 合成事件(onClick...)中, setState 是异步的
2. 同步：在 setTimeout 或者原生 DOM 事件中, setState 是同步的

**为什么规定传入的数据需要是不可变的？**

1. 因为 React 在更新视图时如果发现 shouldComponentUpdate 函数或者该组件继承于 PureComponent 内部将会有一个 props/state 的浅层比较用于决定是否重新执行 render 函数, 又 JS 引用类型的特性, 如果直接更改了数据然后进行 setState 的话, 那么此时的 newState 与 prevState 引用地址将相等, 导致组件不能正常进行更新

## diff

1. 同层节点之间相互比较, 不会跨节点比较
2. 不同类型的节点, 产生不同的树结构
3. 开发中, 可以通过 key 来指定哪些节点在不同的渲染下保持稳定

## keys 的优化

1. keys 应该是唯一的
2. 使用 index 作为 key, 对性能是没有优化的
3. key 不要使用随机数（随机数在下一次 render 时, 会重新生成一个数字）

## 组件 render 更新

1. 如果组件内实现了 shouldComponentUpdate 函数, 将根据其返回值来决定是否更新 render 函数(需要注意的是, 官网中写道：后续该函数可能被视为不是严格的指令, 并且, 当返回 flase 时, 仍然可能导致组件重新渲染)
2. 通过 PureComponent 继承的组件可以自动判断 props/state 变更, 从而是否需要更新 render 函数(浅层比较-对象属性长度-对象属性是否相等-对象属性值是否相等)
3. 前面两个都是关于类组件的, 那如果是函数组件呢？可以使用 React 内置的 memo 函数返回一个新的函数组件来自己自动判断

## 事件总线 BUS

安装

```shell
yarn add events
```

初始化使用说明

```JavaScript
// 导入
import EventBus from 'events'


// 创建事件对象
const eventEmitter = new EventBus.EventEmitter()

// 监听
eventEmitter.addListener('[事件名称-string/symbol]', '[事件处理函数-function]')
eventEmitter.on('[事件名称-string/symbol]', '[事件处理函数-function]')

// 卸载
eventEmitter.removeListener('[事件名称-string/symbol]', '[事件处理函数-function]')
eventEmitter.off('[事件名称-string/symbol]', '[事件处理函数-function]')

// 事件触发
eventEmitter.emit('[事件名称-string/symbol]', '参数一', '参数二', ...)
```

## refs

1. 字符串：调用的时候直接使用 this.refs.ref 定义名称
2. 对象：调用的时候需要 .current 才能拿到 DOM 元素
3. 回调函数：直接可以获取到 DOM 元素
4. 组件中绑定可以获取一个 ref 对象, 这个对象 .current 可以拿到内部组件属性、方法等等...

## 受控组件与非受控组件的区别

1. 受控组件：与 state 关联, 由 React 进行状态管理
2. 非受控组件：例如用 refs 来操作 DOM 元素从而获取属性值组件

## 高阶组件(函数)

1. 接收一个组件作为参数
2. 返回一个组件
3. (组件劫持)可以在这个组件被渲染前做一些事情(props 增强)

## StrictMode(组件的严格模式)

1. 检测不安全的生命周期函数
2. 检测过时的 ref API
3. 检测意外的副作用(constructor 会在开发模式下调用两次)
4. 检测废弃的 findDomNode() 方法
5. 检测过时的 context API

## React 中的 css

**内联样式**

优点：

1. 内联样式, 样式之间不会有冲突
2. 通过设置 state 中的属性值动态设置样式

缺点：

1. 写法上都需要使用小驼峰标识
2. 某些样式没有提示信息
3. 大量的样式, 可能会导致代码混乱
4. 某些样式无法编写(比如伪类/伪元素)

**CSS in JS**

- styled-components
- emotion
- glamorous

```shell
# 用啥都行 npm | yarn | cnpm ... 看你有啥
yarn add styled-components
```

**Ant Design**

1. 兼容性

- 现代浏览器和 IE11(polyfills)
- 支持服务端渲染
- Electron

2. 安装&使用

```shell
# ant
yarn add antd

# icons
yarn add @ant-design/icons
```

```javaScript
// index.js: 入口文件,保证所有地方都能使用
// 导入样式
import 'antd/dist/antd.css'

// 其它.js: 使用
import { Button, Space } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
```

3. tree shaking 概念的引用

可以选择使用的组件进行按需加载, 打包时会将未使用的代码/组件进行去除, 减少打包体积

4. 更改 antd 主题配置

- react-app-rewired + customize-cra(早期推荐的方案,已经比较久了)
- craco (目前推荐的方案-我的版本-v4)

```shell
yarn add @craco/craco

# 安装完后,需要修改一些信息
# package.json
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}

# 烦人的警告信息,可以添加 GENERATE_SOURCEMAP=false 去除
"start": "GENERATE_SOURCEMAP=false craco start"

# 安装 craco-less 来帮助加载 less 样式以及修改变量
yarn add craco-less
```

```javascript
// craco.config.js
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      // TIP: 第一次敲成了 option 记得加 s 哦~
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // @primary-color 是 antd 暴露的变量名称,我们修改为绿色
              '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
```

5. 日期处理插件 moment

```shell
# 安装
yarn add moment
```

```javascript
// 使用
import moment from 'moment'

moment().format() // 2022-04-07T14:03:28+08:00
moment().format('YYYY-MM-DD HH:mm:ss.SSS') // 2022-04-07 14:03:28.738
moment().fromNow() // a few seconds ago
moment().toNow() // a few seconds ago
```

## 网络请求

1. 传统 Ajax: 基于 XHR(XMLHttpRequest) 封装的

- 缺点: 配置和调用方式比较混乱(创建 XML 对象、判断浏览器、处理响应信息、手动绑定事件)

2. JQuery-Ajax

- 优点: 相对于传统 Ajax 来说非常好用
- 缺点: 使用 Ajax 需要引入 JQuery 整个包, 比较不合理(采取个性化打包方案又不能享受 CDN 服务)

3. Fetch API [MDN 学习地址](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

- 优点: Ajax 替换方案, 基于 Promise 设计, 可定制化强
- 缺点: 需要明确 Fetch 是一个比较 low-level(底层) 的 API, 没有给你封装好各式各样的功能与实现, 大部分功能需要自己实现
- ——发送网络请求需要自己配置 Header 的 Content-Type
- ——错误处理相对麻烦(只有网络错误才会 reject, HTTP 状态码 404 或者 500 不会被标记 reject)
- ——不支持取消请求, 没法查看请求的进度

4. axios: 目前前端使用比较广泛的网络请求库, 包括 Vue 作者也是推荐在 Vue 中使用 axios

- 优点: 在浏览器中发送 XMLHttpRequest 请求
- 优点：可以直接在 Node.js 中使用
- 优点：支持 Promise API、取消请求、拦截请求&响应、转换请求&响应数据

```shell
# 安装
yarn add axios
```

具体演示代码查看 09-learn-axios/ 目录

## React 中的过渡动画

用于给某个组件添加显示与消失的过渡动画, 目的是为了增加用户体验(Vue 内部组件自带了)

当然, 我们可以选择使用原生 CSS 的方式来实现这些过渡动画, 不过 React 社区已经为我们提供了 react-transition-group 库用于完成过渡动画了, 再写一遍就有显得有点多余了, 不过这个库需要我们额外安装, 但是该包体积较小, 不会对项目造成较大的负担

```shell
yarn add react-transition-group
```

主要提供的四个组件:

- Transition
- CSSTransition: 基于 Transition 组件构建, in 属性绑定显示隐藏, timeout 属性绑定延时时间(添加类的事件), 执行过程中有三个状态

  - 一: 开始状态 appear, enter, exit
  - 二: 执行动画 appear-active, enter-active, exit-active
  - 三: 结束动画 appear-done, enter-done, exit-done
  - enter 用于显示, exit 用于隐藏, appear 用于默认显示首次的动画

- SwitchTransition: 通常用于两个组件显示与隐藏切换, 需要结合 CSSTransition 组件使用, mode 说明

  - out-in: 先隐藏, 在显示
  - in-out: 右侧展示, 向左侧偏移然后替换的动画

- TransitionGroup: 将多个动画组件包裹其中, 通常用于列表中元素的动画

## JavaScript 纯函数

1. 函数式编程中有一个概念叫"纯函数", JavaScript 符合函数式编程的范式, 所有也有纯函数的概念
2. 官方定义说明: 在程序设计中, 若一个函数符合以下条件, 那么这个函数就被称之为纯函数

- 此函数在相同的输入值时, 需产生相同的输出, 函数的输出和输入值以外的其它隐藏信息或状态无光, 也和 I/O 设备产生的外部输出无光
- 此函数不能有语义上可观察的函数副作用, 诸如"触发条件", 使输入设备输出, 或更改输入值的内容等

3. 上面的定义可能会过于晦涩, 简单总结就是:

- 确定的输入, 一定会产生确定的输出
- 函数在执行过程中, 不能产生函数副作用

4. **React 非常灵活, 但它也有一个严格的规则: 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改**

## Redux

**三大原则**

1. 单一数据源

- 整个应用程序的 state 被存储在一棵 object tree 中, 并且这个 object tree 只存储在一个 store 中
- Redux 并没有强制让我们不能创建多个 Store, 但是那样做并不利于数据的维护
- 单一的数据源可以让整个应用程序的 state 变得方便维护、追踪、修改

2. state 是只读的

- 唯一修改 state 的方法一定是触发 actions, 不要试图在其它地方通过任何方式来修改 state
- 这样就确保了 View 或网络请求都不能直接修改 state, 它们只能通过 actions 来描述自己想要如何修改 state
- 这样可以保证所有的修改都被集中化处理, 并且按照严格的顺序来执行, 所以不需要担心 race condition(竟态) 的问题

3. 使用纯函数来执行修改

- 通过 reducer 将旧的 state 和 actions 联系在一起, 并且返回一个新的 state
- 随着应用程序的复杂度增加, 我们可以将一个 reducer 拆分成多个小的 reducer, 分别用于操作不同 state tree 的个别部分
- 但是所有的 reducer 都应该是纯函数, 不能产生任何的副作用

```shell
# 不单单可以在 react 中使用
yarn add redux

# 结合 react 使用
yarn add react-redux

# 让 redux 可以异步操作的中间件
yarn add redux-thunk
```

redux-thunk 中间件可以使得 dispatch 中参数 actions 为一个函数,且将 dispatch 作为参数传入, 我们可以在这个函数中进行异步操作, 等拿到返回结果后, 再去分发 dispatch 去变更 state 信息

redux-saga 中间也可以拦截 actions, 通过监听 actions.type 来拦截并执行相关拦截操作, 使用生成器函数和 yield 搭配使用, 使用方式详情看代码吧...

- 创建 saga 实例
- 调用 run 方法
- 将一个生成器函数(配置依赖 actions)传入 run 方法

## 状态管理

- 组件中自己的 state 管理

- Context 数据的共享状态

- Redux 管理应用状态

React 官方: Find a balance that works for you, and go with it.

翻译: 作为一个开发者, 选择怎样的状态管理方式, 是你的工作之一, 找到一个最好的平衡的方式并坚持下去

- coderwhy 老师采用的 state 管理方案:

  - UI 相关的组件内部可以维护的状态, 在组件内部自己来维护
  - 只要是需要共享的状态, 都交给 redux 来管理和维护
  - 从服务器请求的数据(包括请求的操作), 交给 redux 来维护

## 单向数据流

通过 props 进行数据传递, 数据流从上往下传递, 只能由顶层进行数据变更

Vue 和 React 的组件内部都有单向数据流的概念

Redux 中, State -> UI -> Dispatch -> Reducer -> State

## 前端路由

**原理**

1. 改变 URL, 但是页面不要进行强制刷新(a 元素点击事件会默认强制刷新, 需要禁用)
2. 自己来监听 URL 的改变, 并且改变之后自己改变页面的内容

```shell
# 只安装这个就行, 内部依赖会自动安装 react-router
yarn add react-router-dom
```

**提供给我们的组件@6.3.0 版本**

1. BrowserRouter or HashRouter: hash 解析, 或者 history 解析
2. Link and NavLink

- 通过路径的跳转使用, 最终会被渲染成`<a></a>`标签
- NavLink 在 Link 组件基础上增加了一些样式属性(增强)
- to 属性: Link 中最重要的属性, 用于设置跳转到的路径

3. Route

- Route: 用于路径的匹配, 顶层需要使用 Routes
- path 属性: 用于设置匹配到的路径
- element 属性: 设置匹配到的路径后, 渲染的组件, 如: `<Home />`
- (新的版本默认就是, 不需要了) exact: 精准匹配, 只有精准匹配到完全一致的路径, 才会渲染对应的组件

4. 一些编程式导航的函数 useNavigate | useParams | useLocation | useRoutes

## Hook

**为什么要使用 Hook?**

官方原话: Hook 是 React16.8 的新增特性, 它可以让我们在不编写 Class 的情况下使用 state 以及其它的 React 特性(生命周期等)

- hooks 写出来的代码比 Class 更加简洁明了

**Class 组件存在的问题?**

- 我们在最初编写一个 Class 组件时, 往往逻辑比较简单, 并不会非常复杂, 但是随着业务的增多, 我们的 Class 组件会变得越来越复杂

- 比如 componentDidMout 中, 可能就会包含大量的逻辑代码: 网络请求, 事件监听(还需要在 componentWillUnmount 中移除)

- 而对于这样的 Class 实际上非常难以拆分: 因为它们的逻辑往往混在一起, 强行拆分反而会造成过度设计, 从而增加代码的复杂度

- 组件复用状态很难: 比如前面我们学习 redux 中 connect 或 react-router 中的 withRouter, 或者类似于 Provider, Consumer 来共享一些状态, 这些高阶组件设计的目的就是为了状态的复用, 但是多次使用, 我们的代码就会存在较多的嵌套, 这些代码让我们不管是编写和设计上来说, 都变得非常困难

**关于 Hook 两个额外的原则**

- 只能在 **函数最外层** 调用 Hook, 不要再 **循环, 条件判断或者子函数** 中调用(也能用, 但是这是人家的原则, 用别人的东西最好遵守别人的原则)
- 只能在 **React 的函数组件** 中调用 Hook, 不要在其它 JavaScript 函数中调用

**FAQ: 为什么叫 useState 而不叫 createState?**

- "create" 可能不是很准确, 因为 state 只有首次组件渲染时创建
- 如果每次都创建新的变量, 它就不是 "state" 了

**useState**

- 调用函数可以传一个初始化值, 不传默认为 undefined
- useState 函数返回一个数组, 第一个元素存储值, 第二个元素存储变更值的函数
- 变更值函数接收的参数会直接替换掉 state, 变更时不要直接修改 state, 接收参数可以传入一个函数(返回一个 state)

**useEffect**

- 第一个参数：函数, 钩子函数, 可以模拟 Class 组件生命周期函数
- mount&update 时都会触发
- 第二个参数: 数组, 数组内是依赖的数据源, 数据源发生改变时重新执行第一个参数, 假如我们传递一个`[]`空数组的话, 表示不依赖数据, 这样第一个参数就只有在第一次渲染时执行, 与 class 组件的 componentDidMount 生命周期效果一致

**useContext**

- 第一个参数: 接收一个 React.Context
- 返回 Context 的值

**useReducer**

- 不是 redux 的某个替代品
- 是 useState 的一种替代方案:

1. 某些场景下, 如果 state 的处理逻辑比较复杂, 我们可以通过 useReducer 来对其进行拆分
2. 或者本次变更的 state 需要依赖于之前 state 的情况下, 也可以使用

- 第一个参数: 接收一个 reducer 的纯函数
- 第二个参数: 接收一个初始值
- 返回值: 一个数组, 第一个是 state, 第二个是 dispatch 函数, 功能与 redux 里面的 dispatch 一致, 会调用初始化时传入的 reducer 函数, 并将当前的 state 于 action 作为参数传入

**useCallback**

- useCallback 实际的目的是为了进行性能优化

- 如何进行性能优化?

1. useCallback 会返回一个函数的 memoized(有记忆的) 值
2. 在依赖不改变时, 多次定义的时候, 返回的值是相同的
3. 场景: 在将一个组件函数,传递给子元素进行回调时, 使用 useCallback 对函数进行处理

**useMemo**

- 感觉和 useCallback 差不多...
- 主要区别应该是? useCallback 主要针对于回调函数做优化, useMemo 主要针对于返回值优化(也可以是一个函数)
- 根据依赖项判断是否需要更新函数返回

**useRef**

- 引入 DOM/组件(需要是 class 组件) 元素, 函数组件的话一般用于传递 ref 给子组件的某个 DOM 元素使用
- 保存数据的特性: useRef 返回一个 ref 对象, 返回的 ref 对象在组件的整个生命周期保持不变
- 举个例子: 如果我在组件渲染的时候给了 useRef(count) 的初始值(count=10),哪怕 count 在某个生命周期的操作下变成了 20, 此时的 ref 对象返回值还是 10,除非当你直接修改 ref.current 才会改变(注意这个操作不会导致组件重新渲染)

**useImperativeHandle**

- 正常来说我们使用 useRef 搭配 forwarRef 就能实现父组件对子组件一些操作了, 但是 React 觉得这样我们权限太高了可以任意操作, 需要限制一下, 将我们想让父组件操作的功能从子组件暴露出去, 父组件调用即可
- 第一个参数: ref 对象
- 第二个参数: 一般是一个对象, 暴露出给外部调用的方法/属性 等
- 第三个参数: 数组, 更新依赖项

**useLayoutEffect**

- 与 useEffect 基本一样
- 区别: useEffect DOM 更新后执行, 不阻塞 DOM 更新, useLayoutEffect DOM 更新前执行, 会阻塞 DOM 的更新

**自定义 Hook**

- 本质上只是一种函数代码逻辑的抽取, 严格意义上来说, 它本身并不算 React 的特性
- 规定: 以 use 开头的函数, 被 React 认为是自定义 Hook
