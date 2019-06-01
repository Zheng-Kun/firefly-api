let VideoController = require("../controllers/video.controller")


let express = require("express");
let router = express.Router();

/* let path = require("path")
let multer = require('multer');
let uploadVideo = multer({
  dest: path.join(__dirname, '../video-lib')
}); */

//uploadVideo.single('file'),
router.post("/upload",  VideoController.upload);

module.exports = router;
