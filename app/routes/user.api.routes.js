var UserController = require("../controllers/user.controller");
var express = require("express");
var router = express.Router();
router.post("/login", UserController.login)
router.post("/register", UserController.register);
module.exports = router;