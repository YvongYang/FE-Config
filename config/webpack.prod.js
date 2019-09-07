const webpack = require('webpack');

module.exports = {
  mode: 'production',
  plugins: [
    // new HashedModuleIdsPlugin(),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    // concatenateModules: true,
  },
};
