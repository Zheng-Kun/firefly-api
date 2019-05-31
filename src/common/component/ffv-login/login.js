import elLogin from "./login.hbs";
import "./login.less";
import md5 from "md5";
import axios from "axios";
import Alert from "../ffv-alert/alert";
import Header from "../ffv-header/header";
export default class Login{
  constructor(props){
    Object.assign(this,{
    },props);

    this._render();
    this._bind();
  }

  _render(){
    this.$login = $(elLogin());
    $(".body .login-bg").remove();
    $("body").append(this.$login);
  }

  _bind(){
    /**
     * 登陆框与注册框的切换
     */
    $(".form-title .title-btn").on("click", ev => {
      $(".title-btn").removeClass("selected");
      $(ev.target).addClass("selected");
      let currentBoxClass = $(ev.target).hasClass("login-title") ? "view-login" : "view-register";
      $(".form-view .login-register").removeClass("view-login").removeClass("view-register").addClass(currentBoxClass); 
    })

    /**
     * 注册密码框的隐藏与展示
     */
    $(".register .password-box .password-eyes").on("click", ev => {
      let changeType = $(".password-box").hasClass
      ("hide-password") ? "text" : "password";
      let changeClass = $(".password-box").hasClass("hide-password") ? "show-password"
       : "hide-password";
       // 修改容器class （改变图标）
      $(".password-box").removeClass("hide-password").removeClass("show-password").addClass(changeClass);
      // 改变密码框属性
      $(".password-box input").attr("type", changeType);
    })

    /**
     * 登录事件
     */
    $(".form-view .login .login-btn").on("click", ev => {
      console.log("登陆提交按钮");
      this._login();
    })

    /**
     * 注册事件
     */
    $(".form-view .register .register-btn").on("click", ev => {
      this._register();
    })

    /**
     * 关闭事件
     */
    $(".close-btn").on("click", ev => {
      this._close();
    })
  }

  _login(){
    /**
     * 获取表单数据
     */
    let username = $(".login-register .login input.username").val();
    let password = $(".login-register .login input.password").val();
    console.log(username, password);

    let md5Password = md5(md5(password));
    console.log(md5Password)

    if (!username || !password) {
      new Alert({
        message: "用户名或密码不能为空",
        type: "error"
      })
      return
    }

    /**
     * 发送登录请求
     */
    axios.post(window.config.host + '/api/user/login',{
      userName: username,
      password: md5Password,
    })
    .then(resp => {
      console.log(resp);
      if(resp.data.code == 200){
        new Alert({
          type: "success",
          message: "登陆成功",
        });

        this._close();
        this._renderHeader();

      }else{
        new Alert({
          type: "error",
          message: resp.data.message,
        });
      }
    })

  }

  _register(){
    console.log("注册");
    /**
     * 获取表单数据
     */
    let username = $(".login-register .register input.username").val();
    let password = $(".login-register .register input.password").val();
    console.log(username, password);

    let md5Password = md5(md5(password));
    console.log(md5Password)

    if(!username || !password){
      new Alert({
        message: "用户名或密码不能为空",
        type: "error"
      })
      return 
    }

    /**
     * 发送登录请求
     */
    axios.post(window.config.host + '/api/user/register', {
        userName: username,
        password: md5Password,
      })
      .then(resp => {
        console.log(resp);
        if (resp.data.code == 200) {
          new Alert({
            type: "success",
            message: "注册成功，请登陆",
          });

          // this._close();
          // this._renderHeader();
          document.querySelector(".login-bg .form-title .login-title").click();

        } else {
          new Alert({
            type: "error",
            message: resp.data.message,
          });
        }
      })
  }

  _close(){
    $(".login-bg").remove();
  }

  _renderHeader(){
    new Header({
      $container: $("#header-box"),
    });
  }
}