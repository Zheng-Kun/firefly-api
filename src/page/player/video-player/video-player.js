import "./video-palyer.less"
import template from "./video-play.hbs"

import axios from "axios"

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
      console.log(resp);
    });
  }
}