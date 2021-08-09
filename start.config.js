const common = require("./common.config.js");
const { merge } = require("webpack-merge");
const path = require("path");
const dir = process.cwd();

module.exports = merge(common, {
  entry: path.resolve(dir, "start/index.ts"),
  output: {
    filename: "index.js",
    path: path.resolve(dir, "start"),
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    watchContentBase: true,
    contentBase: path.join(dir, "start"),
    compress: true,
    port: 9000,
    inline: true,
    open: true,
    host: "127.0.0.1",
  },
  watch: true,
});
