var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  userName: String,
  userId: Number,
  avatar: String,
  password: String,
  createTime: {
    type: Date,
    // 设置默认值
    default: Date.now
  }
  
})

// 生成模型
var User = mongoose.model("User", userSchema); 