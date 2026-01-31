module.exports = {
  devServer: {
    proxy: {
      "/x": {
        target: 'https://api.bilibili.com',
        // onProxyReq(proxyReq, req, res) {
        //   proxyReq.setHeader('origin', 'https://www.bilibili.com');
        //   proxyReq.setHeader('referer', 'https://www.bilibili.com/v/channel');
        // }
      }
    }
  }
};