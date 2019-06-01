var mongoose = require("mongoose");
// var Video = mongoose.model("Video");
let config = require("../../config/config");
let formidable = require("formidable");
const VIDEO_PATH = config.videoPath;

let fs = require("fs");
let path = require("path");

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
    let form = new formidable.IncomingForm();
    console.log("req",form);

    const {userName, videoName, videoType, fileSize, fileName} = req.body;
    // const size = params.size
    // const name = params.name
    const buf = []
    let count = 0

    // 接收数据事件，会多次触发，chunk的格式为nodejs的Butter，大小不大于65535
    req.on('data', (chunk) => {
      // console.log("接收数据");
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

    res.end('{msg:"success"}', 'utf8')
    res.json({
      code: 200,
      msg: "上传成功",
      data: null,
    })


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