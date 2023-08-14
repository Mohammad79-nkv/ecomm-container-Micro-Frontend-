const HtmlWebpackPlugin = require("html-webpack-plugin");
const { container } = require("webpack/lib");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
