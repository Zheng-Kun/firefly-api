module.exports = function (app) {
  // 首页
  app.get("/index", (req, res) => {
    res.render('home',{title:"FireFly Video", message: "I am Home Page"})
  });
  // 视频播放页
  app.get("/player", (req, res) => {
    // console.log("req:",req)
    res.render("player", {
      title: "FireFly Video",
    })
  })
  // 表单页
  app.get("/hqqfront",(req, res) => {
    // console.log("req:",req)
    res.render("hqqfront", {
      title: "信息提交",
    })
  })
  // 后台页
  app.get("/hqqback",(req, res) => {
    // console.log("req:",req)
    res.render("hqqback", {
      title: "信息管理",
    })
  })
  app.get('/', function (req, res) {
    console.log("RenderHome")
    res.render('home')
  })
}