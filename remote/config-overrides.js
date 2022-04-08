
const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = function override(config, env) {

  config.output = {
    publicPath: "http://localhost:3001/",
  }
  config.devServer= {
    port: 3001,
    open: true,
  }
  config.plugins = [
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        // expose each component
        './CounterAppOne': './src/components/CounterAppOne',
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    ...config.plugins
  ]
  //do stuff with the webpack config...
  return config;
}