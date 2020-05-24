const path = require('path');
//当前是否是开发环境
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  //部署应用包时的基本URL
  publicPath: process.env.NODE_ENV === "production" ? "/vue-demo02/" : "/",
  //输出文件路径
  outputDir: "dist",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  //生成的index.html的路径
  indexPath: "index.html",
  // 生成的静态资源用hash来命名
  filenameHashing: true,
  // 当修改完代码之后是否就启动eslint的语法检查
  lintOnSave: false,
  // 是否使用包含运行时编译器的Vue构建版本，设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: true,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies:[],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 3001,
    https: false,
    hotOnly: false,
    proxy: null,
  },
  // 第三方插件配置
  pluginOptions: {}

};