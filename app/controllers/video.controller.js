var mongoose = require("mongoose");
var Video = mongoose.model("Video");
// var Video = mongoose.model("Video");
let config = require("../../config/config");
// let formidable = require("formidable");
let progressStream = require('progress-stream');

const VIDEO_PATH = config.videoPath;

let myFileName = null;
let formData = null;

let path = require("path")
let multer = require('multer');
let storage = multer.diskStorage({
  destination(req, res, cb){
    cb(null, path.join(__dirname, '../../../../video-lib'));
  },
  filename(req, file, cb) {
    const filenameArr = file.originalname.split('.');
    // myFileName = Date.now() + '-' + file.originalname;
    myFileName = Date.now() + "." + filenameArr[filenameArr.length-1]
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
    console.log("cookie",req.cookies);

    let userName = req.cookies.un;
    let videoName = req.cookies.videoName;
    let videoType = req.cookies.videoType;

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

    // console.log("body:",req.body)
    console.log("req-end 前")
    req.on("end", () => {
      console.log("req-end事件触发");
      // console.log("req.body", data)
      const newVideo = Video({
        videoName: videoName,
        author: userName,
        videoUrl: "rtmp://47.112.12.123:1303/firefly-demand/" + myFileName,
        videoType: videoType,
      })

      newVideo.save((err,doc) => {
        if (err) {
          console.log("error la", error)
          return res.json({
            code: 603,
            message: "服务端错误，保存视频失败"
          })
        }
        console.log("save 没问题")
        
      })
      
    })
    // console.log("req-end 后")
    res.cookie("videoName", "");
    res.cookie("videoType", "");
    return res.json({
      code: 200,
      message: "上传成功",
      data: doc
    })

  },
  getVideo: (req, res, next) => {
    const {_id} = req.body;
    console.log(req.body);
    Video.findOne({_id}, function (err, doc){
      /* if(!doc){return res.json({code: 700, message: "没有找到该视频"})} */
      console.log("err",err);
      console.log("doc",doc);
      if(err) { return next(err)}

      Video.findByIdAndUpdate(_id, {
            viewCounts: ++doc.viewCounts
          }, {
            multi: false
          }, (err, doc2) => {
        if (err) {return next(err)}
        return res.json({
          code: 200,
          data: doc
        });
      })
    })
  },
  getVideoList: (req, res, next) => {
    Video.find({}, function (err, doc){
      /* if (!doc) {
        return res.json({
          code: 704,
          message: "没有找到视频"
        })
      } */

      if (err) {
        return next(err);
      }

      return res.json({code: 200, data: doc})
    })
  },
  getVideoListByType: (req, res, next) => {
    const videoType = req.body.videoType;
    Video.find({videoType}, (err, doc) => {
      /* if (!doc) {
        return res.json({
          code: 704,
          message: "没有找到该类型的视频"
        })
      } */

      if (err) {
        return next(err);
      }

      return res.json({
        code: 200,
        data: doc
      })
    })
  }, 
  getVideoListByAuthor: (req, res, next) => {
    const author = req.body.userName;
    Video.find({
      author
    }, (err, doc) => {
      /* if (!doc) {
        return res.json({
          code: 704,
          message: "没有找到您上传的视频"
        })
      } */

      if (err) {
        return next(err);
      }

      return res.json({
        code: 200,
        data: doc
      })
    })
  },

}