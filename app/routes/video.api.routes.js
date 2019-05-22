var VideoController = require("../controllers/video.controller")

let express = require("express");
var router = express.Router();

// 上传视频
router.post("/upload",VideoController.upload);

module.exports = router;
