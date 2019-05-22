var mongoose = require("mongoose");
// var Video = mongoose.model("Video");
let config = require("../../config/config");
const VIDEO_PATH = config.videoPath;

module.exports = {

  upload: (req, res, next) => {
    console.log("router is OK");
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
    }

  },

}