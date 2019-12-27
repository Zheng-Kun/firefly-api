const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // 模式
  mode: 'development',
  devServer: {
    // contentBase: path.resolve(__dirname, 'public/dev'),
    // inline: true, //实时刷新
    hot: true, // 开启热更新,
    // port: 6001, // 
    // open: true, // 'Chrome' is 'Google Chrome' on macOS, 'google-chrome' on Linux and 'chrome' on Windows.
    // progress: true,
    // openPage: 'html/index.html'
  },
  devtool: 'inline-source-map',
  // 入口
  entry:{
    home: ['./src/page/home/home.js', 'webpack-hot-middleware/client?name=home&reload=true'],
    player: ['./src/page/player/player.js', 'webpack-hot-middleware/client?name=player&reload=true'],
    hqqfront: ['./src/page/hqqfront/hqqfront.jsx', 'webpack-hot-middleware/client?name=hqqfront&reload=true'],
    hqqback: ['./src/page/hqqback/hqqback.js', 'webpack-hot-middleware/client?name=hqqback&reload=true'],
  },
  // 输出
  output: {
    filename: '[name]_[hash].js',
    path: path.resolve(__dirname, 'public/dev'),
    publicPath: '/'
  }, 
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: `common`, // 这个chunkName 需要写在  HtmlWebpackPlugin 插件的 chunks 数组中，才会被注入
          // test: /[\\/]node_modules[\\/]/,
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
        // exclude: /node_modules/,
        include: [/antd-mobile/, /antd/, /src/, /swiper/, /normalize.css/, /video.js/],
        use: [
          // 'style-loader',
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
            loader: 'postcss-loader',
            options: {
              config: {
                // path: 'postcss.config.js'
              }
            }
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
              pretty: true // 不压缩html代码， 默认 false
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
    new webpack.HotModuleReplacementPlugin(),
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
    })
  ],
} 