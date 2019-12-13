import "./ffv-video-list.less"
import template from "./ffv-video-list-big.hbs"

import axios from "axios"

export default class VideListBig{
  constructor(props){
    Object.assign(this, {
      $container: null,
      videoType: null,
      order: null,
      done: ()=>{}
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
    this.container = this.$container[0];
    axios.post(window.config.host + '/api/video/getVideoListByType', {
      videoType: this.videoType,
    }).then(resp => {

      this.typeText = this.videoTypeObj[this.videoType];
      this.data = resp.data.data;
      for (let i = 0; i < this.data.length; i++){
        this.data[i].date = this.data[i].updateDate.substr(0,10);
        this.data[i].typeText = this.typeText;
      }
      // console.log(this.videoType, resp.data.data);
      let listDom  = template({...this});
      let boxDom = document.createElement("div");
      boxDom.setAttribute("class",this.videoType + " type-box");
      boxDom.style.order = this.order;
      boxDom.innerHTML = listDom;
      let coverDoms = boxDom.querySelectorAll(".cover");
      for (let i = coverDoms.length - 1; i >=0; i --){
        coverDoms[i].style.backgroundColor = this._getRandomColor();
      }

      this.container.appendChild(boxDom);
      this.done()
    })


  }

  _getRandomColor(){
    return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')';
  }
}