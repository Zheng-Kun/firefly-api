var hqqController = require('../controllers/hqq.controller')
var express = require('express')
var router = express.Router()

console.log("hqqRouterRequest")

router.post('/getHqqMsgList', hqqController.getHqqMsgList)
router.post('/addMessage', hqqController.addMessage)
router.post('/delMsgById', hqqController.delMsgById)
router.post('/setFormConf', hqqController.setFormConf)
router.post('/getFormConf', hqqController.getFormConf)

module.exports = router;