import template from "./ffv-slide-show.hbs"
import "./ffv-slide-show.less"

import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"



export default class SlideShow{

  constructor(props){
    Object.assign(this, {
      $container: null,
      data: this.swiperData
    }, props);

    this._render();
    this._bind();
  }

  _render(){
    console.log("nannanann", this.$container.length)
    
    let swiperDom = template({
      data: this.data
    })
    this.$container.append($(swiperDom));


    let swiper = new Swiper(".swiper-container", {
      effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })
  }

  _bind(){
    $(".swiper-button").on("click", ev => {
      event.stopPropagation();
    })
  }
}