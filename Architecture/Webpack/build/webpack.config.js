const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "../index.js"),
  output: {
    clean: true,
    publicPath: "/",
    filename: "script/[name].[contenthash:6].js",
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      // favicon: path.resolve(__dirname, "../public/logo.ico"),
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash:6].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // 其他选项
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
        generator: {
          filename: "static/images/[name].[contenthash:6][ext]",
        },
      },
      {
        test:/\.(woff2?|eot|ttf|otf)$/, 
        type: "asset/resource",
        generator: {
          filename: "static/font/[name].[contenthash:6][ext]",
        },
      },
    ],
  },
};
