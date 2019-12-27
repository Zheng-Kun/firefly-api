### 目录结构

+---app // 后端项目
|   +---controllers // 接口功能
|   +---models  // 数据模型
|   \---routes  // 后端路由
+---bin // 项目启动目录
+---config // 各种配置
|   \---env // 环境相关的配置
+---dist // 打包后的代码
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
\---views // express 前端路由的入口文件（pug文件）

## alert index 100
## login-box index 20


## WEBPACK 打包优化 
 - 支持devServer (通过`webpack-dev-middleware`,`webpack-hot-middleware` 和 `express` 实现)
 - 将css单独打包
 - 将公用部分单独打包为common
 - 在项目根目录下 运行 `npm run server` 可开启本地服务，并具有热更新功能
 - 开发环境单独配置
 - 运行 `npm run build` 将文件打包为生成环境代码

## TODO
 - 全局变量的配置
 - 使用 `babel` 编译代码为`ES5`
 - `Docker`
 - 将`webpack`配置文件改为动态配置 + `.yml`文件的格式
 - 打包速度优化