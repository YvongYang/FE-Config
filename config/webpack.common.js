const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const appPlugin = require('../lib/webpack.app.plugin');
const commitInfo = require('../lib/version-info');

console.table(commitInfo);

const resolveCWD = (cwd =>
  name => path.resolve(cwd, name)
)(process.cwd());


module.exports = argv => {
  const isWebpackDevServer = argv.$0.endsWith('dev-server');
  const webpackCLIPlugins = isWebpackDevServer ? '' : [new CleanWebpackPlugin()];

  return {
    entry: {
      main: './src/index.js'
    },
    output: {
      filename: '[name].[hash:4].js'
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          include: [resolveCWD('src')],
          loader: 'eslint-loader',
        },
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          include: [resolveCWD('src')],
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images/',
                limit: 10 * 1024
              }
            }
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:5].[ext]',
                limit: 5000,
                outputPath: 'fonts/'
              }
            }
          ],
        }
      ],
      // noParse: /react/,
    },
    plugins: [
      ...webpackCLIPlugins,
      new HTMLWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].[hash:8].css',
      }),
      new appPlugin(),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(commitInfo),
      })
    ],
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        // minSize: [13]0000,
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    resolve: {
      symlinks: false,
      alias: {
        js$: resolveCWD('src/js/')
      }
    },
    externals: {},
  };
};
