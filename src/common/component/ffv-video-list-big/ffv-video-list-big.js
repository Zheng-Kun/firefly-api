import "./ffv-video-list.less"
import template from "./ffv-video-list-big.hbs"

import axios from "axios"

export default class VideListBig{
  constructor(props){
    Object.assign(this, {
      $container: null,
      videoType: null,
    }, props)
    this.videoTypeObj = {
      movie: "影视",
      anime: "动漫",
      music: "音乐",
      entertainment: "娱乐",
      study: "学习",
      science: "科技",
      life: "生活",
      other: "其他",
    }

    this._render();
  }

  _render(){
    axios.post(window.config.host + '/api/video/getVideoListByType', {
      videoType: this.videoType,
    }).then(resp => {
      console.log(this.videoType, resp);
    })
  }
}