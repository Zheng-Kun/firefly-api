var mongoose = require('mongoose');
var config = require('./config');

module.exports = function () {
  // 连接数据库
  var db = mongoose.connect(config.mongodb, {
    useMongoClient: true,
  });

  db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));
  
  // 导入 model
  require('../app/models/user.model');
  require('../app/models/video.model');

  return db;
};