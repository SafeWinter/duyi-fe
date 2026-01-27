const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = (process.env.NODE_ENV === 'development') ? {} : {
    plugins: [ new BundleAnalyzerPlugin({
      analyzerPort: 'auto',
    }) ],
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': "VueRouter",
      axios: 'axios'
    },
    devtool: 'none'
  };

module.exports = config;