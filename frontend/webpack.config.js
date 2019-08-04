const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  stats: {
    children: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /.css$|.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: true,
              sourceMap: true,
              import: true,
              localsConvention: "asIs",
              // modules: {
              //   localIdentName: "[name]|[hash:base64:5]",
              // },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  mode: devMode ? "development" : "production",
};
