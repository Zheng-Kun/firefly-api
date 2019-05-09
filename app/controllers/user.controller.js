var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {

  /**
   * 注册
   */
  register: function (req, res, next) {
    var user = new User(req.body)
    user.save((err) => {
      if(err) { return next(err)};

      return res.json("register success");
    })
  },

  /**
   * 登陆
   */
  login: function(req, res, next) {
    // var user = req.body;
    User
    .find()
    .exec(function(err, docs) {
      if(err) { return next(err); }
      return res.json()
    })
  }

}