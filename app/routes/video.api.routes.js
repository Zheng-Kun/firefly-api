var VideoController = require("../controllers/video.controller")

let express = require("express");
var router = express.Router();

router.post("/upload",VideoController.upload);

module.exports = router;
