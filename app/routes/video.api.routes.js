let VideoController = require("../controllers/video.controller")

let express = require("express");
let router = express.Router();

router.post("/upload", VideoController.upload);
router.post("/getVideo", VideoController.getVideo);
router.post("/getVideoList", VideoController.getVideoList);
router.post("/getVideoListByType", VideoController.getVideoListByType);
router.post("/getVideoListByAuthor", VideoController.getVideoListByAuthor);

module.exports = router;
