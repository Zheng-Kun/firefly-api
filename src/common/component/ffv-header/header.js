import Cookie from "js-cookie";
import header from "./header.hbs";
import "./header.less"
export default class Header{
  constructor(props){
    Object.assign(this,{
      $container: $("body"),// 渲染的容器
    },props);
    this.userName = Cookie.get("un");// 获取用户名在 Cookie 中的缓存
    this._render();
  }

  _render(){
    let $header = $(header(this.userName));
    console.log(this.$container);
    this.$container.empty().append($header);
  }
}