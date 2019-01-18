module.exports = function override(config) {
  config.output.filename = 'static/js/build.js';
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  };
  return config;
};
