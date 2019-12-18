const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // 模式
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public/dev'),
    hot: true
  },
  devtool: 'inline-source-map',
  // 入口
  entry:{
    home: './src/page/home/home.js',
    player: './src/page/player/player.js',
    hqqfront: './src/page/hqqfront/hqqfront.jsx',
    hqqback: './src/page/hqqback/hqqback.js'
  },
  // 输出
  output: {
    filename: '[name]_[hash].js',
    path: path.resolve(__dirname, 'public/dev')
  }, 
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  // 模块 Loader
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        // exclude: /node_modules/,
        include: [/antd-mobile/, /antd/, /src/, /swiper/, /normalize.css/, /video.js/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // module: true, // 允许css module 的写法
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              ident: 'postcss'
            }
          }
        ],
      }, {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }, {
        test: /\.pug$/,
        loader: ['html-loader','pug-html-loader']
      },{
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images',
          limit: 8192 // 8Kb
        }
      },
      {
        test: /\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
        // exclude: /node_modules/,
        include: [/video.js/, /src/],
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  // 解析
  resolve: {
    // 在导入语句没有带文件后缀的hi后，webpack会自动带上后缀尝试
    extensions: ['.js','.jsx'],
    // 通过别名将原来的导入路径映射为新的路劲
    alias: {
      common: './src/common/'
    }
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(), // 每次打包前清理dist目录
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
} 