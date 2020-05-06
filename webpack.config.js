const path = require("path");
 //vue文件页面css提取
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 //vue格式文件处理
const { VueLoaderPlugin } = require("vue-loader");
//生成html入口文件
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, `dist`),
  },
  optimization: {
    usedExports: true,
    minimize: true,
  },
  resolve: {
    alias: {
      vue: "@vue/runtime-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader",
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }
        ],
      },
    ],
  },
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[hash][name].css",
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    hot: true, //自动启动热更新
    contentBase: __dirname,
  },
};
