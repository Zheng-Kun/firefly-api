// 入口文件d
require("expose-loader?$!jquery");
import Header from "../../common/component/ffv-header/header"
export default class Home{
  constructor(){
    this.$headerContainer = $("#header-box");
    this.$appContainer = $("#app-box");
    this.$footerContainer = $("#footer-box");

    console.log("render home page!!!")
    this._render();
  }

  _render(){
    /**
     * 渲染Header
     */
    let header = new Header({
      $container: this.$headerContainer,
    });
  }
}

new Home();