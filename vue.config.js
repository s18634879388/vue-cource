const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'
const path = require('path')  //引用node的path模块
// const resolve = dir => {
//   return path.join(__dirname,dir)
// }
const resolve = dir => path.join(__dirname,dir)

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
    .set('@',resolve('src'))
    .set('_c',resolve('src/components'))
  },
  productionSourceMap: false, //打包时不生成.map文件
  // 跨域配置
  devServer: {
    proxy: 'localhost:4000'
  }
}
