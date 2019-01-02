const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  )
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primarycolor": "#1DA57A" },
    javascriptEnabled: true,
  })(config, env)
  return config
};