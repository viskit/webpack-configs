const common = require("./common.config.js");
const { merge } = require("webpack-merge");
const path = require("path");
const LicenseWebpackPlugin =
  require("license-webpack-plugin").LicenseWebpackPlugin;

const dir = process.cwd();

module.exports = merge(common, {
  entry: path.resolve(dir, "src/index.ts"),
  output: {
    filename: "index.js",
    path: path.resolve(dir, "dist"),
  },
  mode: "production",
  plugins: [new LicenseWebpackPlugin()],
});
