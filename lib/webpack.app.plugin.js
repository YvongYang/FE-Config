const pluginName = 'AppPlugin';

class AppPlugin {
  apply(compiler) {

    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack custom plugin');
    });

  }
}

module.exports = AppPlugin;
