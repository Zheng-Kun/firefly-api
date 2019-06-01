var mongoose = require("mongoose");
var Video = mongoose.model("Video");
// var Video = mongoose.model("Video");
let config = require("../../config/config");
// let formidable = require("formidable");
let progressStream = require('progress-stream');

const VIDEO_PATH = config.videoPath;

let myFileName = null;

let path = require("path")
let multer = require('multer');
let storage = multer.diskStorage({
  destination(req, res, cb){
    cb(null, path.join(__dirname, '../../../../video-lib'));
  },
  filename(req, file, cb) {
    const filenameArr = file.originalname.split('.');
    myFileName = Date.now() + '-' + file.originalname;
    cb(null, myFileName);
  }
})
let uploadVideo = multer({
  // dest: path.join(__dirname, '../video-lib')
  storage
});

module.exports = {

  upload: (req, res, next) => {
    console.log("upload request");

    // 跨域，因前端文件是直接拖到浏览器上运行以file://形式访问，与后台不在同一域，所以要跨域处理
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST'
    })

    let videoIo = req.app.get("videoIo");
    // console.log("req",req.body);

    // 创建progress stream的实例
    let progress = progressStream({
      length: '0'
    }); // 注意这里 length 设置为 '0'
    req.pipe(progress);
    progress.headers = req.headers;

    // 获取上传文件的真实长度（针对 multipart)
    progress.on('length', function nowIKnowMyLength(actualLength) {
      console.log('actualLength: %s', actualLength);
      progress.setLength(actualLength);
    });

    // 获取上传进度
    progress.on('progress', function (obj) {
      // console.log('progress: %s', obj.percentage);
      videoIo.emit('progress', obj.percentage);
      if(obj.percentage == 100){
        console.log("百分之百啦")
      }
    });

    // 实际上传文件
    uploadVideo.single('file')(progress, res, next);

    req.on("end",() =>{
      console.log("req-end事件触发");
      /* const {
        userName,
        videoName,
        videoType,
        fileSize,
        fileName
      } = req.body; */
      const newVideo = Video({
        videoName: req.body.videoName,
        author: req.body.userName,
        videoUrl: "rtmp://47.112.12.123:1303/firefly-demand/" + myFileName,
        videoType: req.body.videoType,
      })

      newVideo.save((err,doc) => {
        if (err) {
          return res.json({
            code: 603,
            message: "服务端错误，保存视频失败"
          })
        }
        return res.json({
          code: 200,
          message: "上传成功",
          data: doc
        })
      })
      
    })
    console.log("这里饭饭")

  },

}