module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://raw.githubusercontent.com/Bon-Appetit/porn-domains/refs/heads/master/block.txt',
      },
    },
  },
}