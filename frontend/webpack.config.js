const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js", // An entry point indicates which module webpack should use.
  output: {
    // The output property tells webpack where to emit the bundles it creates and file name.
    filename: "assets/js/bundle.js", // Bundle name.
    path: resolve(__dirname, "dist"), // Bundle path.
  },
  stats: {
    // The stats option lets you precisely control what bundle information gets displayed
    assets: true,
    children: false,
    entrypoints: true,
    source: false,
    outputPath: false,
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
              url: false,
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loaders: "url-loader?limit=1024&assets/css=fonts/[name].[ext]",
      },
    ],
  },
  devServer: {
    // index.html page will likely have to be served in place of any 404 responses.
    historyApiFallback: true,
  },
  devtool: "source-map", // Creates a source-map for better debugging.
  plugins: [
    new CleanWebpackPlugin(), // Cleanup /dist folder on every build.
    new HtmlWebPackPlugin({
      // Will generate an HTML5 file that includes all webpack bundles in body using script tags.
      template: resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      // Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
      filename: "assets/css/bundle.css",
    }),
  ],
  // Providing the mode configuration option tells webpack to use its built-in optimizations.
  mode: devMode ? "development" : "production",
};
