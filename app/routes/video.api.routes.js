let VideoController = require("../controllers/video.controller")
let path = require("path")

let express = require("express");
let router = express.Router();
let multer = require('multer');
let upload = multer({
  dest: path.join(__dirname, '../video-lib')
});

router.post("/upload", upload.single('file'), VideoController.upload);

module.exports = router;
