import "./video-palyer.less";
import template from "./video-play.hbs";

import axios from "axios";

import videojs from "video.js";
import 'video.js/dist/video-js.css';
// import SWF_PATH from 'video.js/dist/video-js.swf';
// videojs.options.flash.swf = SWF_PATH;
// import VTTJS_PATH from 'file!videojs-vtt.js/dist/vtt.min.js';
// videojs.options['vtt.js'] = VTTJS_PATH;


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
      let videoDom = template({...resp.data.data});
      $container[0].innerHtml = videoDom;

      videojs("example_video_1", {}, function () {
        // Player (this) is initialized and ready.
      });
    });
  }
}