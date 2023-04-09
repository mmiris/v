const { merge } = require("webpack-merge");
const comm = require('./webpack.comm.config')

module.exports = merge(comm, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    open: true,
    static: './public',
    // host: '127.0.0.1',
    // port: 1218,
    // compress: true,
    proxy: {
      '/api': {
        // target: 'http://localhost:58472',
        pathRewrite: { '^/api': '' },
        secure: true,
        changeOrigin: true
      }
    }
  }
})