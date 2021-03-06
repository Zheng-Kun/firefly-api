import "./video-palyer.less";
import template from "./video-play.hbs";
import VideoListBig from "../../../common/component/ffv-video-list-big/ffv-video-list-big";


import axios from "axios";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import SWF_PATH from 'video.js/dist/video-js.swf';
videojs.options.flash.swf = SWF_PATH;
import VTTJS_PATH from 'file-loader!videojs-vtt.js/dist/vtt.min.js';
videojs.options['vtt.js'] = VTTJS_PATH;


export default class VideoPlayer{

  constructor(props){
    Object.assign(this, {
      vid: null, 
      $container: null,
    }, props)

    this._render();
  }


  _render(){
    axios.post(window.config.host + "/api/video/getVideo", {
      _id:this.vid,
    }).then(resp => {
      console.log({...resp.data.data})
      let videoDom = template({...resp.data.data});
      this.$container[0].innerHTML = videoDom;

      videojs("ff-video-el", {}, function () {

      });

      new VideoListBig({
        $container: $("#type-video-list"),
        videoType: resp.data.data.videoType,
        order: 0
      })
    });
  }
}