var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {

  /**
   * 注册
   */
  register: function (req, res, next) {
    const {userName, password} = req.body;
    if(!userName || !password){
      console.log(userName);
      return res.json({code: "604", msg: "用户名或密码不能为空"});
    }
    User.findOne({userName}, function(err, doc){
      if (err) {
        return next(err);
      }

      if (doc) {
        return res.json({code: 602, msg: "用户名已存在", data: doc});
      }

      const newUser = User({userName, password});
      newUser.save((err, doc) => {
        if(err) { return res.json({code: 603, msg: "服务端错误，保存用户信息失败"})}
        const {userName, _id} = doc;
        res.cookie({"userId": _id});
        return res.json({
          code: 200,
          msg: "注册成功",
          data:{userName, _id}
        });
      })

    })
  },

  /**
   * 登陆
   */
  login: function(req, res, next) {
    const {userName,password} = req.body;
    console.log(userName, password);
    // var user = req.body;
    if(!userName || !password) { 
      return res.json({
        code: "604",
        message: "用户名或密码不能为空"
      })
    }
    User.findOne({userName, password}, function(err, doc){
      if(!doc){return res.json({code: 601, message: "用户名或密码错误"})}
      if (err) {
        return next(err);
      }
      // res.cookie("userId",doc._id)
      res.cookie("un", doc.userName);
      return res.json({code: 200, data: doc})
    })
    /* .exec(function(err, docs) {
      if(err) { return next(err); }
      return res.json()
    }) */
  },

  logout: function(req, res, next){
    res.cookie("un", "",{
      expires: 0,
    })

    return res.json({code: 200, data: null, message: "已成功退出登陆！"})
  }

}