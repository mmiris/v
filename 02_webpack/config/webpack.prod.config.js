const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge')
const comm = require('./webpack.comm.config')

module.exports = merge(comm, {
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          to: './',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
})
