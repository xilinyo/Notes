const { merge } = require("webpack-merge");
const config = require("./webpack.config");
module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // host: "0.0.0.0",
    port: 8080,
    open: true,
    compress: true,
  },
});
