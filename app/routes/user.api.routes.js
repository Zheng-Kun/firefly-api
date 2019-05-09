var UserController = require("../controllers/user.controller");

module.exports = function(router) {

  // app.route("/user/login").post(UserController.login);
  router.post("/user/login", UserController.login)

  router.post("/user/register", UserController.register);

}