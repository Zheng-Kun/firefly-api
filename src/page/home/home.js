// 入口文件d
// require("expose-loader?$!jquery");

import $ from "jquery";
import Config from "../../common/component/fe-config"
import Header from "../../common/component/ffv-header/header"
import Alert from "../../common/component/ffv-alert/alert"
import BigList from "./big-list/big-list"
export default class Home{
  constructor(){
    this.$headerContainer = $("#header-box");
    this.$appContainer = $("#app-box");
    this.$footerContainer = $("#footer-box");

    // 环境变量配置
    new Config({
      env: "pro",
    });

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

    /**
     * 渲染视频列表
     */
    new BigList();

    new Alert();

    
  }
}

new Home();