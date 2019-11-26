var mongoose = require('mongoose')
var HqqMsg = mongoose.model('hqqMsg')
var HqqMsgConf = mongoose.model('hqqMsgConf')

module.exports = {
  // 获取所有信息
  getHqqMsgList: function(req, res, next){
    HqqMsg.find({}, function (err, doc) {
      if(err) { return res.json({code: 603, message: "服务端错误，获取信息失败"})}

      if(doc && doc.length > 0) {
        return res.json({
          code: 200,
          message: '请求成功',
          data: doc
        })
      }
    })
  },
  addMessage: function(req, res, next) {
    const {name, tell, company, office, qq, weChat, email, other } = req.body;
    if(!name){
      res.json({code: 602, message: 'name 字段为必填！'})
    }
    const newHqqMsg = HqqMsg({name, tell, company, office, qq, weChat, email, other});
    newHqqMsg.save((err, doc) => {
      if(err) { return res.json({code: 603, message: "服务端错误，保存信息失败"})}
      return res.json({code: 200, message: '提交成功', data: null})
    })
  },
  // 通过id删除信息 // 参数为数组
  delMsgById: function(req, res, next) {
    const {delIdArr} = req.body;
    if(!delIdArr || delIdArr.length < 1){
      return res.json({code: 605, message: '_id不能为空'})
    }
    HqqMsg.remove({_id: { $in: delIdArr}}, function(err) {
      if(err) { return res.json({code: 603, message: "服务端错误，删除信息失败"})}
      return res.json({code: 200, message: '删除成功！'})
    })
  },
  // 设置表单配置
  setFormConf: function(req, res, next) {
    console.log("设置表单配置")
    const {formDesc, formArgument } = req.body;
    if(!formDesc || !formArgument || formArgument.length < 1) {
      return res.json({code: "610", message: "表单描述与表单参数不能为空"})
    }
    const formConf = HqqMsgConf({formDesc, formArgument,  myKey: "HQQBPL"})
    HqqMsgConf.findOne({myKey: "HQQBPL"}, function(err, doc) {
      if(err) { return res.json({code: 603, message: "服务端错误，获取表单配置失败"})}
      if(doc) {
        HqqMsgConf.update({myKey: 'HQQBPL'}, {$set: {formDesc, formArgument}}, (err ) => {
          if(err) { return res.json({code: 603, message: "服务端错误，更新表单配置失败"})}
          return res.json({code: 200, message: '配置更新成功'})
        })
      } else {
        formConf.save((err, doc) => {
          if(err) {return res.json({code: 603, message: "服务端错误，保存表单配置失败"})}
          return res.json({code: 200, message: '配置保存成功'})
        })
      }
      // return res.json({code:"610", message: "未知的服务端错误，请联系运维人员"})
    })
  },
  // 获取表单配置
  getFormConf: function(req, res, next) {
    HqqMsgConf.findOne({myKey: "HQQBPL"}, function(err, doc) {
      if(err) { return res.json({code: 603, message: "服务端错误，获取表单信息失败"})}
      if(doc) {
        return res.json({code: 200, message: '配置获取成功', data: doc})
      } else {
        return res.json({code: 604, message: '没有找到配置， 请联系网站维护人员添加配置'})
      }
    })
  }
}