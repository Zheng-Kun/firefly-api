let userRouter = require("./user.api.routes")
let videoRouter = require("./video.api.routes")
module.exports = function(app) {
  app.use("/api/user", userRouter);
  app.use("/api/video", videoRouter);
}