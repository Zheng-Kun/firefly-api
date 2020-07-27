### 目录结构

+---app // 后端项目
|   +---controllers // 接口功能
|   +---models  // 数据模型
|   \---routes  // 后端路由
+---bin // 项目启动目录
+---config // 各种配置
|   \---env // 环境相关的配置
+---public
|   +---dev // 本地服务代码
|   \---online // 打包后用于生产环境的代码
+---node_modules // node 模块
+---routes // 前端路由文件
+---src // 前端源码文件
|   +---common // 公用模块
|   |   +---component // 公用组件
|   |   +---less // 公用样式
|   |   \---util // 公用的工具函数
|   \---page // 各个页面的代码
|       +---home // 主页
|       \---player // 播放页面
\---views // 模块入口的html模板

## style z-index 记录
 - alert index 100
 - login-box index 20

## 运行项目，启动本地服务（需要提前在本地安装node）
1. `npm i` 安装项目中用到的node模块
2. `npm run server` 可在启动本地页面服务 localhost:3100 可访问到页面。（支持HMR）
3. `npm run build` 开发完成上线前用此命令打包用于生产环境的代码
4. `npm run forever-start` 用于在线上的服务器上启动服务
5. `npm run pack-dev` 仅打包用于开发环境的代码，不会在本地启动服务


## 2019/12/27 WEBPACK 打包优化 内容
 - 支持devServer (通过`webpack-dev-middleware`,`webpack-hot-middleware` 和 `express` 实现)
 - 将css单独打包
 - 将公用部分单独打包为common
 - 在项目根目录下 运行 `npm run server` 可开启本地服务，并具有热更新功能
 - 开发环境单独配置
 - 运行 `npm run build` 将文件打包为生成环境代码

## TODO
 - 配置全局变量，支持打包替换
 - ~~使用 `babel` 编译代码为`ES5`~~
 - `Docker`
 - ~~将`webpack`配置文件改为动态配置 + `.yml`文件的格式~~
 - 打包速度优化
 - 生产环境的代码压缩
 - 打包时版本号自动+1
 - ~~线上和本地服务用同一个router文件~~
 - 完善自动化部署
 - handlebars 中的路径

## 2019/12/30 WEBPACK 打包优化内容
 - 将`webpack`配置文件改为动态配置 + `.yml`文件的格式
 - 线上和本地服务用同一个router文件

## 2019/12/31 优化内容
 - 使用happypack 优化打包速度
 - 优化sourceMap
 - 添加打包分析
 - 精简打包日志