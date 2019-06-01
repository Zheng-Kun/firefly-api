var mongoose = require("mongoose");
// var Video = mongoose.model("Video");
let config = require("../../config/config");
// let formidable = require("formidable");
let progressStream = require('progress-stream');

const VIDEO_PATH = config.videoPath;

let fs = require("fs");

let path = require("path")
let multer = require('multer');
let storage = multer.diskStorage({
  destination(req, res, cb){
    cb(null, path.join(__dirname, '../video-lib'));
  },
  filename(req, file, cb) {
    const filenameArr = file.originalname.split('.');
    cb(null, Date.now() + '-' + filenameArr[0] + "." +filenameArr[filenameArr.length - 1]);
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
    console.log("req",req.body);

    const {userName, videoName, videoType, fileSize, fileName} = req.body;

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
      console.log('progress: %s', obj.percentage);
      videoIo.emit('progress', obj.percentage);
      if(obj.percentage == 100){
        console.log("百分之百啦")
      }
    });

    // 实际上传文件
    uploadVideo.single('file')(progress, res, next);

    req.on("end",() =>{
      console.log("req-end事件触发");
    })

    res.on("end", ()=>{
      console.log("res-end事件触发");
    })

    /* const buf = []
    let count = 0

    // 接收数据事件，会多次触发，chunk的格式为nodejs的Butter，大小不大于65535
    req.on('data', (chunk) => {
      console.log("接收数据", Math.round(count / fileSize * 100));
      buf.push(chunk)
      count += chunk.length
      // 将进度返回给前端
      videoIo.emit('progress', Math.round(count / fileSize * 100))
    })

    // 数据接收结束保存
    req.on('end', () => {
      // 创建流（stream）
      const ws = fs.createWriteStream(path.resolve(__dirname, '/../../../../video-lib', fileName))
      // 将暂存好的Buffer写入流
      buf.forEach(i => {
        ws.write(i)
      })
      ws.end()
    })

    // res.end('{msg:"success"}', 'utf8')
    res.end({
      code: 200,
      msg: "上传成功",
      data: null,
    }) */


    /* console.log("router is OK");
    if(req.busboy){
      console.log("this is a file")
      req.busboy.on("file",(filedname, file, filename, encoding, mimetype) => {
        var saveTo = path.join(VIDEO_PATH, filename);
        file.pipe(fs.createWriteStream(saveTo));
        file.on('end', function () {
        //在这边可以做一些数据库操作
          res.json({
            success: true
          });
        });
        console.log(filedname, file, filename, encoding, mimetype);


      })
      // req.pipe(req.busboy);
    } */

  },

}