/**
 * @webpack configuration
 * @install npm i -D webpack webpack-cli
 * @install npm i -D webpack-dev-server webpack-merge
 */
const merge = require('webpack-merge');
const defaultEnv = 'production';

module.exports = (env = {}, argv) => {

  /**
   * @NODE_ENV $ webpack | webpack-dev-server
   * @param {argv.mode} -p | --mode=production
   * @param {env.NODE_ENV} --env.NODE_ENV=production
   * @process {argv|process.env.NODE_ENV} NODE_ENV = production
   */
  const NODE_ENV = argv.mode
    || env.NODE_ENV
    || process.env.NODE_ENV
    || defaultEnv;

  console.table({ NODE_ENV });

  return merge(
    require('./config/webpack.common.js')(argv),
    require(`./config/webpack.${
      NODE_ENV === defaultEnv ? 'prod' : 'dev'
      }`)
  );

};
