const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  // These options change how modules are resolved
  resolve: {
    modules: [resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx", ".json"],
    alias: {
      Assets: resolve(__dirname, "./src/assets"),
      Components: resolve(__dirname, "./src/components"),
      Context: resolve(__dirname, "./src/context"),
      Routes: resolve(__dirname, "./src/routes"),
      Scss: resolve(__dirname, "./src/scss"),
      Src: resolve(__dirname, "./src"),
    },
  },
  // An entry point indicates which module webpack should use
  entry: "./src/index.js",
  // The output property tells webpack where to emit the bundles it creates and file name
  output: {
    filename: "assets/js/bundle.js", // Bundle name.
    path: resolve(__dirname, "../server/client/dist"), // Bundle path.
    crossOriginLoading: "anonymous",
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
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/images",
        },
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
      publicPath: "/",
    }),
  ],
  // Providing the mode configuration option tells webpack to use its built-in optimizations.
  mode: devMode ? "development" : "production",
};
