var mongoose = require("mongoose");

var videoSchema = new mongoose.SchemaType({
  videoName: String,
  videoId: String,
  author: String,
  updateDate: Date,
  videoUrl: String,
})

// 生成模型
var Video = mongoose.model("Video", videoSchema);