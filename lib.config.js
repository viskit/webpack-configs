const common = require("./common.config.js");
const { merge } = require("webpack-merge");
const path = require("path");
const LicenseWebpackPlugin =
  require("license-webpack-plugin").LicenseWebpackPlugin;
const nodeExternals = require("webpack-node-externals");

const dir = process.cwd();

module.exports = merge(common, {
  entry: path.resolve(dir, "src/index.ts"),
  output: {
    filename: "index.js",
    path: path.resolve(dir, "dist"),
    library: {
      type: "module",
    },
  },
  optimization: {
    minimize: false,
  },

  externals: [nodeExternals()],
  experiments: {
    outputModule: true,
  },
  target: "es2020",
  mode: "production",
  plugins: [new LicenseWebpackPlugin()],
});
