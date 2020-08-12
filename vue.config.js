const path = require('path')
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

const devConfig = {
  configureWebpack: {
    entry: './examples/main',
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
const buildConfig = {
  css: {
    sourceMap: true,
    extract: false,
  },
  configureWebpack: {
    output: {
      filename: 'simple-ui.min.js',
      library: 'simple-ui',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
  },
  filenameHashing: false,
  outputDir: 'lib',
  productionSourceMap: false,
}

module.exports = process.env.NODE_ENV === 'production' ? buildConfig : devConfig
