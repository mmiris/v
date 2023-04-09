const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  target: 'web',
  // watch: true,
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
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
  },
  resolve: {
    extensions: ['...', '.vue'],
    alias: {
      $js: path.resolve(__dirname, 'src/js/')
    }
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
      },
      // {
      //   test: /\.m?js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // }
      {
        test: /\.m?js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new CleanWebpackPlugin(),

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
    }),
    new VueLoaderPlugin()
  ]
}
