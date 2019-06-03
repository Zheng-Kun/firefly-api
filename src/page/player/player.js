import $ from "jquery";
import Config from "../../common/component/fe-config"
import Header from "../../common/component/ffv-header/header"
import Alert from "../../common/component/ffv-alert/alert";
import VideoPlayer from "./video-player/video-player"
export default class Player{
  constructor() {
    this.$headerContainer = $("#header-box");
    this.$appContainer = $("#app-box");
    this.$footerContainer = $("#footer-box");

    this.vid = this._getSearchObj().vid;
    this.videoType = this._getSearchObj().videoType;

    // 环境变量配置
    new Config({
      env: "pro",
    });

    console.log("render player page!!!")
    this._render();
  }

  _render() {
    /**
     * 渲染Header
     */
    let header = new Header({
      $container: this.$headerContainer,
    });

    /**
     * 渲染播放器
     */

     let player = new VideoPlayer({
       vid: this.vid,
       $container: $("#video-player-box")
     })


    // new Alert();


  }

  _getSearchObj(){
    let searchStr = location.search.substr(1);
    let obj = {};
    let searchArr = searchStr.split("&");
    for (let i = 0; i < searchArr.length; i++){
      let key = searchArr[i].split("=")[0];
      let value = searchArr[i].split("=")[1];
      obj[key] = value;
    }
    return obj;
  }
}

new Player();