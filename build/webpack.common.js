const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
module.exports = env => {
  // console.log(env)
  const isProduction = env.NODE_ENV === 'production'
  const isDevelopment = env.NODE_ENV === 'development'
  let config = {}
  try {
    config = yaml.safeLoad(fs.readFileSync('build/config.yml', 'utf8'));
  } catch (e) {
    console.log(e);
  }

  function getEntryConfig() {
    const entry = {}
    Object.keys(config.entry).forEach(item => {
      entry[item] = [config.entry[item].entry]
      isDevelopment && entry[item].push(`webpack-hot-middleware/client?name=${item}&reload=true`)
    })
    return entry
  }

  function getPluginsConfig() {
    const plugins = [
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}),
      new MiniCssExtractPlugin({ filename: 'styles/[name].css'}),
      new HappyPack({
        id: 'js',
        
      })
    ]
    isDevelopment && plugins.push(new webpack.HotModuleReplacementPlugin())
    Object.keys(config.entry).forEach(item => {
      plugins.push(new HtmlWebpackPlugin({
        chunks: [item, 'common'],
        filename: `html/${item}.html`,
        hash: true,
        template: config.entry[item].template
      }))
    })
    return plugins
  }
  return {
    context: path.resolve(__dirname, '../'),
    mode: isDevelopment ? 'development' : 'production',
    entry: getEntryConfig(),
    plugins: getPluginsConfig(),
    devtool: isDevelopment ? 'inline-source-map' : false,
    devServer: isDevelopment ? {hot: true} : {},
    output: {
      filename: '[name]_[hash].js',
      path: isDevelopment ? path.resolve(__dirname, '../public/dev') : path.resolve(__dirname, '../public/online'),
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
          // exclude: /node_modules/,
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
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
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
                pretty: isDevelopment // 不压缩html代码， 默认 false
              }
            }
          ]
        }, {
          test: /\.(png|jpg|jpeg|gif)$/,
          exclude: /node_modules/,
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images',
            // limit: 8192 // 8Kb
            limit: 4096
          }
        }, {
          test: /\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
          include: [/video.js/, /src/],
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
          }
        }, {
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
  }
}
