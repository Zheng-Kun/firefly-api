let mongoose = require("mongoose");

let hqqMsgSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true
  },
  tell: {
    type: String,
    require: true
  },
  company: {
    type: String,
  },
  office: {
    type: String,
  },
  qq: {
    type: String
  },
  weixin: {
    type: String
  },
  email: {
    type: String,
    // require:
  },
  other: {
    type: String
  },
  // 添加时间
  createTime: {
    type: Date,
    // 设置默认值
    default: Date.now
  }

})

let hqqMsgConfSchema = new mongoose.Schema({
  myKey: {
    type: String,
    default: "HQQBPL"
  },
  formDesc: {
    type: String,
    require: true
  },
  formArgument: {
    type: Array, // [[name, 1], [tell, 0], [company, -1]] // 1: 必填 0：选填 -1： 不展示
    require: true
  },
})

// 生成模型
let hqqMsg = mongoose.model("hqqMsg", hqqMsgSchema);
let hqqMsgConf = mongoose.model("hqqMsgConf", hqqMsgConfSchema);