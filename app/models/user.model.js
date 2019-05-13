var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  // 用户名
  userName: {
    type: String,
    require: true,
  },

  // 头像url
  avatar: {
    type: String,
  },

  // 密码
  password: {
    type: String,
    require: true,
  },

  // 账户创建时间
  createTime: {
    type: Date,
    // 设置默认值
    default: Date.now
  }
  
})

// 生成模型
var User = mongoose.model("User", userSchema); 