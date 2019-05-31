import Cookie from "js-cookie";
import header from "./header.hbs";
import LoginBox from "../ffv-login/login";
import axios from "axios";
import Alert from "../ffv-alert/alert"
import "./header.less"
export default class Header{
  constructor(props){
    Object.assign(this,{
      $container: $("body"),// 渲染的容器
    },props);

    this._render();
  }

  _render(){
    this.userName = Cookie.get("un"); // 获取用户名在 Cookie 中的缓存

    this.avatar = "https://img.52z.com/upload/news/image/20180129/20180129123333_63531.jpg"; 

    let $header = $(header(this));
    console.log(this.$container);
    this.$container.empty().append($header);

    this._bind();
  }


  _bind(){
    /**
     * 登陆事件绑定
     */
    console.log("登陆框事件绑定");
    $(".login-btn").on("click",ev => {
      console.log("点击登陆框按钮");
      ev.preventDefault();
      new LoginBox({
      });
    });

    $(".user-operate .logout").on("click", ev => {
      axios.get(window.config.host + "/api/user/logout")
      .then(resp => {
        if(resp.data.code == 200){
          new Alert({
            message: resp.data.message,
          })

          this._render();
        }
      })
    })
  }
}