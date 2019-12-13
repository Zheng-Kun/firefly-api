let mongoose = require("mongoose");

let videoSchema = new mongoose.Schema({
  /**
   * 视频名
   */
  videoName: {
    type: String,
    require: true,
  },
  /**
   * 上传的用户名
   */
  author: {
    type: String,
  },
  /**
   * 上传的时间
   */
  updateDate: {
    type: Date,
    default: Date.now
  },
  /**
   * 视频的 rtmp 推流链接
   */
  videoUrl: {
    type: String,
    require: true,
  },
  /**
   * 视频的类别
   */
  videoType: {
    type: String,
  },
  viewCounts: {
    type: Number,
    default:0
  }
})

// 生成模型
let Video = mongoose.model("Video", videoSchema);