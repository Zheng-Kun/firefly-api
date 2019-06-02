import VideoListBig from "../../../common/component/ffv-video-list-big/ffv-video-list-big";
import "./big-list.less";
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
    for(let i in this.videoTypeObj){
      new VideoListBig({
        $container: $("#video-list-box"),
        videoType: this.videoTypeObj[i],
      })
    }
  }

  
}