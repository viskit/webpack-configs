const { merge } = require("webpack-merge");
const common = require("./common.config");
const build = require("./build.config");
const lib = require("./lib.config");
const start = require("./start.config");
module.exports = {
  merge,
  configs: {
    common,
    build,
    lib,
    start,
  },
};
