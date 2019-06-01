let userRouter = require("./user.api.routes")
let videoRouter = require("./video.api.routes")

module.exports = function(app) {

  /* let videoIo = io.of('api/video/upload').
  on('connection', () => {
  }); */
  // 允许跨域
  app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
  });
  app.use("/api/user", userRouter);
  app.use("/api/video", videoRouter);

}