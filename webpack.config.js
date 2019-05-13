let path = require('path');
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
    home: './src/home.js',
    player: "./src/player.js"
  },
  output: { //出口
    filename: "[name].bundle.js", // 打包后的文件名
    path: path.resolve(__dirname, "dist") // 路径必须是绝对路径
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  }
}