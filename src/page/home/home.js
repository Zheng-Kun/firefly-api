// 入口文件d
// require("expose-loader?$!jquery");

import $ from "jquery";
import Config from "../../common/component/fe-config"
import Header from "../../common/component/ffv-header/header"
import Alert from "../../common/component/ffv-alert/alert"
import BigList from "./big-list/big-list"
import SlideShow from "../../common/component/ffv-slide-show/ffv-slide-show"
export default class Home{
  constructor(){
    this.$headerContainer = $("#header-box");
    this.$appContainer = $("#app-box");
    this.$footerContainer = $("#footer-box");
    this.$swiperContainer = $("#rotation-box");
    this.swiperData = [{
      href:"http://www.baidu.com",
      backgroundImg: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348776.jpg?max_age=2592000"
    },{
      href: "",
      backgroundImg: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348778.jpg?max_age=2592000" //叮咛，罗大佑
    }, {
      href: "",
      backgroundImg: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348060.jpg?max_age=2592000" // Feedback
    }, {
      href:"",
      backgroundImg: "http://p1.music.126.net/vgq5QsWdkqGWJCVzyWZ0sw==/109951164122932289.jpg" // 水果姐新单
    }, {
      href:"",
      backgroundImg: "http://p1.music.126.net/lBgqi8iSwqEvojdzn9djgA==/109951164122936281.jpg" // 情深深雨蒙蒙
    }]

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

    new SlideShow({
      $container: this.$swiperContainer,
      data: this.swiperData,
    })

    /**
     * 渲染视频列表
     */
    new BigList();

    // new Alert();

    
  }
}

new Home();