var userRouter = require("./user.api.routes.js")

module.exports = function(app) {
  app.use("/api/user", userRouter);
}