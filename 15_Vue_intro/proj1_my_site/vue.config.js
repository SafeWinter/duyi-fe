module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://test.my-site.com',
      },
    },
  },
  configureWebpack: require('./webpack.config'),
}