const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  context: __dirname,
  entry: "./src/main.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", "..."],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "app.bundle.js",
  },
  devServer: {
    port: 4001,
  },
  module: {
    rules: [
      { test: /\.[tj]sx?$/, use: ["babel-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif|glb)$/, use: ["file-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
