var CommentController = require("../controllers/comment.controller");

var express = require("express");
var router = express.Router();

router.post("/setComment", CommentController.setComment);
router.post("/getComment", CommentController.getComment);

module.exports = router;