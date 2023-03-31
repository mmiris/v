const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [['autoprefixer'], ['postcss-preset-env']]
          //     }
          //   }
          // }
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /.(jpe?g|png|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        },
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        }
      },
      {
        test: /\.ttf/,
        type: 'asset',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Webpack'
    }),
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
}
