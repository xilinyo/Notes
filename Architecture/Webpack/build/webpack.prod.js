const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
module.exports = merge(config, {
  mode: "production",
  optimization: {
    minimize: true, //开启压缩
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
});
