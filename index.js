const { merge } = require("webpack-merge");
const common = require("./common.config");
const build = require("./build.config");
const start = require("./start.config");
module.exports = {
  merge,
  configs: {
    common,
    build,
    library,
    start,
  },
};
