import template from "./video-hbs.hbs";
import "./video-nav.less"

export default class VideoNav{
  constructor(props){
    Object.assign(this, {
      videoTypeObj: null
    }, props)

    this._render();
    this._bind();

  }

  _render(){
    let self = this;
    this.typeArr = [];
    for(let haha in this.videoTypeObj){
      this.typeArr.push({
        key: haha,
        value: this.videoTypeObj[haha]
      });
    }

    $("body").append($(template({
      typeArr: self.typeArr
    })))

    this._changeCurrentType();
  }


  _bind(){
    document.querySelector("#body-box").addEventListener("scroll", ev => {
      console.log("scroll");
      this._changeCurrentType();
    })

    $(".to-top").on("click", ev => {
      this._gotoTop();
    })

    $(".nav-li").on("click", ev => {

      let currentType = ev.target.classList[0].split("-")[0];
      this._gotoType(currentType);
      $(".video-nav-box .nav-li").removeClass("selected");
      $(`.video-nav-box .${currentType}-nav-item`).addClass("selected");
    })
  }

  _changeCurrentType(){
    let currentTypeObj = this._findCurrentType(this._getTypeBoxPos());
    $(".video-nav-box .nav-li").removeClass("selected");
    console.log("currentTypeObj", currentTypeObj)
    $(`.video-nav-box .${currentTypeObj.type}-nav-item`).addClass("selected");
  }

  _findCurrentType(typeBoxPos) {
    let lowestIndex = 0;
    let lowestTop = Infinity
    for(let i = 0; i < typeBoxPos.length; i++){
       if (typeBoxPos[i].top > 42 && typeBoxPos[i].top < lowestTop){
         lowestTop = typeBoxPos[i].top;
         lowestIndex = i;
       }
    }
    console.log("top",typeBoxPos[lowestIndex]);
    return typeBoxPos[lowestIndex];
  }

  _getTypeBoxPos(){
    this.typeBoxPos = [];
    for(let key in this.videoTypeObj){
      this.typeBoxPos.push({
        top: $(`.type-box.${key}`)[0].getBoundingClientRect().top,
        type: key,
        value: this.videoTypeObj[key],
        scrollTopBodyBox: $(`#body-box`)[0].scrollTop,
        typeOffsetTop: $(`.type-box.${key}`)[0].offsetTop
      })
    }
    console.log(this.typeBoxPos[0]);
    return this.typeBoxPos;
  }

  _gotoType(type){
    // let currentTop = $(`.type-box.${type}`)[0].getBoundingClientRect().top,
      // scrollTopBodyBox = $(`#body-box`)[0].scrollTop;
    let  typeOffsetTop = $(`.type-box.${type}`)[0].offsetTop,
      setScrollTop = typeOffsetTop - 43;
    $(`#body-box`).animate({
      scrollTop: setScrollTop
    }, 400)

  }

  _gotoTop(){
    $("#body-box").animate({scrollTop:0},400);
  }
}