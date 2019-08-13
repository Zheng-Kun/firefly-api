let path = require('path');
let webpack =require("webpack");
module.exports = {
  mode: 'development', // 模式 production development
  /* devServer: {
    //设置基本目录结构
    contentBase: path.resolve(__dirname, 'dist'),
    //服务器的IP地址，可以使用IP也可以使用localhost
    host: 'localhost',
    //服务端压缩是否开启
    compress: true,
    //配置服务端口号
    port: 8090
  }, */
  // 多入口与多出口
  entry: { //入口文件
    home: './src/page/home/home.js',
    player: "./src/page/player/player.js",
    hqqfront: './src/page/hqqfront/hqqfront.js',
    hqqback: './src/page/hqqback/hqqback.js'
  },
  output: { //出口
    filename: "[name].bundle.js", // 打包后的文件名
    path: path.resolve(__dirname, "dist") // 路径必须是绝对路径
  },

  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader:  ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.ProvidePlugin({
      videojs: 'video.js'
    }),
  ],


}