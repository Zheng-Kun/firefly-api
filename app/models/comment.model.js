let mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
  content: {
    type: String,
    require: true,
  },

  // video id
  vid: {
    type: String,
    require: true,
  },

  author: {
    type: String,
    require: true,
  },
  position: {
    type: Number,
    default: 0,
  },

  // 评论时间
  createTime: {
    type: Date,
    // 设置默认值
    default: Date.now
  }

})

// 生成模型
let Comment = mongoose.model("Comment", commentSchema);