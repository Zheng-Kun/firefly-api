const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // 模式
  mode: 'production',
  // 入口
  entry:{
    home: ['./src/page/home/home.js'],
    player: ['./src/page/player/player.js'],
    hqqfront: ['./src/page/hqqfront/hqqfront.jsx'],
    hqqback: ['./src/page/hqqback/hqqback.js'],
  },
  // 输出
  output: {
    filename: '[name]_[hash].js',
    path: path.resolve(__dirname, 'public/online'),
    publicPath: '/'
  }, 
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: `common`, // 这个chunkName 需要写在  HtmlWebpackPlugin 插件的 chunks 数组中，才会被注入
          chunks: "initial"
        },
      }
    }
  },

  // 模块 Loader
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        include: [/antd-mobile/, /antd/, /src/, /swiper/, /normalize.css/, /video.js/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              // module: true, // 允许css module 的写法
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
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
        loader: [
          'html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              // pretty: true // 不压缩html代码， 默认 false
            }
          }
        ]
      },{
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images',
          // limit: 8192 // 8Kb
          limit: 4096
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
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new HtmlWebpackPlugin({
      chunks: ['home', 'common'],
      filename: 'html/index.html',
      hash: true,
      template: './views/index.pug',
      inject: 'body' // 注入的位置， 如果为false则不注入
    }),
    new HtmlWebpackPlugin({
      chunks: ['player', 'common'],
      filename: 'html/player.html',
      hash: true,
      template: './views/player.pug'
    }),
    new HtmlWebpackPlugin({
      chunks: ['hqqfront', 'common'],
      filename: 'html/hqqfront.html',
      hash: true,
      template: './views/hqqfront.pug'
    }),
    new HtmlWebpackPlugin({
      chunks: ['hqqback', 'common'],
      filename: 'html/hqqback.html',
      hash: true,
      template: './views/hqqback.pug'
    }),
  ],
} 