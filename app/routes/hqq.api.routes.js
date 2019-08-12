var hqqController = require('../controllers/hqq.controller')
var express = require('express')
var router = express.Router()

router.post('/getHqqMsgList', hqqController.getHqqMsgList)
router.post('/downLoadExcel', hqqController.downLoadExcel)
router.post('/delMsgById', hqqController.delMsgById)
router.post('/setFormConf', hqqController.setFormConf)
router.post('/getFormConf', hqqController.getFormConf)

module.exports = router;