
const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = function override(config, env) {

    config.plugins = [
      new ModuleFederationPlugin({
        name: 'host',
        remotes: {
          remote: 'remote@http://localhost:3001/remoteEntry.js',
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