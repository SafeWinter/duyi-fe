module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://test.com.cn',
      },
    },
  },
}