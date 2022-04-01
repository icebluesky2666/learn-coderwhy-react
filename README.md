[生成 vscode 代码片段网站](https://snippet-generator.app/)

[babel 代码转换官网](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.8&externalPlugins=&assumptions=%7B%7D)

## 安装 React 脚手架

```shell
npm install -g create-react-app
```

若提示`Error: EACCES: permission denied`需要提升权限，使用 sudo

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

PWD：全称为 progressive web app，即为渐进式 WEB 应用，这种 Web 存在的形式，我们也称之为 Web App

**PWA 解决了哪些问题？**

1. 可以添加至主屏幕，点击主屏幕可以实现启动动画以及隐藏地址栏
2. 实现离线缓存功能，即使用户手机没有网络，依然可以使用一些离线功能
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

类组件通过 this.props 直接获取，在组件标签中传入 属性名称={属性值} 的方式

React.createContext({}) 创建一个 context 用于数据共享

## setState

**是否为异步函数？分成两种情况，React 会更新内部上下文情况选择**

1. 异步：在组件生命周期或 React 合成事件(onClick...)中，setState 是异步的
2. 同步：在 setTimeout 或者原生 DOM 事件中，setState 是同步的

**为什么规定传入的数据需要是不可变的？**

1. 因为 React 在更新视图时如果发现 shouldComponentUpdate 函数或者该组件继承于 PureComponent 内部将会有一个 props/state 的浅层比较用于决定是否重新执行 render 函数，又 JS 引用类型的特性，如果直接更改了数据然后进行 setState 的话，那么此时的 newState 与 prevState 引用地址将相等，导致组件不能正常进行更新

## diff

1. 同层节点之间相互比较，不会跨节点比较
2. 不同类型的节点，产生不同的树结构
3. 开发中，可以通过 key 来指定哪些节点在不同的渲染下保持稳定

## keys 的优化

1. keys 应该是唯一的
2. 使用 index 作为 key，对性能是没有优化的
3. key 不要使用随机数（随机数在下一次 render 时，会重新生成一个数字）

## 组件 render 更新

1. 如果组件内实现了 shouldComponentUpdate 函数，将根据其返回值来决定是否更新 render 函数(需要注意的是，官网中写道：后续该函数可能被视为不是严格的指令，并且，当返回 flase 时，仍然可能导致组件重新渲染)
2. 通过 PureComponent 继承的组件可以自动判断 props/state 变更，从而是否需要更新 render 函数(浅层比较-对象属性长度-对象属性是否相等-对象属性值是否相等)
3. 前面两个都是关于类组件的，那如果是函数组件呢？可以使用 React 内置的 memo 函数返回一个新的函数组件来自己自动判断

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
4. 组件中绑定可以获取一个 ref 对象，这个对象 .current 可以拿到内部组件属性、方法等等...

## 受控组件与非受控组件的区别

1. 受控组件：与 state 关联，由 React 进行状态管理
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

1. 内联样式，样式之间不会有冲突
2. 通过设置 state 中的属性值动态设置样式

缺点：

1. 写法上都需要使用小驼峰标识
2. 某些样式没有提示信息
3. 大量的样式，可能会导致代码混乱
4. 某些样式无法编写(比如伪类/伪元素)

**CSS in JS**

- styled-components
- emotion
- glamorous

```shell
# 用啥都行 npm | yarn | cnpm ... 看你有啥
pnpm install styled-components
```

**Ant Design**

1. 兼容性

- 现代浏览器和 IE11(polyfills)
- 支持服务端渲染
- Electron

2. 安装&使用

```shell
# ant
pnpm install antd

# icons
pnpm install @ant-design/icons
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

可以选择使用的组件进行按需加载，打包时会将未使用的代码/组件进行去除，减少打包体积

4. 更改 antd 主题配置

- react-app-rewired + customize-cra(早期推荐的方案,已经比较久了)
- craco (目前推荐的方案-我的版本-v4)

```shell
pnpm install @craco/craco

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
pnpm install craco-less
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
