const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = dir => {
  return path.join(__dirname, dir);
};

const devConfig = {
  configureWebpack: {
    entry: "./examples/main",
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     inject: true,
    //     filename: resolve("examples/dist/index.html"),
    //     template: resolve("examples/index.html")
    //   })
    // ]
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    config.resolve.alias.set("main", resolve("src"));
  },
  outputDir: "example/dist"
};

const buildConfig = {
  css: {
    sourceMap: true,
    extract: false
  },
  configureWebpack: {
    output: {
      filename: "simple-ui.min.js",
      library: "simple-ui",
      libraryTarget: "umd",
      umdNamedDefine: true
    }
  },
  filenameHashing: false,
  outputDir: "lib",
  productionSourceMap: false
};

module.exports =
  process.env.NODE_ENV === "production" ? buildConfig : devConfig;
