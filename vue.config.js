const path = require('path')
const { name } = require('./package')
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

const devConfig = {
  devServer: {
    port: 3333,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    entry: './examples/main',
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('packages'))
    config.resolve.alias.set('~', resolve('examples'))
  },
  // outputDir: 'example/dist',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
      @import "@/assets/style/common.scss";
      `,
      },
    },
  },
}
// const buildConfig = {
//   css: {
//     sourceMap: true,
//     extract: false,
//   },
// }
// console.log(process.env.NODE_ENV)
// module.exports = process.env.NODE_ENV === 'production' ? buildConfig : devConfig
module.exports = devConfig
