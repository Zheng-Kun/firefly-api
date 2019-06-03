
import template from "./upload-video.hbs";
import "./upload-video.less";

import Alert from "../ffv-alert/alert"

import Cookie from "js-cookie";
import axios from "axios";
import io from "socket.io-client";
import Nanbar from "nanobar";

export default class UploadVideo{
  constructor(props){
    Object.assign(this,{
      // 默认参数
    },props)

    this.file = null;
    this.progressOn = 0;

    this._render();
    this._preventDefaultDrag();
    this._bind();
  }

  _render(){
    this._close();
    $("body").append($(template()))
  }

  _bind(){
    /**
     * 关闭事件
     */
    $(".close-btn").on("click", ev => {
      this._close();
    })

    /**
     * 文件拖拽上传
     */
    let elDragBox = $(".upload-video-bg .drag-box")[0];
    elDragBox.addEventListener("drop", ev => {
      
      let file = ev.dataTransfer.files && ev.dataTransfer.files[0];

      console.log("type:", file)

      let fileType = file.type;
      let fileName = file.name;
      let fileSize = file.size;

      //检测文件是不是视频
      if (fileType.indexOf('video') === -1) {
        new Alert({
          message:"您选择的不是视频文件，请重新选择",
        })
        return false;
      }else{
        this.file = file;
        $(".form-view .drag-box").addClass("has-video").html(`<span class="file-icon"></span><span class="file-text">${fileName}</span>`);
      }
      ev.preventDefault(); //取消浏览器默认事件
    }, false)

    /**
     * 提交事件
     */
    $(".upload-video-bg .upload-submit-btn").on("click", ev => {
      let videoName = $(".video-name-list .video-name-input").val();
      let videoType = $(".video-type-list .video-type-select option:selected").val();//text()
      if(!videoName){
        new Alert({message:"请填写视频标题", type:"error"}); 
        return
      };
      if(!videoType){
        new Alert({message:"请选择视频类别", type:"error"}); 
        return
      }
      if(!this.file){
        new Alert({message:"请选择视频文件", type:"error"}); 
        return
      };

      this._uploadVideo(videoName,videoType)
    })
  }

  _close(){
    // $(".upload-video-bg").remove();

    document.querySelector(".upload-video-bg").parentNode.removeChild(document.querySelector(".upload-video-bg"));
  }

  /**
   * 阻止浏览器默认拖拽事件
   */
  _preventDefaultDrag(){
    $(document).on({
      dragleave: function (e) { //拖离
        e.preventDefault();
      },
      drop: function (e) { //拖后放
        e.preventDefault();
      },
      dragenter: function (e) { //拖进
        e.preventDefault();
      },
      dragover: function (e) { //拖来拖去
        e.preventDefault();
      }
    });
  }

  /**
   * 上传视频提交
   */
  _uploadVideo(videoTitle,videoType){
    let self = this;
    // console.log("tijiapla上传");
    let userName = Cookie.get("un");

    let socket = io(window.config.host);

    socket.on("connect", ev => {
      console.log("connect event");
    })

    socket.on("event", data => {
      console.log(data);
    })

    socket.on('disconnect', ev => {
      console.log("disconnect event")
    });

    socket.on('progress', function (p) {
      console.log(p + '%');
      // 进度条
      if(self.progressOn == 0){
        document.querySelector(".upload-video-bg .form-view").classList.add("hide");
        document.querySelector(".upload-video-bg .while-update").classList.remove("hide");

        self.progressBar = new Nanbar({
          class: "my-progressBar",
          id: "my-progressBar",
          target: document.querySelector(".upload-video-bg .while-update")
        })
        self.progressOn = 1;
      }
      if(self.progressOn == 1){
        self.progressBar.go(p);
      }
      if(p == 100){
        new Alert({
          message: "上传成功"
        })
        self._close();
      }
      
    })

    let file = this.file;

    let param  = new FormData();
    param.append("file",file);

    Cookie.set("videoName", videoTitle);
    Cookie.set("videoType", videoType);
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    axios.post(window.config.host + "/api/video/upload", param, config).then(resp => {
      console.log("upload",resp);
    }, error => {
      console.log("error",error);
    })

  }


}