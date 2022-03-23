[生成 vscode 代码片段网站](https://snippet-generator.app/)

[babel 代码转换官网](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.8&externalPlugins=&assumptions=%7B%7D)

## 安装 React 脚手架

```shell
npm install -g create-react-app
```

若提示`Error: EACCES: permission denied`需要提升权限，使用 sudo

## 创建 React 项目

注：项目名称不能包含大写字母

```shell
create-react-app 项目名称

create-react-app 05-learn-scaffold
cd ./05-learn-scaffold
yarn start
```

## 目录说明

PWD：全称为 progressive web app，即为渐进式 WEB 应用，这种 Web 存在的形式，我们也称之为 Web App

PWA 解决了哪些问题？

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