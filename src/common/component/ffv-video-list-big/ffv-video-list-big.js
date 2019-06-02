import "./ffv-video-list.less"
import template from "./ffv-video-list-big.hbs"

import axios from "axios"

export default class VideListBig{
  constructor(props){
    Object.assign(this, {
      $container: null,
      videoType: null,
    }, props)

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