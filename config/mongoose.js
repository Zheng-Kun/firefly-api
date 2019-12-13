var mongoose = require('mongoose');
var config = require('./config');

module.exports = function () {
  // 连接数据库
  var db = mongoose.connect(config.mongodb, {
    useMongoClient: true,
  });

  // 导入 model
  require('../app/models/user.model');
  require('../app/models/video.model');

  return db;
};