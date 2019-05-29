import Cookie from "js-cookie";
import header from "./header.hbs";
import LoginBox from "../ffv-login/login";
import "./header.less"
export default class Header{
  constructor(props){
    Object.assign(this,{
      $container: $("body"),// 渲染的容器
    },props);
    this.userName = Cookie.get("un");// 获取用户名在 Cookie 中的缓存
/*     this.userName = "Zhengkun",
    this.avatar = "https://img.52z.com/upload/news/image/20180129/20180129123333_63531.jpg"; */
    
    this.userName = null;
    this.avatar = "../../../static/icon/avatar-gray.png";
    this._render();
    this._bind();
  }

  _render(){
    let $header = $(header(this));
    console.log(this.$container);
    this.$container.empty().append($header);
  }


  _bind(){
    /**
     * 登陆事件绑定
     */
    console.log("登陆事件绑定");
    $(".login-btn").on("click",ev => {
      console.log("点击登陆按钮");
      ev.preventDefault();
      new LoginBox();
    });
  }
}