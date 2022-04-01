const path = require('path')
const CracoLessPlugin = require('craco-less')

// 绝对文件路径拼接
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
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
  ],
  webpack: {
    // 别名配置
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    }
  }
}
