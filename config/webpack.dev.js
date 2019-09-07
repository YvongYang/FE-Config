const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    host: "0.0.0.0",
    port: 3344,
    open: true,
    proxy: {
      // "/api": "http://localhost:3000",
    },
    after: function (app, server) {
      // app.use();
    }
  },
  plugins: [
    /* new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }), */
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {},
};
