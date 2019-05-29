import elLogin from "./login.hbs";
import "./login.less";
import md5 from "md5";
export default class Login{
  constructor(props){
    Object.assign(this,{

    },props);

    this._render();
  }

  _render(){
    this.$login = $(elLogin());
    $("body").append(this.$login);
  }
}