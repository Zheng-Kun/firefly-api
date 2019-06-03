
var express = require("express");

module.exports = function (app) {
  // 首页
  app.get("/index", (req, res) => {
    res.render('index',{title:"FireFly Video", message: "I am Home Page"})
  });
  // 视频播放页
  app.get("/player", (req, res) => {
    console.log("req:",req)
    res.render("player", {
      title: "FireFly Video",
    })
  })
  // 视频上传页
}