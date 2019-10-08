let webpack = require('webpack')
/**
 * 
 * @param {webpack.Configuration} options 
 */
const fn = (options) => {
  console.log('测试');
  options.mode = 'production'
  // options.devtool = '';
  options.plugins.push(new webpack.NormalModuleReplacementPlugin(/src\\config/, (resource) => {
    // console.log(resource);
    console.log(resource.request);
    resource.request = resource.request.replace(/debug/, `prod`);

  }))
  return {
    ...options,
    externals: [],
  };
}
module.exports = fn