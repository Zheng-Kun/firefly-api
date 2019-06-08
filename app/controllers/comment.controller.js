var mongoose = require("mongoose");
var Comment = mongoose.model("Comment");

module.exports = {
  setComment: function (req, res, next) {
    const {content, vid, author} = req.body;
    if(!content || !vid || !author){
      return res.json({code: "604", message: "参数不能为空"})
    }
    const newComment = Comment({content, vid, author});
    newComment.save((err ,doc) => {
      if (err) {
        return res.json({
          code: 603,
          message: "服务端错误，保存评论信息失败"
        })
      }
      return res.json({
        code: 200,
        data: doc,
        message: "评论成功"
      })
    })
  },
  getComment: function (req, res, next) {
    const vid = req.body.vid;
    if(!vid){ return res.json({code: "604", message: '视频id不能为空'})}

    Comment.find({vid}, function (err,doc) {
      if(err){
        return next(err)
      }

      return res.json({
        code: 200,
        data: doc
      })
    })
  }
}