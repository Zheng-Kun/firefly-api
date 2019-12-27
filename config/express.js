var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
let busboy = require('connect-busboy');
var formidable = require("formidable");
var cookieParser = require('cookie-parser');
const ejs = require('ejs')



module.exports = function () {
  console.log('init expesss...');
  var app = express();
  console.log("direname:",__dirname)

  const server = require('http').Server(app);
  const io = require('socket.io')(server);

  // let io = req.app.get("sockitio");
  const videoIo = io.
  on('connection', () => {
    /* … */
    console.log("Socket已连接");
  });
  app.set("socketio", io)
  app.set("videoIo", videoIo)
  app.set('views', 'public/dev/html')
  app.engine('.html', ejs.__express)
  app.set('view engine', 'html')
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.static("public/dev"));
  // app.use(express.static("dist"));
  // app.use(express.static("./dist"));
  // app.use(express.static("../dist"));
  // app.use(express.static("../../dist"));
  // app.use(express.static("src"));
  app.use(busboy());
  // 前端路由
  require("../routes/all.fe.routes")(app);
  // 后端接口路由
  require('../app/routes/all.api.routes')(app,io);

  // 处理所有未知的请求
  app.use(function (req, res, next) {
    res.status(404);
    try {
      return res.json('Not Found');
    } catch (e) {
      console.error('404 set header after sent');
    }
  });

  // 统一处理出错的情况
  app.use(function (err, req, res, next) {
    if (!err) { return next(); }
    res.status(500);
    try {
      return res.json(err.message || 'server error');
    } catch (e) {
      console.error('500 set header after sent');
    }
  });

  return server;
};