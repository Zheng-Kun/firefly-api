import VideoListBig from "../../../common/component/ffv-video-list-big/ffv-video-list-big";
import "./big-list.less";

import VideoNav from "../video-nav/video-nav"
export default class BigList{
  constructor(props){
    Object.assign(this, {}, props);
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
    let self = this
    let index = 0;
    window.typeCount = 0;
    for(let key in this.videoTypeObj){
      index++;
      new VideoListBig({
        $container: $("#video-list-box"),
        videoType: key,
        order: index,
        done: () => {
            window.typeCount++;
            if (window.typeCount >= 8) {
              new VideoNav({
                videoTypeObj: self.videoTypeObj
              })
            }
        },
      })
    }

    
  }


  
}