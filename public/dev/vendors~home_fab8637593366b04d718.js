(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~home"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/swiper/dist/css/swiper.min.css":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js??postcss!./node_modules/swiper/dist/css/swiper.min.css ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\n * Swiper 4.5.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 13, 2019\n */\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  z-index: 1;\n}\n.swiper-container-no-flexbox .swiper-slide {\n  float: left;\n}\n.swiper-container-vertical > .swiper-wrapper {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n}\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.swiper-container-multirow > .swiper-wrapper {\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.swiper-container-free-mode > .swiper-wrapper {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-slide {\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  -o-transition-property: transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-container-autoheight .swiper-wrapper {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-transition-property: height, -webkit-transform;\n  transition-property: height, -webkit-transform;\n  -o-transition-property: transform,height;\n  transition-property: transform,height;\n  transition-property: transform, height, -webkit-transform;\n}\n.swiper-container-3d {\n  -webkit-perspective: 1200px;\n  perspective: 1200px;\n}\n.swiper-container-3d .swiper-cube-shadow,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-wrapper {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0)));\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-wp8-horizontal,\n.swiper-container-wp8-horizontal > .swiper-wrapper {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n.swiper-container-wp8-vertical,\n.swiper-container-wp8-vertical > .swiper-wrapper {\n  -ms-touch-action: pan-x;\n  touch-action: pan-x;\n}\n.swiper-button-next,\n.swiper-button-prev {\n  position: absolute;\n  top: 50%;\n  width: 27px;\n  height: 44px;\n  margin-top: -22px;\n  z-index: 10;\n  cursor: pointer;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.swiper-button-next.swiper-button-disabled,\n.swiper-button-prev.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  left: 10px;\n  right: auto;\n}\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n  right: 10px;\n  left: auto;\n}\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\");\n}\n.swiper-button-lock {\n  display: none;\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  -webkit-transition: 0.3s opacity;\n  -o-transition: 0.3s opacity;\n  transition: 0.3s opacity;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-custom,\n.swiper-pagination-fraction {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  -webkit-transform: scale(0.66);\n  -ms-transform: scale(0.66);\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  -webkit-transform: scale(0.33);\n  -ms-transform: scale(0.33);\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #007aff;\n}\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n  transform: translate3d(0, -50%, 0);\n}\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  -webkit-transition: 0.2s top, 0.2s -webkit-transform;\n  transition: 0.2s top, 0.2s -webkit-transform;\n  -o-transition: 0.2s transform, 0.2s top;\n  transition: 0.2s transform, 0.2s top;\n  transition: 0.2s transform, 0.2s top, 0.2s -webkit-transform;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 0.2s left, 0.2s -webkit-transform;\n  transition: 0.2s left, 0.2s -webkit-transform;\n  -o-transition: 0.2s transform, 0.2s left;\n  transition: 0.2s transform, 0.2s left;\n  transition: 0.2s transform, 0.2s left, 0.2s -webkit-transform;\n}\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  -webkit-transition: 0.2s right, 0.2s -webkit-transform;\n  transition: 0.2s right, 0.2s -webkit-transform;\n  -o-transition: 0.2s transform, 0.2s right;\n  transition: 0.2s transform, 0.2s right;\n  transition: 0.2s transform, 0.2s right, 0.2s -webkit-transform;\n}\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: #007aff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: left top;\n  -ms-transform-origin: left top;\n  transform-origin: left top;\n}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  -webkit-transform-origin: right top;\n  -ms-transform-origin: right top;\n  transform-origin: right top;\n}\n.swiper-container-horizontal > .swiper-pagination-progressbar,\n.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-container-vertical > .swiper-pagination-progressbar {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white .swiper-pagination-bullet-active {\n  background: #fff;\n}\n.swiper-pagination-progressbar.swiper-pagination-white {\n  background: rgba(255, 255, 255, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {\n  background: #fff;\n}\n.swiper-pagination-black .swiper-pagination-bullet-active {\n  background: #000;\n}\n.swiper-pagination-progressbar.swiper-pagination-black {\n  background: rgba(0, 0, 0, 0.25);\n}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {\n  background: #000;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > canvas,\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n.swiper-slide-zoomed {\n  cursor: move;\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  -webkit-transform-origin: 50%;\n  -ms-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s steps(12, end) infinite;\n  animation: swiper-preloader-spin 1s steps(12, end) infinite;\n}\n.swiper-lazy-preloader:after {\n  display: block;\n  content: '';\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.swiper-lazy-preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes swiper-preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  -webkit-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  -webkit-transition-property: opacity;\n  -o-transition-property: opacity;\n  transition-property: opacity;\n}\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube {\n  overflow: visible;\n}\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  -webkit-transform-origin: 100% 0;\n  -ms-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-next + .swiper-slide,\n.swiper-container-cube .swiper-slide-prev {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right,\n.swiper-container-cube .swiper-slide-shadow-top {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n  -webkit-filter: blur(50px);\n  filter: blur(50px);\n  z-index: 0;\n}\n.swiper-container-flip {\n  overflow: visible;\n}\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right,\n.swiper-container-flip .swiper-slide-shadow-top {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.swiper-container-coverflow .swiper-wrapper {\n  -ms-perspective: 1200px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/dom7/dist/dom7.modular.js":
/*!************************************************!*\
  !*** ./node_modules/dom7/dist/dom7.modular.js ***!
  \************************************************/
/*! exports provided: $, addClass, removeClass, hasClass, toggleClass, attr, removeAttr, prop, data, removeData, dataset, val, transform, transition, on, off, once, trigger, transitionEnd, animationEnd, width, outerWidth, height, outerHeight, offset, hide, show, styles, css, toArray, each, forEach, filter, map, html, text, is, indexOf, index, eq, append, appendTo, prepend, prependTo, insertBefore, insertAfter, next, nextAll, prev, prevAll, siblings, parent, parents, closest, find, children, remove, detach, add, empty, scrollTo, scrollTop, scrollLeft, animate, stop, click, blur, focus, focusin, focusout, keyup, keydown, keypress, submit, change, mousedown, mousemove, mouseup, mouseenter, mouseleave, mouseout, mouseover, touchstart, touchend, touchmove, resize, scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeData", function() { return removeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return dataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEnd", function() { return animationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLeft", function() { return scrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "click", function() { return click; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusin", function() { return focusin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusout", function() { return focusout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyup", function() { return keyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keydown", function() { return keydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keypress", function() { return keypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedown", function() { return mousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousemove", function() { return mousemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseup", function() { return mouseup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseenter", function() { return mouseenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseleave", function() { return mouseleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseout", function() { return mouseout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseover", function() { return mouseover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchstart", function() { return touchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchend", function() { return touchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchmove", function() { return touchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */


class Dom7 {
  constructor(arr) {
    const self = this;
    // Create array-like object
    for (let i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  }
}

function $(selector, context) {
  const arr = [];
  let i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
      // String
    if (typeof selector === 'string') {
      let els;
      let tempParent;
      const html = selector.trim();
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        let toCreate = 'div';
        if (html.indexOf('<li') === 0) toCreate = 'ul';
        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
        if (html.indexOf('<tbody') === 0) toCreate = 'table';
        if (html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement(toCreate);
        tempParent.innerHTML = html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());
}

function requestAnimationFrame(callback) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame(callback);
  else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame(callback);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame(id);
  else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame(id);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  let el;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
        return el.dom7ElementDataStorage[key];
      }

      const dataKey = el.getAttribute(`data-${key}`);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      const attr = el.attributes[i];
      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;
    else if (dataset[key] === 'true') dataset[key] = true;
    else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  const dom = this;
  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        const values = [];
        for (let i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }
        return values;
      }
      return dom[0].value;
    }
    return undefined;
  }

  for (let i = 0; i < dom.length; i += 1) {
    const el = dom[i];
    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }
  return dom;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = `${duration}ms`; // eslint-disable-line
  }
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);
    else {
      const parents = $(target).parents(); // eslint-disable-line
      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  const events = eventType.split(' ');
  let j;
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent,
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent,
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  const events = eventType.split(' ');
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }
  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);
    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }
  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
  const events = args[0].split(' ');
  const eventData = args[1];
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let evt;
      try {
        evt = new ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true,
        });
      } catch (e) {
        evt = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  const events = ['webkitTransitionEnd', 'transitionend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  const events = ['webkitAnimationEnd', 'animationend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollY : el.scrollTop;
    const scrollLeft = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollX : el.scrollLeft;
    return {
      top: (box.top + scrollTop) - clientTop,
      left: (box.left + scrollLeft) - clientLeft,
    };
  }

  return null;
}
function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  let i;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (let prop in props) {
          this[i].style[prop] = props[prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  const arr = [];
  for (let i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  const matchedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  const modifiedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"];
  else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"];

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  let child = this[0];
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;
  let returnIndex;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append(...args) {
  let newChild;

  for (let k = 0; k < args.length; k += 1) {
    newChild = args[k];
    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}
// eslint-disable-next-line
function appendTo(parent) {
  $(parent).append(this);
  return this;
}
function prepend(newChild) {
  let i;
  let j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
// eslint-disable-next-line
function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  const before = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  const after = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    const el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $(unique(parents));
}
function parents(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line
    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentNode;
    }
  }
  return $(unique(parents));
}
function closest(selector) {
  let closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  const foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  const children = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].childNodes;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add(...args) {
  const dom = this;
  let i;
  let j;
  for (i = 0; i < args.length; i += 1) {
    const toAdd = $(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}

function scrollTo(...args) {
  let [left, top, duration, easing, callback] = args;
  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }
  if (typeof easing === 'undefined') easing = 'swing';

  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line
    let scrollLeft; // eslint-disable-line
    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : (0.5 - (Math.cos(progress * Math.PI) / 2));
      let done;
      if (animateTop) scrollTop = currentTop + (easeProgress * (newTop - currentTop));
      if (animateLeft) scrollLeft = currentLeft + (easeProgress * (newLeft - currentLeft));
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
  let [top, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing', // or 'linear'
      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),

    elements: els,
    animating: false,
    que: [],

    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - (Math.cos(progress * Math.PI) / 2);
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done(complete) {
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      const elements = [];

      // Define & Cache Initials & Units
      a.elements.each((index, el) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;

        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

        elements[index] = {
          container: el,
        };
        Object.keys(props).forEach((prop) => {
          initialFullValue = ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue,
          };
        });
      });

      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;

      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), ((startTime + params.duration) - time < 0 ? 0 : (startTime + params.duration) - time), startTime);
        }

        elements.forEach((element) => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach((prop) => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const { initialValue, finalValue, unit } = el[prop];
            el[prop].currentValue = initialValue + (easeProgress * (finalValue - initialValue));
            const currentValue = el[prop].currentValue;

            if (
              (finalValue > initialValue && currentValue >= finalValue) ||
              (finalValue < initialValue && currentValue <= finalValue)) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    },
  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;
  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  const els = this;
  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

const noTrigger = ('resize scroll').split(' ');
function eventShortcut(name, ...args) {
  if (typeof args[0] === 'undefined') {
    for (let i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();
        else {
          $(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on(name, ...args);
}

function click(...args) {
  return eventShortcut.bind(this)('click', ...args);
}
function blur(...args) {
  return eventShortcut.bind(this)('blur', ...args);
}
function focus(...args) {
  return eventShortcut.bind(this)('focus', ...args);
}
function focusin(...args) {
  return eventShortcut.bind(this)('focusin', ...args);
}
function focusout(...args) {
  return eventShortcut.bind(this)('focusout', ...args);
}
function keyup(...args) {
  return eventShortcut.bind(this)('keyup', ...args);
}
function keydown(...args) {
  return eventShortcut.bind(this)('keydown', ...args);
}
function keypress(...args) {
  return eventShortcut.bind(this)('keypress', ...args);
}
function submit(...args) {
  return eventShortcut.bind(this)('submit', ...args);
}
function change(...args) {
  return eventShortcut.bind(this)('change', ...args);
}
function mousedown(...args) {
  return eventShortcut.bind(this)('mousedown', ...args);
}
function mousemove(...args) {
  return eventShortcut.bind(this)('mousemove', ...args);
}
function mouseup(...args) {
  return eventShortcut.bind(this)('mouseup', ...args);
}
function mouseenter(...args) {
  return eventShortcut.bind(this)('mouseenter', ...args);
}
function mouseleave(...args) {
  return eventShortcut.bind(this)('mouseleave', ...args);
}
function mouseout(...args) {
  return eventShortcut.bind(this)('mouseout', ...args);
}
function mouseover(...args) {
  return eventShortcut.bind(this)('mouseover', ...args);
}
function touchstart(...args) {
  return eventShortcut.bind(this)('touchstart', ...args);
}
function touchend(...args) {
  return eventShortcut.bind(this)('touchend', ...args);
}
function touchmove(...args) {
  return eventShortcut.bind(this)('touchmove', ...args);
}
function resize(...args) {
  return eventShortcut.bind(this)('resize', ...args);
}
function scroll(...args) {
  return eventShortcut.bind(this)('scroll', ...args);
}




/***/ }),

/***/ "./node_modules/ssr-window/dist/ssr-window.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ssr-window/dist/ssr-window.esm.js ***!
  \********************************************************/
/*! exports provided: window, document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return doc; });
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = (typeof document === 'undefined') ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: '',
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {},
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      },
    };
  },
  location: { hash: '' },
} : document; // eslint-disable-line

var win = (typeof window === 'undefined') ? {
  document: doc,
  navigator: {
    userAgent: '',
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      },
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {},
} : window; // eslint-disable-line




/***/ }),

/***/ "./node_modules/swiper/dist/css/swiper.min.css":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/dist/css/swiper.min.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--4-1!../../../postcss-loader/src!../../../less-loader/dist/cjs.js??postcss!./swiper.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/swiper/dist/css/swiper.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../css-loader/dist/cjs.js??ref--4-1!../../../postcss-loader/src!../../../less-loader/dist/cjs.js??postcss!./swiper.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/swiper/dist/css/swiper.min.css", function() {
		var newContent = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--4-1!../../../postcss-loader/src!../../../less-loader/dist/cjs.js??postcss!./swiper.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/swiper/dist/css/swiper.min.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/swiper/dist/js/swiper.esm.bundle.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/dist/js/swiper.esm.bundle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7/dist/dom7.modular */ "./node_modules/dom7/dist/dom7.modular.js");
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */




const Methods = {
  addClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["addClass"],
  removeClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeClass"],
  hasClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["hasClass"],
  toggleClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["toggleClass"],
  attr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["attr"],
  removeAttr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeAttr"],
  data: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["data"],
  transform: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transform"],
  transition: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transition"],
  on: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["on"],
  off: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["off"],
  trigger: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["trigger"],
  transitionEnd: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"],
  outerWidth: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerWidth"],
  outerHeight: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerHeight"],
  offset: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["offset"],
  css: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["css"],
  each: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["each"],
  html: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["html"],
  text: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["text"],
  is: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["is"],
  index: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["index"],
  eq: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["eq"],
  append: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["append"],
  prepend: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prepend"],
  next: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["next"],
  nextAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["nextAll"],
  prev: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prev"],
  prevAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prevAll"],
  parent: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parent"],
  parents: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parents"],
  closest: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["closest"],
  find: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["find"],
  children: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["children"],
  remove: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["remove"],
  add: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["add"],
  styles: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["styles"],
};

Object.keys(Methods).forEach((methodName) => {
  dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] || Methods[methodName];
});

const Utils = {
  deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
  },
  now() {
    return Date.now();
  },
  getTranslate(el, axis = 'x') {
    let matrix;
    let curTransform;
    let transformMatrix;

    const curStyle = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el, null);

    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map((a) => a.replace(',', '.')).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  },
  parseUrlQuery(url) {
    const query = {};
    let urlToParse = url || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.href;
    let i;
    let params;
    let param;
    let length;
    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter((paramsPart) => paramsPart !== '');
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }
    return query;
  },
  isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend(...args) {
    const to = Object(args[0]);
    for (let i = 1; i < args.length; i += 1) {
      const nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        const keysArray = Object.keys(Object(nextSource));
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  },
};

const Support = (function Support() {
  const testDiv = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div');
  return {
    touch: (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr.touch === true) || (function checkTouch() {
      return !!((ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.maxTouchPoints > 0) || ('ontouchstart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]) || (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"] instanceof ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch));
    }()),

    pointerEvents: !!(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.pointerEnabled || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].PointerEvent || ('maxTouchPoints' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.maxTouchPoints > 0)),
    prefixedPointerEvents: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.msPointerEnabled,

    transition: (function checkTransition() {
      const style = testDiv.style;
      return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
    }()),
    transforms3d: (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
      const style = testDiv.style;
      return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
    }()),

    flexbox: (function checkFlexbox() {
      const style = testDiv.style;
      const styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
      for (let i = 0; i < styles.length; i += 1) {
        if (styles[i] in style) return true;
      }
      return false;
    }()),

    observer: (function checkObserver() {
      return ('MutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"] || 'WebkitMutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]);
    }()),

    passiveListener: (function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          },
        });
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('testPassiveListener', null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    }()),

    gestures: (function checkGestures() {
      return 'ongesturestart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"];
    }()),
  };
}());

const Browser = (function Browser() {
  function isSafari() {
    const ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.toLowerCase();
    return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
  }
  return {
    isIE: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/Trident/g) || !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/MSIE/g),
    isEdge: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent),
  };
}());

class SwiperClass {
  constructor(params = {}) {
    const self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach((eventName) => {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }

  on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach((event) => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  }

  once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    function onceHandler(...args) {
      handler.apply(self, args);
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  }

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach((event) => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  }

  emit(...args) {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach((event) => {
      if (self.eventsListeners && self.eventsListeners[event]) {
        const handlers = [];
        self.eventsListeners[event].forEach((eventHandler) => {
          handlers.push(eventHandler);
        });
        handlers.forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

  useModulesParams(instanceParams) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach((moduleName) => {
      const module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  }

  useModules(modulesParams = {}) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach((moduleName) => {
      const module = instance.modules[moduleName];
      const moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach((modulePropName) => {
          const moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach((moduleEventName) => {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }

  static set components(components) {
    const Class = this;
    if (!Class.use) return;
    Class.use(components);
  }

  static installModule(module, ...params) {
    const Class = this;
    if (!Class.prototype.modules) Class.prototype.modules = {};
    const name = module.name || (`${Object.keys(Class.prototype.modules).length}_${Utils.now()}`);
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach((key) => {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach((key) => {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  }

  static use(module, ...params) {
    const Class = this;
    if (Array.isArray(module)) {
      module.forEach((m) => Class.installModule(m));
      return Class;
    }
    return Class.installModule(module, ...params);
  }
}

function updateSize () {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;
  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
    return;
  }

  // Subtract paddings
  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

  Utils.extend(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height,
  });
}

function updateSlides () {
  const swiper = this;
  const params = swiper.params;

  const {
    $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL,
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];

  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.snapGrid.length;

  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
  }

  swiper.virtualSize = -spaceBetween;

  // reset margins
  if (rtl) slides.css({ marginLeft: '', marginTop: '' });
  else slides.css({ marginRight: '', marginBottom: '' });

  let slidesNumberEvenToRows;
  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }
    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  }

  // Calc slides
  let slideSize;
  const slidesPerColumn = params.slidesPerColumn;
  const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  const numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);
    if (params.slidesPerColumn > 1) {
      // Set slides order
      let newSlideOrderIndex;
      let column;
      let row;
      if (
        (params.slidesPerColumnFill === 'column')
        || (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1)
      ) {
        if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          const groupIndex = Math.floor(i / params.slidesPerGroup);
          row = Math.floor(i / params.slidesPerView) - groupIndex * params.slidesPerColumn;
          column = i - row * params.slidesPerView - groupIndex * params.slidesPerView;
        }
        newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
        slide
          .css({
            '-webkit-box-ordinal-group': newSlideOrderIndex,
            '-moz-box-ordinal-group': newSlideOrderIndex,
            '-ms-flex-order': newSlideOrderIndex,
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex,
          });
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - (row * slidesPerRow);
      }
      slide
        .css(
          `margin-${swiper.isHorizontal() ? 'top' : 'left'}`,
          (row !== 0 && params.spaceBetween) && (`${params.spaceBetween}px`)
        )
        .attr('data-swiper-column', column)
        .attr('data-swiper-row', row);
    }
    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      const slideStyles = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(slide[0], null);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;
      if (currentTransform) {
        slide[0].style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal()
          ? slide.outerWidth(true)
          : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          const width = parseFloat(slideStyles.getPropertyValue('width'));
          const paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
          const paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
          const marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
          const marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
            slideSize = width + marginLeft + marginRight;
          } else {
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
          }
        } else {
          const height = parseFloat(slideStyles.getPropertyValue('height'));
          const paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
          const paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
          const marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
          const marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
            slideSize = height + marginTop + marginBottom;
          } else {
            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
          }
        }
      }
      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = `${slideSize}px`;
        } else {
          slides[i].style.height = `${slideSize}px`;
        }
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);


    if (params.centeredSlides) {
      slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
      if (i === 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;

    prevSlideSize = slideSize;

    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  let newSlidesGrid;

  if (
    rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
  }
  if (!Support.flexbox || params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
    if (params.centeredSlides) {
      newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid = newSlidesGrid;
    }
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.css({ marginLeft: `${spaceBetween}px` });
      else slides.css({ marginRight: `${spaceBetween}px` });
    } else slides.css({ marginBottom: `${spaceBetween}px` });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Utils.extend(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid,
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight (speed) {
  const swiper = this;
  const activeSlides = [];
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
      const index = swiper.activeIndex + i;
      if (index > swiper.slides.length) break;
      activeSlides.push(swiper.slides.eq(index)[0]);
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

function updateSlidesOffset () {
  const swiper = this;
  const slides = swiper.slides;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress (translate = (this && this.translate) || 0) {
  const swiper = this;
  const params = swiper.params;

  const { slides, rtlTranslate: rtl } = swiper;

  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();

  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.removeClass(params.slideVisibleClass);

  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    const slideProgress = (
      (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
    ) / (slide.swiperSlideSize + params.spaceBetween);
    if (params.watchSlidesVisibility) {
      const slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
                || (slideAfter > 1 && slideAfter <= swiper.size)
                || (slideBefore <= 0 && slideAfter >= swiper.size);
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
  }
  swiper.visibleSlides = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.visibleSlides);
}

function updateProgress (translate = (this && this.translate) || 0) {
  const swiper = this;
  const params = swiper.params;

  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let { progress, isBeginning, isEnd } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / (translatesDiff);
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  Utils.extend(swiper, {
    progress,
    isBeginning,
    isEnd,
  });

  if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses () {
  const swiper = this;

  const {
    slides, params, $wrapperEl, activeIndex, realIndex,
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;

  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);

  let activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  }

  // Active classes
  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`)
        .addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`)
        .addClass(params.slideDuplicateActiveClass);
    }
  }
  // Next Slide
  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  // Prev Slide
  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicatePrevClass);
    }
  }
}

function updateActiveIndex (newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex,
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }

  // Get real index
  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

  Utils.extend(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex,
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  if (swiper.initialized || swiper.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

function updateClickedSlide (e) {
  const swiper = this;
  const params = swiper.params;
  const slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide,
};

function getTranslate (axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;

  const {
    params, rtlTranslate: rtl, translate, $wrapperEl,
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;

  return currentTranslate || 0;
}

function setTranslate (translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl, params, $wrapperEl, progress,
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (!params.virtualTranslate) {
    if (Support.transforms3d) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    else $wrapperEl.transform(`translate(${x}px, ${y}px)`);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate () {
  return (-this.snapGrid[0]);
}

function maxTranslate () {
  return (-this.snapGrid[this.snapGrid.length - 1]);
}

var translate = {
  getTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
};

function setTransition (duration, byController) {
  const swiper = this;

  swiper.$wrapperEl.transition(duration);

  swiper.emit('setTransition', duration, byController);
}

function transitionStart (runCallbacks = true, direction) {
  const swiper = this;
  const { activeIndex, params, previousIndex } = swiper;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';
    else if (activeIndex < previousIndex) dir = 'prev';
    else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }
    swiper.emit('slideChangeTransitionStart');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

function transitionEnd (runCallbacks = true, direction) {
  const swiper = this;
  const { activeIndex, previousIndex } = swiper;
  swiper.animating = false;
  swiper.setTransition(0);

  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';
    else if (activeIndex < previousIndex) dir = 'prev';
    else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }
    swiper.emit('slideChangeTransitionEnd');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd,
};

function slideTo (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;

  const {
    params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl,
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  let snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  const translate = -snapGrid[snapIndex];

  // Update progress
  swiper.updateProgress(translate);

  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = 'next';
  else if (slideIndex < activeIndex) direction = 'prev';
  else direction = 'reset';


  // Update Index
  if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }

  if (speed === 0 || !Support.transition) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

function slideToLoop (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const { params, animating } = swiper;
  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params, animating, snapGrid, slidesGrid, rtlTranslate,
  } = swiper;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  const normalizedSlidesGrid = slidesGrid.map((val) => normalize(val));

  const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  const prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  let prevIndex;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let index = swiper.activeIndex;
  const snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

  if (snapIndex < swiper.snapGrid.length - 1) {
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
      index = swiper.params.slidesPerGroup;
    }
  }

  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide () {
  const swiper = this;
  const { params, $wrapperEl } = swiper;

  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (
        (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
        || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
      ) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
          .eq(0)
          .index();

        Utils.nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl
        .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
        .eq(0)
        .index();

      Utils.nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide,
};

function loopCreate () {
  const swiper = this;
  const { params, $wrapperEl } = swiper;
  // Remove duplicated slides
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();

  let slides = $wrapperEl.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $wrapperEl.append(blankNode);
      }
      slides = $wrapperEl.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;

  swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((index, el) => {
    const slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
    if (index < swiper.loopedSlides) appendSlides.push(el);
    if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
    slide.attr('data-swiper-slide-index', index);
  });
  for (let i = 0; i < appendSlides.length; i += 1) {
    $wrapperEl.append(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $wrapperEl.prepend(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix () {
  const swiper = this;
  const {
    params, activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl,
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;

  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate();


  // Fix For Negative Oversliding
  if (activeIndex < loopedSlides) {
    newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
}

function loopDestroy () {
  const swiper = this;
  const { $wrapperEl, params, slides } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy,
};

function setGrabCursor (moving) {
  const swiper = this;
  if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) return;
  const el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor () {
  const swiper = this;
  if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) return;
  swiper.el.style.cursor = '';
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor,
};

function appendSlide (slides) {
  const swiper = this;
  const { $wrapperEl, params } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
}

function prependSlide (slides) {
  const swiper = this;
  const { params, $wrapperEl, activeIndex } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide (index, slides) {
  const swiper = this;
  const { $wrapperEl, params, activeIndex } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (let i = 0; i < slidesBuffer.length; i += 1) {
    $wrapperEl.append(slidesBuffer[i]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide (slidesIndexes) {
  const swiper = this;
  const { params, $wrapperEl, activeIndex } = swiper;

  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides () {
  const swiper = this;

  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

var manipulation = {
  appendSlide,
  prependSlide,
  addSlide,
  removeSlide,
  removeAllSlides,
};

const Device = (function Device() {
  const ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent;

  const device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    windows: false,
    iphone: false,
    ipod: false,
    ipad: false,
    cordova: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap,
    phonegap: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap,
  };

  const windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


  // Windows
  if (windows) {
    device.os = 'windows';
    device.osVersion = windows[2];
    device.windows = true;
  }
  // Android
  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Desktop
  device.desktop = !(device.os || device.android || device.webView);

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  // Minimal UI
  if (device.os && device.os === 'ios') {
    const osVersionArr = device.osVersion.split('.');
    const metaViewport = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector('meta[name="viewport"]');
    device.minimalUi = !device.webView
      && (ipod || iphone)
      && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
      && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
  }

  // Pixel Ratio
  device.pixelRatio = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].devicePixelRatio || 1;

  // Export object
  return device;
}());

function onTouchStart (event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const { params, touches } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  if (params.noSwiping && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`)[0]) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e).closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (
    edgeSwipeDetection
    && ((startX <= edgeSwipeThreshold)
    || (startX >= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].screen.width - edgeSwipeThreshold))
  ) {
    return;
  }

  Utils.extend(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined,
  });

  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  if (e.type !== 'touchstart') {
    let preventDefault = true;
    if (Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is(data.formElements)) preventDefault = false;
    if (
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement
      && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement).is(data.formElements)
      && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement !== e.target
    ) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
      e.preventDefault();
    }
  }
  swiper.emit('touchStart', e);
}

function onTouchMove (event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const { params, touches, rtlTranslate: rtl } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  if (data.isTouchEvent && e.type === 'mousemove') return;
  const pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;
    if (data.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
      });
      data.touchStartTime = Utils.now();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (
        (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
        || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
      ) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (
      (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
      || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
    ) {
      return;
    }
  }
  if (data.isTouchEvent && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement) {
    if (e.target === ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;

  touches.currentX = pageX;
  touches.currentY = pageY;

  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt((diffX ** 2) + (diffY ** 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if ((diffX * diffX) + (diffY * diffY) >= 25) {
        touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  e.preventDefault();
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;

  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;

  diff *= params.touchRatio;
  if (rtl) diff = -diff;

  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;

  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = (swiper.minTranslate() - 1) + ((-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = (swiper.maxTranslate() + 1) - ((swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }


  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger) return;

  // Update active index in free mode
  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime,
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now(),
    });
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd (event) {
  const swiper = this;
  const data = swiper.touchEventsData;

  const {
    params, touches, rtlTranslate: rtl, $wrapperEl, slidesGrid, snapGrid,
  } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = Utils.now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap', e);
    if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
      if (data.clickTimeout) clearTimeout(data.clickTimeout);
      data.clickTimeout = Utils.nextTick(() => {
        if (!swiper || swiper.destroyed) return;
        swiper.emit('click', e);
      }, 300);
    }
    if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
      if (data.clickTimeout) clearTimeout(data.clickTimeout);
      swiper.emit('doubleTap', e);
    }
  }

  data.lastClickTime = Utils.now();
  Utils.nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;

  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();

        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeModeMomentumVelocityRatio;

      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeModeMomentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;

      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;

      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        swiper.once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');

          swiper.setTransition(params.speed);
          swiper.setTranslate(afterBouncePosition);
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    return;
  }

  // Find current slide
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
    if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
        stopIndex = i;
        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > (1 - params.longSwipesRatio)) swiper.slideTo(stopIndex + params.slidesPerGroup);
      else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      swiper.slideTo(stopIndex + params.slidesPerGroup);
    }
    if (swiper.swipeDirection === 'prev') {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize () {
  const swiper = this;

  const { params, el } = swiper;

  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;

  swiper.updateSize();
  swiper.updateSlides();

  if (params.freeMode) {
    const newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
    swiper.setTranslate(newTranslate);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
  } else {
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick (e) {
  const swiper = this;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function attachEvents() {
  const swiper = this;
  const {
    params, touchEvents, el, wrapperEl,
  } = swiper;

  {
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  const target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  const capture = !!params.nested;

  // Touch Events
  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture } : capture);
        target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.addEventListener('mousedown', swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mousemove', swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.addEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
}

function detachEvents() {
  const swiper = this;

  const {
    params, touchEvents, el, wrapperEl,
  } = swiper;

  const target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  const capture = !!params.nested;

  // Touch Events
  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.removeEventListener('mousedown', swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mousemove', swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.removeEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
}

var events = {
  attachEvents,
  detachEvents,
};

function setBreakpoint () {
  const swiper = this;
  const {
    activeIndex, initialized, loopedSlides = 0, params,
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return;

  // Set breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach((param) => {
        const paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;
        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    Utils.extend(swiper.params, breakpointParams);

    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
    });

    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}

function getBreakpoint (breakpoints) {
  const swiper = this;
  // Get breakpoint for window width
  if (!breakpoints) return undefined;
  let breakpoint = false;
  const points = [];
  Object.keys(breakpoints).forEach((point) => {
    points.push(point);
  });
  points.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  for (let i = 0; i < points.length; i += 1) {
    const point = points[i];
    if (swiper.params.breakpointsInverse) {
      if (point <= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth) {
        breakpoint = point;
      }
    } else if (point >= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth && !breakpoint) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = { setBreakpoint, getBreakpoint };

function addClasses () {
  const swiper = this;
  const {
    classNames, params, rtl, $el,
  } = swiper;
  const suffixes = [];

  suffixes.push('initialized');
  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }
  if (!Support.flexbox) {
    suffixes.push('no-flexbox');
  }
  if (params.autoHeight) {
    suffixes.push('autoheight');
  }
  if (rtl) {
    suffixes.push('rtl');
  }
  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
  }
  if (Device.android) {
    suffixes.push('android');
  }
  if (Device.ios) {
    suffixes.push('ios');
  }
  // WP8 Touch Events Fix
  if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
    suffixes.push(`wp8-${params.direction}`);
  }

  suffixes.forEach((suffix) => {
    classNames.push(params.containerModifierClass + suffix);
  });

  $el.addClass(classNames.join(' '));
}

function removeClasses () {
  const swiper = this;
  const { $el, classNames } = swiper;

  $el.removeClass(classNames.join(' '));
}

var classes = { addClasses, removeClasses };

function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
  let image;
  function onReady() {
    if (callback) callback();
  }
  if (!imageEl.complete || !checkForComplete) {
    if (src) {
      image = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages () {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');
  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }
  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(
      imageEl,
      imageEl.currentSrc || imageEl.getAttribute('src'),
      imageEl.srcset || imageEl.getAttribute('srcset'),
      imageEl.sizes || imageEl.getAttribute('sizes'),
      true,
      onReady
    );
  }
}

var images = {
  loadImage,
  preloadImages,
};

function checkOverflow() {
  const swiper = this;
  const wasLocked = swiper.isLocked;

  swiper.isLocked = swiper.snapGrid.length === 1;
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked;

  // events
  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    swiper.navigation.update();
  }
}

var checkOverflow$1 = { checkOverflow };

var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  //
  preventInteractionOnTransition: false,

  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,

  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,

  // Autoheight
  autoHeight: false,

  // Set wrapper width
  setWrapperSize: false,

  // Virtual Translate
  virtualTranslate: false,

  // Effects
  effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsInverse: false,

  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0, // in px
  slidesOffsetAfter: 0, // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,

  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,

  // Round length
  roundLengths: false,

  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,

  // Unique Navigation Elements
  uniqueNavElements: true,

  // Resistance
  resistance: true,
  resistanceRatio: 0.85,

  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,

  // Cursor
  grabCursor: false,

  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,

  // Images
  preloadImages: true,
  updateOnImagesReady: true,

  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,

  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null, // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,

  // Passive Listeners
  passiveListeners: true,

  // NS
  containerModifierClass: 'swiper-container-', // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',

  // Callbacks
  runCallbacksOnInit: true,
};

/* eslint no-param-reassign: "off" */

const prototypes = {
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  manipulation,
  events,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images,
};

const extendedDefaults = {};

class Swiper extends SwiperClass {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};

    params = Utils.extend({}, params);
    if (el && !params.el) params.el = el;

    super(params);

    Object.keys(prototypes).forEach((prototypeGroup) => {
      Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    });

    // Swiper Instance
    const swiper = this;
    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }
    Object.keys(swiper.modules).forEach((moduleName) => {
      const module = swiper.modules[moduleName];
      if (module.params) {
        const moduleParamName = Object.keys(module.params)[0];
        const moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
        if (params[moduleParamName] === true) {
          params[moduleParamName] = { enabled: true };
        }
        if (
          typeof params[moduleParamName] === 'object'
          && !('enabled' in params[moduleParamName])
        ) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
      }
    });

    // Extend defaults with modules params
    const swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams);

    // Extend defaults with passed params
    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params);

    // Save Dom lib
    swiper.$ = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"];

    // Find el
    const $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.el);
    el = $el[0];

    if (!el) {
      return undefined;
    }

    if ($el.length > 1) {
      const swipers = [];
      $el.each((index, containerEl) => {
        const newParams = Utils.extend({}, params, { el: containerEl });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }

    el.swiper = swiper;
    $el.data('swiper', swiper);

    // Find Wrapper
    const $wrapperEl = $el.children(`.${swiper.params.wrapperClass}`);

    // Extend Swiper
    Utils.extend(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],

      // Classes
      classNames: [],

      // Slides
      slides: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',

      // Indexes
      activeIndex: 0,
      realIndex: 0,

      //
      isBeginning: true,
      isEnd: false,

      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,

      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,

      // Touch Events
      touchEvents: (function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend'];
        let desktop = ['mousedown', 'mousemove', 'mouseup'];
        if (Support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        } else if (Support.prefixedPointerEvents) {
          desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        }
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2],
        };
        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }()),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined,
      },

      // Clicks
      allowClick: true,

      // Touches
      allowTouchMove: swiper.params.allowTouchMove,

      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
      },

      // Images
      imagesToLoad: [],
      imagesLoaded: 0,

    });

    // Install Modules
    swiper.useModules();

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    return swiper;
  }

  slidesPerViewDynamic() {
    const swiper = this;
    const {
      params, slides, slidesGrid, size: swiperSize, activeIndex,
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }
    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const { snapGrid, params } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (swiper.params.freeMode) {
      setTranslate();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
      return swiper;
    }

    swiper.$el
      .removeClass(`${swiper.params.containerModifierClass}${currentDirection} wp8-${currentDirection}`)
      .addClass(`${swiper.params.containerModifierClass}${newDirection}`);

    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      swiper.$el.addClass(`${swiper.params.containerModifierClass}wp8-${newDirection}`);
    }

    swiper.params.direction = newDirection;

    swiper.slides.each((slideIndex, slideEl) => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });

    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();

    return swiper;
  }

  init() {
    const swiper = this;
    if (swiper.initialized) return;

    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    }

    // Slide To Initial Slide
    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    }

    // Attach events
    swiper.attachEvents();

    // Init Flag
    swiper.initialized = true;

    // Emit
    swiper.emit('init');
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params, $el, $wrapperEl, slides,
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');
      if (slides && slides.length) {
        slides
          .removeClass([
            params.slideVisibleClass,
            params.slideActiveClass,
            params.slideNextClass,
            params.slidePrevClass,
          ].join(' '))
          .removeAttr('style')
          .removeAttr('data-swiper-slide-index')
          .removeAttr('data-swiper-column')
          .removeAttr('data-swiper-row');
      }
    }

    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      swiper.$el.data('swiper', null);
      Utils.deleteProps(swiper);
    }
    swiper.destroyed = true;

    return null;
  }

  static extendDefaults(newDefaults) {
    Utils.extend(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return defaults;
  }

  static get Class() {
    return SwiperClass;
  }

  static get $() {
    return dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"];
  }
}

var Device$1 = {
  name: 'device',
  proto: {
    device: Device,
  },
  static: {
    device: Device,
  },
};

var Support$1 = {
  name: 'support',
  proto: {
    support: Support,
  },
  static: {
    support: Support,
  },
};

var Browser$1 = {
  name: 'browser',
  proto: {
    browser: Browser,
  },
  static: {
    browser: Browser,
  },
};

var Resize = {
  name: 'resize',
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        },
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      // Emit resize
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('resize', swiper.resize.resizeHandler);

      // Emit orientationchange
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy() {
      const swiper = this;
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('resize', swiper.resize.resizeHandler);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
  },
};

const Observer = {
  func: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].MutationObserver || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebkitMutationObserver,
  attach(target, options = {}) {
    const swiper = this;

    const ObserverFunc = Observer.func;
    const observer = new ObserverFunc((mutations) => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(observerUpdate);
      } else {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(observerUpdate, 0);
      }
    });

    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
    });

    swiper.observer.observers.push(observer);
  },
  init() {
    const swiper = this;
    if (!Support.observer || !swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();
      for (let i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    }
    // Observe container
    swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

    // Observe wrapper
    swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
  },
  destroy() {
    const swiper = this;
    swiper.observer.observers.forEach((observer) => {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  },
};

var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false,
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: [],
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.observer.init();
    },
    destroy() {
      const swiper = this;
      swiper.observer.destroy();
    },
  },
};

const Virtual = {
  update(force) {
    const swiper = this;
    const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
    const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      renderSlide,
      offset: previousOffset,
    } = swiper.virtual;
    swiper.updateActiveIndex();
    const activeIndex = swiper.activeIndex || 0;

    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';
    else offsetProp = swiper.isHorizontal() ? 'left' : 'top';

    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
      slidesBefore = slidesPerGroup + addSlidesAfter;
    }
    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

    Utils.extend(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset}px`);
      }
      swiper.updateProgress();
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: (function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()),
      });
      onRendered();
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }
    appendIndexes.forEach((index) => {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort((a, b) => b - a).forEach((index) => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
    onRendered();
  },
  renderSlide(slide, index) {
    const swiper = this;
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    const $slideEl = params.renderSlide
      ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.renderSlide.call(swiper, slide, index))
      : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide(slides) {
    const swiper = this;
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    swiper.virtual.update(true);
  },
  prependSlide(slides) {
    const swiper = this;
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach((cachedIndex) => {
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
      });
      swiper.virtual.cache = newCache;
    }
    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide(slidesIndexes) {
    const swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides() {
    const swiper = this;
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  },
};

var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      addSlidesBefore: 0,
      addSlidesAfter: 0,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        removeSlide: Virtual.removeSlide.bind(swiper),
        removeAllSlides: Virtual.removeAllSlides.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {},
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
      const overwriteParams = {
        watchSlidesProgress: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    },
  },
};

const Keyboard = {
  handle(event) {
    const swiper = this;
    const { rtlTranslate: rtl } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    // Directions locks
    if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
      return false;
    }
    if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName && (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'input' || ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const windowWidth = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
      const windowHeight = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [
        [swiperOffset.left, swiperOffset.top],
        [swiperOffset.left + swiper.width, swiperOffset.top],
        [swiperOffset.left, swiperOffset.top + swiper.height],
        [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
      ];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (
          point[0] >= 0 && point[0] <= windowWidth
          && point[1] >= 0 && point[1] <= windowHeight
        ) {
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) swiper.slideNext();
      if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) swiper.slidePrev();
    } else {
      if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (kc === 34 || kc === 40) swiper.slideNext();
      if (kc === 33 || kc === 38) swiper.slidePrev();
    }
    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable() {
    const swiper = this;
    if (swiper.keyboard.enabled) return;
    Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable() {
    const swiper = this;
    if (!swiper.keyboard.enabled) return;
    Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  },
};

var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    },
  },
};

function isEventSupported() {
  const eventName = 'onwheel';
  let isSupported = eventName in ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"];

  if (!isSupported) {
    const element = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported
    && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation
    && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('', '') !== true
  ) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}
const Mousewheel = {
  lastScrollTime: Utils.now(),
  event: (function getEvent() {
    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  }()),
  normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;

    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) { // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else { // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = (pX < 1) ? -1 : 1;
    }
    if (pY && !sY) {
      sY = (pY < 1) ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY,
    };
  },
  handleMouseEnter() {
    const swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave() {
    const swiper = this;
    swiper.mouseEntered = false;
  },
  handle(event) {
    let e = event;
    const swiper = this;
    const params = swiper.params.mousewheel;

    if (!swiper.mouseEntered && !params.releaseOnEdges) return true;

    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;

    const data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;

    if (params.invert) delta = -delta;

    if (!swiper.params.freeMode) {
      if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
        if (delta < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) return true;
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', e);
        } else if (params.releaseOnEdges) return true;
      }
      swiper.mousewheel.lastScrollTime = (new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Date()).getTime();
    } else {
      // Freemode or scrollContainer:
      if (swiper.params.loop) {
        swiper.loopFix();
      }
      let position = swiper.getTranslate() + (delta * params.sensitivity);
      const wasBeginning = swiper.isBeginning;
      const wasEnd = swiper.isEnd;

      if (position >= swiper.minTranslate()) position = swiper.minTranslate();
      if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();

      swiper.setTransition(0);
      swiper.setTranslate(position);
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeModeSticky) {
        clearTimeout(swiper.mousewheel.timeout);
        swiper.mousewheel.timeout = Utils.nextTick(() => {
          swiper.slideToClosest();
        }, 300);
      }
      // Emit event
      swiper.emit('scroll', e);

      // Stop autoplay
      if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
      // Return page scroll on edge positions
      if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
    }

    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  },
  enable() {
    const swiper = this;
    if (!Mousewheel.event) return false;
    if (swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
    }
    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable() {
    const swiper = this;
    if (!Mousewheel.event) return false;
    if (!swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
    }
    target.off(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  },
};

var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
        lastScrollTime: Utils.now(),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy() {
      const swiper = this;
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    },
  },
};

const Navigation = {
  update() {
    // Update Navigation Buttons
    const swiper = this;
    const params = swiper.params.navigation;

    if (swiper.params.loop) return;
    const { $nextEl, $prevEl } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }
      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }
      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick(e) {
    const swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick(e) {
    const swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init() {
    const swiper = this;
    const params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;

    let $nextEl;
    let $prevEl;
    if (params.nextEl) {
      $nextEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.nextEl);
      if (
        swiper.params.uniqueNavElements
        && typeof params.nextEl === 'string'
        && $nextEl.length > 1
        && swiper.$el.find(params.nextEl).length === 1
      ) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }
    if (params.prevEl) {
      $prevEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.prevEl);
      if (
        swiper.params.uniqueNavElements
        && typeof params.prevEl === 'string'
        && $prevEl.length > 1
        && swiper.$el.find(params.prevEl).length === 1
      ) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    Utils.extend(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0],
    });
  },
  destroy() {
    const swiper = this;
    const { $nextEl, $prevEl } = swiper.navigation;
    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  },
};

var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,

      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper),
        onNextClick: Navigation.onNextClick.bind(swiper),
        onPrevClick: Navigation.onPrevClick.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    fromEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    destroy() {
      const swiper = this;
      swiper.navigation.destroy();
    },
    click(e) {
      const swiper = this;
      const { $nextEl, $prevEl } = swiper.navigation;
      if (
        swiper.params.navigation.hideOnClick
        && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($prevEl)
        && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($nextEl)
      ) {
        let isHidden;
        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          swiper.emit('navigationShow', swiper);
        } else {
          swiper.emit('navigationHide', swiper);
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    },
  },
};

const Pagination = {
  update() {
    // Render || Update Pagination bullets/items
    const swiper = this;
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    // Current/Total
    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
        current -= (slidesLength - (swiper.loopedSlides * 2));
      }
      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)}px`);
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
          if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }
        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(`${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`);
      if ($el.length > 1) {
        bullets.each((index, bullet) => {
          const $bullet = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bullet);
          const bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }
            if (bulletIndex === firstIndex) {
              $bullet
                .prev()
                .addClass(`${params.bulletActiveClass}-prev`)
                .prev()
                .addClass(`${params.bulletActiveClass}-prev-prev`);
            }
            if (bulletIndex === lastIndex) {
              $bullet
                .next()
                .addClass(`${params.bulletActiveClass}-next`)
                .next()
                .addClass(`${params.bulletActiveClass}-next-next`);
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }
          $firstDisplayedBullet
            .prev()
            .addClass(`${params.bulletActiveClass}-prev`)
            .prev()
            .addClass(`${params.bulletActiveClass}-prev-prev`);
          $lastDisplayedBullet
            .next()
            .addClass(`${params.bulletActiveClass}-next`)
            .next()
            .addClass(`${params.bulletActiveClass}-next-next`);
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }
    if (params.type === 'fraction') {
      $el.find(`.${params.currentClass}`).text(params.formatFractionCurrent(current + 1));
      $el.find(`.${params.totalClass}`).text(params.formatFractionTotal(total));
    }
    if (params.type === 'progressbar') {
      let progressbarDirection;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }
      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;
      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find(`.${params.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }
    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }
    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render() {
    // Render Container
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

    const $el = swiper.pagination.$el;
    let paginationHTML = '';
    if (params.type === 'bullets') {
      const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(`.${params.bulletClass}`);
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>`
        + ' / '
        + `<span class="${params.totalClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el) return;

    let $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);
    if ($el.length === 0) return;

    if (
      swiper.params.uniqueNavElements
      && typeof params.el === 'string'
      && $el.length > 1
      && swiper.$el.find(params.el).length === 1
    ) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      swiper.pagination.dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', `.${params.bulletClass}`, function onClick(e) {
        e.preventDefault();
        let index = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Utils.extend(swiper.pagination, {
      $el,
      el: $el[0],
    });
  },
  destroy() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const $el = swiper.pagination.$el;

    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off('click', `.${params.bulletClass}`);
    }
  },
};

var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-', // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable', // NEW
      lockClass: 'swiper-pagination-lock',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
        dynamicBulletIndex: 0,
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy() {
      const swiper = this;
      swiper.pagination.destroy();
    },
    click(e) {
      const swiper = this;
      if (
        swiper.params.pagination.el
        && swiper.params.pagination.hideOnClick
        && swiper.pagination.$el.length > 0
        && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).hasClass(swiper.params.pagination.bulletClass)
      ) {
        const isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          swiper.emit('paginationShow', swiper);
        } else {
          swiper.emit('paginationHide', swiper);
        }
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    },
  },
};

const Scrollbar = {
  setTranslate() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const { scrollbar, rtlTranslate: rtl, progress } = swiper;
    const {
      dragSize, trackSize, $dragEl, $el,
    } = scrollbar;
    const params = swiper.params.scrollbar;

    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      if (Support.transforms3d) {
        $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      } else {
        $dragEl.transform(`translateX(${newPos}px)`);
      }
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      if (Support.transforms3d) {
        $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      } else {
        $dragEl.transform(`translateY(${newPos}px)`);
      }
      $dragEl[0].style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition(duration) {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

    const { scrollbar } = swiper;
    const { $dragEl, $el } = scrollbar;

    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

    const divider = swiper.size / swiper.virtualSize;
    const moveDivider = divider * (trackSize / swiper.size);
    let dragSize;
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }
    Utils.extend(scrollbar, {
      trackSize,
      divider,
      moveDivider,
      dragSize,
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  getPointerPosition(e) {
    const swiper = this;
    if (swiper.isHorizontal()) {
      return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
    }
    return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
  },
  setDragPosition(e) {
    const swiper = this;
    const { scrollbar, rtlTranslate: rtl } = swiper;
    const {
      $el,
      dragSize,
      trackSize,
      dragStartPos,
    } = scrollbar;

    let positionRatio;
    positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
      - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    const position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart(e) {
    const swiper = this;
    const params = swiper.params.scrollbar;
    const { scrollbar, $wrapperEl } = swiper;
    const { $el, $dragEl } = scrollbar;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
      ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();

    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);

    clearTimeout(swiper.scrollbar.dragTimeout);

    $el.transition(0);
    if (params.hide) {
      $el.css('opacity', 1);
    }
    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove(e) {
    const swiper = this;
    const { scrollbar, $wrapperEl } = swiper;
    const { $el, $dragEl } = scrollbar;

    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd(e) {
    const swiper = this;

    const params = swiper.params.scrollbar;
    const { scrollbar } = swiper;
    const { $el } = scrollbar;

    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;
    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }
    swiper.emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar, touchEventsTouch, touchEventsDesktop, params,
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar, touchEventsTouch, touchEventsDesktop, params,
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const { scrollbar, $el: $swiperEl } = swiper;
    const params = swiper.params.scrollbar;

    let $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
    if ($dragEl.length === 0) {
      $dragEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }

    Utils.extend(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0],
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy() {
    const swiper = this;
    swiper.scrollbar.disableDraggable();
  },
};

var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null,
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate() {
      const swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy() {
      const swiper = this;
      swiper.scrollbar.destroy();
    },
  },
};

const Parallax = {
  setTransform(el, progress) {
    const swiper = this;
    const { rtl } = swiper;

    const $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
    const rtlFactor = rtl ? -1 : 1;

    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if ((x).indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if ((y).indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
      $el[0].style.opacity = currentOpacity;
    }
    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  },
  setTranslate() {
    const swiper = this;
    const {
      $el, slides, progress, snapGrid,
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
      .each((index, el) => {
        swiper.parallax.setTransform(el, progress);
      });
    slides.each((slideIndex, slideEl) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each((index, el) => {
          swiper.parallax.setTransform(el, slideProgress);
        });
    });
  },
  setTransition(duration = this.params.speed) {
    const swiper = this;
    const { $el } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
      .each((index, parallaxEl) => {
        const $parallaxEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(parallaxEl);
        let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        $parallaxEl.transition(parallaxDuration);
      });
  },
};

var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    },
  },
};

const Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    return distance;
  },
  // Events
  onGestureStart(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;
    if (!Support.gestures) {
      if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest('.swiper-slide');
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }
    gesture.$imageEl.transition(0);
    swiper.zoom.isScaling = true;
  },
  onGestureChange(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (!Support.gestures) {
      if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (Support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
    }
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = (gesture.maxRatio - 1) + (((zoom.scale - gesture.maxRatio) + 1) ** 0.5);
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = (params.minRatio + 1) - (((params.minRatio - zoom.scale) + 1) ** 0.5);
    }
    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  onGestureEnd(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }
      if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
        return;
      }
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (Device.android) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image, velocity } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;

    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;

    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;

    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (
        swiper.isHorizontal()
        && (
          (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
          || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
        )
      ) {
        image.isTouched = false;
        return;
      } if (
        !swiper.isHorizontal()
        && (
          (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
          || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
        )
      ) {
        image.isTouched = false;
        return;
      }
    }
    e.preventDefault();
    e.stopPropagation();

    image.isMoved = true;
    image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
    image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = (image.minX + 1) - (((image.minX - image.currentX) + 1) ** 0.8);
    }
    if (image.currentX > image.maxX) {
      image.currentX = (image.maxX - 1) + (((image.currentX - image.maxX) + 1) ** 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = (image.minY + 1) - (((image.minY - image.currentY) + 1) ** 0.8);
    }
    if (image.currentY > image.maxY) {
      image.currentY = (image.maxY - 1) + (((image.currentY - image.maxY) + 1) ** 0.8);
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();

    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTouchEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image, velocity } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);

    image.currentX = newPositionX;
    image.currentY = newPositionY;

    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTransitionEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      gesture.$imageWrapEl.transform('translate3d(0,0,0)');

      zoom.scale = 1;
      zoom.currentScale = 1;

      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle(e) {
    const swiper = this;
    const zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in(e) {
    const swiper = this;

    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const { gesture, image } = zoom;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);

    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = (offsetX + (slideWidth / 2)) - touchX;
      diffY = (offsetY + (slideHeight / 2)) - touchY;

      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;

      translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
      translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;

      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  out() {
    const swiper = this;

    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const { gesture } = zoom;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  },
  // Attach/Detach Events
  enable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;

    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove);
  },
  disable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;

    swiper.zoom.enabled = false;

    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove);
  },
};

var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed',
    },
  },
  create() {
    const swiper = this;
    const zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3,
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {},
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined,
      },
    };

    ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach((methodName) => {
      zoom[methodName] = Zoom[methodName].bind(swiper);
    });
    Utils.extend(swiper, {
      zoom,
    });

    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          const slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }
        scale = value;
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy() {
      const swiper = this;
      swiper.zoom.disable();
    },
    touchStart(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap(e) {
      const swiper = this;
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
  },
};

const Lazy = {
  loadInSlide(index, loadInDuplicate = true) {
    const swiper = this;
    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    const $slideEl = isVirtual
      ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`)
      : swiper.slides.eq(index);

    let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }
    if ($images.length === 0) return;

    $images.each((imageIndex, imageEl) => {
      const $imageEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(imageEl);
      $imageEl.addClass(params.loadingClass);

      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');

      swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) return;
        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }
          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }
          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();
        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }
        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
      });

      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load() {
    const swiper = this;
    const {
      $wrapperEl, params: swiperParams, slides, activeIndex,
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;

    let slidesPerView = swiperParams.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
          return true;
        }
      } else if (slides[index]) return true;
      return false;
    }
    function slideIndex(slideEl) {
      if (isVirtual) {
        return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index');
      }
      return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((elIndex, slideEl) => {
        const index = isVirtual ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index') : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }
    if (params.loadPrevNext) {
      if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
        const amount = params.loadPrevNextAmount;
        const spv = slidesPerView;
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
        // Next Slides
        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
        // Prev Slides
        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));

        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  },
};

var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,

      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll() {
      const swiper = this;
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
  },
};

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

const Controller = {
  LinearSpline: function LinearSpline(x, y) {
    const binarySearch = (function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }());
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
    };
    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction(c) {
    const swiper = this;
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop
        ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
        : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate(setTranslate, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition(duration, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          Utils.nextTick(() => {
            c.updateAutoHeight();
          });
        }
        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;
          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  },
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide', // or 'container'
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper),
      },
    });
  },
  on: {
    update() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate(translate, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition(duration, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    },
  },
};

const a11y = {
  makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey(e) {
    const swiper = this;
    const params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    const $targetEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target);
    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && $targetEl.is(`.${swiper.params.pagination.bulletClass}`)) {
      $targetEl[0].click();
    }
  },
  notify(message) {
    const swiper = this;
    const notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation() {
    const swiper = this;

    if (swiper.params.loop) return;
    const { $nextEl, $prevEl } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
      }
    }
  },
  updatePagination() {
    const swiper = this;
    const params = swiper.params.a11y;
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
        const $bulletEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
      });
    }
  },
  init() {
    const swiper = this;

    swiper.$el.append(swiper.a11y.liveRegion);

    // Navigation
    const params = swiper.params.a11y;
    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();

    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  },
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`),
      },
    });
    Object.keys(a11y).forEach((methodName) => {
      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    });
  },
  on: {
    init() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    },
  },
};

const History = {
  init() {
    const swiper = this;
    if (!swiper.params.history) return;
    if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history || !ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    const history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy() {
    const swiper = this;
    if (!swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState() {
    const swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues() {
    const pathArray = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.slice(1).split('/').filter((part) => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return { key, value };
  },
  setHistory(key, index) {
    const swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    const slide = swiper.slides.eq(index);
    let value = History.slugify(slide.attr('data-history'));
    if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }
    const currentState = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState({ value }, null, value);
    } else {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState({ value }, null, value);
    }
  },
  slugify(text) {
    return text.toString()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },
  scrollToSlide(speed, value, runCallbacks) {
    const swiper = this;
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = History.slugify(slide.attr('data-history'));
        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  },
};

var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
  },
};

const HashNavigation = {
  onHashCange() {
    const swiper = this;
    const newHash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash() {
    const swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
    if (swiper.params.hashNavigation.replaceState && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState(null, null, (`#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || ''));
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash = hash || '';
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return;
    swiper.hashNavigation.initialized = true;
    const hash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');
        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }
    if (swiper.params.hashNavigation.watchState) {
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.params.hashNavigation.watchState) {
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
  },
};

/* eslint no-underscore-dangle: "off" */

const Autoplay = {
  run() {
    const swiper = this;
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }
    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = Utils.nextTick(() => {
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
    }, delay);
  },
  start() {
    const swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop() {
    const swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }
    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause(speed) {
    const swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
};

var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
        onTransitionEnd(e) {
          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          swiper.autoplay.paused = false;
          if (!swiper.autoplay.running) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.run();
          }
        },
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
      }
    },
    beforeTransitionStart(speed, internal) {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove() {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
    },
  },
};

const Fade = {
  setTranslate() {
    const swiper = this;
    const { slides } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade
        ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
        : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl
        .css({
          opacity: slideOpacity,
        })
        .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const { slides, $wrapperEl } = swiper;
    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      slides.transitionEnd(() => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    },
  },
};

const Cube = {
  setTranslate() {
    const swiper = this;
    const {
      $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }
        $cubeShadowEl.css({ height: `${swiperWidth}px` });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + (round * 4 * swiperSize);
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = (3 * swiperSize) + (swiperSize * 4 * round);
      }
      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = (slideIndex * 90) + (progress * 90);
        if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
      }
      $slideEl.transform(transform);
      if (params.slideShadows) {
        // Set shadows
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }
    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`,
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
        const multiplier = 1.5 - (
          (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
          + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
        );
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }
    const zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
    $wrapperEl
      .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
  },
  setTransition(duration) {
    const swiper = this;
    const { $el, slides } = swiper;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  },
};

var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    },
  },
};

const Flip = {
  setTranslate() {
    const swiper = this;
    const { slides, rtlTranslate: rtl } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
      $slideEl
        .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const { slides, activeIndex, $wrapperEl } = swiper;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      // eslint-disable-next-line
      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    },
  },
};

const Coverflow = {
  setTranslate() {
    const swiper = this;
    const {
      width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid,
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);

      let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
      let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;

      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append($shadowBeforeEl);
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append($shadowAfterEl);
        }
        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
      }
    }

    // Set correct perspective for IE10
    if (Support.pointerEvents || Support.prefixedPointerEvents) {
      const ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = `${center}px 50%`;
    }
  },
  setTransition(duration) {
    const swiper = this;
    swiper.slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
  },
};

var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    },
  },
};

const Thumbs = {
  init() {
    const swiper = this;
    const { thumbs: thumbsParams } = swiper.params;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Utils.extend(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
      Utils.extend(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
    } else if (Utils.isObject(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      }));
      swiper.thumbs.swiperCreated = true;
    }
    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
  },
  onThumbClick() {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;
      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }
      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
      else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
      else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
      else slideToIndex = prevIndex;
    }
    swiper.slideTo(slideToIndex);
  },
  update(initial) {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;

    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
      ? thumbsSwiper.slidesPerViewDynamic()
      : thumbsSwiper.params.slidesPerView;

    if (swiper.realIndex !== thumbsSwiper.realIndex) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix();
          // eslint-disable-next-line
          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        }
        // Find actual thumbs index to slide to
        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
        else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
        else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;
        else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
        else newThumbsIndex = prevThumbsIndex;
      } else {
        newThumbsIndex = swiper.realIndex;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    thumbsSwiper.slides.removeClass(thumbActiveClass);
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }
  },
};
var Thumbs$1 = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      thumbs: {
        swiper: null,
        init: Thumbs.init.bind(swiper),
        update: Thumbs.update.bind(swiper),
        onThumbClick: Thumbs.onThumbClick.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      const { thumbs } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition(duration) {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy() {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    },
  },
};

// Swiper Class

const components = [
  Device$1,
  Support$1,
  Browser$1,
  Resize,
  Observer$1,
  Virtual$1,
  Keyboard$1,
  Mousewheel$1,
  Navigation$1,
  Pagination$1,
  Scrollbar$1,
  Parallax$1,
  Zoom$1,
  Lazy$1,
  Controller$1,
  A11y,
  History$1,
  HashNavigation$1,
  Autoplay$1,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  Thumbs$1
];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);

/* harmony default export */ __webpack_exports__["default"] = (Swiper);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5taW4uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb203L2Rpc3QvZG9tNy5tb2R1bGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zc3Itd2luZG93L2Rpc3Qvc3NyLXdpbmRvdy5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9kaXN0L2Nzcy9zd2lwZXIubWluLmNzcz9hNmI0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZGlzdC9qcy9zd2lwZXIuZXNtLmJ1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyw4RkFBeUM7QUFDNUU7QUFDQSxjQUFjLFFBQVMsNFNBQTRTLHNCQUFzQix1QkFBdUIsdUJBQXVCLHFCQUFxQixxQkFBcUIsZUFBZSxlQUFlLEdBQUcsOENBQThDLGdCQUFnQixHQUFHLGdEQUFnRCxpQ0FBaUMsa0NBQWtDLG1DQUFtQywrQkFBK0IsMkJBQTJCLEdBQUcsbUJBQW1CLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGVBQWUseUJBQXlCLDBCQUEwQix5QkFBeUIsa0JBQWtCLG1EQUFtRCwyQ0FBMkMsc0NBQXNDLG1DQUFtQyxzREFBc0Qsb0NBQW9DLDRCQUE0QixHQUFHLDZEQUE2RCw0Q0FBNEMsb0NBQW9DLEdBQUcsZ0RBQWdELDRCQUE0Qix3QkFBd0Isb0JBQW9CLEdBQUcsaURBQWlELGlEQUFpRCw0Q0FBNEMseUNBQXlDLG1CQUFtQixHQUFHLGlCQUFpQiwyQkFBMkIseUJBQXlCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixtREFBbUQsMkNBQTJDLHNDQUFzQyxtQ0FBbUMsc0RBQXNELEdBQUcsaUNBQWlDLHVCQUF1QixHQUFHLDZFQUE2RSxpQkFBaUIsR0FBRyxnREFBZ0QsNkJBQTZCLG9DQUFvQywwQkFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNENBQTRDLEdBQUcsWUFBWTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx5Q0FBeUMseUJBQXlCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZELG1CQUFtQixvQ0FBb0M7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVDQUF1QztBQUMzRCxvREFBb0Qsb0JBQW9CO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEOztBQUVsRDtBQUNBLDBCQUEwQixpREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0MsU0FBUztBQUNULHNDQUFzQyxVQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixXQUFXLHlDQUF5QyxLQUFLO0FBQzdFO0FBQ0E7QUFDQSwrQ0FBK0MsV0FBVyx5Q0FBeUMsS0FBSztBQUN4Ryx5QkFBeUIsWUFBWSx5Q0FBeUMsS0FBSztBQUNuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsV0FBVyx5Q0FBeUMsS0FBSztBQUN4Ryx5QkFBeUIsWUFBWSx5Q0FBeUMsS0FBSztBQUNuRjtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQixhQUFhLEtBQUs7QUFDN0QsdUJBQXVCLGlCQUFpQixhQUFhLEtBQUs7QUFDMUQsS0FBSyxrQkFBa0Isa0JBQWtCLGFBQWEsS0FBSztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNENBQTRDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVMsNEJBQTRCOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdFQUFDO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sK0JBQStCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsd0JBQXdCLHdCQUF3QixHQUFHLHNCQUFzQixHQUFHLHNCQUFzQixHQUFHLGlDQUFpQyxHQUFHLCtCQUErQixHQUFHLCtCQUErQjs7QUFFMU07QUFDQTtBQUNBLDZDQUE2QyxrQkFBa0IsNEJBQTRCLFlBQVk7QUFDdkcsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0IsUUFBUSwyQkFBMkIsNkJBQTZCLFVBQVU7QUFDbEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0Isa0JBQWtCLEdBQUcsMkJBQTJCLDRCQUE0QixVQUFVO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtCQUFrQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtCQUFrQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQixRQUFRLDJCQUEyQiw2QkFBNkIsMENBQTBDO0FBQ2xKO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0JBQXNCLGtCQUFrQixHQUFHLDJCQUEyQiw0QkFBNEIsMENBQTBDO0FBQzVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQixRQUFRLDJCQUEyQiw2QkFBNkIsMENBQTBDO0FBQ2xKO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0JBQXNCLGtCQUFrQixHQUFHLDJCQUEyQiw0QkFBNEIsMENBQTBDO0FBQzVJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnRUFBQyx1QkFBdUIsa0JBQWtCO0FBQzFEO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0VBQUM7QUFDdEMsS0FBSztBQUNMLDRCQUE0QixnRUFBQztBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0UsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3BGLDJDQUEyQyxFQUFFLE1BQU0sRUFBRTtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHFDQUFxQztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsNkJBQTZCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0VBQUM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCLDRCQUE0QixVQUFVLFVBQVUsMkJBQTJCO0FBQ3JIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQiw0QkFBNEIsVUFBVSxVQUFVLDJCQUEyQjtBQUNuSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQSwwQkFBMEIsa0JBQWtCLEdBQUcsMkJBQTJCOztBQUUxRSx1Q0FBdUMsa0JBQWtCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDLDBCQUEwQixnRUFBQyxDQUFDLG1EQUFRLG1DQUFtQyxrQkFBa0IsR0FBRyx1QkFBdUI7QUFDbkg7QUFDQTtBQUNBLHVDQUF1QyxrQkFBa0I7QUFDekQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnRUFBQztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsaUJBQWlCLHlCQUF5QjtBQUMxQyxzQkFBc0IsZ0VBQUM7QUFDdkI7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRCx1QkFBdUIsZ0VBQUM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDZCQUE2QjtBQUN0QywwQkFBMEIsa0JBQWtCLEdBQUcsMkJBQTJCLElBQUksa0JBQWtCLEdBQUcsdUJBQXVCO0FBQzFIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLGtDQUFrQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLGtDQUFrQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxrQkFBa0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsa0NBQWtDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxrQkFBa0I7QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxpREFBTTs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpREFBTSxZQUFZLGlEQUFNO0FBQ3JDLGNBQWMsaURBQU0sWUFBWSxpREFBTTtBQUN0Qzs7QUFFQSw0Q0FBNEMsb0JBQW9CO0FBQ2hFLHNDQUFzQyxvQkFBb0I7QUFDMUQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGlEQUFNOztBQUU1QjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtCQUFrQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQUMsNkVBQTZFLHNCQUFzQjtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0VBQUM7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFNO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQUM7QUFDVDtBQUNBLE1BQU0sbURBQVE7QUFDZCxTQUFTLGdFQUFDLENBQUMsbURBQVE7QUFDbkIsU0FBUyxtREFBUTtBQUNqQjtBQUNBLE1BQU0sbURBQVE7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFDQUFxQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFRO0FBQ25DLHFCQUFxQixtREFBUSxrQkFBa0IsZ0VBQUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyx3REFBQztBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZDQUE2QztBQUM3QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOENBQThDLGlEQUFNO0FBQ3BELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdFQUFDO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdFQUFDO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7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QyxpREFBTTtBQUNkO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0VBQUMsQ0FBQyxpREFBTTtBQUNkO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0Msc0VBQXNFLHFCQUFxQjtBQUMzRjtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLHFFQUFNLEVBQUMiLCJmaWxlIjoidmVuZG9yc35ob21lX2ZhYjg2Mzc1OTMzNjZiMDRkNzE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFN3aXBlciA0LjUuMVxcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXFxuICogaHR0cDovL3d3dy5pZGFuZ2Vyby51cy9zd2lwZXIvXFxuICpcXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE5IFZsYWRpbWlyIEtoYXJsYW1waWRpXFxuICpcXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcXG4gKlxcbiAqIFJlbGVhc2VkIG9uOiBTZXB0ZW1iZXIgMTMsIDIwMTlcXG4gKi9cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLW5vLWZsZXhib3ggLnN3aXBlci1zbGlkZSB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc3dpcGVyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XFxuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsXFxuLnN3aXBlci13cmFwcGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLW11bHRpcm93ID4gLnN3aXBlci13cmFwcGVyIHtcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5zd2lwZXItc2xpZGUge1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMDtcXG4gIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcXG4gIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgLXdlYmtpdC10cmFuc2Zvcm07XFxufVxcbi5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCxcXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlciB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgLXdlYmtpdC10cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIC13ZWJraXQtdHJhbnNmb3JtO1xcbiAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLGhlaWdodDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSxoZWlnaHQ7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGhlaWdodCwgLXdlYmtpdC10cmFuc2Zvcm07XFxufVxcbi5zd2lwZXItY29udGFpbmVyLTNkIHtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEyMDBweDtcXG4gIHBlcnNwZWN0aXZlOiAxMjAwcHg7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3csXFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSxcXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCByaWdodCB0b3AsIGxlZnQgdG9wLCBmcm9tKHJnYmEoMCwgMCwgMCwgMC41KSksIHRvKHJnYmEoMCwgMCwgMCwgMCkpKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoMCwgMCwgMCwgMC41KSksIHRvKHJnYmEoMCwgMCwgMCwgMCkpKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcXG59XFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGZyb20ocmdiYSgwLCAwLCAwLCAwLjUpKSwgdG8ocmdiYSgwLCAwLCAwLCAwKSkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHJnYmEoMCwgMCwgMCwgMC41KSksIHRvKHJnYmEoMCwgMCwgMCwgMCkpKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci13cDgtaG9yaXpvbnRhbCxcXG4uc3dpcGVyLWNvbnRhaW5lci13cDgtaG9yaXpvbnRhbCA+IC5zd2lwZXItd3JhcHBlciB7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBwYW4teTtcXG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLXdwOC12ZXJ0aWNhbCxcXG4uc3dpcGVyLWNvbnRhaW5lci13cDgtdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXg7XFxuICB0b3VjaC1hY3Rpb246IHBhbi14O1xcbn1cXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxcbi5zd2lwZXItYnV0dG9uLXByZXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogMjdweDtcXG4gIGhlaWdodDogNDRweDtcXG4gIG1hcmdpbi10b3A6IC0yMnB4O1xcbiAgei1pbmRleDogMTA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggNDRweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC4zNTtcXG4gIGN1cnNvcjogYXV0bztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LFxcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyMzAwN2FmZiclMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG4gIGxlZnQ6IDEwcHg7XFxuICByaWdodDogYXV0bztcXG59XFxuLnN3aXBlci1idXR0b24tbmV4dCxcXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMjclMkMyMkwyNyUyQzIyTDUlMkM0NGwtMi4xLTIuMUwyMi44JTJDMjJMMi45JTJDMi4xTDUlMkMwTDI3JTJDMjJMMjclMkMyMnonJTIwZmlsbCUzRCclMjMwMDdhZmYnJTJGJTNFJTNDJTJGc3ZnJTNFXFxcIik7XFxuICByaWdodDogMTBweDtcXG4gIGxlZnQ6IGF1dG87XFxufVxcbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi13aGl0ZSxcXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00wJTJDMjJMMjIlMkMwbDIuMSUyQzIuMUw0LjIlMkMyMmwxOS45JTJDMTkuOUwyMiUyQzQ0TDAlMkMyMkwwJTJDMjJMMCUyQzIyeiclMjBmaWxsJTNEJyUyM2ZmZmZmZiclMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG59XFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLXdoaXRlLFxcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTIwdmlld0JveCUzRCcwJTIwMCUyMDI3JTIwNDQnJTNFJTNDcGF0aCUyMGQlM0QnTTI3JTJDMjJMMjclMkMyMkw1JTJDNDRsLTIuMS0yLjFMMjIuOCUyQzIyTDIuOSUyQzIuMUw1JTJDMEwyNyUyQzIyTDI3JTJDMjJ6JyUyMGZpbGwlM0QnJTIzZmZmZmZmJyUyRiUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbn1cXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssXFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjB2aWV3Qm94JTNEJzAlMjAwJTIwMjclMjA0NCclM0UlM0NwYXRoJTIwZCUzRCdNMCUyQzIyTDIyJTJDMGwyLjElMkMyLjFMNC4yJTJDMjJsMTkuOSUyQzE5LjlMMjIlMkM0NEwwJTJDMjJMMCUyQzIyTDAlMkMyMnonJTIwZmlsbCUzRCclMjMwMDAwMDAnJTJGJTNFJTNDJTJGc3ZnJTNFXFxcIik7XFxufVxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1ibGFjayxcXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHZpZXdCb3glM0QnMCUyMDAlMjAyNyUyMDQ0JyUzRSUzQ3BhdGglMjBkJTNEJ00yNyUyQzIyTDI3JTJDMjJMNSUyQzQ0bC0yLjEtMi4xTDIyLjglMkMyMkwyLjklMkMyLjFMNSUyQzBMMjclMkMyMkwyNyUyQzIyeiclMjBmaWxsJTNEJyUyMzAwMDAwMCclMkYlM0UlM0MlMkZzdmclM0VcXFwiKTtcXG59XFxuLnN3aXBlci1idXR0b24tbG9jayB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIG9wYWNpdHk7XFxuICAtby10cmFuc2l0aW9uOiAwLjNzIG9wYWNpdHk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIG9wYWNpdHk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLFxcbi5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXFxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uIHtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAwO1xcbn1cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWluIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcXG59XFxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXYge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xcbn1cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC42Nik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xcbn1cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQtbmV4dCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XFxufVxcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBvcGFjaXR5OiAwLjI7XFxufVxcbmJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG4uc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZDogIzAwN2FmZjtcXG59XFxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcXG59XFxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIG1hcmdpbjogNnB4IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogOHB4O1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyB0b3AsIDAuMnMgLXdlYmtpdC10cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uOiAwLjJzIHRvcCwgMC4ycyAtd2Via2l0LXRyYW5zZm9ybTtcXG4gIC1vLXRyYW5zaXRpb246IDAuMnMgdHJhbnNmb3JtLCAwLjJzIHRvcDtcXG4gIHRyYW5zaXRpb246IDAuMnMgdHJhbnNmb3JtLCAwLjJzIHRvcDtcXG4gIHRyYW5zaXRpb246IDAuMnMgdHJhbnNmb3JtLCAwLjJzIHRvcCwgMC4ycyAtd2Via2l0LXRyYW5zZm9ybTtcXG59XFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgbWFyZ2luOiAwIDRweDtcXG59XFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGxlZnQsIDAuMnMgLXdlYmtpdC10cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uOiAwLjJzIGxlZnQsIDAuMnMgLXdlYmtpdC10cmFuc2Zvcm07XFxuICAtby10cmFuc2l0aW9uOiAwLjJzIHRyYW5zZm9ybSwgMC4ycyBsZWZ0O1xcbiAgdHJhbnNpdGlvbjogMC4ycyB0cmFuc2Zvcm0sIDAuMnMgbGVmdDtcXG4gIHRyYW5zaXRpb246IDAuMnMgdHJhbnNmb3JtLCAwLjJzIGxlZnQsIDAuMnMgLXdlYmtpdC10cmFuc2Zvcm07XFxufVxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIHJpZ2h0LCAwLjJzIC13ZWJraXQtdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbjogMC4ycyByaWdodCwgMC4ycyAtd2Via2l0LXRyYW5zZm9ybTtcXG4gIC1vLXRyYW5zaXRpb246IDAuMnMgdHJhbnNmb3JtLCAwLjJzIHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogMC4ycyB0cmFuc2Zvcm0sIDAuMnMgcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiAwLjJzIHRyYW5zZm9ybSwgMC4ycyByaWdodCwgMC4ycyAtd2Via2l0LXRyYW5zZm9ybTtcXG59XFxuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3YWZmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IHRvcDtcXG59XFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhcixcXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSxcXG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciB7XFxuICB3aWR0aDogNHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcbn1cXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24td2hpdGUgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLnN3aXBlci1wYWdpbmF0aW9uLWJsYWNrIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxufVxcbi5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tYmxhY2sgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuLnN3aXBlci1wYWdpbmF0aW9uLWxvY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnN3aXBlci1zY3JvbGxiYXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXNjcm9sbGJhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxJTtcXG4gIGJvdHRvbTogM3B4O1xcbiAgei1pbmRleDogNTA7XFxuICBoZWlnaHQ6IDVweDtcXG4gIHdpZHRoOiA5OCU7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1zY3JvbGxiYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDNweDtcXG4gIHRvcDogMSU7XFxuICB6LWluZGV4OiA1MDtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDk4JTtcXG59XFxuLnN3aXBlci1zY3JvbGxiYXItZHJhZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG4uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZyB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbi5zd2lwZXItc2Nyb2xsYmFyLWxvY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnN3aXBlci16b29tLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gY2FudmFzLFxcbi5zd2lwZXItem9vbS1jb250YWluZXIgPiBpbWcsXFxuLnN3aXBlci16b29tLWNvbnRhaW5lciA+IHN2ZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5zd2lwZXItc2xpZGUtem9vbWVkIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLnN3aXBlci1sYXp5LXByZWxvYWRlciB7XFxuICB3aWR0aDogNDJweDtcXG4gIGhlaWdodDogNDJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xcbiAgbWFyZ2luLXRvcDogLTIxcHg7XFxuICB6LWluZGV4OiAxMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzd2lwZXItcHJlbG9hZGVyLXNwaW4gMXMgc3RlcHMoMTIsIGVuZCkgaW5maW5pdGU7XFxuICBhbmltYXRpb246IHN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBzdGVwcygxMiwgZW5kKSBpbmZpbml0ZTtcXG59XFxuLnN3aXBlci1sYXp5LXByZWxvYWRlcjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyMzZjNmM2YyclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLnN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZTphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxMjAlMjAxMjAnJTIweG1sbnMlM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJyUyMHhtbG5zJTNBeGxpbmslM0QnaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGxpbmsnJTNFJTNDZGVmcyUzRSUzQ2xpbmUlMjBpZCUzRCdsJyUyMHgxJTNEJzYwJyUyMHgyJTNEJzYwJyUyMHkxJTNEJzcnJTIweTIlM0QnMjcnJTIwc3Ryb2tlJTNEJyUyM2ZmZiclMjBzdHJva2Utd2lkdGglM0QnMTEnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qncm91bmQnJTJGJTNFJTNDJTJGZGVmcyUzRSUzQ2clM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMjcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSg2MCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoOTAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy4yNyclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDEyMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjI3JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMTUwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuMzcnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgxODAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy40NiclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDIxMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjU2JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMjQwJTIwNjAlMkM2MCknJTJGJTNFJTNDdXNlJTIweGxpbmslM0FocmVmJTNEJyUyM2wnJTIwb3BhY2l0eSUzRCcuNjYnJTIwdHJhbnNmb3JtJTNEJ3JvdGF0ZSgyNzAlMjA2MCUyQzYwKSclMkYlM0UlM0N1c2UlMjB4bGluayUzQWhyZWYlM0QnJTIzbCclMjBvcGFjaXR5JTNEJy43NSclMjB0cmFuc2Zvcm0lM0Qncm90YXRlKDMwMCUyMDYwJTJDNjApJyUyRiUzRSUzQ3VzZSUyMHhsaW5rJTNBaHJlZiUzRCclMjNsJyUyMG9wYWNpdHklM0QnLjg1JyUyMHRyYW5zZm9ybSUzRCdyb3RhdGUoMzMwJTIwNjAlMkM2MCknJTJGJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRVxcXCIpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc3dpcGVyLXByZWxvYWRlci1zcGluIHtcXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItbm90aWZpY2F0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAtMTAwMDtcXG59XFxuLnN3aXBlci1jb250YWluZXItZmFkZS5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSAuc3dpcGVyLXNsaWRlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxuICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG59XFxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXFxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuLnN3aXBlci1jb250YWluZXItY3ViZSB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItc2xpZGUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQsXFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLW5leHQgKyAuc3dpcGVyLXNsaWRlLFxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1wcmV2IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xcbiAgei1pbmRleDogMDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItY3ViZS1zaGFkb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDUwcHgpO1xcbiAgZmlsdGVyOiBibHVyKDUwcHgpO1xcbiAgei1pbmRleDogMDtcXG59XFxuLnN3aXBlci1jb250YWluZXItZmxpcCB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUgLnN3aXBlci1zbGlkZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCB7XFxuICB6LWluZGV4OiAwO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5zd2lwZXItY29udGFpbmVyLWNvdmVyZmxvdyAuc3dpcGVyLXdyYXBwZXIge1xcbiAgLW1zLXBlcnNwZWN0aXZlOiAxMjAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIi8qKlxuICogRG9tNyAyLjEuM1xuICogTWluaW1hbGlzdGljIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgRE9NIG1hbmlwdWxhdGlvbiwgd2l0aCBhIGpRdWVyeS1jb21wYXRpYmxlIEFQSVxuICogaHR0cDovL2ZyYW1ld29yazcuaW8vZG9jcy9kb20uaHRtbFxuICpcbiAqIENvcHlyaWdodCAyMDE5LCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICogVGhlIGlEYW5nZXJvLnVzXG4gKiBodHRwOi8vd3d3LmlkYW5nZXJvLnVzL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBGZWJydWFyeSAxMSwgMjAxOVxuICovXG5pbXBvcnQgeyBkb2N1bWVudCwgd2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5cbmNsYXNzIERvbTcge1xuICBjb25zdHJ1Y3RvcihhcnIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAvLyBDcmVhdGUgYXJyYXktbGlrZSBvYmplY3RcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc2VsZltpXSA9IGFycltpXTtcbiAgICB9XG4gICAgc2VsZi5sZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgIC8vIFJldHVybiBjb2xsZWN0aW9uIHdpdGggbWV0aG9kc1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBpID0gMDtcbiAgaWYgKHNlbGVjdG9yICYmICFjb250ZXh0KSB7XG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgfVxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIC8vIFN0cmluZ1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgZWxzO1xuICAgICAgbGV0IHRlbXBQYXJlbnQ7XG4gICAgICBjb25zdCBodG1sID0gc2VsZWN0b3IudHJpbSgpO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbC5pbmRleE9mKCc+JykgPj0gMCkge1xuICAgICAgICBsZXQgdG9DcmVhdGUgPSAnZGl2JztcbiAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPGxpJykgPT09IDApIHRvQ3JlYXRlID0gJ3VsJztcbiAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRkJykgPT09IDAgfHwgaHRtbC5pbmRleE9mKCc8dGgnKSA9PT0gMCkgdG9DcmVhdGUgPSAndHInO1xuICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGJvZHknKSA9PT0gMCkgdG9DcmVhdGUgPSAndGFibGUnO1xuICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHRvQ3JlYXRlID0gJ3NlbGVjdCc7XG4gICAgICAgIHRlbXBQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRvQ3JlYXRlKTtcbiAgICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGVtcFBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgYXJyLnB1c2godGVtcFBhcmVudC5jaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjb250ZXh0ICYmIHNlbGVjdG9yWzBdID09PSAnIycgJiYgIXNlbGVjdG9yLm1hdGNoKC9bIC48Pjp+XS8pKSB7XG4gICAgICAgICAgLy8gUHVyZSBJRCBzZWxlY3RvclxuICAgICAgICAgIGVscyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3Rvci50cmltKCkuc3BsaXQoJyMnKVsxXSldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyIHNlbGVjdG9yc1xuICAgICAgICAgIGVscyA9IChjb250ZXh0IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChlbHNbaV0pIGFyci5wdXNoKGVsc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yID09PSB3aW5kb3cgfHwgc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XG4gICAgICAvLyBOb2RlL2VsZW1lbnRcbiAgICAgIGFyci5wdXNoKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLmxlbmd0aCA+IDAgJiYgc2VsZWN0b3JbMF0ubm9kZVR5cGUpIHtcbiAgICAgIC8vIEFycmF5IG9mIGVsZW1lbnRzIG9yIGluc3RhbmNlIG9mIERvbVxuICAgICAgZm9yIChpID0gMDsgaSA8IHNlbGVjdG9yLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyci5wdXNoKHNlbGVjdG9yW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBEb203KGFycik7XG59XG5cbiQuZm4gPSBEb203LnByb3RvdHlwZTtcbiQuQ2xhc3MgPSBEb203O1xuJC5Eb203ID0gRG9tNztcblxuZnVuY3Rpb24gdW5pcXVlKGFycikge1xuICBjb25zdCB1bmlxdWVBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh1bmlxdWVBcnJheS5pbmRleE9mKGFycltpXSkgPT09IC0xKSB1bmlxdWVBcnJheS5wdXNoKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIHVuaXF1ZUFycmF5O1xufVxuZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKC4pL2csIChtYXRjaCwgZ3JvdXAxKSA9PiBncm91cDEudG9VcHBlckNhc2UoKSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICBlbHNlIGlmICh3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKSByZXR1cm4gd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbn1cbmZ1bmN0aW9uIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKSB7XG4gIGlmICh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICBlbHNlIGlmICh3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUpIHJldHVybiB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICByZXR1cm4gd2luZG93LmNsZWFyVGltZW91dChpZCk7XG59XG5cbi8vIENsYXNzZXMgYW5kIGF0dHJpYnV0ZXNcbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzW2pdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpc1tqXS5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB0aGlzW2pdLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXNbal0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzW2pdLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpIHRoaXNbal0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgaWYgKCF0aGlzWzBdKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0aGlzWzBdLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufVxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXNbal0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzW2pdLmNsYXNzTGlzdCAhPT0gJ3VuZGVmaW5lZCcpIHRoaXNbal0uY2xhc3NMaXN0LnRvZ2dsZShjbGFzc2VzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBhdHRyKGF0dHJzLCB2YWx1ZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXR0cnMgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gR2V0IGF0dHJcbiAgICBpZiAodGhpc1swXSkgcmV0dXJuIHRoaXNbMF0uZ2V0QXR0cmlidXRlKGF0dHJzKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gU2V0IGF0dHJzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyBTdHJpbmdcbiAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJzLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9iamVjdFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBmb3IgKGNvbnN0IGF0dHJOYW1lIGluIGF0dHJzKSB7XG4gICAgICAgIHRoaXNbaV1bYXR0ck5hbWVdID0gYXR0cnNbYXR0ck5hbWVdO1xuICAgICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cnNbYXR0ck5hbWVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIHJlbW92ZUF0dHIoYXR0cikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuZnVuY3Rpb24gcHJvcChwcm9wcywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBwcm9wXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdW3Byb3BzXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTZXQgcHJvcHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgICB0aGlzW2ldW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXVtwcm9wTmFtZV0gPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbmZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuICBsZXQgZWw7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwgPSB0aGlzWzBdO1xuICAgIC8vIEdldCB2YWx1ZVxuICAgIGlmIChlbCkge1xuICAgICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYgKGtleSBpbiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlKSkge1xuICAgICAgICByZXR1cm4gZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhS2V5ID0gZWwuZ2V0QXR0cmlidXRlKGBkYXRhLSR7a2V5fWApO1xuICAgICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFLZXk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gU2V0IHZhbHVlXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGVsID0gdGhpc1tpXTtcbiAgICBpZiAoIWVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgPSB7fTtcbiAgICBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHJlbW92ZURhdGEoa2V5KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsID0gdGhpc1tpXTtcbiAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0pIHtcbiAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IG51bGw7XG4gICAgICBkZWxldGUgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZGF0YXNldCgpIHtcbiAgY29uc3QgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCBkYXRhc2V0ID0ge307IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWYgKGVsLmRhdGFzZXQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgaW4gZWwuZGF0YXNldCkge1xuICAgICAgZGF0YXNldFtkYXRhS2V5XSA9IGVsLmRhdGFzZXRbZGF0YUtleV07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zdCBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcbiAgICAgIGlmIChhdHRyLm5hbWUuaW5kZXhPZignZGF0YS0nKSA+PSAwKSB7XG4gICAgICAgIGRhdGFzZXRbdG9DYW1lbENhc2UoYXR0ci5uYW1lLnNwbGl0KCdkYXRhLScpWzFdKV0gPSBhdHRyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YXNldCkge1xuICAgIGlmIChkYXRhc2V0W2tleV0gPT09ICdmYWxzZScpIGRhdGFzZXRba2V5XSA9IGZhbHNlO1xuICAgIGVsc2UgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ3RydWUnKSBkYXRhc2V0W2tleV0gPSB0cnVlO1xuICAgIGVsc2UgaWYgKHBhcnNlRmxvYXQoZGF0YXNldFtrZXldKSA9PT0gZGF0YXNldFtrZXldICogMSkgZGF0YXNldFtrZXldICo9IDE7XG4gIH1cbiAgcmV0dXJuIGRhdGFzZXQ7XG59XG5mdW5jdGlvbiB2YWwodmFsdWUpIHtcbiAgY29uc3QgZG9tID0gdGhpcztcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZG9tWzBdKSB7XG4gICAgICBpZiAoZG9tWzBdLm11bHRpcGxlICYmIGRvbVswXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21bMF0uc2VsZWN0ZWRPcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goZG9tWzBdLnNlbGVjdGVkT3B0aW9uc1tpXS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBkb21bMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsID0gZG9tW2ldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBlbC5tdWx0aXBsZSAmJiBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbC5vcHRpb25zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGVsLm9wdGlvbnNbal0uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKGVsLm9wdGlvbnNbal0udmFsdWUpID49IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBkb207XG59XG4vLyBUcmFuc2Zvcm1zXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxTdHlsZSA9IHRoaXNbaV0uc3R5bGU7XG4gICAgZWxTdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgZWxTdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gIGlmICh0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgZHVyYXRpb24gPSBgJHtkdXJhdGlvbn1tc2A7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbFN0eWxlID0gdGhpc1tpXS5zdHlsZTtcbiAgICBlbFN0eWxlLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIGVsU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4vLyBFdmVudHNcbmZ1bmN0aW9uIG9uKC4uLmFyZ3MpIHtcbiAgbGV0IFtldmVudFR5cGUsIHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBbZXZlbnRUeXBlLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBjb25zdCBldmVudERhdGEgPSBlLnRhcmdldC5kb203RXZlbnREYXRhIHx8IFtdO1xuICAgIGlmIChldmVudERhdGEuaW5kZXhPZihlKSA8IDApIHtcbiAgICAgIGV2ZW50RGF0YS51bnNoaWZ0KGUpO1xuICAgIH1cbiAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpO1xuICAgIGVsc2Uge1xuICAgICAgY29uc3QgcGFyZW50cyA9ICQodGFyZ2V0KS5wYXJlbnRzKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcGFyZW50cy5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICBpZiAoJChwYXJlbnRzW2tdKS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmFwcGx5KHBhcmVudHNba10sIGV2ZW50RGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUV2ZW50KGUpIHtcbiAgICBjb25zdCBldmVudERhdGEgPSBlICYmIGUudGFyZ2V0ID8gZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXSA6IFtdO1xuICAgIGlmIChldmVudERhdGEuaW5kZXhPZihlKSA8IDApIHtcbiAgICAgIGV2ZW50RGF0YS51bnNoaWZ0KGUpO1xuICAgIH1cbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudERhdGEpO1xuICB9XG4gIGNvbnN0IGV2ZW50cyA9IGV2ZW50VHlwZS5zcGxpdCgnICcpO1xuICBsZXQgajtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgIGlmICghZWwuZG9tN0xpc3RlbmVycykgZWwuZG9tN0xpc3RlbmVycyA9IHt9O1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdKSBlbC5kb203TGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICBlbC5kb203TGlzdGVuZXJzW2V2ZW50XS5wdXNoKHtcbiAgICAgICAgICBsaXN0ZW5lcixcbiAgICAgICAgICBwcm94eUxpc3RlbmVyOiBoYW5kbGVFdmVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGl2ZSBldmVudHNcbiAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnMpIGVsLmRvbTdMaXZlTGlzdGVuZXJzID0ge307XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdKSBlbC5kb203TGl2ZUxpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdLnB1c2goe1xuICAgICAgICAgIGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUxpdmVFdmVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZUxpdmVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gb2ZmKC4uLmFyZ3MpIHtcbiAgbGV0IFtldmVudFR5cGUsIHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBbZXZlbnRUeXBlLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGV2ZW50cyA9IGV2ZW50VHlwZS5zcGxpdCgnICcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzW2pdO1xuICAgICAgbGV0IGhhbmRsZXJzO1xuICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuICAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBrID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgayA+PSAwOyBrIC09IDEpIHtcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnNba107XG4gICAgICAgICAgaWYgKGxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyLmRvbTdwcm94eSAmJiBoYW5kbGVyLmxpc3RlbmVyLmRvbTdwcm94eSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gb25jZSguLi5hcmdzKSB7XG4gIGNvbnN0IGRvbSA9IHRoaXM7XG4gIGxldCBbZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmVdID0gYXJncztcbiAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgW2V2ZW50TmFtZSwgbGlzdGVuZXIsIGNhcHR1cmVdID0gYXJncztcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuICBmdW5jdGlvbiBvbmNlSGFuZGxlciguLi5ldmVudEFyZ3MpIHtcbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudEFyZ3MpO1xuICAgIGRvbS5vZmYoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuICAgIGlmIChvbmNlSGFuZGxlci5kb203cHJveHkpIHtcbiAgICAgIGRlbGV0ZSBvbmNlSGFuZGxlci5kb203cHJveHk7XG4gICAgfVxuICB9XG4gIG9uY2VIYW5kbGVyLmRvbTdwcm94eSA9IGxpc3RlbmVyO1xuICByZXR1cm4gZG9tLm9uKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIG9uY2VIYW5kbGVyLCBjYXB0dXJlKTtcbn1cbmZ1bmN0aW9uIHRyaWdnZXIoLi4uYXJncykge1xuICBjb25zdCBldmVudHMgPSBhcmdzWzBdLnNwbGl0KCcgJyk7XG4gIGNvbnN0IGV2ZW50RGF0YSA9IGFyZ3NbMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXNbal07XG4gICAgICBsZXQgZXZ0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgIGRldGFpbDogZXZlbnREYXRhLFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldnQuaW5pdEV2ZW50KGV2ZW50LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgZXZ0LmRldGFpbCA9IGV2ZW50RGF0YTtcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IGFyZ3MuZmlsdGVyKChkYXRhLCBkYXRhSW5kZXgpID0+IGRhdGFJbmRleCA+IDApO1xuICAgICAgZWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IFtdO1xuICAgICAgZGVsZXRlIGVsLmRvbTdFdmVudERhdGE7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChjYWxsYmFjaykge1xuICBjb25zdCBldmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCddO1xuICBjb25zdCBkb20gPSB0aGlzO1xuICBsZXQgaTtcbiAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICAvKiBqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGRvbS5vZmYoZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBkb20ub24oZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGFuaW1hdGlvbkVuZChjYWxsYmFjaykge1xuICBjb25zdCBldmVudHMgPSBbJ3dlYmtpdEFuaW1hdGlvbkVuZCcsICdhbmltYXRpb25lbmQnXTtcbiAgY29uc3QgZG9tID0gdGhpcztcbiAgbGV0IGk7XG4gIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBkb20ub2ZmKGV2ZW50c1tpXSwgZmlyZUNhbGxCYWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZG9tLm9uKGV2ZW50c1tpXSwgZmlyZUNhbGxCYWNrKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4vLyBTaXppbmcvU3R5bGVzXG5mdW5jdGlvbiB3aWR0aCgpIHtcbiAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnd2lkdGgnKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIG91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbnMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zdCBzdHlsZXMgPSB0aGlzLnN0eWxlcygpO1xuICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGggKyBwYXJzZUZsb2F0KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tbGVmdCcpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBoZWlnaHQoKSB7XG4gIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuY3NzKCdoZWlnaHQnKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIG91dGVySGVpZ2h0KGluY2x1ZGVNYXJnaW5zKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc3Qgc3R5bGVzID0gdGhpcy5zdHlsZXMoKTtcbiAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodCArIHBhcnNlRmxvYXQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tYm90dG9tJykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBvZmZzZXQoKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBlbCA9IHRoaXNbMF07XG4gICAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGVsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gZWwgPT09IHdpbmRvdyA/IHdpbmRvdy5zY3JvbGxZIDogZWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IChib3gudG9wICsgc2Nyb2xsVG9wKSAtIGNsaWVudFRvcCxcbiAgICAgIGxlZnQ6IChib3gubGVmdCArIHNjcm9sbExlZnQpIC0gY2xpZW50TGVmdCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBoaWRlKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBzaG93KCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbCA9IHRoaXNbaV07XG4gICAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAvLyBTdGlsbCBub3QgdmlzaWJsZVxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gc3R5bGVzKCkge1xuICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpO1xuICByZXR1cm4ge307XG59XG5mdW5jdGlvbiBjc3MocHJvcHMsIHZhbHVlKSB7XG4gIGxldCBpO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpc1tpXS5zdHlsZVtwcm9wc10gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIERvbSBtYW5pcHVsYXRpb25cbmZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhcnIucHVzaCh0aGlzW2ldKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuLy8gSXRlcmF0ZSBvdmVyIHRoZSBjb2xsZWN0aW9uIHBhc3NpbmcgZWxlbWVudHMgdG8gYGNhbGxiYWNrYFxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICAvLyBEb24ndCBib3RoZXIgY29udGludWluZyB3aXRob3V0IGEgY2FsbGJhY2tcbiAgaWYgKCFjYWxsYmFjaykgcmV0dXJuIHRoaXM7XG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgY3VycmVudCBjb2xsZWN0aW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIElmIHRoZSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXG4gICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc1tpXSwgaSwgdGhpc1tpXSkgPT09IGZhbHNlKSB7XG4gICAgICAvLyBFbmQgdGhlIGxvb3AgZWFybHlcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuICAvLyBSZXR1cm4gYHRoaXNgIHRvIGFsbG93IGNoYWluZWQgRE9NIG9wZXJhdGlvbnNcbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gIC8vIERvbid0IGJvdGhlciBjb250aW51aW5nIHdpdGhvdXQgYSBjYWxsYmFja1xuICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gdGhpcztcbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBjdXJyZW50IGNvbGxlY3Rpb25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gSWYgdGhlIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzW2ldLCB0aGlzW2ldLCBpKSA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIEVuZCB0aGUgbG9vcCBlYXJseVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG4gIC8vIFJldHVybiBgdGhpc2AgdG8gYWxsb3cgY2hhaW5lZCBET00gb3BlcmF0aW9uc1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGZpbHRlcihjYWxsYmFjaykge1xuICBjb25zdCBtYXRjaGVkSXRlbXMgPSBbXTtcbiAgY29uc3QgZG9tID0gdGhpcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb20ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoY2FsbGJhY2suY2FsbChkb21baV0sIGksIGRvbVtpXSkpIG1hdGNoZWRJdGVtcy5wdXNoKGRvbVtpXSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBEb203KG1hdGNoZWRJdGVtcyk7XG59XG5mdW5jdGlvbiBtYXAoY2FsbGJhY2spIHtcbiAgY29uc3QgbW9kaWZpZWRJdGVtcyA9IFtdO1xuICBjb25zdCBkb20gPSB0aGlzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG1vZGlmaWVkSXRlbXMucHVzaChjYWxsYmFjay5jYWxsKGRvbVtpXSwgaSwgZG9tW2ldKSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBEb203KG1vZGlmaWVkSXRlbXMpO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5mdW5jdGlvbiBodG1sKGh0bWwpIHtcbiAgaWYgKHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIHRleHQodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgIHJldHVybiB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGlzKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgbGV0IGNvbXBhcmVXaXRoO1xuICBsZXQgaTtcbiAgaWYgKCFlbCB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVsLm1hdGNoZXMpIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICBlbHNlIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IgPT09IGRvY3VtZW50KSByZXR1cm4gZWwgPT09IGRvY3VtZW50O1xuICBlbHNlIGlmIChzZWxlY3RvciA9PT0gd2luZG93KSByZXR1cm4gZWwgPT09IHdpbmRvdztcblxuICBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaW5kZXhPZihlbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpc1tpXSA9PT0gZWwpIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIGluZGV4KCkge1xuICBsZXQgY2hpbGQgPSB0aGlzWzBdO1xuICBsZXQgaTtcbiAgaWYgKGNoaWxkKSB7XG4gICAgaSA9IDA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgd2hpbGUgKChjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgIT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgaSArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5mdW5jdGlvbiBlcShpbmRleCkge1xuICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXM7XG4gIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICBsZXQgcmV0dXJuSW5kZXg7XG4gIGlmIChpbmRleCA+IGxlbmd0aCAtIDEpIHtcbiAgICByZXR1cm4gbmV3IERvbTcoW10pO1xuICB9XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm5JbmRleCA9IGxlbmd0aCArIGluZGV4O1xuICAgIGlmIChyZXR1cm5JbmRleCA8IDApIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgcmV0dXJuIG5ldyBEb203KFt0aGlzW3JldHVybkluZGV4XV0pO1xuICB9XG4gIHJldHVybiBuZXcgRG9tNyhbdGhpc1tpbmRleF1dKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZCguLi5hcmdzKSB7XG4gIGxldCBuZXdDaGlsZDtcblxuICBmb3IgKGxldCBrID0gMDsgayA8IGFyZ3MubGVuZ3RoOyBrICs9IDEpIHtcbiAgICBuZXdDaGlsZCA9IGFyZ3Nba107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG4gICAgICAgIHdoaWxlICh0ZW1wRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKHRlbXBEaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkW2pdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIGFwcGVuZFRvKHBhcmVudCkge1xuICAkKHBhcmVudCkuYXBwZW5kKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHByZXBlbmQobmV3Q2hpbGQpIHtcbiAgbGV0IGk7XG4gIGxldCBqO1xuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIHByZXBlbmRUbyhwYXJlbnQpIHtcbiAgJChwYXJlbnQpLnByZXBlbmQodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGJlZm9yZSA9ICQoc2VsZWN0b3IpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYmVmb3JlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmVmb3JlWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGJlZm9yZVswXSk7XG4gICAgfSBlbHNlIGlmIChiZWZvcmUubGVuZ3RoID4gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBiZWZvcmUubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgYmVmb3JlW2pdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0uY2xvbmVOb2RlKHRydWUpLCBiZWZvcmVbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoc2VsZWN0b3IpIHtcbiAgY29uc3QgYWZ0ZXIgPSAkKHNlbGVjdG9yKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSBpZiAoYWZ0ZXIubGVuZ3RoID4gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhZnRlcltqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYWZ0ZXJbal0ubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbmV4dChzZWxlY3Rvcikge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgJCh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRG9tNyhbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKSByZXR1cm4gbmV3IERvbTcoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgfVxuICByZXR1cm4gbmV3IERvbTcoW10pO1xufVxuZnVuY3Rpb24gbmV4dEFsbChzZWxlY3Rvcikge1xuICBjb25zdCBuZXh0RWxzID0gW107XG4gIGxldCBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gIHdoaWxlIChlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBjb25zdCBuZXh0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChuZXh0KS5pcyhzZWxlY3RvcikpIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICB9IGVsc2UgbmV4dEVscy5wdXNoKG5leHQpO1xuICAgIGVsID0gbmV4dDtcbiAgfVxuICByZXR1cm4gbmV3IERvbTcobmV4dEVscyk7XG59XG5mdW5jdGlvbiBwcmV2KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBlbCA9IHRoaXNbMF07XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZyAmJiAkKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gbmV3IERvbTcoW2VsLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybiBuZXcgRG9tNyhbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiBuZXcgRG9tNyhbXSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBEb203KFtdKTtcbn1cbmZ1bmN0aW9uIHByZXZBbGwoc2VsZWN0b3IpIHtcbiAgY29uc3QgcHJldkVscyA9IFtdO1xuICBsZXQgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gbmV3IERvbTcoW10pO1xuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChwcmV2KS5pcyhzZWxlY3RvcikpIHByZXZFbHMucHVzaChwcmV2KTtcbiAgICB9IGVsc2UgcHJldkVscy5wdXNoKHByZXYpO1xuICAgIGVsID0gcHJldjtcbiAgfVxuICByZXR1cm4gbmV3IERvbTcocHJldkVscyk7XG59XG5mdW5jdGlvbiBzaWJsaW5ncyhzZWxlY3Rvcikge1xuICByZXR1cm4gdGhpcy5uZXh0QWxsKHNlbGVjdG9yKS5hZGQodGhpcy5wcmV2QWxsKHNlbGVjdG9yKSk7XG59XG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgY29uc3QgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJCh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuICQodW5pcXVlKHBhcmVudHMpKTtcbn1cbmZ1bmN0aW9uIHBhcmVudHMoc2VsZWN0b3IpIHtcbiAgY29uc3QgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQocGFyZW50KS5pcyhzZWxlY3RvcikpIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICQodW5pcXVlKHBhcmVudHMpKTtcbn1cbmZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgbGV0IGNsb3Nlc3QgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBEb203KFtdKTtcbiAgfVxuICBpZiAoIWNsb3Nlc3QuaXMoc2VsZWN0b3IpKSB7XG4gICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gIH1cbiAgcmV0dXJuIGNsb3Nlc3Q7XG59XG5mdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZvdW5kRWxlbWVudHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZm91bmQgPSB0aGlzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZm91bmQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGZvdW5kRWxlbWVudHMucHVzaChmb3VuZFtqXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgRG9tNyhmb3VuZEVsZW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGNoaWxkcmVuKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXNbaV0uY2hpbGROb2RlcztcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICBpZiAoY2hpbGROb2Rlc1tqXS5ub2RlVHlwZSA9PT0gMSkgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2Rlc1tqXS5ub2RlVHlwZSA9PT0gMSAmJiAkKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IERvbTcodW5pcXVlKGNoaWxkcmVuKSk7XG59XG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUpIHRoaXNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2ldKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgcmV0dXJuIHRoaXMucmVtb3ZlKCk7XG59XG5mdW5jdGlvbiBhZGQoLi4uYXJncykge1xuICBjb25zdCBkb20gPSB0aGlzO1xuICBsZXQgaTtcbiAgbGV0IGo7XG4gIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdG9BZGQgPSAkKGFyZ3NbaV0pO1xuICAgIGZvciAoaiA9IDA7IGogPCB0b0FkZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgZG9tW2RvbS5sZW5ndGhdID0gdG9BZGRbal07XG4gICAgICBkb20ubGVuZ3RoICs9IDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwuY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsLnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUbyguLi5hcmdzKSB7XG4gIGxldCBbbGVmdCwgdG9wLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFja10gPSBhcmdzO1xuICBpZiAoYXJncy5sZW5ndGggPT09IDQgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gZWFzaW5nO1xuICAgIFtsZWZ0LCB0b3AsIGR1cmF0aW9uLCBjYWxsYmFjaywgZWFzaW5nXSA9IGFyZ3M7XG4gIH1cbiAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSBlYXNpbmcgPSAnc3dpbmcnO1xuXG4gIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXM7XG4gICAgbGV0IGN1cnJlbnRUb3A7XG4gICAgbGV0IGN1cnJlbnRMZWZ0O1xuICAgIGxldCBtYXhUb3A7XG4gICAgbGV0IG1heExlZnQ7XG4gICAgbGV0IG5ld1RvcDtcbiAgICBsZXQgbmV3TGVmdDtcbiAgICBsZXQgc2Nyb2xsVG9wOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgbGV0IHNjcm9sbExlZnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBsZXQgYW5pbWF0ZVRvcCA9IHRvcCA+IDAgfHwgdG9wID09PSAwO1xuICAgIGxldCBhbmltYXRlTGVmdCA9IGxlZnQgPiAwIHx8IGxlZnQgPT09IDA7XG4gICAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlYXNpbmcgPSAnc3dpbmcnO1xuICAgIH1cbiAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgY3VycmVudFRvcCA9IGVsLnNjcm9sbFRvcDtcbiAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYW5pbWF0ZUxlZnQpIHtcbiAgICAgIGN1cnJlbnRMZWZ0ID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghZHVyYXRpb24pIHJldHVybjtcbiAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgbWF4VG9wID0gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3VG9wID0gTWF0aC5tYXgoTWF0aC5taW4odG9wLCBtYXhUb3ApLCAwKTtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGVMZWZ0KSB7XG4gICAgICBtYXhMZWZ0ID0gZWwuc2Nyb2xsV2lkdGggLSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgIG5ld0xlZnQgPSBNYXRoLm1heChNYXRoLm1pbihsZWZ0LCBtYXhMZWZ0KSwgMCk7XG4gICAgfVxuICAgIGxldCBzdGFydFRpbWUgPSBudWxsO1xuICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA9PT0gY3VycmVudFRvcCkgYW5pbWF0ZVRvcCA9IGZhbHNlO1xuICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID09PSBjdXJyZW50TGVmdCkgYW5pbWF0ZUxlZnQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiByZW5kZXIodGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICB9XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICBjb25zdCBlYXNlUHJvZ3Jlc3MgPSBlYXNpbmcgPT09ICdsaW5lYXInID8gcHJvZ3Jlc3MgOiAoMC41IC0gKE1hdGguY29zKHByb2dyZXNzICogTWF0aC5QSSkgLyAyKSk7XG4gICAgICBsZXQgZG9uZTtcbiAgICAgIGlmIChhbmltYXRlVG9wKSBzY3JvbGxUb3AgPSBjdXJyZW50VG9wICsgKGVhc2VQcm9ncmVzcyAqIChuZXdUb3AgLSBjdXJyZW50VG9wKSk7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIHNjcm9sbExlZnQgPSBjdXJyZW50TGVmdCArIChlYXNlUHJvZ3Jlc3MgKiAobmV3TGVmdCAtIGN1cnJlbnRMZWZ0KSk7XG4gICAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPiBjdXJyZW50VG9wICYmIHNjcm9sbFRvcCA+PSBuZXdUb3ApIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA8IGN1cnJlbnRUb3AgJiYgc2Nyb2xsVG9wIDw9IG5ld1RvcCkge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBuZXdUb3A7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPiBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0ID49IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPCBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0IDw9IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhbmltYXRlVG9wKSBlbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIGVsLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9KTtcbn1cbi8vIHNjcm9sbFRvcCh0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG5mdW5jdGlvbiBzY3JvbGxUb3AoLi4uYXJncykge1xuICBsZXQgW3RvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2tdID0gYXJncztcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAzICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBbdG9wLCBkdXJhdGlvbiwgY2FsbGJhY2ssIGVhc2luZ10gPSBhcmdzO1xuICB9XG4gIGNvbnN0IGRvbSA9IHRoaXM7XG4gIGlmICh0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGRvbS5zY3JvbGxUbyh1bmRlZmluZWQsIHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gc2Nyb2xsTGVmdCguLi5hcmdzKSB7XG4gIGxldCBbbGVmdCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2tdID0gYXJncztcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAzICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBbbGVmdCwgZHVyYXRpb24sIGNhbGxiYWNrLCBlYXNpbmddID0gYXJncztcbiAgfVxuICBjb25zdCBkb20gPSB0aGlzO1xuICBpZiAodHlwZW9mIGxlZnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGRvbS5sZW5ndGggPiAwKSByZXR1cm4gZG9tWzBdLnNjcm9sbExlZnQ7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGRvbS5zY3JvbGxUbyhsZWZ0LCB1bmRlZmluZWQsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZShpbml0aWFsUHJvcHMsIGluaXRpYWxQYXJhbXMpIHtcbiAgY29uc3QgZWxzID0gdGhpcztcbiAgY29uc3QgYSA9IHtcbiAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFByb3BzKSxcbiAgICBwYXJhbXM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIGVhc2luZzogJ3N3aW5nJywgLy8gb3IgJ2xpbmVhcidcbiAgICAgIC8qIENhbGxiYWNrc1xuICAgICAgYmVnaW4oZWxlbWVudHMpXG4gICAgICBjb21wbGV0ZShlbGVtZW50cylcbiAgICAgIHByb2dyZXNzKGVsZW1lbnRzLCBjb21wbGV0ZSwgcmVtYWluaW5nLCBzdGFydCwgdHdlZW5WYWx1ZSlcbiAgICAgICovXG4gICAgfSwgaW5pdGlhbFBhcmFtcyksXG5cbiAgICBlbGVtZW50czogZWxzLFxuICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgcXVlOiBbXSxcblxuICAgIGVhc2luZ1Byb2dyZXNzKGVhc2luZywgcHJvZ3Jlc3MpIHtcbiAgICAgIGlmIChlYXNpbmcgPT09ICdzd2luZycpIHtcbiAgICAgICAgcmV0dXJuIDAuNSAtIChNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMik7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZWFzaW5nKHByb2dyZXNzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9LFxuICAgIHN0b3AoKSB7XG4gICAgICBpZiAoYS5mcmFtZUlkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGEuZnJhbWVJZCk7XG4gICAgICB9XG4gICAgICBhLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgYS5lbGVtZW50cy5lYWNoKChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsO1xuICAgICAgICBkZWxldGUgZWxlbWVudC5kb203QW5pbWF0ZUluc3RhbmNlO1xuICAgICAgfSk7XG4gICAgICBhLnF1ZSA9IFtdO1xuICAgIH0sXG4gICAgZG9uZShjb21wbGV0ZSkge1xuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGNvbXBsZXRlKSBjb21wbGV0ZShlbHMpO1xuICAgICAgaWYgKGEucXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcXVlID0gYS5xdWUuc2hpZnQoKTtcbiAgICAgICAgYS5hbmltYXRlKHF1ZVswXSwgcXVlWzFdKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFuaW1hdGUocHJvcHMsIHBhcmFtcykge1xuICAgICAgaWYgKGEuYW5pbWF0aW5nKSB7XG4gICAgICAgIGEucXVlLnB1c2goW3Byb3BzLCBwYXJhbXNdKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gICAgICAvLyBEZWZpbmUgJiBDYWNoZSBJbml0aWFscyAmIFVuaXRzXG4gICAgICBhLmVsZW1lbnRzLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGlhbEZ1bGxWYWx1ZTtcbiAgICAgICAgbGV0IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgbGV0IHVuaXQ7XG4gICAgICAgIGxldCBmaW5hbFZhbHVlO1xuICAgICAgICBsZXQgZmluYWxGdWxsVmFsdWU7XG5cbiAgICAgICAgaWYgKCFlbC5kb203QW5pbWF0ZUluc3RhbmNlKSBhLmVsZW1lbnRzW2luZGV4XS5kb203QW5pbWF0ZUluc3RhbmNlID0gYTtcblxuICAgICAgICBlbGVtZW50c1tpbmRleF0gPSB7XG4gICAgICAgICAgY29udGFpbmVyOiBlbCxcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICBpbml0aWFsRnVsbFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcCkucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICAgICAgaW5pdGlhbFZhbHVlID0gcGFyc2VGbG9hdChpbml0aWFsRnVsbFZhbHVlKTtcbiAgICAgICAgICB1bml0ID0gaW5pdGlhbEZ1bGxWYWx1ZS5yZXBsYWNlKGluaXRpYWxWYWx1ZSwgJycpO1xuICAgICAgICAgIGZpbmFsVmFsdWUgPSBwYXJzZUZsb2F0KHByb3BzW3Byb3BdKTtcbiAgICAgICAgICBmaW5hbEZ1bGxWYWx1ZSA9IHByb3BzW3Byb3BdICsgdW5pdDtcbiAgICAgICAgICBlbGVtZW50c1tpbmRleF1bcHJvcF0gPSB7XG4gICAgICAgICAgICBpbml0aWFsRnVsbFZhbHVlLFxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgdW5pdCxcbiAgICAgICAgICAgIGZpbmFsVmFsdWUsXG4gICAgICAgICAgICBmaW5hbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGxldCBzdGFydFRpbWUgPSBudWxsO1xuICAgICAgbGV0IHRpbWU7XG4gICAgICBsZXQgZWxlbWVudHNEb25lID0gMDtcbiAgICAgIGxldCBwcm9wc0RvbmUgPSAwO1xuICAgICAgbGV0IGRvbmU7XG4gICAgICBsZXQgYmVnYW4gPSBmYWxzZTtcblxuICAgICAgYS5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IHByb2dyZXNzO1xuICAgICAgICBsZXQgZWFzZVByb2dyZXNzO1xuICAgICAgICAvLyBsZXQgZWw7XG4gICAgICAgIGlmICghYmVnYW4pIHtcbiAgICAgICAgICBiZWdhbiA9IHRydWU7XG4gICAgICAgICAgaWYgKHBhcmFtcy5iZWdpbikgcGFyYW1zLmJlZ2luKGVscyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzcykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIHBhcmFtcy5wcm9ncmVzcyhlbHMsIE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIHBhcmFtcy5kdXJhdGlvbiwgMSksIDApLCAoKHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbikgLSB0aW1lIDwgMCA/IDAgOiAoc3RhcnRUaW1lICsgcGFyYW1zLmR1cmF0aW9uKSAtIHRpbWUpLCBzdGFydFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsID0gZWxlbWVudDtcbiAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgIGlmIChkb25lIHx8IGVsLmRvbmUpIHJldHVybjtcbiAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICAgICAgICBlYXNlUHJvZ3Jlc3MgPSBhLmVhc2luZ1Byb2dyZXNzKHBhcmFtcy5lYXNpbmcsIHByb2dyZXNzKTtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5pdGlhbFZhbHVlLCBmaW5hbFZhbHVlLCB1bml0IH0gPSBlbFtwcm9wXTtcbiAgICAgICAgICAgIGVsW3Byb3BdLmN1cnJlbnRWYWx1ZSA9IGluaXRpYWxWYWx1ZSArIChlYXNlUHJvZ3Jlc3MgKiAoZmluYWxWYWx1ZSAtIGluaXRpYWxWYWx1ZSkpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gZWxbcHJvcF0uY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChmaW5hbFZhbHVlID4gaW5pdGlhbFZhbHVlICYmIGN1cnJlbnRWYWx1ZSA+PSBmaW5hbFZhbHVlKSB8fFxuICAgICAgICAgICAgICAoZmluYWxWYWx1ZSA8IGluaXRpYWxWYWx1ZSAmJiBjdXJyZW50VmFsdWUgPD0gZmluYWxWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgZWwuY29udGFpbmVyLnN0eWxlW3Byb3BdID0gZmluYWxWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgICAgIHByb3BzRG9uZSArPSAxO1xuICAgICAgICAgICAgICBpZiAocHJvcHNEb25lID09PSBPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZWwuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNEb25lICs9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzRG9uZSA9PT0gZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgIGEuZG9uZShwYXJhbXMuY29tcGxldGUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbC5jb250YWluZXIuc3R5bGVbcHJvcF0gPSBjdXJyZW50VmFsdWUgKyB1bml0O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICAgICAgLy8gVGhlbiBjYWxsXG4gICAgICAgIGEuZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgfVxuICAgICAgYS5mcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICByZXR1cm4gYTtcbiAgICB9LFxuICB9O1xuXG4gIGlmIChhLmVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBlbHM7XG4gIH1cblxuICBsZXQgYW5pbWF0ZUluc3RhbmNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBhbmltYXRlSW5zdGFuY2UgPSBhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgfSBlbHNlIGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cbiAgaWYgKCFhbmltYXRlSW5zdGFuY2UpIHtcbiAgICBhbmltYXRlSW5zdGFuY2UgPSBhO1xuICB9XG5cbiAgaWYgKGluaXRpYWxQcm9wcyA9PT0gJ3N0b3AnKSB7XG4gICAgYW5pbWF0ZUluc3RhbmNlLnN0b3AoKTtcbiAgfSBlbHNlIHtcbiAgICBhbmltYXRlSW5zdGFuY2UuYW5pbWF0ZShhLnByb3BzLCBhLnBhcmFtcyk7XG4gIH1cblxuICByZXR1cm4gZWxzO1xufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuICBjb25zdCBlbHMgPSB0aGlzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChlbHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSkge1xuICAgICAgZWxzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2Uuc3RvcCgpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBub1RyaWdnZXIgPSAoJ3Jlc2l6ZSBzY3JvbGwnKS5zcGxpdCgnICcpO1xuZnVuY3Rpb24gZXZlbnRTaG9ydGN1dChuYW1lLCAuLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChub1RyaWdnZXIuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgaWYgKG5hbWUgaW4gdGhpc1tpXSkgdGhpc1tpXVtuYW1lXSgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAkKHRoaXNbaV0pLnRyaWdnZXIobmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgcmV0dXJuIHRoaXMub24obmFtZSwgLi4uYXJncyk7XG59XG5cbmZ1bmN0aW9uIGNsaWNrKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGV2ZW50U2hvcnRjdXQuYmluZCh0aGlzKSgnY2xpY2snLCAuLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIGJsdXIoLi4uYXJncykge1xuICByZXR1cm4gZXZlbnRTaG9ydGN1dC5iaW5kKHRoaXMpKCdibHVyJywgLi4uYXJncyk7XG59XG5mdW5jdGlvbiBmb2N1cyguLi5hcmdzKSB7XG4gIHJldHVybiBldmVudFNob3J0Y3V0LmJpbmQodGhpcykoJ2ZvY3VzJywgLi4uYXJncyk7XG59XG5mdW5jdGlvbiBmb2N1c2luKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGV2ZW50U2hvcnRjdXQuYmluZCh0aGlzKSgnZm9jdXNpbicsIC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24gZm9jdXNvdXQoLi4uYXJncykge1xuICByZXR1cm4gZXZlbnRTaG9ydGN1dC5iaW5kKHRoaXMpKCdmb2N1c291dCcsIC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24ga2V5dXAoLi4uYXJncykge1xuICByZXR1cm4gZXZlbnRTaG9ydGN1dC5iaW5kKHRoaXMpKCdrZXl1cCcsIC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24ga2V5ZG93biguLi5hcmdzKSB7XG4gIHJldHVybiBldmVudFNob3J0Y3V0LmJpbmQodGhpcykoJ2tleWRvd24nLCAuLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIGtleXByZXNzKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGV2ZW50U2hvcnRjdXQuYmluZCh0aGlzKSgna2V5cHJlc3MnLCAuLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIHN1Ym1pdCguLi5hcmdzKSB7XG4gIHJldHVybiBldmVudFNob3J0Y3V0LmJpbmQodGhpcykoJ3N1Ym1pdCcsIC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24gY2hhbmdlKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGV2ZW50U2hvcnRjdXQuYmluZCh0aGlzKSgnY2hhbmdlJywgLi4uYXJncyk7XG59XG5mdW5jdGlvbiBtb3VzZWRvd24oLi4uYXJncykge1xuICByZXR1cm4gZXZlbnRTaG9ydGN1dC5iaW5kKHRoaXMpKCdtb3VzZWRvd24nLCAuLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIG1vdXNlbW92ZSguLi5hcmdzKSB7XG4gIHJldHVybiBldmVudFNob3J0Y3V0LmJpbmQodGhpcykoJ21vdXNlbW92ZScsIC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24gbW91c2V1cCguLi5hcmdzKSB7XG4gIHJldHVybiBldmVudFNob3J0Y3V0LmJpbmQodGhpcykoJ21vdXNldXAnLCAuLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIG1vdXNlZW50ZXIoLi4uYXJncykge1xuICByZXR1cm4gZXZlbnRTaG9ydGN1dC5iaW5kKHRoaXMpKCdtb3VzZWVudGVyJywgLi4uYXJncyk7XG59XG5mdW5jdGlvbiBtb3VzZWxlYXZlKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGV2ZW50U2hvcnRjdXQuYmluZCh0aGlzKSgnbW91c2VsZWF2ZScsIC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24gbW91c2VvdXQoLi4uYXJncykge1xuICByZXR1cm4gZXZlbnRTaG9ydGN1dC5iaW5kKHRoaXMpKCdtb3VzZW91dCcsIC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24gbW91c2VvdmVyKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGV2ZW50U2hvcnRjdXQuYmluZCh0aGlzKSgnbW91c2VvdmVyJywgLi4uYXJncyk7XG59XG5mdW5jdGlvbiB0b3VjaHN0YXJ0KC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGV2ZW50U2hvcnRjdXQuYmluZCh0aGlzKSgndG91Y2hzdGFydCcsIC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24gdG91Y2hlbmQoLi4uYXJncykge1xuICByZXR1cm4gZXZlbnRTaG9ydGN1dC5iaW5kKHRoaXMpKCd0b3VjaGVuZCcsIC4uLmFyZ3MpO1xufVxuZnVuY3Rpb24gdG91Y2htb3ZlKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGV2ZW50U2hvcnRjdXQuYmluZCh0aGlzKSgndG91Y2htb3ZlJywgLi4uYXJncyk7XG59XG5mdW5jdGlvbiByZXNpemUoLi4uYXJncykge1xuICByZXR1cm4gZXZlbnRTaG9ydGN1dC5iaW5kKHRoaXMpKCdyZXNpemUnLCAuLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIHNjcm9sbCguLi5hcmdzKSB7XG4gIHJldHVybiBldmVudFNob3J0Y3V0LmJpbmQodGhpcykoJ3Njcm9sbCcsIC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgeyAkLCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIGhhc0NsYXNzLCB0b2dnbGVDbGFzcywgYXR0ciwgcmVtb3ZlQXR0ciwgcHJvcCwgZGF0YSwgcmVtb3ZlRGF0YSwgZGF0YXNldCwgdmFsLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIG9uLCBvZmYsIG9uY2UsIHRyaWdnZXIsIHRyYW5zaXRpb25FbmQsIGFuaW1hdGlvbkVuZCwgd2lkdGgsIG91dGVyV2lkdGgsIGhlaWdodCwgb3V0ZXJIZWlnaHQsIG9mZnNldCwgaGlkZSwgc2hvdywgc3R5bGVzLCBjc3MsIHRvQXJyYXksIGVhY2gsIGZvckVhY2gsIGZpbHRlciwgbWFwLCBodG1sLCB0ZXh0LCBpcywgaW5kZXhPZiwgaW5kZXgsIGVxLCBhcHBlbmQsIGFwcGVuZFRvLCBwcmVwZW5kLCBwcmVwZW5kVG8sIGluc2VydEJlZm9yZSwgaW5zZXJ0QWZ0ZXIsIG5leHQsIG5leHRBbGwsIHByZXYsIHByZXZBbGwsIHNpYmxpbmdzLCBwYXJlbnQsIHBhcmVudHMsIGNsb3Nlc3QsIGZpbmQsIGNoaWxkcmVuLCByZW1vdmUsIGRldGFjaCwgYWRkLCBlbXB0eSwgc2Nyb2xsVG8sIHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCwgYW5pbWF0ZSwgc3RvcCwgY2xpY2ssIGJsdXIsIGZvY3VzLCBmb2N1c2luLCBmb2N1c291dCwga2V5dXAsIGtleWRvd24sIGtleXByZXNzLCBzdWJtaXQsIGNoYW5nZSwgbW91c2Vkb3duLCBtb3VzZW1vdmUsIG1vdXNldXAsIG1vdXNlZW50ZXIsIG1vdXNlbGVhdmUsIG1vdXNlb3V0LCBtb3VzZW92ZXIsIHRvdWNoc3RhcnQsIHRvdWNoZW5kLCB0b3VjaG1vdmUsIHJlc2l6ZSwgc2Nyb2xsIH07XG4iLCIvKipcbiAqIFNTUiBXaW5kb3cgMS4wLjFcbiAqIEJldHRlciBoYW5kbGluZyBmb3Igd2luZG93IG9iamVjdCBpbiBTU1IgZW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xpbWl0czR3ZWIvc3NyLXdpbmRvd1xuICpcbiAqIENvcHlyaWdodCAyMDE4LCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBKdWx5IDE4LCAyMDE4XG4gKi9cbnZhciBkb2MgPSAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgPyB7XG4gIGJvZHk6IHt9LFxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKCkge30sXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgYWN0aXZlRWxlbWVudDoge1xuICAgIGJsdXI6IGZ1bmN0aW9uIGJsdXIoKSB7fSxcbiAgICBub2RlTmFtZTogJycsXG4gIH0sXG4gIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3IoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3JBbGwoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuICBnZXRFbGVtZW50QnlJZDogZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGNyZWF0ZUV2ZW50OiBmdW5jdGlvbiBjcmVhdGVFdmVudCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEV2ZW50OiBmdW5jdGlvbiBpbml0RXZlbnQoKSB7fSxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgIHN0eWxlOiB7fSxcbiAgICAgIHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gc2V0QXR0cmlidXRlKCkge30sXG4gICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeVRhZ05hbWUoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgbG9jYXRpb246IHsgaGFzaDogJycgfSxcbn0gOiBkb2N1bWVudDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG52YXIgd2luID0gKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSA/IHtcbiAgZG9jdW1lbnQ6IGRvYyxcbiAgbmF2aWdhdG9yOiB7XG4gICAgdXNlckFnZW50OiAnJyxcbiAgfSxcbiAgbG9jYXRpb246IHt9LFxuICBoaXN0b3J5OiB7fSxcbiAgQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKCkge30sXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7fSxcbiAgZ2V0Q29tcHV0ZWRTdHlsZTogZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxuICBJbWFnZTogZnVuY3Rpb24gSW1hZ2UoKSB7fSxcbiAgRGF0ZTogZnVuY3Rpb24gRGF0ZSgpIHt9LFxuICBzY3JlZW46IHt9LFxuICBzZXRUaW1lb3V0OiBmdW5jdGlvbiBzZXRUaW1lb3V0KCkge30sXG4gIGNsZWFyVGltZW91dDogZnVuY3Rpb24gY2xlYXJUaW1lb3V0KCkge30sXG59IDogd2luZG93OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmV4cG9ydCB7IHdpbiBhcyB3aW5kb3csIGRvYyBhcyBkb2N1bWVudCB9O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL3N3aXBlci5taW4uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0xIS4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cG9zdGNzcyEuL3N3aXBlci5taW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTEhLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9wb3N0Y3NzIS4vc3dpcGVyLm1pbi5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcbiAqIFN3aXBlciA0LjUuMVxuICogTW9zdCBtb2Rlcm4gbW9iaWxlIHRvdWNoIHNsaWRlciBhbmQgZnJhbWV3b3JrIHdpdGggaGFyZHdhcmUgYWNjZWxlcmF0ZWQgdHJhbnNpdGlvbnNcbiAqIGh0dHA6Ly93d3cuaWRhbmdlcm8udXMvc3dpcGVyL1xuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMTkgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogU2VwdGVtYmVyIDEzLCAyMDE5XG4gKi9cblxuaW1wb3J0IHsgJCwgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBoYXNDbGFzcywgdG9nZ2xlQ2xhc3MsIGF0dHIsIHJlbW92ZUF0dHIsIGRhdGEsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiBhcyB0cmFuc2l0aW9uJDEsIG9uLCBvZmYsIHRyaWdnZXIsIHRyYW5zaXRpb25FbmQgYXMgdHJhbnNpdGlvbkVuZCQxLCBvdXRlcldpZHRoLCBvdXRlckhlaWdodCwgb2Zmc2V0LCBjc3MsIGVhY2gsIGh0bWwsIHRleHQsIGlzLCBpbmRleCwgZXEsIGFwcGVuZCwgcHJlcGVuZCwgbmV4dCwgbmV4dEFsbCwgcHJldiwgcHJldkFsbCwgcGFyZW50LCBwYXJlbnRzLCBjbG9zZXN0LCBmaW5kLCBjaGlsZHJlbiwgcmVtb3ZlLCBhZGQsIHN0eWxlcyB9IGZyb20gJ2RvbTcvZGlzdC9kb203Lm1vZHVsYXInO1xuaW1wb3J0IHsgd2luZG93LCBkb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG5jb25zdCBNZXRob2RzID0ge1xuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgYXR0cixcbiAgcmVtb3ZlQXR0cixcbiAgZGF0YSxcbiAgdHJhbnNmb3JtLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uJDEsXG4gIG9uLFxuICBvZmYsXG4gIHRyaWdnZXIsXG4gIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQkMSxcbiAgb3V0ZXJXaWR0aCxcbiAgb3V0ZXJIZWlnaHQsXG4gIG9mZnNldCxcbiAgY3NzLFxuICBlYWNoLFxuICBodG1sLFxuICB0ZXh0LFxuICBpcyxcbiAgaW5kZXgsXG4gIGVxLFxuICBhcHBlbmQsXG4gIHByZXBlbmQsXG4gIG5leHQsXG4gIG5leHRBbGwsXG4gIHByZXYsXG4gIHByZXZBbGwsXG4gIHBhcmVudCxcbiAgcGFyZW50cyxcbiAgY2xvc2VzdCxcbiAgZmluZCxcbiAgY2hpbGRyZW4sXG4gIHJlbW92ZSxcbiAgYWRkLFxuICBzdHlsZXMsXG59O1xuXG5PYmplY3Qua2V5cyhNZXRob2RzKS5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XG4gICQuZm5bbWV0aG9kTmFtZV0gPSAkLmZuW21ldGhvZE5hbWVdIHx8IE1ldGhvZHNbbWV0aG9kTmFtZV07XG59KTtcblxuY29uc3QgVXRpbHMgPSB7XG4gIGRlbGV0ZVByb3BzKG9iaikge1xuICAgIGNvbnN0IG9iamVjdCA9IG9iajtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBudWxsO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBubyBnZXR0ZXIgZm9yIG9iamVjdFxuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzb21ldGhpbmcgZ290IHdyb25nXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG5leHRUaWNrKGNhbGxiYWNrLCBkZWxheSA9IDApIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgZGVsYXkpO1xuICB9LFxuICBub3coKSB7XG4gICAgcmV0dXJuIERhdGUubm93KCk7XG4gIH0sXG4gIGdldFRyYW5zbGF0ZShlbCwgYXhpcyA9ICd4Jykge1xuICAgIGxldCBtYXRyaXg7XG4gICAgbGV0IGN1clRyYW5zZm9ybTtcbiAgICBsZXQgdHJhbnNmb3JtTWF0cml4O1xuXG4gICAgY29uc3QgY3VyU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG5cbiAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkge1xuICAgICAgY3VyVHJhbnNmb3JtID0gY3VyU3R5bGUudHJhbnNmb3JtIHx8IGN1clN0eWxlLndlYmtpdFRyYW5zZm9ybTtcbiAgICAgIGlmIChjdXJUcmFuc2Zvcm0uc3BsaXQoJywnKS5sZW5ndGggPiA2KSB7XG4gICAgICAgIGN1clRyYW5zZm9ybSA9IGN1clRyYW5zZm9ybS5zcGxpdCgnLCAnKS5tYXAoKGEpID0+IGEucmVwbGFjZSgnLCcsICcuJykpLmpvaW4oJywgJyk7XG4gICAgICB9XG4gICAgICAvLyBTb21lIG9sZCB2ZXJzaW9ucyBvZiBXZWJraXQgY2hva2Ugd2hlbiAnbm9uZScgaXMgcGFzc2VkOyBwYXNzXG4gICAgICAvLyBlbXB0eSBzdHJpbmcgaW5zdGVhZCBpbiB0aGlzIGNhc2VcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IG5ldyB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KGN1clRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBjdXJUcmFuc2Zvcm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm1NYXRyaXggPSBjdXJTdHlsZS5Nb3pUcmFuc2Zvcm0gfHwgY3VyU3R5bGUuT1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5Nc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5tc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICAgIG1hdHJpeCA9IHRyYW5zZm9ybU1hdHJpeC50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gICAgfVxuXG4gICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQxO1xuICAgICAgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxMl0pO1xuICAgICAgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgICBlbHNlIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzRdKTtcbiAgICB9XG4gICAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KSBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQyO1xuICAgICAgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICAgIGVsc2UgaWYgKG1hdHJpeC5sZW5ndGggPT09IDE2KSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxM10pO1xuICAgICAgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgICBlbHNlIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzVdKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xuICB9LFxuICBwYXJzZVVybFF1ZXJ5KHVybCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge307XG4gICAgbGV0IHVybFRvUGFyc2UgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbGV0IGk7XG4gICAgbGV0IHBhcmFtcztcbiAgICBsZXQgcGFyYW07XG4gICAgbGV0IGxlbmd0aDtcbiAgICBpZiAodHlwZW9mIHVybFRvUGFyc2UgPT09ICdzdHJpbmcnICYmIHVybFRvUGFyc2UubGVuZ3RoKSB7XG4gICAgICB1cmxUb1BhcnNlID0gdXJsVG9QYXJzZS5pbmRleE9mKCc/JykgPiAtMSA/IHVybFRvUGFyc2UucmVwbGFjZSgvXFxTKlxcPy8sICcnKSA6ICcnO1xuICAgICAgcGFyYW1zID0gdXJsVG9QYXJzZS5zcGxpdCgnJicpLmZpbHRlcigocGFyYW1zUGFydCkgPT4gcGFyYW1zUGFydCAhPT0gJycpO1xuICAgICAgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHBhcmFtID0gcGFyYW1zW2ldLnJlcGxhY2UoLyNcXFMrL2csICcnKS5zcGxpdCgnPScpO1xuICAgICAgICBxdWVyeVtkZWNvZGVVUklDb21wb25lbnQocGFyYW1bMF0pXSA9IHR5cGVvZiBwYXJhbVsxXSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBkZWNvZGVVUklDb21wb25lbnQocGFyYW1bMV0pIHx8ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG4gIH0sXG4gIGlzT2JqZWN0KG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5jb25zdHJ1Y3RvciAmJiBvLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG4gIH0sXG4gIGV4dGVuZCguLi5hcmdzKSB7XG4gICAgY29uc3QgdG8gPSBPYmplY3QoYXJnc1swXSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBuZXh0U291cmNlID0gYXJnc1tpXTtcbiAgICAgIGlmIChuZXh0U291cmNlICE9PSB1bmRlZmluZWQgJiYgbmV4dFNvdXJjZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpO1xuICAgICAgICBmb3IgKGxldCBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgICAgY29uc3QgbmV4dEtleSA9IGtleXNBcnJheVtuZXh0SW5kZXhdO1xuICAgICAgICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5leHRTb3VyY2UsIG5leHRLZXkpO1xuICAgICAgICAgIGlmIChkZXNjICE9PSB1bmRlZmluZWQgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaXNPYmplY3QodG9bbmV4dEtleV0pICYmIFV0aWxzLmlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICAgIFV0aWxzLmV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFVdGlscy5pc09iamVjdCh0b1tuZXh0S2V5XSkgJiYgVXRpbHMuaXNPYmplY3QobmV4dFNvdXJjZVtuZXh0S2V5XSkpIHtcbiAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSB7fTtcbiAgICAgICAgICAgICAgVXRpbHMuZXh0ZW5kKHRvW25leHRLZXldLCBuZXh0U291cmNlW25leHRLZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvO1xuICB9LFxufTtcblxuY29uc3QgU3VwcG9ydCA9IChmdW5jdGlvbiBTdXBwb3J0KCkge1xuICBjb25zdCB0ZXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJldHVybiB7XG4gICAgdG91Y2g6ICh3aW5kb3cuTW9kZXJuaXpyICYmIHdpbmRvdy5Nb2Rlcm5penIudG91Y2ggPT09IHRydWUpIHx8IChmdW5jdGlvbiBjaGVja1RvdWNoKCkge1xuICAgICAgcmV0dXJuICEhKCh3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCkgfHwgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpKTtcbiAgICB9KCkpLFxuXG4gICAgcG9pbnRlckV2ZW50czogISEod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCB8fCB3aW5kb3cuUG9pbnRlckV2ZW50IHx8ICgnbWF4VG91Y2hQb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDApKSxcbiAgICBwcmVmaXhlZFBvaW50ZXJFdmVudHM6ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuXG4gICAgdHJhbnNpdGlvbjogKGZ1bmN0aW9uIGNoZWNrVHJhbnNpdGlvbigpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gdGVzdERpdi5zdHlsZTtcbiAgICAgIHJldHVybiAoJ3RyYW5zaXRpb24nIGluIHN0eWxlIHx8ICd3ZWJraXRUcmFuc2l0aW9uJyBpbiBzdHlsZSB8fCAnTW96VHJhbnNpdGlvbicgaW4gc3R5bGUpO1xuICAgIH0oKSksXG4gICAgdHJhbnNmb3JtczNkOiAod2luZG93Lk1vZGVybml6ciAmJiB3aW5kb3cuTW9kZXJuaXpyLmNzc3RyYW5zZm9ybXMzZCA9PT0gdHJ1ZSkgfHwgKGZ1bmN0aW9uIGNoZWNrVHJhbnNmb3JtczNkKCkge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0ZXN0RGl2LnN0eWxlO1xuICAgICAgcmV0dXJuICgnd2Via2l0UGVyc3BlY3RpdmUnIGluIHN0eWxlIHx8ICdNb3pQZXJzcGVjdGl2ZScgaW4gc3R5bGUgfHwgJ09QZXJzcGVjdGl2ZScgaW4gc3R5bGUgfHwgJ01zUGVyc3BlY3RpdmUnIGluIHN0eWxlIHx8ICdwZXJzcGVjdGl2ZScgaW4gc3R5bGUpO1xuICAgIH0oKSksXG5cbiAgICBmbGV4Ym94OiAoZnVuY3Rpb24gY2hlY2tGbGV4Ym94KCkge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0ZXN0RGl2LnN0eWxlO1xuICAgICAgY29uc3Qgc3R5bGVzID0gKCdhbGlnbkl0ZW1zIHdlYmtpdEFsaWduSXRlbXMgd2Via2l0Qm94QWxpZ24gbXNGbGV4QWxpZ24gbW96Qm94QWxpZ24gd2Via2l0RmxleERpcmVjdGlvbiBtc0ZsZXhEaXJlY3Rpb24gbW96Qm94RGlyZWN0aW9uIG1vekJveE9yaWVudCB3ZWJraXRCb3hEaXJlY3Rpb24gd2Via2l0Qm94T3JpZW50Jykuc3BsaXQoJyAnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzdHlsZXNbaV0gaW4gc3R5bGUpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0oKSksXG5cbiAgICBvYnNlcnZlcjogKGZ1bmN0aW9uIGNoZWNrT2JzZXJ2ZXIoKSB7XG4gICAgICByZXR1cm4gKCdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgfHwgJ1dlYmtpdE11dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyk7XG4gICAgfSgpKSxcblxuICAgIHBhc3NpdmVMaXN0ZW5lcjogKGZ1bmN0aW9uIGNoZWNrUGFzc2l2ZUxpc3RlbmVyKCkge1xuICAgICAgbGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlTGlzdGVuZXInLCBudWxsLCBvcHRzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gTm8gc3VwcG9ydFxuICAgICAgfVxuICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICB9KCkpLFxuXG4gICAgZ2VzdHVyZXM6IChmdW5jdGlvbiBjaGVja0dlc3R1cmVzKCkge1xuICAgICAgcmV0dXJuICdvbmdlc3R1cmVzdGFydCcgaW4gd2luZG93O1xuICAgIH0oKSksXG4gIH07XG59KCkpO1xuXG5jb25zdCBCcm93c2VyID0gKGZ1bmN0aW9uIEJyb3dzZXIoKSB7XG4gIGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDApO1xuICB9XG4gIHJldHVybiB7XG4gICAgaXNJRTogISF3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC9nKSB8fCAhIXdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFL2cpLFxuICAgIGlzRWRnZTogISF3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS9nKSxcbiAgICBpc1NhZmFyaTogaXNTYWZhcmkoKSxcbiAgICBpc1VpV2ViVmlldzogLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSxcbiAgfTtcbn0oKSk7XG5cbmNsYXNzIFN3aXBlckNsYXNzIHtcbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBzZWxmLnBhcmFtcyA9IHBhcmFtcztcblxuICAgIC8vIEV2ZW50c1xuICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzID0ge307XG5cbiAgICBpZiAoc2VsZi5wYXJhbXMgJiYgc2VsZi5wYXJhbXMub24pIHtcbiAgICAgIE9iamVjdC5rZXlzKHNlbGYucGFyYW1zLm9uKS5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcbiAgICAgICAgc2VsZi5vbihldmVudE5hbWUsIHNlbGYucGFyYW1zLm9uW2V2ZW50TmFtZV0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb24oZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG4gICAgY29uc3QgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XVttZXRob2RdKGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbiAgb25jZShldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICBmdW5jdGlvbiBvbmNlSGFuZGxlciguLi5hcmdzKSB7XG4gICAgICBoYW5kbGVyLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgc2VsZi5vZmYoZXZlbnRzLCBvbmNlSGFuZGxlcik7XG4gICAgICBpZiAob25jZUhhbmRsZXIuZjdwcm94eSkge1xuICAgICAgICBkZWxldGUgb25jZUhhbmRsZXIuZjdwcm94eTtcbiAgICAgIH1cbiAgICB9XG4gICAgb25jZUhhbmRsZXIuZjdwcm94eSA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIHNlbGYub24oZXZlbnRzLCBvbmNlSGFuZGxlciwgcHJpb3JpdHkpO1xuICB9XG5cbiAgb2ZmKGV2ZW50cywgaGFuZGxlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gJiYgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmxlbmd0aCkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaCgoZXZlbnRIYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudEhhbmRsZXIgPT09IGhhbmRsZXIgfHwgKGV2ZW50SGFuZGxlci5mN3Byb3h5ICYmIGV2ZW50SGFuZGxlci5mN3Byb3h5ID09PSBoYW5kbGVyKSkge1xuICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIGVtaXQoLi4uYXJncykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGxldCBldmVudHM7XG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IGNvbnRleHQ7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF0uZXZlbnRzO1xuICAgICAgZGF0YSA9IGFyZ3NbMF0uZGF0YTtcbiAgICAgIGNvbnRleHQgPSBhcmdzWzBdLmNvbnRleHQgfHwgc2VsZjtcbiAgICB9XG4gICAgY29uc3QgZXZlbnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBldmVudHMuc3BsaXQoJyAnKTtcbiAgICBldmVudHNBcnJheS5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBjb25zdCBoYW5kbGVycyA9IFtdO1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaCgoZXZlbnRIYW5kbGVyKSA9PiB7XG4gICAgICAgICAgaGFuZGxlcnMucHVzaChldmVudEhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoZXZlbnRIYW5kbGVyKSA9PiB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuXG4gIHVzZU1vZHVsZXNQYXJhbXMoaW5zdGFuY2VQYXJhbXMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXM7XG4gICAgaWYgKCFpbnN0YW5jZS5tb2R1bGVzKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoaW5zdGFuY2UubW9kdWxlcykuZm9yRWFjaCgobW9kdWxlTmFtZSkgPT4ge1xuICAgICAgY29uc3QgbW9kdWxlID0gaW5zdGFuY2UubW9kdWxlc1ttb2R1bGVOYW1lXTtcbiAgICAgIC8vIEV4dGVuZCBwYXJhbXNcbiAgICAgIGlmIChtb2R1bGUucGFyYW1zKSB7XG4gICAgICAgIFV0aWxzLmV4dGVuZChpbnN0YW5jZVBhcmFtcywgbW9kdWxlLnBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1c2VNb2R1bGVzKG1vZHVsZXNQYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoIWluc3RhbmNlLm1vZHVsZXMpIHJldHVybjtcbiAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5tb2R1bGVzKS5mb3JFYWNoKChtb2R1bGVOYW1lKSA9PiB7XG4gICAgICBjb25zdCBtb2R1bGUgPSBpbnN0YW5jZS5tb2R1bGVzW21vZHVsZU5hbWVdO1xuICAgICAgY29uc3QgbW9kdWxlUGFyYW1zID0gbW9kdWxlc1BhcmFtc1ttb2R1bGVOYW1lXSB8fCB7fTtcbiAgICAgIC8vIEV4dGVuZCBpbnN0YW5jZSBtZXRob2RzIGFuZCBwcm9wc1xuICAgICAgaWYgKG1vZHVsZS5pbnN0YW5jZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGUuaW5zdGFuY2UpLmZvckVhY2goKG1vZHVsZVByb3BOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgbW9kdWxlUHJvcCA9IG1vZHVsZS5pbnN0YW5jZVttb2R1bGVQcm9wTmFtZV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGVQcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVttb2R1bGVQcm9wTmFtZV0gPSBtb2R1bGVQcm9wLmJpbmQoaW5zdGFuY2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZVttb2R1bGVQcm9wTmFtZV0gPSBtb2R1bGVQcm9wO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICBpZiAobW9kdWxlLm9uICYmIGluc3RhbmNlLm9uKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZHVsZS5vbikuZm9yRWFjaCgobW9kdWxlRXZlbnROYW1lKSA9PiB7XG4gICAgICAgICAgaW5zdGFuY2Uub24obW9kdWxlRXZlbnROYW1lLCBtb2R1bGUub25bbW9kdWxlRXZlbnROYW1lXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBNb2R1bGUgY3JlYXRlIGNhbGxiYWNrXG4gICAgICBpZiAobW9kdWxlLmNyZWF0ZSkge1xuICAgICAgICBtb2R1bGUuY3JlYXRlLmJpbmQoaW5zdGFuY2UpKG1vZHVsZVBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgc2V0IGNvbXBvbmVudHMoY29tcG9uZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gdGhpcztcbiAgICBpZiAoIUNsYXNzLnVzZSkgcmV0dXJuO1xuICAgIENsYXNzLnVzZShjb21wb25lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YWxsTW9kdWxlKG1vZHVsZSwgLi4ucGFyYW1zKSB7XG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzO1xuICAgIGlmICghQ2xhc3MucHJvdG90eXBlLm1vZHVsZXMpIENsYXNzLnByb3RvdHlwZS5tb2R1bGVzID0ge307XG4gICAgY29uc3QgbmFtZSA9IG1vZHVsZS5uYW1lIHx8IChgJHtPYmplY3Qua2V5cyhDbGFzcy5wcm90b3R5cGUubW9kdWxlcykubGVuZ3RofV8ke1V0aWxzLm5vdygpfWApO1xuICAgIENsYXNzLnByb3RvdHlwZS5tb2R1bGVzW25hbWVdID0gbW9kdWxlO1xuICAgIC8vIFByb3RvdHlwZVxuICAgIGlmIChtb2R1bGUucHJvdG8pIHtcbiAgICAgIE9iamVjdC5rZXlzKG1vZHVsZS5wcm90bykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIENsYXNzLnByb3RvdHlwZVtrZXldID0gbW9kdWxlLnByb3RvW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ2xhc3NcbiAgICBpZiAobW9kdWxlLnN0YXRpYykge1xuICAgICAgT2JqZWN0LmtleXMobW9kdWxlLnN0YXRpYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIENsYXNzW2tleV0gPSBtb2R1bGUuc3RhdGljW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ2FsbGJhY2tcbiAgICBpZiAobW9kdWxlLmluc3RhbGwpIHtcbiAgICAgIG1vZHVsZS5pbnN0YWxsLmFwcGx5KENsYXNzLCBwYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gQ2xhc3M7XG4gIH1cblxuICBzdGF0aWMgdXNlKG1vZHVsZSwgLi4ucGFyYW1zKSB7XG4gICAgY29uc3QgQ2xhc3MgPSB0aGlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHVsZSkpIHtcbiAgICAgIG1vZHVsZS5mb3JFYWNoKChtKSA9PiBDbGFzcy5pbnN0YWxsTW9kdWxlKG0pKTtcbiAgICAgIHJldHVybiBDbGFzcztcbiAgICB9XG4gICAgcmV0dXJuIENsYXNzLmluc3RhbGxNb2R1bGUobW9kdWxlLCAuLi5wYXJhbXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNpemUgKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBsZXQgd2lkdGg7XG4gIGxldCBoZWlnaHQ7XG4gIGNvbnN0ICRlbCA9IHN3aXBlci4kZWw7XG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aWR0aCA9IHN3aXBlci5wYXJhbXMud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSAkZWxbMF0uY2xpZW50V2lkdGg7XG4gIH1cbiAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBoZWlnaHQgPSBzd2lwZXIucGFyYW1zLmhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBoZWlnaHQgPSAkZWxbMF0uY2xpZW50SGVpZ2h0O1xuICB9XG4gIGlmICgod2lkdGggPT09IDAgJiYgc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB8fCAoaGVpZ2h0ID09PSAwICYmIHN3aXBlci5pc1ZlcnRpY2FsKCkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU3VidHJhY3QgcGFkZGluZ3NcbiAgd2lkdGggPSB3aWR0aCAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctbGVmdCcpLCAxMCkgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLXJpZ2h0JyksIDEwKTtcbiAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy10b3AnKSwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1ib3R0b20nKSwgMTApO1xuXG4gIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgc2l6ZTogc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gd2lkdGggOiBoZWlnaHQsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXMgKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuXG4gIGNvbnN0IHtcbiAgICAkd3JhcHBlckVsLCBzaXplOiBzd2lwZXJTaXplLCBydGxUcmFuc2xhdGU6IHJ0bCwgd3JvbmdSVEwsXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGNvbnN0IHByZXZpb3VzU2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICBjb25zdCBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCk7XG4gIGNvbnN0IHNsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzbGlkZXMubGVuZ3RoO1xuICBsZXQgc25hcEdyaWQgPSBbXTtcbiAgY29uc3Qgc2xpZGVzR3JpZCA9IFtdO1xuICBjb25zdCBzbGlkZXNTaXplc0dyaWQgPSBbXTtcblxuICBsZXQgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZTtcbiAgaWYgKHR5cGVvZiBvZmZzZXRCZWZvcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIGxldCBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcbiAgaWYgKHR5cGVvZiBvZmZzZXRBZnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzU25hcEdyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuXG4gIGxldCBzcGFjZUJldHdlZW4gPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICBsZXQgc2xpZGVQb3NpdGlvbiA9IC1vZmZzZXRCZWZvcmU7XG4gIGxldCBwcmV2U2xpZGVTaXplID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgaWYgKHR5cGVvZiBzd2lwZXJTaXplID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gKHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwKSAqIHN3aXBlclNpemU7XG4gIH1cblxuICBzd2lwZXIudmlydHVhbFNpemUgPSAtc3BhY2VCZXR3ZWVuO1xuXG4gIC8vIHJlc2V0IG1hcmdpbnNcbiAgaWYgKHJ0bCkgc2xpZGVzLmNzcyh7IG1hcmdpbkxlZnQ6ICcnLCBtYXJnaW5Ub3A6ICcnIH0pO1xuICBlbHNlIHNsaWRlcy5jc3MoeyBtYXJnaW5SaWdodDogJycsIG1hcmdpbkJvdHRvbTogJycgfSk7XG5cbiAgbGV0IHNsaWRlc051bWJlckV2ZW5Ub1Jvd3M7XG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgIGlmIChNYXRoLmZsb29yKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pID09PSBzbGlkZXNMZW5ndGggLyBzd2lwZXIucGFyYW1zLnNsaWRlc1BlckNvbHVtbikge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IHNsaWRlc0xlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGguY2VpbChzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgfVxuICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93Jykge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGgubWF4KHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MsIHBhcmFtcy5zbGlkZXNQZXJWaWV3ICogcGFyYW1zLnNsaWRlc1BlckNvbHVtbik7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsYyBzbGlkZXNcbiAgbGV0IHNsaWRlU2l6ZTtcbiAgY29uc3Qgc2xpZGVzUGVyQ29sdW1uID0gcGFyYW1zLnNsaWRlc1BlckNvbHVtbjtcbiAgY29uc3Qgc2xpZGVzUGVyUm93ID0gc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgY29uc3QgbnVtRnVsbENvbHVtbnMgPSBNYXRoLmZsb29yKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVTaXplID0gMDtcbiAgICBjb25zdCBzbGlkZSA9IHNsaWRlcy5lcShpKTtcbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgIC8vIFNldCBzbGlkZXMgb3JkZXJcbiAgICAgIGxldCBuZXdTbGlkZU9yZGVySW5kZXg7XG4gICAgICBsZXQgY29sdW1uO1xuICAgICAgbGV0IHJvdztcbiAgICAgIGlmIChcbiAgICAgICAgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAnY29sdW1uJylcbiAgICAgICAgfHwgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93JyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICAgIHJvdyA9IGkgLSAoY29sdW1uICogc2xpZGVzUGVyQ29sdW1uKTtcbiAgICAgICAgICBpZiAoY29sdW1uID4gbnVtRnVsbENvbHVtbnMgfHwgKGNvbHVtbiA9PT0gbnVtRnVsbENvbHVtbnMgJiYgcm93ID09PSBzbGlkZXNQZXJDb2x1bW4gLSAxKSkge1xuICAgICAgICAgICAgcm93ICs9IDE7XG4gICAgICAgICAgICBpZiAocm93ID49IHNsaWRlc1BlckNvbHVtbikge1xuICAgICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZ3JvdXBJbmRleCA9IE1hdGguZmxvb3IoaSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihpIC8gcGFyYW1zLnNsaWRlc1BlclZpZXcpIC0gZ3JvdXBJbmRleCAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgICAgICAgY29sdW1uID0gaSAtIHJvdyAqIHBhcmFtcy5zbGlkZXNQZXJWaWV3IC0gZ3JvdXBJbmRleCAqIHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgICB9XG4gICAgICAgIG5ld1NsaWRlT3JkZXJJbmRleCA9IGNvbHVtbiArICgocm93ICogc2xpZGVzTnVtYmVyRXZlblRvUm93cykgLyBzbGlkZXNQZXJDb2x1bW4pO1xuICAgICAgICBzbGlkZVxuICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgJy13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXAnOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgICAgICAnLW1vei1ib3gtb3JkaW5hbC1ncm91cCc6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICctbXMtZmxleC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAgICctd2Via2l0LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICAgb3JkZXI6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIHNsaWRlc1BlclJvdyk7XG4gICAgICAgIGNvbHVtbiA9IGkgLSAocm93ICogc2xpZGVzUGVyUm93KTtcbiAgICAgIH1cbiAgICAgIHNsaWRlXG4gICAgICAgIC5jc3MoXG4gICAgICAgICAgYG1hcmdpbi0ke3N3aXBlci5pc0hvcml6b250YWwoKSA/ICd0b3AnIDogJ2xlZnQnfWAsXG4gICAgICAgICAgKHJvdyAhPT0gMCAmJiBwYXJhbXMuc3BhY2VCZXR3ZWVuKSAmJiAoYCR7cGFyYW1zLnNwYWNlQmV0d2Vlbn1weGApXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoJ2RhdGEtc3dpcGVyLWNvbHVtbicsIGNvbHVtbilcbiAgICAgICAgLmF0dHIoJ2RhdGEtc3dpcGVyLXJvdycsIHJvdyk7XG4gICAgfVxuICAgIGlmIChzbGlkZS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIGNvbnN0IHNsaWRlU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2xpZGVbMF0sIG51bGwpO1xuICAgICAgY29uc3QgY3VycmVudFRyYW5zZm9ybSA9IHNsaWRlWzBdLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgIGNvbnN0IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0gPSBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm07XG4gICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgICAgICBzbGlkZVNpemUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKClcbiAgICAgICAgICA/IHNsaWRlLm91dGVyV2lkdGgodHJ1ZSlcbiAgICAgICAgICA6IHNsaWRlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICBjb25zdCB3aWR0aCA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSk7XG4gICAgICAgICAgY29uc3QgcGFkZGluZ0xlZnQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKTtcbiAgICAgICAgICBjb25zdCBwYWRkaW5nUmlnaHQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gICAgICAgICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgICAgICAgY29uc3QgbWFyZ2luUmlnaHQgPSBwYXJzZUZsb2F0KHNsaWRlU3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1yaWdodCcpKTtcbiAgICAgICAgICBjb25zdCBib3hTaXppbmcgPSBzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJyk7XG4gICAgICAgICAgaWYgKGJveFNpemluZyAmJiBib3hTaXppbmcgPT09ICdib3JkZXItYm94JyAmJiAhQnJvd3Nlci5pc0lFKSB7XG4gICAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VGbG9hdChzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XG4gICAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSk7XG4gICAgICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbSA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKSk7XG4gICAgICAgICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykpO1xuICAgICAgICAgIGNvbnN0IG1hcmdpbkJvdHRvbSA9IHBhcnNlRmxvYXQoc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICAgICAgICBjb25zdCBib3hTaXppbmcgPSBzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJyk7XG4gICAgICAgICAgaWYgKGJveFNpemluZyAmJiBib3hTaXppbmcgPT09ICdib3JkZXItYm94JyAmJiAhQnJvd3Nlci5pc0lFKSB7XG4gICAgICAgICAgICBzbGlkZVNpemUgPSBoZWlnaHQgKyBtYXJnaW5Ub3AgKyBtYXJnaW5Cb3R0b207XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlU2l6ZSA9IGhlaWdodCArIHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tICsgbWFyZ2luVG9wICsgbWFyZ2luQm90dG9tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudFRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm07XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVNpemUgPSAoc3dpcGVyU2l6ZSAtICgocGFyYW1zLnNsaWRlc1BlclZpZXcgLSAxKSAqIHNwYWNlQmV0d2VlbikpIC8gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuXG4gICAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSBgJHtzbGlkZVNpemV9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlc1tpXS5zdHlsZS5oZWlnaHQgPSBgJHtzbGlkZVNpemV9cHhgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgfVxuICAgIHNsaWRlc1NpemVzR3JpZC5wdXNoKHNsaWRlU2l6ZSk7XG5cblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgKHNsaWRlU2l6ZSAvIDIpICsgKHByZXZTbGlkZVNpemUgLyAyKSArIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChwcmV2U2xpZGVTaXplID09PSAwICYmIGkgIT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gKHN3aXBlclNpemUgLyAyKSAtIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChpID09PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIChzd2lwZXJTaXplIC8gMikgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoKGluZGV4KSAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlUG9zaXRpb24gPSBNYXRoLmZsb29yKHNsaWRlUG9zaXRpb24pO1xuICAgICAgaWYgKChpbmRleCkgJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuXG4gICAgcHJldlNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcblxuICAgIGluZGV4ICs9IDE7XG4gIH1cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5tYXgoc3dpcGVyLnZpcnR1YWxTaXplLCBzd2lwZXJTaXplKSArIG9mZnNldEFmdGVyO1xuICBsZXQgbmV3U2xpZGVzR3JpZDtcblxuICBpZiAoXG4gICAgcnRsICYmIHdyb25nUlRMICYmIChwYXJhbXMuZWZmZWN0ID09PSAnc2xpZGUnIHx8IHBhcmFtcy5lZmZlY3QgPT09ICdjb3ZlcmZsb3cnKSkge1xuICAgICR3cmFwcGVyRWwuY3NzKHsgd2lkdGg6IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW59cHhgIH0pO1xuICB9XG4gIGlmICghU3VwcG9ydC5mbGV4Ym94IHx8IHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpICR3cmFwcGVyRWwuY3NzKHsgd2lkdGg6IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW59cHhgIH0pO1xuICAgIGVsc2UgJHdyYXBwZXJFbC5jc3MoeyBoZWlnaHQ6IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW59cHhgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pICogc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLmNlaWwoc3dpcGVyLnZpcnR1YWxTaXplIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgLSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpICR3cmFwcGVyRWwuY3NzKHsgd2lkdGg6IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW59cHhgIH0pO1xuICAgIGVsc2UgJHdyYXBwZXJFbC5jc3MoeyBoZWlnaHQ6IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW59cHhgIH0pO1xuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc25hcEdyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbGV0IHNsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbaV07XG4gICAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgICBpZiAoc25hcEdyaWRbaV0gPCBzd2lwZXIudmlydHVhbFNpemUgKyBzbmFwR3JpZFswXSkgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cbiAgICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgbGFzdCBncmlkIGVsZW1lbnRzIGRlcGVuZGluZyBvbiB3aWR0aFxuICBpZiAoIXBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgIG5ld1NsaWRlc0dyaWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNuYXBHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgc2xpZGVzR3JpZEl0ZW0gPSBzbmFwR3JpZFtpXTtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgaWYgKHNuYXBHcmlkW2ldIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuICAgIGlmIChNYXRoLmZsb29yKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIC0gTWF0aC5mbG9vcihzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSkgPiAxKSB7XG4gICAgICBzbmFwR3JpZC5wdXNoKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpO1xuICAgIH1cbiAgfVxuICBpZiAoc25hcEdyaWQubGVuZ3RoID09PSAwKSBzbmFwR3JpZCA9IFswXTtcblxuICBpZiAocGFyYW1zLnNwYWNlQmV0d2VlbiAhPT0gMCkge1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIGlmIChydGwpIHNsaWRlcy5jc3MoeyBtYXJnaW5MZWZ0OiBgJHtzcGFjZUJldHdlZW59cHhgIH0pO1xuICAgICAgZWxzZSBzbGlkZXMuY3NzKHsgbWFyZ2luUmlnaHQ6IGAke3NwYWNlQmV0d2Vlbn1weGAgfSk7XG4gICAgfSBlbHNlIHNsaWRlcy5jc3MoeyBtYXJnaW5Cb3R0b206IGAke3NwYWNlQmV0d2Vlbn1weGAgfSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNlbnRlckluc3VmZmljaWVudFNsaWRlcykge1xuICAgIGxldCBhbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaCgoc2xpZGVTaXplVmFsdWUpID0+IHtcbiAgICAgIGFsbFNsaWRlc1NpemUgKz0gc2xpZGVTaXplVmFsdWUgKyAocGFyYW1zLnNwYWNlQmV0d2VlbiA/IHBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKTtcbiAgICB9KTtcbiAgICBhbGxTbGlkZXNTaXplIC09IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gICAgaWYgKGFsbFNsaWRlc1NpemUgPCBzd2lwZXJTaXplKSB7XG4gICAgICBjb25zdCBhbGxTbGlkZXNPZmZzZXQgPSAoc3dpcGVyU2l6ZSAtIGFsbFNsaWRlc1NpemUpIC8gMjtcbiAgICAgIHNuYXBHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgICBzbmFwR3JpZFtzbmFwSW5kZXhdID0gc25hcCAtIGFsbFNsaWRlc09mZnNldDtcbiAgICAgIH0pO1xuICAgICAgc2xpZGVzR3JpZC5mb3JFYWNoKChzbmFwLCBzbmFwSW5kZXgpID0+IHtcbiAgICAgICAgc2xpZGVzR3JpZFtzbmFwSW5kZXhdID0gc25hcCArIGFsbFNsaWRlc09mZnNldDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICBzbGlkZXMsXG4gICAgc25hcEdyaWQsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBzbGlkZXNTaXplc0dyaWQsXG4gIH0pO1xuXG4gIGlmIChzbGlkZXNMZW5ndGggIT09IHByZXZpb3VzU2xpZGVzTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpO1xuICB9XG4gIGlmIChzbmFwR3JpZC5sZW5ndGggIT09IHByZXZpb3VzU25hcEdyaWRMZW5ndGgpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIHN3aXBlci5lbWl0KCdzbmFwR3JpZExlbmd0aENoYW5nZScpO1xuICB9XG4gIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUF1dG9IZWlnaHQgKHNwZWVkKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGFjdGl2ZVNsaWRlcyA9IFtdO1xuICBsZXQgbmV3SGVpZ2h0ID0gMDtcbiAgbGV0IGk7XG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICdudW1iZXInKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICB9IGVsc2UgaWYgKHNwZWVkID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gIH1cbiAgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcbiAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgaWYgKGluZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGgpIGJyZWFrO1xuICAgICAgYWN0aXZlU2xpZGVzLnB1c2goc3dpcGVyLnNsaWRlcy5lcShpbmRleClbMF0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhY3RpdmVTbGlkZXMucHVzaChzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleClbMF0pO1xuICB9XG5cbiAgLy8gRmluZCBuZXcgaGVpZ2h0IGZyb20gaGlnaGVzdCBzbGlkZSBpbiB2aWV3XG4gIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGFjdGl2ZVNsaWRlc1tpXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgPiBuZXdIZWlnaHQgPyBoZWlnaHQgOiBuZXdIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIEhlaWdodFxuICBpZiAobmV3SGVpZ2h0KSBzd2lwZXIuJHdyYXBwZXJFbC5jc3MoJ2hlaWdodCcsIGAke25ld0hlaWdodH1weGApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNPZmZzZXQgKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZU9mZnNldCA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTbGlkZXNQcm9ncmVzcyAodHJhbnNsYXRlID0gKHRoaXMgJiYgdGhpcy50cmFuc2xhdGUpIHx8IDApIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcblxuICBjb25zdCB7IHNsaWRlcywgcnRsVHJhbnNsYXRlOiBydGwgfSA9IHN3aXBlcjtcblxuICBpZiAoc2xpZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcblxuICBsZXQgb2Zmc2V0Q2VudGVyID0gLXRyYW5zbGF0ZTtcbiAgaWYgKHJ0bCkgb2Zmc2V0Q2VudGVyID0gdHJhbnNsYXRlO1xuXG4gIC8vIFZpc2libGUgU2xpZGVzXG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuXG4gIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgY29uc3Qgc2xpZGVQcm9ncmVzcyA9IChcbiAgICAgIChvZmZzZXRDZW50ZXIgKyAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogMCkpIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXRcbiAgICApIC8gKHNsaWRlLnN3aXBlclNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pO1xuICAgIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgICBjb25zdCBzbGlkZUJlZm9yZSA9IC0ob2Zmc2V0Q2VudGVyIC0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQpO1xuICAgICAgY29uc3Qgc2xpZGVBZnRlciA9IHNsaWRlQmVmb3JlICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IChzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDwgc3dpcGVyLnNpemUgLSAxKVxuICAgICAgICAgICAgICAgIHx8IChzbGlkZUFmdGVyID4gMSAmJiBzbGlkZUFmdGVyIDw9IHN3aXBlci5zaXplKVxuICAgICAgICAgICAgICAgIHx8IChzbGlkZUJlZm9yZSA8PSAwICYmIHNsaWRlQWZ0ZXIgPj0gc3dpcGVyLnNpemUpO1xuICAgICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gICAgICAgIHNsaWRlcy5lcShpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICBzbGlkZS5wcm9ncmVzcyA9IHJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgfVxuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9ICQoc3dpcGVyLnZpc2libGVTbGlkZXMpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9ncmVzcyAodHJhbnNsYXRlID0gKHRoaXMgJiYgdGhpcy50cmFuc2xhdGUpIHx8IDApIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcblxuICBjb25zdCB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgbGV0IHsgcHJvZ3Jlc3MsIGlzQmVnaW5uaW5nLCBpc0VuZCB9ID0gc3dpcGVyO1xuICBjb25zdCB3YXNCZWdpbm5pbmcgPSBpc0JlZ2lubmluZztcbiAgY29uc3Qgd2FzRW5kID0gaXNFbmQ7XG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIHByb2dyZXNzID0gMDtcbiAgICBpc0JlZ2lubmluZyA9IHRydWU7XG4gICAgaXNFbmQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyAodHJhbnNsYXRlc0RpZmYpO1xuICAgIGlzQmVnaW5uaW5nID0gcHJvZ3Jlc3MgPD0gMDtcbiAgICBpc0VuZCA9IHByb2dyZXNzID49IDE7XG4gIH1cbiAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgIHByb2dyZXNzLFxuICAgIGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kLFxuICB9KTtcblxuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkgc3dpcGVyLnVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSk7XG5cbiAgaWYgKGlzQmVnaW5uaW5nICYmICF3YXNCZWdpbm5pbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hCZWdpbm5pbmcgdG9FZGdlJyk7XG4gIH1cbiAgaWYgKGlzRW5kICYmICF3YXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hFbmQgdG9FZGdlJyk7XG4gIH1cbiAgaWYgKCh3YXNCZWdpbm5pbmcgJiYgIWlzQmVnaW5uaW5nKSB8fCAod2FzRW5kICYmICFpc0VuZCkpIHtcbiAgICBzd2lwZXIuZW1pdCgnZnJvbUVkZ2UnKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdwcm9ncmVzcycsIHByb2dyZXNzKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2xpZGVzQ2xhc3NlcyAoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgY29uc3Qge1xuICAgIHNsaWRlcywgcGFyYW1zLCAkd3JhcHBlckVsLCBhY3RpdmVJbmRleCwgcmVhbEluZGV4LFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuXG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhgJHtwYXJhbXMuc2xpZGVBY3RpdmVDbGFzc30gJHtwYXJhbXMuc2xpZGVOZXh0Q2xhc3N9ICR7cGFyYW1zLnNsaWRlUHJldkNsYXNzfSAke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzfSAke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzc30gJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3N9YCk7XG5cbiAgbGV0IGFjdGl2ZVNsaWRlO1xuICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKGAuJHtwYXJhbXMuc2xpZGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke2FjdGl2ZUluZGV4fVwiXWApO1xuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzLmVxKGFjdGl2ZUluZGV4KTtcbiAgfVxuXG4gIC8vIEFjdGl2ZSBjbGFzc2VzXG4gIGFjdGl2ZVNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICBpZiAoYWN0aXZlU2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAkd3JhcHBlckVsXG4gICAgICAgIC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9Om5vdCguJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30pW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtyZWFsSW5kZXh9XCJdYClcbiAgICAgICAgLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfS4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cmVhbEluZGV4fVwiXWApXG4gICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9XG4gIC8vIE5leHQgU2xpZGVcbiAgbGV0IG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHRBbGwoYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gIGlmIChwYXJhbXMubG9vcCAmJiBuZXh0U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dFNsaWRlID0gc2xpZGVzLmVxKDApO1xuICAgIG5leHRTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICB9XG4gIC8vIFByZXYgU2xpZGVcbiAgbGV0IHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXZBbGwoYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gIGlmIChwYXJhbXMubG9vcCAmJiBwcmV2U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgcHJldlNsaWRlID0gc2xpZGVzLmVxKC0xKTtcbiAgICBwcmV2U2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgfVxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICBpZiAobmV4dFNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfTpub3QoLiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7bmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyl9XCJdYClcbiAgICAgICAgLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWxcbiAgICAgICAgLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc30uJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke25leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpfVwiXWApXG4gICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgIH1cbiAgICBpZiAocHJldlNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbFxuICAgICAgICAuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfTpub3QoLiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyl9XCJdYClcbiAgICAgICAgLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWxcbiAgICAgICAgLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc30uJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3ByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpfVwiXWApXG4gICAgICAgIC5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleCAobmV3QWN0aXZlSW5kZXgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgY29uc3Qge1xuICAgIHNsaWRlc0dyaWQsIHNuYXBHcmlkLCBwYXJhbXMsIGFjdGl2ZUluZGV4OiBwcmV2aW91c0luZGV4LCByZWFsSW5kZXg6IHByZXZpb3VzUmVhbEluZGV4LCBzbmFwSW5kZXg6IHByZXZpb3VzU25hcEluZGV4LFxuICB9ID0gc3dpcGVyO1xuICBsZXQgYWN0aXZlSW5kZXggPSBuZXdBY3RpdmVJbmRleDtcbiAgbGV0IHNuYXBJbmRleDtcbiAgaWYgKHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSAtICgoc2xpZGVzR3JpZFtpICsgMV0gLSBzbGlkZXNHcmlkW2ldKSAvIDIpKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldICYmIHRyYW5zbGF0ZSA8IHNsaWRlc0dyaWRbaSArIDFdKSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG4gICAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgICBpZiAoYWN0aXZlSW5kZXggPCAwIHx8IHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIGFjdGl2ZUluZGV4ID0gMDtcbiAgICB9XG4gIH1cbiAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgc25hcEluZGV4ID0gc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpO1xuICB9IGVsc2Uge1xuICAgIHNuYXBJbmRleCA9IE1hdGguZmxvb3IoYWN0aXZlSW5kZXggLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICB9XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoc25hcEluZGV4ICE9PSBwcmV2aW91c1NuYXBJbmRleCkge1xuICAgICAgc3dpcGVyLnNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gR2V0IHJlYWwgaW5kZXhcbiAgY29uc3QgcmVhbEluZGV4ID0gcGFyc2VJbnQoc3dpcGVyLnNsaWRlcy5lcShhY3RpdmVJbmRleCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSB8fCBhY3RpdmVJbmRleCwgMTApO1xuXG4gIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICBzbmFwSW5kZXgsXG4gICAgcmVhbEluZGV4LFxuICAgIHByZXZpb3VzSW5kZXgsXG4gICAgYWN0aXZlSW5kZXgsXG4gIH0pO1xuICBzd2lwZXIuZW1pdCgnYWN0aXZlSW5kZXhDaGFuZ2UnKTtcbiAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuICBpZiAocHJldmlvdXNSZWFsSW5kZXggIT09IHJlYWxJbmRleCkge1xuICAgIHN3aXBlci5lbWl0KCdyZWFsSW5kZXhDaGFuZ2UnKTtcbiAgfVxuICBpZiAoc3dpcGVyLmluaXRpYWxpemVkIHx8IHN3aXBlci5ydW5DYWxsYmFja3NPbkluaXQpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2UnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDbGlja2VkU2xpZGUgKGUpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgY29uc3Qgc2xpZGUgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KGAuJHtwYXJhbXMuc2xpZGVDbGFzc31gKVswXTtcbiAgbGV0IHNsaWRlRm91bmQgPSBmYWxzZTtcbiAgaWYgKHNsaWRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHNsaWRlRm91bmQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzbGlkZSAmJiBzbGlkZUZvdW5kKSB7XG4gICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHNsaWRlO1xuICAgIGlmIChzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHBhcnNlSW50KCQoc2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9ICQoc2xpZGUpLmluZGV4KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy5zbGlkZVRvQ2xpY2tlZFNsaWRlICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSBzd2lwZXIuYWN0aXZlSW5kZXgpIHtcbiAgICBzd2lwZXIuc2xpZGVUb0NsaWNrZWRTbGlkZSgpO1xuICB9XG59XG5cbnZhciB1cGRhdGUgPSB7XG4gIHVwZGF0ZVNpemUsXG4gIHVwZGF0ZVNsaWRlcyxcbiAgdXBkYXRlQXV0b0hlaWdodCxcbiAgdXBkYXRlU2xpZGVzT2Zmc2V0LFxuICB1cGRhdGVTbGlkZXNQcm9ncmVzcyxcbiAgdXBkYXRlUHJvZ3Jlc3MsXG4gIHVwZGF0ZVNsaWRlc0NsYXNzZXMsXG4gIHVwZGF0ZUFjdGl2ZUluZGV4LFxuICB1cGRhdGVDbGlja2VkU2xpZGUsXG59O1xuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUgKGF4aXMgPSB0aGlzLmlzSG9yaXpvbnRhbCgpID8gJ3gnIDogJ3knKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgY29uc3Qge1xuICAgIHBhcmFtcywgcnRsVHJhbnNsYXRlOiBydGwsIHRyYW5zbGF0ZSwgJHdyYXBwZXJFbCxcbiAgfSA9IHN3aXBlcjtcblxuICBpZiAocGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICByZXR1cm4gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGxldCBjdXJyZW50VHJhbnNsYXRlID0gVXRpbHMuZ2V0VHJhbnNsYXRlKCR3cmFwcGVyRWxbMF0sIGF4aXMpO1xuICBpZiAocnRsKSBjdXJyZW50VHJhbnNsYXRlID0gLWN1cnJlbnRUcmFuc2xhdGU7XG5cbiAgcmV0dXJuIGN1cnJlbnRUcmFuc2xhdGUgfHwgMDtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNsYXRlICh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcnRsVHJhbnNsYXRlOiBydGwsIHBhcmFtcywgJHdyYXBwZXJFbCwgcHJvZ3Jlc3MsXG4gIH0gPSBzd2lwZXI7XG4gIGxldCB4ID0gMDtcbiAgbGV0IHkgPSAwO1xuICBjb25zdCB6ID0gMDtcblxuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgeCA9IHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgeSA9IHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gIH1cblxuICBpZiAoIXBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgaWYgKFN1cHBvcnQudHJhbnNmb3JtczNkKSAkd3JhcHBlckVsLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgKTtcbiAgICBlbHNlICR3cmFwcGVyRWwudHJhbnNmb3JtKGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYCk7XG4gIH1cbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgc3dpcGVyLnRyYW5zbGF0ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHggOiB5O1xuXG4gIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG4gIGxldCBuZXdQcm9ncmVzcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gKHRyYW5zbGF0ZXNEaWZmKTtcbiAgfVxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbn1cblxuZnVuY3Rpb24gbWluVHJhbnNsYXRlICgpIHtcbiAgcmV0dXJuICgtdGhpcy5zbmFwR3JpZFswXSk7XG59XG5cbmZ1bmN0aW9uIG1heFRyYW5zbGF0ZSAoKSB7XG4gIHJldHVybiAoLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGggLSAxXSk7XG59XG5cbnZhciB0cmFuc2xhdGUgPSB7XG4gIGdldFRyYW5zbGF0ZSxcbiAgc2V0VHJhbnNsYXRlLFxuICBtaW5UcmFuc2xhdGUsXG4gIG1heFRyYW5zbGF0ZSxcbn07XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb24gKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcblxuICBzd2lwZXIuJHdyYXBwZXJFbC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNpdGlvbicsIGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQgKHJ1bkNhbGxiYWNrcyA9IHRydWUsIGRpcmVjdGlvbikge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7IGFjdGl2ZUluZGV4LCBwYXJhbXMsIHByZXZpb3VzSW5kZXggfSA9IHN3aXBlcjtcbiAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgfVxuXG4gIGxldCBkaXIgPSBkaXJlY3Rpb247XG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO1xuICAgIGVsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO1xuICAgIGVsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnKTtcblxuICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KCdzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZCAocnVuQ2FsbGJhY2tzID0gdHJ1ZSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHsgYWN0aXZlSW5kZXgsIHByZXZpb3VzSW5kZXggfSA9IHN3aXBlcjtcbiAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcblxuICBsZXQgZGlyID0gZGlyZWN0aW9uO1xuICBpZiAoIWRpcikge1xuICAgIGlmIChhY3RpdmVJbmRleCA+IHByZXZpb3VzSW5kZXgpIGRpciA9ICduZXh0JztcbiAgICBlbHNlIGlmIChhY3RpdmVJbmRleCA8IHByZXZpb3VzSW5kZXgpIGRpciA9ICdwcmV2JztcbiAgICBlbHNlIGRpciA9ICdyZXNldCc7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuXG4gIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoZGlyID09PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVSZXNldFRyYW5zaXRpb25FbmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcpO1xuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHRyYW5zaXRpb24gPSB7XG4gIHNldFRyYW5zaXRpb24sXG4gIHRyYW5zaXRpb25TdGFydCxcbiAgdHJhbnNpdGlvbkVuZCxcbn07XG5cbmZ1bmN0aW9uIHNsaWRlVG8gKGluZGV4ID0gMCwgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgbGV0IHNsaWRlSW5kZXggPSBpbmRleDtcbiAgaWYgKHNsaWRlSW5kZXggPCAwKSBzbGlkZUluZGV4ID0gMDtcblxuICBjb25zdCB7XG4gICAgcGFyYW1zLCBzbmFwR3JpZCwgc2xpZGVzR3JpZCwgcHJldmlvdXNJbmRleCwgYWN0aXZlSW5kZXgsIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICB9ID0gc3dpcGVyO1xuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHNuYXBJbmRleCA9IE1hdGguZmxvb3Ioc2xpZGVJbmRleCAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuXG4gIGlmICgoYWN0aXZlSW5kZXggfHwgcGFyYW1zLmluaXRpYWxTbGlkZSB8fCAwKSA9PT0gKHByZXZpb3VzSW5kZXggfHwgMCkgJiYgcnVuQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IC1zbmFwR3JpZFtzbmFwSW5kZXhdO1xuXG4gIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcblxuICAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICgtTWF0aC5mbG9vcih0cmFuc2xhdGUgKiAxMDApID49IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpXSAqIDEwMCkpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIERpcmVjdGlvbnMgbG9ja3NcbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHRyYW5zbGF0ZSA8IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHRyYW5zbGF0ZSA+IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlID4gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBpZiAoKGFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbGV0IGRpcmVjdGlvbjtcbiAgaWYgKHNsaWRlSW5kZXggPiBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ25leHQnO1xuICBlbHNlIGlmIChzbGlkZUluZGV4IDwgYWN0aXZlSW5kZXgpIGRpcmVjdGlvbiA9ICdwcmV2JztcbiAgZWxzZSBkaXJlY3Rpb24gPSAncmVzZXQnO1xuXG5cbiAgLy8gVXBkYXRlIEluZGV4XG4gIGlmICgocnRsICYmIC10cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUpIHx8ICghcnRsICYmIHRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSkpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgLy8gVXBkYXRlIEhlaWdodFxuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICB9XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBpZiAocGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJykge1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwIHx8ICFTdXBwb3J0LnRyYW5zaXRpb24pIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIGlmICghc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG4gICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2xpZGVUb0xvb3AgKGluZGV4ID0gMCwgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgbGV0IG5ld0luZGV4ID0gaW5kZXg7XG4gIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICBuZXdJbmRleCArPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICB9XG5cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVOZXh0IChzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7IHBhcmFtcywgYW5pbWF0aW5nIH0gPSBzd2lwZXI7XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChhbmltYXRpbmcpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCArIHBhcmFtcy5zbGlkZXNQZXJHcm91cCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xuICB9XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBwYXJhbXMuc2xpZGVzUGVyR3JvdXAsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn1cblxuLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5mdW5jdGlvbiBzbGlkZVByZXYgKHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQsIHJ1bkNhbGxiYWNrcyA9IHRydWUsIGludGVybmFsKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsIGFuaW1hdGluZywgc25hcEdyaWQsIHNsaWRlc0dyaWQsIHJ0bFRyYW5zbGF0ZSxcbiAgfSA9IHN3aXBlcjtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICB9XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbCkge1xuICAgIGlmICh2YWwgPCAwKSByZXR1cm4gLU1hdGguZmxvb3IoTWF0aC5hYnModmFsKSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodmFsKTtcbiAgfVxuICBjb25zdCBub3JtYWxpemVkVHJhbnNsYXRlID0gbm9ybWFsaXplKHRyYW5zbGF0ZSk7XG4gIGNvbnN0IG5vcm1hbGl6ZWRTbmFwR3JpZCA9IHNuYXBHcmlkLm1hcCgodmFsKSA9PiBub3JtYWxpemUodmFsKSk7XG4gIGNvbnN0IG5vcm1hbGl6ZWRTbGlkZXNHcmlkID0gc2xpZGVzR3JpZC5tYXAoKHZhbCkgPT4gbm9ybWFsaXplKHZhbCkpO1xuXG4gIGNvbnN0IGN1cnJlbnRTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSldO1xuICBjb25zdCBwcmV2U25hcCA9IHNuYXBHcmlkW25vcm1hbGl6ZWRTbmFwR3JpZC5pbmRleE9mKG5vcm1hbGl6ZWRUcmFuc2xhdGUpIC0gMV07XG4gIGxldCBwcmV2SW5kZXg7XG4gIGlmICh0eXBlb2YgcHJldlNuYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJldkluZGV4ID0gc2xpZGVzR3JpZC5pbmRleE9mKHByZXZTbmFwKTtcbiAgICBpZiAocHJldkluZGV4IDwgMCkgcHJldkluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IC0gMTtcbiAgfVxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8ocHJldkluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59XG5cbi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZnVuY3Rpb24gc2xpZGVSZXNldCAoc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmZ1bmN0aW9uIHNsaWRlVG9DbG9zZXN0IChzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBsZXQgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIGNvbnN0IHNuYXBJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcblxuICBpZiAoc25hcEluZGV4IDwgc3dpcGVyLnNuYXBHcmlkLmxlbmd0aCAtIDEpIHtcbiAgICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuXG4gICAgY29uc3QgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICBjb25zdCBuZXh0U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggKyAxXTtcblxuICAgIGlmICgodHJhbnNsYXRlIC0gY3VycmVudFNuYXApID4gKG5leHRTbmFwIC0gY3VycmVudFNuYXApIC8gMikge1xuICAgICAgaW5kZXggPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufVxuXG5mdW5jdGlvbiBzbGlkZVRvQ2xpY2tlZFNsaWRlICgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgeyBwYXJhbXMsICR3cmFwcGVyRWwgfSA9IHN3aXBlcjtcblxuICBjb25zdCBzbGlkZXNQZXJWaWV3ID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gIGxldCBzbGlkZVRvSW5kZXggPSBzd2lwZXIuY2xpY2tlZEluZGV4O1xuICBsZXQgcmVhbEluZGV4O1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KCQoc3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKHNsaWRlVG9JbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMgLSAoc2xpZGVzUGVyVmlldyAvIDIpKVxuICAgICAgICB8fCAoc2xpZGVUb0luZGV4ID4gKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcykgKyAoc2xpZGVzUGVyVmlldyAvIDIpKVxuICAgICAgKSB7XG4gICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIHNsaWRlVG9JbmRleCA9ICR3cmFwcGVyRWxcbiAgICAgICAgICAuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cmVhbEluZGV4fVwiXTpub3QoLiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KWApXG4gICAgICAgICAgLmVxKDApXG4gICAgICAgICAgLmluZGV4KCk7XG5cbiAgICAgICAgVXRpbHMubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNsaWRlVG9JbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIHNsaWRlVG9JbmRleCA9ICR3cmFwcGVyRWxcbiAgICAgICAgLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3JlYWxJbmRleH1cIl06bm90KC4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfSlgKVxuICAgICAgICAuZXEoMClcbiAgICAgICAgLmluZGV4KCk7XG5cbiAgICAgIFV0aWxzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICB9XG59XG5cbnZhciBzbGlkZSA9IHtcbiAgc2xpZGVUbyxcbiAgc2xpZGVUb0xvb3AsXG4gIHNsaWRlTmV4dCxcbiAgc2xpZGVQcmV2LFxuICBzbGlkZVJlc2V0LFxuICBzbGlkZVRvQ2xvc2VzdCxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZSxcbn07XG5cbmZ1bmN0aW9uIGxvb3BDcmVhdGUgKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7IHBhcmFtcywgJHdyYXBwZXJFbCB9ID0gc3dpcGVyO1xuICAvLyBSZW1vdmUgZHVwbGljYXRlZCBzbGlkZXNcbiAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9YCkucmVtb3ZlKCk7XG5cbiAgbGV0IHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApO1xuXG4gIGlmIChwYXJhbXMubG9vcEZpbGxHcm91cFdpdGhCbGFuaykge1xuICAgIGNvbnN0IGJsYW5rU2xpZGVzTnVtID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwIC0gKHNsaWRlcy5sZW5ndGggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICAgIGlmIChibGFua1NsaWRlc051bSAhPT0gcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsYW5rU2xpZGVzTnVtOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYmxhbmtOb2RlID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuYWRkQ2xhc3MoYCR7cGFyYW1zLnNsaWRlQ2xhc3N9ICR7cGFyYW1zLnNsaWRlQmxhbmtDbGFzc31gKTtcbiAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoYmxhbmtOb2RlKTtcbiAgICAgIH1cbiAgICAgIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmICFwYXJhbXMubG9vcGVkU2xpZGVzKSBwYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcblxuICBzd2lwZXIubG9vcGVkU2xpZGVzID0gcGFyc2VJbnQocGFyYW1zLmxvb3BlZFNsaWRlcyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldywgMTApO1xuICBzd2lwZXIubG9vcGVkU2xpZGVzICs9IHBhcmFtcy5sb29wQWRkaXRpb25hbFNsaWRlcztcbiAgaWYgKHN3aXBlci5sb29wZWRTbGlkZXMgPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBwcmVwZW5kU2xpZGVzID0gW107XG4gIGNvbnN0IGFwcGVuZFNsaWRlcyA9IFtdO1xuICBzbGlkZXMuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgY29uc3Qgc2xpZGUgPSAkKGVsKTtcbiAgICBpZiAoaW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzKSBhcHBlbmRTbGlkZXMucHVzaChlbCk7XG4gICAgaWYgKGluZGV4IDwgc2xpZGVzLmxlbmd0aCAmJiBpbmRleCA+PSBzbGlkZXMubGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcykgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwZW5kU2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoJChhcHBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG4gIGZvciAobGV0IGkgPSBwcmVwZW5kU2xpZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5wcmVwZW5kKCQocHJlcGVuZFNsaWRlc1tpXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9vcEZpeCAoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsIGFjdGl2ZUluZGV4LCBzbGlkZXMsIGxvb3BlZFNsaWRlcywgYWxsb3dTbGlkZVByZXYsIGFsbG93U2xpZGVOZXh0LCBzbmFwR3JpZCwgcnRsVHJhbnNsYXRlOiBydGwsXG4gIH0gPSBzd2lwZXI7XG4gIGxldCBuZXdJbmRleDtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcblxuICBjb25zdCBzbmFwVHJhbnNsYXRlID0gLXNuYXBHcmlkW2FjdGl2ZUluZGV4XTtcbiAgY29uc3QgZGlmZiA9IHNuYXBUcmFuc2xhdGUgLSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7XG5cblxuICAvLyBGaXggRm9yIE5lZ2F0aXZlIE92ZXJzbGlkaW5nXG4gIGlmIChhY3RpdmVJbmRleCA8IGxvb3BlZFNsaWRlcykge1xuICAgIG5ld0luZGV4ID0gKHNsaWRlcy5sZW5ndGggLSAobG9vcGVkU2xpZGVzICogMykpICsgYWN0aXZlSW5kZXg7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgIGNvbnN0IHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgaWYgKHNsaWRlQ2hhbmdlZCAmJiBkaWZmICE9PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKChydGwgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpIC0gZGlmZik7XG4gICAgfVxuICB9IGVsc2UgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmIGFjdGl2ZUluZGV4ID49IGxvb3BlZFNsaWRlcyAqIDIpIHx8IChhY3RpdmVJbmRleCA+PSBzbGlkZXMubGVuZ3RoIC0gbG9vcGVkU2xpZGVzKSkge1xuICAgIC8vIEZpeCBGb3IgUG9zaXRpdmUgT3ZlcnNsaWRpbmdcbiAgICBuZXdJbmRleCA9IC1zbGlkZXMubGVuZ3RoICsgYWN0aXZlSW5kZXggKyBsb29wZWRTbGlkZXM7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgIGNvbnN0IHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgaWYgKHNsaWRlQ2hhbmdlZCAmJiBkaWZmICE9PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKChydGwgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpIC0gZGlmZik7XG4gICAgfVxuICB9XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcbn1cblxuZnVuY3Rpb24gbG9vcERlc3Ryb3kgKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7ICR3cmFwcGVyRWwsIHBhcmFtcywgc2xpZGVzIH0gPSBzd2lwZXI7XG4gICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfS4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfSwuJHtwYXJhbXMuc2xpZGVDbGFzc30uJHtwYXJhbXMuc2xpZGVCbGFua0NsYXNzfWApLnJlbW92ZSgpO1xuICBzbGlkZXMucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbn1cblxudmFyIGxvb3AgPSB7XG4gIGxvb3BDcmVhdGUsXG4gIGxvb3BGaXgsXG4gIGxvb3BEZXN0cm95LFxufTtcblxuZnVuY3Rpb24gc2V0R3JhYkN1cnNvciAobW92aW5nKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChTdXBwb3J0LnRvdWNoIHx8ICFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggfHwgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQpKSByZXR1cm47XG4gIGNvbnN0IGVsID0gc3dpcGVyLmVsO1xuICBlbC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctd2Via2l0LWdyYWJiaW5nJyA6ICctd2Via2l0LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLW1vei1ncmFiYmluJyA6ICctbW96LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInO1xufVxuXG5mdW5jdGlvbiB1bnNldEdyYWJDdXJzb3IgKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoU3VwcG9ydC50b3VjaCB8fCAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCkpIHJldHVybjtcbiAgc3dpcGVyLmVsLnN0eWxlLmN1cnNvciA9ICcnO1xufVxuXG52YXIgZ3JhYkN1cnNvciA9IHtcbiAgc2V0R3JhYkN1cnNvcixcbiAgdW5zZXRHcmFiQ3Vyc29yLFxufTtcblxuZnVuY3Rpb24gYXBwZW5kU2xpZGUgKHNsaWRlcykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7ICR3cmFwcGVyRWwsIHBhcmFtcyB9ID0gc3dpcGVyO1xuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgfVxuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0pICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gIH1cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgU3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGVuZFNsaWRlIChzbGlkZXMpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgeyBwYXJhbXMsICR3cmFwcGVyRWwsIGFjdGl2ZUluZGV4IH0gPSBzd2lwZXI7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cbiAgbGV0IG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyAxO1xuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0pICR3cmFwcGVyRWwucHJlcGVuZChzbGlkZXNbaV0pO1xuICAgIH1cbiAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzKTtcbiAgfVxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG4gIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBTdXBwb3J0Lm9ic2VydmVyKSkge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBhZGRTbGlkZSAoaW5kZXgsIHNsaWRlcykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7ICR3cmFwcGVyRWwsIHBhcmFtcywgYWN0aXZlSW5kZXggfSA9IHN3aXBlcjtcbiAgbGV0IGFjdGl2ZUluZGV4QnVmZmVyID0gYWN0aXZlSW5kZXg7XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApO1xuICB9XG4gIGNvbnN0IGJhc2VMZW5ndGggPSBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgaWYgKGluZGV4IDw9IDApIHtcbiAgICBzd2lwZXIucHJlcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbmRleCA+PSBiYXNlTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmFwcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4QnVmZmVyID4gaW5kZXggPyBhY3RpdmVJbmRleEJ1ZmZlciArIDEgOiBhY3RpdmVJbmRleEJ1ZmZlcjtcblxuICBjb25zdCBzbGlkZXNCdWZmZXIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IGJhc2VMZW5ndGggLSAxOyBpID49IGluZGV4OyBpIC09IDEpIHtcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgIGN1cnJlbnRTbGlkZS5yZW1vdmUoKTtcbiAgICBzbGlkZXNCdWZmZXIudW5zaGlmdChjdXJyZW50U2xpZGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW2ldKSAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXNbaV0pO1xuICAgIH1cbiAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4QnVmZmVyID4gaW5kZXggPyBhY3RpdmVJbmRleEJ1ZmZlciArIHNsaWRlcy5sZW5ndGggOiBhY3RpdmVJbmRleEJ1ZmZlcjtcbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXMpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNCdWZmZXIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXNCdWZmZXJbaV0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgU3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTbGlkZSAoc2xpZGVzSW5kZXhlcykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7IHBhcmFtcywgJHdyYXBwZXJFbCwgYWN0aXZlSW5kZXggfSA9IHN3aXBlcjtcblxuICBsZXQgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIuc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9YCk7XG4gIH1cbiAgbGV0IG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXI7XG4gIGxldCBpbmRleFRvUmVtb3ZlO1xuXG4gIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzSW5kZXhlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzSW5kZXhlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXNbaV07XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgc3dpcGVyLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgfVxuICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICB9IGVsc2Uge1xuICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzO1xuICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzd2lwZXIuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xuICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCEocGFyYW1zLm9ic2VydmVyICYmIFN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsU2xpZGVzICgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcblxuICBjb25zdCBzbGlkZXNJbmRleGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgfVxuICBzd2lwZXIucmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcyk7XG59XG5cbnZhciBtYW5pcHVsYXRpb24gPSB7XG4gIGFwcGVuZFNsaWRlLFxuICBwcmVwZW5kU2xpZGUsXG4gIGFkZFNsaWRlLFxuICByZW1vdmVTbGlkZSxcbiAgcmVtb3ZlQWxsU2xpZGVzLFxufTtcblxuY29uc3QgRGV2aWNlID0gKGZ1bmN0aW9uIERldmljZSgpIHtcbiAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICBjb25zdCBkZXZpY2UgPSB7XG4gICAgaW9zOiBmYWxzZSxcbiAgICBhbmRyb2lkOiBmYWxzZSxcbiAgICBhbmRyb2lkQ2hyb21lOiBmYWxzZSxcbiAgICBkZXNrdG9wOiBmYWxzZSxcbiAgICB3aW5kb3dzOiBmYWxzZSxcbiAgICBpcGhvbmU6IGZhbHNlLFxuICAgIGlwb2Q6IGZhbHNlLFxuICAgIGlwYWQ6IGZhbHNlLFxuICAgIGNvcmRvdmE6IHdpbmRvdy5jb3Jkb3ZhIHx8IHdpbmRvdy5waG9uZWdhcCxcbiAgICBwaG9uZWdhcDogd2luZG93LmNvcmRvdmEgfHwgd2luZG93LnBob25lZ2FwLFxuICB9O1xuXG4gIGNvbnN0IHdpbmRvd3MgPSB1YS5tYXRjaCgvKFdpbmRvd3MgUGhvbmUpOz9bXFxzXFwvXSsoW1xcZC5dKyk/Lyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgY29uc3QgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBjb25zdCBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKTtcbiAgY29uc3QgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gIGNvbnN0IGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuXG5cbiAgLy8gV2luZG93c1xuICBpZiAod2luZG93cykge1xuICAgIGRldmljZS5vcyA9ICd3aW5kb3dzJztcbiAgICBkZXZpY2Uub3NWZXJzaW9uID0gd2luZG93c1syXTtcbiAgICBkZXZpY2Uud2luZG93cyA9IHRydWU7XG4gIH1cbiAgLy8gQW5kcm9pZFxuICBpZiAoYW5kcm9pZCAmJiAhd2luZG93cykge1xuICAgIGRldmljZS5vcyA9ICdhbmRyb2lkJztcbiAgICBkZXZpY2Uub3NWZXJzaW9uID0gYW5kcm9pZFsyXTtcbiAgICBkZXZpY2UuYW5kcm9pZCA9IHRydWU7XG4gICAgZGV2aWNlLmFuZHJvaWRDaHJvbWUgPSB1YS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID49IDA7XG4gIH1cbiAgaWYgKGlwYWQgfHwgaXBob25lIHx8IGlwb2QpIHtcbiAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICBkZXZpY2UuaW9zID0gdHJ1ZTtcbiAgfVxuICAvLyBpT1NcbiAgaWYgKGlwaG9uZSAmJiAhaXBvZCkge1xuICAgIGRldmljZS5vc1ZlcnNpb24gPSBpcGhvbmVbMl0ucmVwbGFjZSgvXy9nLCAnLicpO1xuICAgIGRldmljZS5pcGhvbmUgPSB0cnVlO1xuICB9XG4gIGlmIChpcGFkKSB7XG4gICAgZGV2aWNlLm9zVmVyc2lvbiA9IGlwYWRbMl0ucmVwbGFjZSgvXy9nLCAnLicpO1xuICAgIGRldmljZS5pcGFkID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXBvZCkge1xuICAgIGRldmljZS5vc1ZlcnNpb24gPSBpcG9kWzNdID8gaXBvZFszXS5yZXBsYWNlKC9fL2csICcuJykgOiBudWxsO1xuICAgIGRldmljZS5pcGhvbmUgPSB0cnVlO1xuICB9XG4gIC8vIGlPUyA4KyBjaGFuZ2VkIFVBXG4gIGlmIChkZXZpY2UuaW9zICYmIGRldmljZS5vc1ZlcnNpb24gJiYgdWEuaW5kZXhPZignVmVyc2lvbi8nKSA+PSAwKSB7XG4gICAgaWYgKGRldmljZS5vc1ZlcnNpb24uc3BsaXQoJy4nKVswXSA9PT0gJzEwJykge1xuICAgICAgZGV2aWNlLm9zVmVyc2lvbiA9IHVhLnRvTG93ZXJDYXNlKCkuc3BsaXQoJ3ZlcnNpb24vJylbMV0uc3BsaXQoJyAnKVswXTtcbiAgICB9XG4gIH1cblxuICAvLyBEZXNrdG9wXG4gIGRldmljZS5kZXNrdG9wID0gIShkZXZpY2Uub3MgfHwgZGV2aWNlLmFuZHJvaWQgfHwgZGV2aWNlLndlYlZpZXcpO1xuXG4gIC8vIFdlYnZpZXdcbiAgZGV2aWNlLndlYlZpZXcgPSAoaXBob25lIHx8IGlwYWQgfHwgaXBvZCkgJiYgdWEubWF0Y2goLy4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaSk7XG5cbiAgLy8gTWluaW1hbCBVSVxuICBpZiAoZGV2aWNlLm9zICYmIGRldmljZS5vcyA9PT0gJ2lvcycpIHtcbiAgICBjb25zdCBvc1ZlcnNpb25BcnIgPSBkZXZpY2Uub3NWZXJzaW9uLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgbWV0YVZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKTtcbiAgICBkZXZpY2UubWluaW1hbFVpID0gIWRldmljZS53ZWJWaWV3XG4gICAgICAmJiAoaXBvZCB8fCBpcGhvbmUpXG4gICAgICAmJiAob3NWZXJzaW9uQXJyWzBdICogMSA9PT0gNyA/IG9zVmVyc2lvbkFyclsxXSAqIDEgPj0gMSA6IG9zVmVyc2lvbkFyclswXSAqIDEgPiA3KVxuICAgICAgJiYgbWV0YVZpZXdwb3J0ICYmIG1ldGFWaWV3cG9ydC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKS5pbmRleE9mKCdtaW5pbWFsLXVpJykgPj0gMDtcbiAgfVxuXG4gIC8vIFBpeGVsIFJhdGlvXG4gIGRldmljZS5waXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblxuICAvLyBFeHBvcnQgb2JqZWN0XG4gIHJldHVybiBkZXZpY2U7XG59KCkpO1xuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQgKGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBjb25zdCB7IHBhcmFtcywgdG91Y2hlcyB9ID0gc3dpcGVyO1xuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gIGRhdGEuaXNUb3VjaEV2ZW50ID0gZS50eXBlID09PSAndG91Y2hzdGFydCc7XG4gIGlmICghZGF0YS5pc1RvdWNoRXZlbnQgJiYgJ3doaWNoJyBpbiBlICYmIGUud2hpY2ggPT09IDMpIHJldHVybjtcbiAgaWYgKCFkYXRhLmlzVG91Y2hFdmVudCAmJiAnYnV0dG9uJyBpbiBlICYmIGUuYnV0dG9uID4gMCkgcmV0dXJuO1xuICBpZiAoZGF0YS5pc1RvdWNoZWQgJiYgZGF0YS5pc01vdmVkKSByZXR1cm47XG4gIGlmIChwYXJhbXMubm9Td2lwaW5nICYmICQoZS50YXJnZXQpLmNsb3Nlc3QocGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yID8gcGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yIDogYC4ke3BhcmFtcy5ub1N3aXBpbmdDbGFzc31gKVswXSkge1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhcmFtcy5zd2lwZUhhbmRsZXIpIHtcbiAgICBpZiAoISQoZSkuY2xvc2VzdChwYXJhbXMuc3dpcGVIYW5kbGVyKVswXSkgcmV0dXJuO1xuICB9XG5cbiAgdG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgY29uc3Qgc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgY29uc3Qgc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcblxuICAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIChVSVdlYlZpZXcpIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcblxuICBjb25zdCBlZGdlU3dpcGVEZXRlY3Rpb24gPSBwYXJhbXMuZWRnZVN3aXBlRGV0ZWN0aW9uIHx8IHBhcmFtcy5pT1NFZGdlU3dpcGVEZXRlY3Rpb247XG4gIGNvbnN0IGVkZ2VTd2lwZVRocmVzaG9sZCA9IHBhcmFtcy5lZGdlU3dpcGVUaHJlc2hvbGQgfHwgcGFyYW1zLmlPU0VkZ2VTd2lwZVRocmVzaG9sZDtcbiAgaWYgKFxuICAgIGVkZ2VTd2lwZURldGVjdGlvblxuICAgICYmICgoc3RhcnRYIDw9IGVkZ2VTd2lwZVRocmVzaG9sZClcbiAgICB8fCAoc3RhcnRYID49IHdpbmRvdy5zY3JlZW4ud2lkdGggLSBlZGdlU3dpcGVUaHJlc2hvbGQpKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBVdGlscy5leHRlbmQoZGF0YSwge1xuICAgIGlzVG91Y2hlZDogdHJ1ZSxcbiAgICBpc01vdmVkOiBmYWxzZSxcbiAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB0cnVlLFxuICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZCxcbiAgfSk7XG5cbiAgdG91Y2hlcy5zdGFydFggPSBzdGFydFg7XG4gIHRvdWNoZXMuc3RhcnRZID0gc3RhcnRZO1xuICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gVXRpbHMubm93KCk7XG4gIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gZmFsc2U7XG4gIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIGxldCBwcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgaWYgKCQoZS50YXJnZXQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKSkgcHJldmVudERlZmF1bHQgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICAmJiAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKVxuICAgICAgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZS50YXJnZXRcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3VsZFByZXZlbnREZWZhdWx0ID0gcHJldmVudERlZmF1bHQgJiYgc3dpcGVyLmFsbG93VG91Y2hNb3ZlICYmIHBhcmFtcy50b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ7XG4gICAgaWYgKHBhcmFtcy50b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuICBzd2lwZXIuZW1pdCgndG91Y2hTdGFydCcsIGUpO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoTW92ZSAoZXZlbnQpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGNvbnN0IHsgcGFyYW1zLCB0b3VjaGVzLCBydGxUcmFuc2xhdGU6IHJ0bCB9ID0gc3dpcGVyO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuICBpZiAoIWRhdGEuaXNUb3VjaGVkKSB7XG4gICAgaWYgKGRhdGEuc3RhcnRNb3ZpbmcgJiYgZGF0YS5pc1Njcm9sbGluZykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZS50eXBlID09PSAnbW91c2Vtb3ZlJykgcmV0dXJuO1xuICBjb25zdCBwYWdlWCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICBjb25zdCBwYWdlWSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICBpZiAoZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlcikge1xuICAgIHRvdWNoZXMuc3RhcnRYID0gcGFnZVg7XG4gICAgdG91Y2hlcy5zdGFydFkgPSBwYWdlWTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFzd2lwZXIuYWxsb3dUb3VjaE1vdmUpIHtcbiAgICAvLyBpc01vdmVkID0gdHJ1ZTtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgIGlmIChkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgVXRpbHMuZXh0ZW5kKHRvdWNoZXMsIHtcbiAgICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgY3VycmVudFg6IHBhZ2VYLFxuICAgICAgICBjdXJyZW50WTogcGFnZVksXG4gICAgICB9KTtcbiAgICAgIGRhdGEudG91Y2hTdGFydFRpbWUgPSBVdGlscy5ub3coKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcyAmJiAhcGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgICAgLy8gVmVydGljYWxcbiAgICAgIGlmIChcbiAgICAgICAgKHBhZ2VZIDwgdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpXG4gICAgICAgIHx8IChwYWdlWSA+IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKVxuICAgICAgKSB7XG4gICAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChwYWdlWCA8IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKVxuICAgICAgfHwgKHBhZ2VYID4gdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICQoZS50YXJnZXQpLmlzKGRhdGEuZm9ybUVsZW1lbnRzKSkge1xuICAgICAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlJywgZSk7XG4gIH1cbiAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuO1xuXG4gIHRvdWNoZXMuY3VycmVudFggPSBwYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IHBhZ2VZO1xuXG4gIGNvbnN0IGRpZmZYID0gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYO1xuICBjb25zdCBkaWZmWSA9IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydCgoZGlmZlggKiogMikgKyAoZGlmZlkgKiogMikpIDwgc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQpIHJldHVybjtcblxuICBpZiAodHlwZW9mIGRhdGEuaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHRvdWNoQW5nbGU7XG4gICAgaWYgKChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgdG91Y2hlcy5jdXJyZW50WSA9PT0gdG91Y2hlcy5zdGFydFkpIHx8IChzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIHRvdWNoZXMuY3VycmVudFggPT09IHRvdWNoZXMuc3RhcnRYKSkge1xuICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmICgoZGlmZlggKiBkaWZmWCkgKyAoZGlmZlkgKiBkaWZmWSkgPj0gMjUpIHtcbiAgICAgICAgdG91Y2hBbmdsZSA9IChNYXRoLmF0YW4yKE1hdGguYWJzKGRpZmZZKSwgTWF0aC5hYnMoZGlmZlgpKSAqIDE4MCkgLyBNYXRoLlBJO1xuICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlIDogKDkwIC0gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgfVxuICBpZiAodHlwZW9mIGRhdGEuc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHRvdWNoZXMuY3VycmVudFggIT09IHRvdWNoZXMuc3RhcnRYIHx8IHRvdWNoZXMuY3VycmVudFkgIT09IHRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWRhdGEuc3RhcnRNb3ZpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAocGFyYW1zLnRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiAmJiAhcGFyYW1zLm5lc3RlZCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBpZiAoIWRhdGEuaXNNb3ZlZCkge1xuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICB9XG4gICAgZGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwudHJpZ2dlcignd2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJyk7XG4gICAgfVxuICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IGZhbHNlO1xuICAgIC8vIEdyYWIgQ3Vyc29yXG4gICAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIChzd2lwZXIuYWxsb3dTbGlkZU5leHQgPT09IHRydWUgfHwgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSkge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IodHJ1ZSk7XG4gICAgfVxuICAgIHN3aXBlci5lbWl0KCdzbGlkZXJGaXJzdE1vdmUnLCBlKTtcbiAgfVxuICBzd2lwZXIuZW1pdCgnc2xpZGVyTW92ZScsIGUpO1xuICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuXG4gIGxldCBkaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gZGlmZlggOiBkaWZmWTtcbiAgdG91Y2hlcy5kaWZmID0gZGlmZjtcblxuICBkaWZmICo9IHBhcmFtcy50b3VjaFJhdGlvO1xuICBpZiAocnRsKSBkaWZmID0gLWRpZmY7XG5cbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gZGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuXG4gIGxldCBkaXNhYmxlUGFyZW50U3dpcGVyID0gdHJ1ZTtcbiAgbGV0IHJlc2lzdGFuY2VSYXRpbyA9IHBhcmFtcy5yZXNpc3RhbmNlUmF0aW87XG4gIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgIHJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gIH1cbiAgaWYgKChkaWZmID4gMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpKSB7XG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gKHN3aXBlci5taW5UcmFuc2xhdGUoKSAtIDEpICsgKCgtc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgZGF0YS5zdGFydFRyYW5zbGF0ZSArIGRpZmYpICoqIHJlc2lzdGFuY2VSYXRpbyk7XG4gIH0gZWxzZSBpZiAoZGlmZiA8IDAgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gKHN3aXBlci5tYXhUcmFuc2xhdGUoKSArIDEpIC0gKChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBkYXRhLnN0YXJ0VHJhbnNsYXRlIC0gZGlmZikgKiogcmVzaXN0YW5jZVJhdGlvKTtcbiAgfVxuXG4gIGlmIChkaXNhYmxlUGFyZW50U3dpcGVyKSB7XG4gICAgZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciA9IHRydWU7XG4gIH1cblxuICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA+IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG5cblxuICAvLyBUaHJlc2hvbGRcbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgaWYgKE1hdGguYWJzKGRpZmYpID4gcGFyYW1zLnRocmVzaG9sZCB8fCBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgaWYgKCFkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgICBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgICAgICAgdG91Y2hlcy5zdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZO1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICB0b3VjaGVzLmRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFggOiB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIXBhcmFtcy5mb2xsb3dGaW5nZXIpIHJldHVybjtcblxuICAvLyBVcGRhdGUgYWN0aXZlIGluZGV4IGluIGZyZWUgbW9kZVxuICBpZiAocGFyYW1zLmZyZWVNb2RlIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB9XG4gIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAvLyBWZWxvY2l0eVxuICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxuICAgICAgICB0aW1lOiBkYXRhLnRvdWNoU3RhcnRUaW1lLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRhdGEudmVsb2NpdGllcy5wdXNoKHtcbiAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdjdXJyZW50WCcgOiAnY3VycmVudFknXSxcbiAgICAgIHRpbWU6IFV0aWxzLm5vdygpLFxuICAgIH0pO1xuICB9XG4gIC8vIFVwZGF0ZSBwcm9ncmVzc1xuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTtcbiAgLy8gVXBkYXRlIHRyYW5zbGF0ZVxuICBzd2lwZXIuc2V0VHJhbnNsYXRlKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQgKGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuXG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsIHRvdWNoZXMsIHJ0bFRyYW5zbGF0ZTogcnRsLCAkd3JhcHBlckVsLCBzbGlkZXNHcmlkLCBzbmFwR3JpZCxcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaEVuZCcsIGUpO1xuICB9XG4gIGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcyA9IGZhbHNlO1xuICBpZiAoIWRhdGEuaXNUb3VjaGVkKSB7XG4gICAgaWYgKGRhdGEuaXNNb3ZlZCAmJiBwYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoZmFsc2UpO1xuICAgIH1cbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIFJldHVybiBHcmFiIEN1cnNvclxuICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgZGF0YS5pc01vdmVkICYmIGRhdGEuaXNUb3VjaGVkICYmIChzd2lwZXIuYWxsb3dTbGlkZU5leHQgPT09IHRydWUgfHwgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSkge1xuICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgfVxuXG4gIC8vIFRpbWUgZGlmZlxuICBjb25zdCB0b3VjaEVuZFRpbWUgPSBVdGlscy5ub3coKTtcbiAgY29uc3QgdGltZURpZmYgPSB0b3VjaEVuZFRpbWUgLSBkYXRhLnRvdWNoU3RhcnRUaW1lO1xuXG4gIC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuICBpZiAoc3dpcGVyLmFsbG93Q2xpY2spIHtcbiAgICBzd2lwZXIudXBkYXRlQ2xpY2tlZFNsaWRlKGUpO1xuICAgIHN3aXBlci5lbWl0KCd0YXAnLCBlKTtcbiAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgKHRvdWNoRW5kVGltZSAtIGRhdGEubGFzdENsaWNrVGltZSkgPiAzMDApIHtcbiAgICAgIGlmIChkYXRhLmNsaWNrVGltZW91dCkgY2xlYXJUaW1lb3V0KGRhdGEuY2xpY2tUaW1lb3V0KTtcbiAgICAgIGRhdGEuY2xpY2tUaW1lb3V0ID0gVXRpbHMubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgIHN3aXBlci5lbWl0KCdjbGljaycsIGUpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmICh0b3VjaEVuZFRpbWUgLSBkYXRhLmxhc3RDbGlja1RpbWUpIDwgMzAwKSB7XG4gICAgICBpZiAoZGF0YS5jbGlja1RpbWVvdXQpIGNsZWFyVGltZW91dChkYXRhLmNsaWNrVGltZW91dCk7XG4gICAgICBzd2lwZXIuZW1pdCgnZG91YmxlVGFwJywgZSk7XG4gICAgfVxuICB9XG5cbiAgZGF0YS5sYXN0Q2xpY2tUaW1lID0gVXRpbHMubm93KCk7XG4gIFV0aWxzLm5leHRUaWNrKCgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5kZXN0cm95ZWQpIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCB8fCAhZGF0YS5pc01vdmVkIHx8ICFzd2lwZXIuc3dpcGVEaXJlY3Rpb24gfHwgdG91Y2hlcy5kaWZmID09PSAwIHx8IGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9PT0gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuXG4gIGxldCBjdXJyZW50UG9zO1xuICBpZiAocGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgIGN1cnJlbnRQb3MgPSBydGwgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBvcyA9IC1kYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgaWYgKGN1cnJlbnRQb3MgPCAtc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBvcyA+IC1zd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmxlbmd0aCA8IHNuYXBHcmlkLmxlbmd0aCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbmFwR3JpZC5sZW5ndGggLSAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtKSB7XG4gICAgICBpZiAoZGF0YS52ZWxvY2l0aWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbGFzdE1vdmVFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgY29uc3QgdmVsb2NpdHlFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcblxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGxhc3RNb3ZlRXZlbnQucG9zaXRpb24gLSB2ZWxvY2l0eUV2ZW50LnBvc2l0aW9uO1xuICAgICAgICBjb25zdCB0aW1lID0gbGFzdE1vdmVFdmVudC50aW1lIC0gdmVsb2NpdHlFdmVudC50aW1lO1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSBkaXN0YW5jZSAvIHRpbWU7XG4gICAgICAgIHN3aXBlci52ZWxvY2l0eSAvPSAyO1xuICAgICAgICBpZiAoTWF0aC5hYnMoc3dpcGVyLnZlbG9jaXR5KSA8IHBhcmFtcy5mcmVlTW9kZU1pbmltdW1WZWxvY2l0eSkge1xuICAgICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBpbXBsaWVzIHRoYXQgdGhlIHVzZXIgc3RvcHBlZCBtb3ZpbmcgYSBmaW5nZXIgdGhlbiByZWxlYXNlZC5cbiAgICAgICAgLy8gVGhlcmUgd291bGQgYmUgbm8gZXZlbnRzIHdpdGggZGlzdGFuY2UgemVybywgc28gdGhlIGxhc3QgZXZlbnQgaXMgc3RhbGUuXG4gICAgICAgIGlmICh0aW1lID4gMTUwIHx8IChVdGlscy5ub3coKSAtIGxhc3RNb3ZlRXZlbnQudGltZSkgPiAzMDApIHtcbiAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgfVxuICAgICAgc3dpcGVyLnZlbG9jaXR5ICo9IHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbztcblxuICAgICAgZGF0YS52ZWxvY2l0aWVzLmxlbmd0aCA9IDA7XG4gICAgICBsZXQgbW9tZW50dW1EdXJhdGlvbiA9IDEwMDAgKiBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bVJhdGlvO1xuICAgICAgY29uc3QgbW9tZW50dW1EaXN0YW5jZSA9IHN3aXBlci52ZWxvY2l0eSAqIG1vbWVudHVtRHVyYXRpb247XG5cbiAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHN3aXBlci50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgaWYgKHJ0bCkgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG5cbiAgICAgIGxldCBkb0JvdW5jZSA9IGZhbHNlO1xuICAgICAgbGV0IGFmdGVyQm91bmNlUG9zaXRpb247XG4gICAgICBjb25zdCBib3VuY2VBbW91bnQgPSBNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpICogMjAgKiBwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZVJhdGlvO1xuICAgICAgbGV0IG5lZWRzTG9vcEZpeDtcbiAgICAgIGlmIChuZXdQb3NpdGlvbiA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICBpZiAobmV3UG9zaXRpb24gKyBzd2lwZXIubWF4VHJhbnNsYXRlKCkgPCAtYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIGJvdW5jZUFtb3VudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSBuZWVkc0xvb3BGaXggPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbiA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlTW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICBpZiAobmV3UG9zaXRpb24gLSBzd2lwZXIubWluVHJhbnNsYXRlKCkgPiBib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgYm91bmNlQW1vdW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICBsZXQgbmV4dFNsaWRlO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNuYXBHcmlkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHNuYXBHcmlkW2pdID4gLW5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXh0U2xpZGUgPSBqO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZV0gLSBuZXdQb3NpdGlvbikgPCBNYXRoLmFicyhzbmFwR3JpZFtuZXh0U2xpZGUgLSAxXSAtIG5ld1Bvc2l0aW9uKSB8fCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHNuYXBHcmlkW25leHRTbGlkZSAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIG5ld1Bvc2l0aW9uID0gLW5ld1Bvc2l0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRzTG9vcEZpeCkge1xuICAgICAgICBzd2lwZXIub25jZSgndHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIEZpeCBkdXJhdGlvblxuICAgICAgaWYgKHN3aXBlci52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKCgtbmV3UG9zaXRpb24gLSBzd2lwZXIudHJhbnNsYXRlKSAvIHN3aXBlci52ZWxvY2l0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlICYmIGRvQm91bmNlKSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3UG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHRydWUsIHN3aXBlci5zd2lwZURpcmVjdGlvbik7XG4gICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoKCkgPT4ge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIWRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdtb21lbnR1bUJvdW5jZScpO1xuXG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24ocGFyYW1zLnNwZWVkKTtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnZlbG9jaXR5KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy5mcmVlTW9kZU1vbWVudHVtIHx8IHRpbWVEaWZmID49IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGaW5kIGN1cnJlbnQgc2xpZGVcbiAgbGV0IHN0b3BJbmRleCA9IDA7XG4gIGxldCBncm91cFNpemUgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkWzBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0gJiYgY3VycmVudFBvcyA8IHNsaWRlc0dyaWRbaSArIHBhcmFtcy5zbGlkZXNQZXJHcm91cF0pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtpICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwXSAtIHNsaWRlc0dyaWRbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMV0gLSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMl07XG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCBjdXJyZW50IHNsaWRlIHNpemVcbiAgY29uc3QgcmF0aW8gPSAoY3VycmVudFBvcyAtIHNsaWRlc0dyaWRbc3RvcEluZGV4XSkgLyBncm91cFNpemU7XG5cbiAgaWYgKHRpbWVEaWZmID4gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgIC8vIExvbmcgdG91Y2hlc1xuICAgIGlmICghcGFyYW1zLmxvbmdTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICBlbHNlIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHJhdGlvID4gKDEgLSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSkgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgIGVsc2Ugc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvcnQgc3dpcGVzXG4gICAgaWYgKCFwYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvblJlc2l6ZSAoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgY29uc3QgeyBwYXJhbXMsIGVsIH0gPSBzd2lwZXI7XG5cbiAgaWYgKGVsICYmIGVsLm9mZnNldFdpZHRoID09PSAwKSByZXR1cm47XG5cbiAgLy8gQnJlYWtwb2ludHNcbiAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gIH1cblxuICAvLyBTYXZlIGxvY2tzXG4gIGNvbnN0IHsgYWxsb3dTbGlkZU5leHQsIGFsbG93U2xpZGVQcmV2LCBzbmFwR3JpZCB9ID0gc3dpcGVyO1xuXG4gIC8vIERpc2FibGUgbG9ja3Mgb24gcmVzaXplXG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IHRydWU7XG5cbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuXG4gIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICBjb25zdCBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heChzd2lwZXIudHJhbnNsYXRlLCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpLCBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIGlmICgocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgIH1cbiAgfVxuICBpZiAoc3dpcGVyLmF1dG9wbGF5ICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gIH1cbiAgLy8gUmV0dXJuIGxvY2tzIGFmdGVyIHJlc2l6ZVxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLmFsbG93Q2xpY2spIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5wcmV2ZW50Q2xpY2tzKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhdHRhY2hFdmVudHMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsIHRvdWNoRXZlbnRzLCBlbCwgd3JhcHBlckVsLFxuICB9ID0gc3dpcGVyO1xuXG4gIHtcbiAgICBzd2lwZXIub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0LmJpbmQoc3dpcGVyKTtcbiAgICBzd2lwZXIub25Ub3VjaE1vdmUgPSBvblRvdWNoTW92ZS5iaW5kKHN3aXBlcik7XG4gICAgc3dpcGVyLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQoc3dpcGVyKTtcbiAgfVxuXG4gIHN3aXBlci5vbkNsaWNrID0gb25DbGljay5iaW5kKHN3aXBlcik7XG5cbiAgY29uc3QgdGFyZ2V0ID0gcGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IGVsIDogd3JhcHBlckVsO1xuICBjb25zdCBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkO1xuXG4gIC8vIFRvdWNoIEV2ZW50c1xuICB7XG4gICAgaWYgKCFTdXBwb3J0LnRvdWNoICYmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMgfHwgU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpKSB7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChTdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgIGNvbnN0IHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcgJiYgU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgPyB7IHBhc3NpdmU6IGZhbHNlLCBjYXB0dXJlIH0gOiBjYXB0dXJlKTtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGlmICgocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIURldmljZS5pb3MgJiYgIURldmljZS5hbmRyb2lkKSB8fCAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIVN1cHBvcnQudG91Y2ggJiYgRGV2aWNlLmlvcykpIHtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG4gICAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXNpemUgaGFuZGxlclxuICBzd2lwZXIub24oKERldmljZS5pb3MgfHwgRGV2aWNlLmFuZHJvaWQgPyAncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlIG9ic2VydmVyVXBkYXRlJyA6ICdyZXNpemUgb2JzZXJ2ZXJVcGRhdGUnKSwgb25SZXNpemUsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hFdmVudHMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgY29uc3Qge1xuICAgIHBhcmFtcywgdG91Y2hFdmVudHMsIGVsLCB3cmFwcGVyRWwsXG4gIH0gPSBzd2lwZXI7XG5cbiAgY29uc3QgdGFyZ2V0ID0gcGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IGVsIDogd3JhcHBlckVsO1xuICBjb25zdCBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkO1xuXG4gIC8vIFRvdWNoIEV2ZW50c1xuICB7XG4gICAgaWYgKCFTdXBwb3J0LnRvdWNoICYmIChTdXBwb3J0LnBvaW50ZXJFdmVudHMgfHwgU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpKSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChTdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgIGNvbnN0IHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAnb25Ub3VjaFN0YXJ0JyAmJiBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGlmICgocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIURldmljZS5pb3MgJiYgIURldmljZS5hbmRyb2lkKSB8fCAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIVN1cHBvcnQudG91Y2ggJiYgRGV2aWNlLmlvcykpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG4gICAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXNpemUgaGFuZGxlclxuICBzd2lwZXIub2ZmKChEZXZpY2UuaW9zIHx8IERldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJyksIG9uUmVzaXplKTtcbn1cblxudmFyIGV2ZW50cyA9IHtcbiAgYXR0YWNoRXZlbnRzLFxuICBkZXRhY2hFdmVudHMsXG59O1xuXG5mdW5jdGlvbiBzZXRCcmVha3BvaW50ICgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIGFjdGl2ZUluZGV4LCBpbml0aWFsaXplZCwgbG9vcGVkU2xpZGVzID0gMCwgcGFyYW1zLFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBicmVha3BvaW50cyA9IHBhcmFtcy5icmVha3BvaW50cztcbiAgaWYgKCFicmVha3BvaW50cyB8fCAoYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmxlbmd0aCA9PT0gMCkpIHJldHVybjtcblxuICAvLyBTZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoIGFuZCB1cGRhdGUgcGFyYW1ldGVyc1xuICBjb25zdCBicmVha3BvaW50ID0gc3dpcGVyLmdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMpO1xuXG4gIGlmIChicmVha3BvaW50ICYmIHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCAhPT0gYnJlYWtwb2ludCkge1xuICAgIGNvbnN0IGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuICAgIGlmIChicmVha3BvaW50T25seVBhcmFtcykge1xuICAgICAgWydzbGlkZXNQZXJWaWV3JywgJ3NwYWNlQmV0d2VlbicsICdzbGlkZXNQZXJHcm91cCddLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtVmFsdWUgPSBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV07XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgICAgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycgJiYgKHBhcmFtVmFsdWUgPT09ICdBVVRPJyB8fCBwYXJhbVZhbHVlID09PSAnYXV0bycpKSB7XG4gICAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dID0gJ2F1dG8nO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycpIHtcbiAgICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUZsb2F0KHBhcmFtVmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXSA9IHBhcnNlSW50KHBhcmFtVmFsdWUsIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnJlYWtwb2ludFBhcmFtcyA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zIHx8IHN3aXBlci5vcmlnaW5hbFBhcmFtcztcbiAgICBjb25zdCBkaXJlY3Rpb25DaGFuZ2VkID0gYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gJiYgYnJlYWtwb2ludFBhcmFtcy5kaXJlY3Rpb24gIT09IHBhcmFtcy5kaXJlY3Rpb247XG4gICAgY29uc3QgbmVlZHNSZUxvb3AgPSBwYXJhbXMubG9vcCAmJiAoYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSBwYXJhbXMuc2xpZGVzUGVyVmlldyB8fCBkaXJlY3Rpb25DaGFuZ2VkKTtcblxuICAgIGlmIChkaXJlY3Rpb25DaGFuZ2VkICYmIGluaXRpYWxpemVkKSB7XG4gICAgICBzd2lwZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5wYXJhbXMsIGJyZWFrcG9pbnRQYXJhbXMpO1xuXG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2LFxuICAgIH0pO1xuXG4gICAgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcblxuICAgIGlmIChuZWVkc1JlTG9vcCAmJiBpbml0aWFsaXplZCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgICAgc3dpcGVyLnNsaWRlVG8oKGFjdGl2ZUluZGV4IC0gbG9vcGVkU2xpZGVzKSArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnYnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEJyZWFrcG9pbnQgKGJyZWFrcG9pbnRzKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIC8vIEdldCBicmVha3BvaW50IGZvciB3aW5kb3cgd2lkdGhcbiAgaWYgKCFicmVha3BvaW50cykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgbGV0IGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgY29uc3QgcG9pbnRzID0gW107XG4gIE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5mb3JFYWNoKChwb2ludCkgPT4ge1xuICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgfSk7XG4gIHBvaW50cy5zb3J0KChhLCBiKSA9PiBwYXJzZUludChhLCAxMCkgLSBwYXJzZUludChiLCAxMCkpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzSW52ZXJzZSkge1xuICAgICAgaWYgKHBvaW50IDw9IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBvaW50ID49IHdpbmRvdy5pbm5lcldpZHRoICYmICFicmVha3BvaW50KSB7XG4gICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBicmVha3BvaW50IHx8ICdtYXgnO1xufVxuXG52YXIgYnJlYWtwb2ludHMgPSB7IHNldEJyZWFrcG9pbnQsIGdldEJyZWFrcG9pbnQgfTtcblxuZnVuY3Rpb24gYWRkQ2xhc3NlcyAoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWVzLCBwYXJhbXMsIHJ0bCwgJGVsLFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBzdWZmaXhlcyA9IFtdO1xuXG4gIHN1ZmZpeGVzLnB1c2goJ2luaXRpYWxpemVkJyk7XG4gIHN1ZmZpeGVzLnB1c2gocGFyYW1zLmRpcmVjdGlvbik7XG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgIHN1ZmZpeGVzLnB1c2goJ2ZyZWUtbW9kZScpO1xuICB9XG4gIGlmICghU3VwcG9ydC5mbGV4Ym94KSB7XG4gICAgc3VmZml4ZXMucHVzaCgnbm8tZmxleGJveCcpO1xuICB9XG4gIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgIHN1ZmZpeGVzLnB1c2goJ2F1dG9oZWlnaHQnKTtcbiAgfVxuICBpZiAocnRsKSB7XG4gICAgc3VmZml4ZXMucHVzaCgncnRsJyk7XG4gIH1cbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxKSB7XG4gICAgc3VmZml4ZXMucHVzaCgnbXVsdGlyb3cnKTtcbiAgfVxuICBpZiAoRGV2aWNlLmFuZHJvaWQpIHtcbiAgICBzdWZmaXhlcy5wdXNoKCdhbmRyb2lkJyk7XG4gIH1cbiAgaWYgKERldmljZS5pb3MpIHtcbiAgICBzdWZmaXhlcy5wdXNoKCdpb3MnKTtcbiAgfVxuICAvLyBXUDggVG91Y2ggRXZlbnRzIEZpeFxuICBpZiAoKEJyb3dzZXIuaXNJRSB8fCBCcm93c2VyLmlzRWRnZSkgJiYgKFN1cHBvcnQucG9pbnRlckV2ZW50cyB8fCBTdXBwb3J0LnByZWZpeGVkUG9pbnRlckV2ZW50cykpIHtcbiAgICBzdWZmaXhlcy5wdXNoKGB3cDgtJHtwYXJhbXMuZGlyZWN0aW9ufWApO1xuICB9XG5cbiAgc3VmZml4ZXMuZm9yRWFjaCgoc3VmZml4KSA9PiB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgc3VmZml4KTtcbiAgfSk7XG5cbiAgJGVsLmFkZENsYXNzKGNsYXNzTmFtZXMuam9pbignICcpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyAoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHsgJGVsLCBjbGFzc05hbWVzIH0gPSBzd2lwZXI7XG5cbiAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzTmFtZXMuam9pbignICcpKTtcbn1cblxudmFyIGNsYXNzZXMgPSB7IGFkZENsYXNzZXMsIHJlbW92ZUNsYXNzZXMgfTtcblxuZnVuY3Rpb24gbG9hZEltYWdlIChpbWFnZUVsLCBzcmMsIHNyY3NldCwgc2l6ZXMsIGNoZWNrRm9yQ29tcGxldGUsIGNhbGxiYWNrKSB7XG4gIGxldCBpbWFnZTtcbiAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gIH1cbiAgaWYgKCFpbWFnZUVsLmNvbXBsZXRlIHx8ICFjaGVja0ZvckNvbXBsZXRlKSB7XG4gICAgaWYgKHNyYykge1xuICAgICAgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IG9uUmVhZHk7XG4gICAgICBpZiAoc2l6ZXMpIHtcbiAgICAgICAgaW1hZ2Uuc2l6ZXMgPSBzaXplcztcbiAgICAgIH1cbiAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgfVxuICAgICAgaWYgKHNyYykge1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVhZHkoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICBvblJlYWR5KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlcyAoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIHN3aXBlci5pbWFnZXNUb0xvYWQgPSBzd2lwZXIuJGVsLmZpbmQoJ2ltZycpO1xuICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIgPT09IG51bGwgfHwgIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5pbWFnZXNMb2FkZWQgIT09IHVuZGVmaW5lZCkgc3dpcGVyLmltYWdlc0xvYWRlZCArPSAxO1xuICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkID09PSBzd2lwZXIuaW1hZ2VzVG9Mb2FkLmxlbmd0aCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgc3dpcGVyLmVtaXQoJ2ltYWdlc1JlYWR5Jyk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGltYWdlRWwgPSBzd2lwZXIuaW1hZ2VzVG9Mb2FkW2ldO1xuICAgIHN3aXBlci5sb2FkSW1hZ2UoXG4gICAgICBpbWFnZUVsLFxuICAgICAgaW1hZ2VFbC5jdXJyZW50U3JjIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmMnKSxcbiAgICAgIGltYWdlRWwuc3Jjc2V0IHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSxcbiAgICAgIGltYWdlRWwuc2l6ZXMgfHwgaW1hZ2VFbC5nZXRBdHRyaWJ1dGUoJ3NpemVzJyksXG4gICAgICB0cnVlLFxuICAgICAgb25SZWFkeVxuICAgICk7XG4gIH1cbn1cblxudmFyIGltYWdlcyA9IHtcbiAgbG9hZEltYWdlLFxuICBwcmVsb2FkSW1hZ2VzLFxufTtcblxuZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qgd2FzTG9ja2VkID0gc3dpcGVyLmlzTG9ja2VkO1xuXG4gIHN3aXBlci5pc0xvY2tlZCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGggPT09IDE7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9ICFzd2lwZXIuaXNMb2NrZWQ7XG5cbiAgLy8gZXZlbnRzXG4gIGlmICh3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkgc3dpcGVyLmVtaXQoc3dpcGVyLmlzTG9ja2VkID8gJ2xvY2snIDogJ3VubG9jaycpO1xuXG4gIGlmICh3YXNMb2NrZWQgJiYgd2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHtcbiAgICBzd2lwZXIuaXNFbmQgPSBmYWxzZTtcbiAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgfVxufVxuXG52YXIgY2hlY2tPdmVyZmxvdyQxID0geyBjaGVja092ZXJmbG93IH07XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgaW5pdDogdHJ1ZSxcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIHRvdWNoRXZlbnRzVGFyZ2V0OiAnY29udGFpbmVyJyxcbiAgaW5pdGlhbFNsaWRlOiAwLFxuICBzcGVlZDogMzAwLFxuICAvL1xuICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IGZhbHNlLFxuXG4gIC8vIFRvIHN1cHBvcnQgaU9TJ3Mgc3dpcGUtdG8tZ28tYmFjayBnZXN0dXJlICh3aGVuIGJlaW5nIHVzZWQgaW4tYXBwLCB3aXRoIFVJV2ViVmlldykuXG4gIGVkZ2VTd2lwZURldGVjdGlvbjogZmFsc2UsXG4gIGVkZ2VTd2lwZVRocmVzaG9sZDogMjAsXG5cbiAgLy8gRnJlZSBtb2RlXG4gIGZyZWVNb2RlOiBmYWxzZSxcbiAgZnJlZU1vZGVNb21lbnR1bTogdHJ1ZSxcbiAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAxLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW86IDEsXG4gIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICBmcmVlTW9kZVN0aWNreTogZmFsc2UsXG4gIGZyZWVNb2RlTWluaW11bVZlbG9jaXR5OiAwLjAyLFxuXG4gIC8vIEF1dG9oZWlnaHRcbiAgYXV0b0hlaWdodDogZmFsc2UsXG5cbiAgLy8gU2V0IHdyYXBwZXIgd2lkdGhcbiAgc2V0V3JhcHBlclNpemU6IGZhbHNlLFxuXG4gIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gIHZpcnR1YWxUcmFuc2xhdGU6IGZhbHNlLFxuXG4gIC8vIEVmZmVjdHNcbiAgZWZmZWN0OiAnc2xpZGUnLCAvLyAnc2xpZGUnIG9yICdmYWRlJyBvciAnY3ViZScgb3IgJ2NvdmVyZmxvdycgb3IgJ2ZsaXAnXG5cbiAgLy8gQnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHVuZGVmaW5lZCxcbiAgYnJlYWtwb2ludHNJbnZlcnNlOiBmYWxzZSxcblxuICAvLyBTbGlkZXMgZ3JpZFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgc2xpZGVzUGVyQ29sdW1uRmlsbDogJ2NvbHVtbicsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gIHNsaWRlc09mZnNldEJlZm9yZTogMCwgLy8gaW4gcHhcbiAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDAsIC8vIGluIHB4XG4gIG5vcm1hbGl6ZVNsaWRlSW5kZXg6IHRydWUsXG4gIGNlbnRlckluc3VmZmljaWVudFNsaWRlczogZmFsc2UsXG5cbiAgLy8gRGlzYWJsZSBzd2lwZXIgYW5kIGhpZGUgbmF2aWdhdGlvbiB3aGVuIGNvbnRhaW5lciBub3Qgb3ZlcmZsb3dcbiAgd2F0Y2hPdmVyZmxvdzogZmFsc2UsXG5cbiAgLy8gUm91bmQgbGVuZ3RoXG4gIHJvdW5kTGVuZ3RoczogZmFsc2UsXG5cbiAgLy8gVG91Y2hlc1xuICB0b3VjaFJhdGlvOiAxLFxuICB0b3VjaEFuZ2xlOiA0NSxcbiAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgc2hvcnRTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXNSYXRpbzogMC41LFxuICBsb25nU3dpcGVzTXM6IDMwMCxcbiAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgdGhyZXNob2xkOiAwLFxuICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IHRydWUsXG4gIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6IGZhbHNlLFxuICB0b3VjaFJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcblxuICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xuICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcblxuICAvLyBSZXNpc3RhbmNlXG4gIHJlc2lzdGFuY2U6IHRydWUsXG4gIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcblxuICAvLyBQcm9ncmVzc1xuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiBmYWxzZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiBmYWxzZSxcblxuICAvLyBDdXJzb3JcbiAgZ3JhYkN1cnNvcjogZmFsc2UsXG5cbiAgLy8gQ2xpY2tzXG4gIHByZXZlbnRDbGlja3M6IHRydWUsXG4gIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG5cbiAgLy8gSW1hZ2VzXG4gIHByZWxvYWRJbWFnZXM6IHRydWUsXG4gIHVwZGF0ZU9uSW1hZ2VzUmVhZHk6IHRydWUsXG5cbiAgLy8gbG9vcFxuICBsb29wOiBmYWxzZSxcbiAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gIGxvb3BlZFNsaWRlczogbnVsbCxcbiAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogZmFsc2UsXG5cbiAgLy8gU3dpcGluZy9ubyBzd2lwaW5nXG4gIGFsbG93U2xpZGVQcmV2OiB0cnVlLFxuICBhbGxvd1NsaWRlTmV4dDogdHJ1ZSxcbiAgc3dpcGVIYW5kbGVyOiBudWxsLCAvLyAnLnN3aXBlLWhhbmRsZXInLFxuICBub1N3aXBpbmc6IHRydWUsXG4gIG5vU3dpcGluZ0NsYXNzOiAnc3dpcGVyLW5vLXN3aXBpbmcnLFxuICBub1N3aXBpbmdTZWxlY3RvcjogbnVsbCxcblxuICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxuXG4gIC8vIE5TXG4gIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItY29udGFpbmVyLScsIC8vIE5FV1xuICBzbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlJyxcbiAgc2xpZGVCbGFua0NsYXNzOiAnc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuaycsXG4gIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcbiAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlJyxcbiAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdmlzaWJsZScsXG4gIHNsaWRlRHVwbGljYXRlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlJyxcbiAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1uZXh0JyxcbiAgc2xpZGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtcHJldicsXG4gIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2JyxcbiAgd3JhcHBlckNsYXNzOiAnc3dpcGVyLXdyYXBwZXInLFxuXG4gIC8vIENhbGxiYWNrc1xuICBydW5DYWxsYmFja3NPbkluaXQ6IHRydWUsXG59O1xuXG4vKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IFwib2ZmXCIgKi9cblxuY29uc3QgcHJvdG90eXBlcyA9IHtcbiAgdXBkYXRlLFxuICB0cmFuc2xhdGUsXG4gIHRyYW5zaXRpb24sXG4gIHNsaWRlLFxuICBsb29wLFxuICBncmFiQ3Vyc29yLFxuICBtYW5pcHVsYXRpb24sXG4gIGV2ZW50cyxcbiAgYnJlYWtwb2ludHMsXG4gIGNoZWNrT3ZlcmZsb3c6IGNoZWNrT3ZlcmZsb3ckMSxcbiAgY2xhc3NlcyxcbiAgaW1hZ2VzLFxufTtcblxuY29uc3QgZXh0ZW5kZWREZWZhdWx0cyA9IHt9O1xuXG5jbGFzcyBTd2lwZXIgZXh0ZW5kcyBTd2lwZXJDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBsZXQgZWw7XG4gICAgbGV0IHBhcmFtcztcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgYXJnc1swXS5jb25zdHJ1Y3RvciAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIHBhcmFtcyA9IGFyZ3NbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIFtlbCwgcGFyYW1zXSA9IGFyZ3M7XG4gICAgfVxuICAgIGlmICghcGFyYW1zKSBwYXJhbXMgPSB7fTtcblxuICAgIHBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgcGFyYW1zKTtcbiAgICBpZiAoZWwgJiYgIXBhcmFtcy5lbCkgcGFyYW1zLmVsID0gZWw7XG5cbiAgICBzdXBlcihwYXJhbXMpO1xuXG4gICAgT2JqZWN0LmtleXMocHJvdG90eXBlcykuZm9yRWFjaCgocHJvdG90eXBlR3JvdXApID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdKS5mb3JFYWNoKChwcm90b01ldGhvZCkgPT4ge1xuICAgICAgICBpZiAoIVN3aXBlci5wcm90b3R5cGVbcHJvdG9NZXRob2RdKSB7XG4gICAgICAgICAgU3dpcGVyLnByb3RvdHlwZVtwcm90b01ldGhvZF0gPSBwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXVtwcm90b01ldGhvZF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gU3dpcGVyIEluc3RhbmNlXG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHN3aXBlci5tb2R1bGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgc3dpcGVyLm1vZHVsZXMgPSB7fTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMoc3dpcGVyLm1vZHVsZXMpLmZvckVhY2goKG1vZHVsZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IG1vZHVsZSA9IHN3aXBlci5tb2R1bGVzW21vZHVsZU5hbWVdO1xuICAgICAgaWYgKG1vZHVsZS5wYXJhbXMpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMobW9kdWxlLnBhcmFtcylbMF07XG4gICAgICAgIGNvbnN0IG1vZHVsZVBhcmFtcyA9IG1vZHVsZS5wYXJhbXNbbW9kdWxlUGFyYW1OYW1lXTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGVQYXJhbXMgIT09ICdvYmplY3QnIHx8IG1vZHVsZVBhcmFtcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAoIShtb2R1bGVQYXJhbU5hbWUgaW4gcGFyYW1zICYmICdlbmFibGVkJyBpbiBtb2R1bGVQYXJhbXMpKSByZXR1cm47XG4gICAgICAgIGlmIChwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0geyBlbmFibGVkOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHR5cGVvZiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7IGVuYWJsZWQ6IGZhbHNlIH07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBtb2R1bGVzIHBhcmFtc1xuICAgIGNvbnN0IHN3aXBlclBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgZGVmYXVsdHMpO1xuICAgIHN3aXBlci51c2VNb2R1bGVzUGFyYW1zKHN3aXBlclBhcmFtcyk7XG5cbiAgICAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBwYXNzZWQgcGFyYW1zXG4gICAgc3dpcGVyLnBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgc3dpcGVyUGFyYW1zLCBleHRlbmRlZERlZmF1bHRzLCBwYXJhbXMpO1xuICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgc3dpcGVyLnBhcmFtcyk7XG4gICAgc3dpcGVyLnBhc3NlZFBhcmFtcyA9IFV0aWxzLmV4dGVuZCh7fSwgcGFyYW1zKTtcblxuICAgIC8vIFNhdmUgRG9tIGxpYlxuICAgIHN3aXBlci4kID0gJDtcblxuICAgIC8vIEZpbmQgZWxcbiAgICBjb25zdCAkZWwgPSAkKHN3aXBlci5wYXJhbXMuZWwpO1xuICAgIGVsID0gJGVsWzBdO1xuXG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoJGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHN3aXBlcnMgPSBbXTtcbiAgICAgICRlbC5lYWNoKChpbmRleCwgY29udGFpbmVyRWwpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFyYW1zID0gVXRpbHMuZXh0ZW5kKHt9LCBwYXJhbXMsIHsgZWw6IGNvbnRhaW5lckVsIH0pO1xuICAgICAgICBzd2lwZXJzLnB1c2gobmV3IFN3aXBlcihuZXdQYXJhbXMpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN3aXBlcnM7XG4gICAgfVxuXG4gICAgZWwuc3dpcGVyID0gc3dpcGVyO1xuICAgICRlbC5kYXRhKCdzd2lwZXInLCBzd2lwZXIpO1xuXG4gICAgLy8gRmluZCBXcmFwcGVyXG4gICAgY29uc3QgJHdyYXBwZXJFbCA9ICRlbC5jaGlsZHJlbihgLiR7c3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3N9YCk7XG5cbiAgICAvLyBFeHRlbmQgU3dpcGVyXG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgJGVsLFxuICAgICAgZWwsXG4gICAgICAkd3JhcHBlckVsLFxuICAgICAgd3JhcHBlckVsOiAkd3JhcHBlckVsWzBdLFxuXG4gICAgICAvLyBDbGFzc2VzXG4gICAgICBjbGFzc05hbWVzOiBbXSxcblxuICAgICAgLy8gU2xpZGVzXG4gICAgICBzbGlkZXM6ICQoKSxcbiAgICAgIHNsaWRlc0dyaWQ6IFtdLFxuICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkOiBbXSxcblxuICAgICAgLy8gaXNEaXJlY3Rpb25cbiAgICAgIGlzSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB9LFxuICAgICAgaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgfSxcbiAgICAgIC8vIFJUTFxuICAgICAgcnRsOiAoZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8ICRlbC5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJyksXG4gICAgICBydGxUcmFuc2xhdGU6IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgd3JvbmdSVEw6ICR3cmFwcGVyRWwuY3NzKCdkaXNwbGF5JykgPT09ICctd2Via2l0LWJveCcsXG5cbiAgICAgIC8vIEluZGV4ZXNcbiAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgcmVhbEluZGV4OiAwLFxuXG4gICAgICAvL1xuICAgICAgaXNCZWdpbm5pbmc6IHRydWUsXG4gICAgICBpc0VuZDogZmFsc2UsXG5cbiAgICAgIC8vIFByb3BzXG4gICAgICB0cmFuc2xhdGU6IDAsXG4gICAgICBwcmV2aW91c1RyYW5zbGF0ZTogMCxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICBhbmltYXRpbmc6IGZhbHNlLFxuXG4gICAgICAvLyBMb2Nrc1xuICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldixcblxuICAgICAgLy8gVG91Y2ggRXZlbnRzXG4gICAgICB0b3VjaEV2ZW50czogKGZ1bmN0aW9uIHRvdWNoRXZlbnRzKCkge1xuICAgICAgICBjb25zdCB0b3VjaCA9IFsndG91Y2hzdGFydCcsICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnXTtcbiAgICAgICAgbGV0IGRlc2t0b3AgPSBbJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCddO1xuICAgICAgICBpZiAoU3VwcG9ydC5wb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgZGVza3RvcCA9IFsncG9pbnRlcmRvd24nLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcnVwJ107XG4gICAgICAgIH0gZWxzZSBpZiAoU3VwcG9ydC5wcmVmaXhlZFBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICBkZXNrdG9wID0gWydNU1BvaW50ZXJEb3duJywgJ01TUG9pbnRlck1vdmUnLCAnTVNQb2ludGVyVXAnXTtcbiAgICAgICAgfVxuICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCA9IHtcbiAgICAgICAgICBzdGFydDogdG91Y2hbMF0sXG4gICAgICAgICAgbW92ZTogdG91Y2hbMV0sXG4gICAgICAgICAgZW5kOiB0b3VjaFsyXSxcbiAgICAgICAgfTtcbiAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcCA9IHtcbiAgICAgICAgICBzdGFydDogZGVza3RvcFswXSxcbiAgICAgICAgICBtb3ZlOiBkZXNrdG9wWzFdLFxuICAgICAgICAgIGVuZDogZGVza3RvcFsyXSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFN1cHBvcnQudG91Y2ggfHwgIXN3aXBlci5wYXJhbXMuc2ltdWxhdGVUb3VjaCA/IHN3aXBlci50b3VjaEV2ZW50c1RvdWNoIDogc3dpcGVyLnRvdWNoRXZlbnRzRGVza3RvcDtcbiAgICAgIH0oKSksXG4gICAgICB0b3VjaEV2ZW50c0RhdGE6IHtcbiAgICAgICAgaXNUb3VjaGVkOiB1bmRlZmluZWQsXG4gICAgICAgIGlzTW92ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrczogdW5kZWZpbmVkLFxuICAgICAgICB0b3VjaFN0YXJ0VGltZTogdW5kZWZpbmVkLFxuICAgICAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgICAgICBjdXJyZW50VHJhbnNsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0VHJhbnNsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VGhyZXNob2xkTW92ZTogdW5kZWZpbmVkLFxuICAgICAgICAvLyBGb3JtIGVsZW1lbnRzIHRvIG1hdGNoXG4gICAgICAgIGZvcm1FbGVtZW50czogJ2lucHV0LCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGJ1dHRvbiwgdmlkZW8nLFxuICAgICAgICAvLyBMYXN0IGNsaWNrIHRpbWVcbiAgICAgICAgbGFzdENsaWNrVGltZTogVXRpbHMubm93KCksXG4gICAgICAgIGNsaWNrVGltZW91dDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBWZWxvY2l0aWVzXG4gICAgICAgIHZlbG9jaXRpZXM6IFtdLFxuICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlOiB1bmRlZmluZWQsXG4gICAgICAgIGlzVG91Y2hFdmVudDogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkLFxuICAgICAgfSxcblxuICAgICAgLy8gQ2xpY2tzXG4gICAgICBhbGxvd0NsaWNrOiB0cnVlLFxuXG4gICAgICAvLyBUb3VjaGVzXG4gICAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcblxuICAgICAgdG91Y2hlczoge1xuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICBkaWZmOiAwLFxuICAgICAgfSxcblxuICAgICAgLy8gSW1hZ2VzXG4gICAgICBpbWFnZXNUb0xvYWQ6IFtdLFxuICAgICAgaW1hZ2VzTG9hZGVkOiAwLFxuXG4gICAgfSk7XG5cbiAgICAvLyBJbnN0YWxsIE1vZHVsZXNcbiAgICBzd2lwZXIudXNlTW9kdWxlcygpO1xuXG4gICAgLy8gSW5pdFxuICAgIGlmIChzd2lwZXIucGFyYW1zLmluaXQpIHtcbiAgICAgIHN3aXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFwcCBpbnN0YW5jZVxuICAgIHJldHVybiBzd2lwZXI7XG4gIH1cblxuICBzbGlkZXNQZXJWaWV3RHluYW1pYygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcmFtcywgc2xpZGVzLCBzbGlkZXNHcmlkLCBzaXplOiBzd2lwZXJTaXplLCBhY3RpdmVJbmRleCxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGxldCBzcHYgPSAxO1xuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIGxldCBzbGlkZVNpemUgPSBzbGlkZXNbYWN0aXZlSW5kZXhdLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgIGxldCBicmVha0xvb3A7XG4gICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0gJiYgIWJyZWFrTG9vcCkge1xuICAgICAgICAgIHNsaWRlU2l6ZSArPSBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggKyAxOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNHcmlkW2ldIC0gc2xpZGVzR3JpZFthY3RpdmVJbmRleF0gPCBzd2lwZXJTaXplKSB7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNwdjtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICBjb25zdCB7IHNuYXBHcmlkLCBwYXJhbXMgfSA9IHN3aXBlcjtcbiAgICAvLyBCcmVha3BvaW50c1xuICAgIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gICAgfVxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlICogLTEgOiBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgY29uc3QgbmV3VHJhbnNsYXRlID0gTWF0aC5taW4oTWF0aC5tYXgodHJhbnNsYXRlVmFsdWUsIHN3aXBlci5tYXhUcmFuc2xhdGUoKSksIHN3aXBlci5taW5UcmFuc2xhdGUoKSk7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuICAgIGxldCB0cmFuc2xhdGVkO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyB8fCBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZCA9IHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG4gICAgc3dpcGVyLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbiwgbmVlZFVwZGF0ZSA9IHRydWUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IGN1cnJlbnREaXJlY3Rpb24gPSBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbjtcbiAgICBpZiAoIW5ld0RpcmVjdGlvbikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBuZXdEaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAoKG5ld0RpcmVjdGlvbiA9PT0gY3VycmVudERpcmVjdGlvbikgfHwgKG5ld0RpcmVjdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG5ld0RpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykpIHtcbiAgICAgIHJldHVybiBzd2lwZXI7XG4gICAgfVxuXG4gICAgc3dpcGVyLiRlbFxuICAgICAgLnJlbW92ZUNsYXNzKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc30ke2N1cnJlbnREaXJlY3Rpb259IHdwOC0ke2N1cnJlbnREaXJlY3Rpb259YClcbiAgICAgIC5hZGRDbGFzcyhgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9JHtuZXdEaXJlY3Rpb259YCk7XG5cbiAgICBpZiAoKEJyb3dzZXIuaXNJRSB8fCBCcm93c2VyLmlzRWRnZSkgJiYgKFN1cHBvcnQucG9pbnRlckV2ZW50cyB8fCBTdXBwb3J0LnByZWZpeGVkUG9pbnRlckV2ZW50cykpIHtcbiAgICAgIHN3aXBlci4kZWwuYWRkQ2xhc3MoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfXdwOC0ke25ld0RpcmVjdGlvbn1gKTtcbiAgICB9XG5cbiAgICBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcblxuICAgIHN3aXBlci5zbGlkZXMuZWFjaCgoc2xpZGVJbmRleCwgc2xpZGVFbCkgPT4ge1xuICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3dpcGVyLmVtaXQoJ2NoYW5nZURpcmVjdGlvbicpO1xuICAgIGlmIChuZWVkVXBkYXRlKSBzd2lwZXIudXBkYXRlKCk7XG5cbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcblxuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVJbml0Jyk7XG5cbiAgICAvLyBTZXQgYnJlYWtwb2ludFxuICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBDbGFzc2VzXG4gICAgc3dpcGVyLmFkZENsYXNzZXMoKTtcblxuICAgIC8vIENyZWF0ZSBsb29wXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgc2l6ZVxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG5cbiAgICAvLyBVcGRhdGUgc2xpZGVzXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG5cbiAgICAvLyBTZXQgR3JhYiBDdXJzb3JcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZWxvYWRJbWFnZXMpIHtcbiAgICAgIHN3aXBlci5wcmVsb2FkSW1hZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gU2xpZGUgVG8gSW5pdGlhbCBTbGlkZVxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgIH1cblxuICAgIC8vIEF0dGFjaCBldmVudHNcbiAgICBzd2lwZXIuYXR0YWNoRXZlbnRzKCk7XG5cbiAgICAvLyBJbml0IEZsYWdcbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgLy8gRW1pdFxuICAgIHN3aXBlci5lbWl0KCdpbml0Jyk7XG4gIH1cblxuICBkZXN0cm95KGRlbGV0ZUluc3RhbmNlID0gdHJ1ZSwgY2xlYW5TdHlsZXMgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBwYXJhbXMsICRlbCwgJHdyYXBwZXJFbCwgc2xpZGVzLFxuICAgIH0gPSBzd2lwZXI7XG5cbiAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlci5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVEZXN0cm95Jyk7XG5cbiAgICAvLyBJbml0IEZsYWdcbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIC8vIERldGFjaCBldmVudHNcbiAgICBzd2lwZXIuZGV0YWNoRXZlbnRzKCk7XG5cbiAgICAvLyBEZXN0cm95IGxvb3BcbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8vIENsZWFudXAgc3R5bGVzXG4gICAgaWYgKGNsZWFuU3R5bGVzKSB7XG4gICAgICBzd2lwZXIucmVtb3ZlQ2xhc3NlcygpO1xuICAgICAgJGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAkd3JhcHBlckVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICBpZiAoc2xpZGVzICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2xpZGVzXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFtcbiAgICAgICAgICAgIHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyxcbiAgICAgICAgICAgIHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzLFxuICAgICAgICAgICAgcGFyYW1zLnNsaWRlTmV4dENsYXNzLFxuICAgICAgICAgICAgcGFyYW1zLnNsaWRlUHJldkNsYXNzLFxuICAgICAgICAgIF0uam9pbignICcpKVxuICAgICAgICAgIC5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JylcbiAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItY29sdW1uJylcbiAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItcm93Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgIC8vIERldGFjaCBlbWl0dGVyIGV2ZW50c1xuICAgIE9iamVjdC5rZXlzKHN3aXBlci5ldmVudHNMaXN0ZW5lcnMpLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgICAgc3dpcGVyLm9mZihldmVudE5hbWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlbGV0ZUluc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgc3dpcGVyLiRlbFswXS5zd2lwZXIgPSBudWxsO1xuICAgICAgc3dpcGVyLiRlbC5kYXRhKCdzd2lwZXInLCBudWxsKTtcbiAgICAgIFV0aWxzLmRlbGV0ZVByb3BzKHN3aXBlcik7XG4gICAgfVxuICAgIHN3aXBlci5kZXN0cm95ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgZXh0ZW5kRGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgICBVdGlscy5leHRlbmQoZXh0ZW5kZWREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCBleHRlbmRlZERlZmF1bHRzKCkge1xuICAgIHJldHVybiBleHRlbmRlZERlZmF1bHRzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IENsYXNzKCkge1xuICAgIHJldHVybiBTd2lwZXJDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgJCgpIHtcbiAgICByZXR1cm4gJDtcbiAgfVxufVxuXG52YXIgRGV2aWNlJDEgPSB7XG4gIG5hbWU6ICdkZXZpY2UnLFxuICBwcm90bzoge1xuICAgIGRldmljZTogRGV2aWNlLFxuICB9LFxuICBzdGF0aWM6IHtcbiAgICBkZXZpY2U6IERldmljZSxcbiAgfSxcbn07XG5cbnZhciBTdXBwb3J0JDEgPSB7XG4gIG5hbWU6ICdzdXBwb3J0JyxcbiAgcHJvdG86IHtcbiAgICBzdXBwb3J0OiBTdXBwb3J0LFxuICB9LFxuICBzdGF0aWM6IHtcbiAgICBzdXBwb3J0OiBTdXBwb3J0LFxuICB9LFxufTtcblxudmFyIEJyb3dzZXIkMSA9IHtcbiAgbmFtZTogJ2Jyb3dzZXInLFxuICBwcm90bzoge1xuICAgIGJyb3dzZXI6IEJyb3dzZXIsXG4gIH0sXG4gIHN0YXRpYzoge1xuICAgIGJyb3dzZXI6IEJyb3dzZXIsXG4gIH0sXG59O1xuXG52YXIgUmVzaXplID0ge1xuICBuYW1lOiAncmVzaXplJyxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgcmVzaXplOiB7XG4gICAgICAgIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVJlc2l6ZScpO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdyZXNpemUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKCkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdvcmllbnRhdGlvbmNoYW5nZScpO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIC8vIEVtaXQgcmVzaXplXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKTtcblxuICAgICAgLy8gRW1pdCBvcmllbnRhdGlvbmNoYW5nZVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgc3dpcGVyLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHN3aXBlci5yZXNpemUub3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgT2JzZXJ2ZXIgPSB7XG4gIGZ1bmM6IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyLFxuICBhdHRhY2godGFyZ2V0LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuXG4gICAgY29uc3QgT2JzZXJ2ZXJGdW5jID0gT2JzZXJ2ZXIuZnVuYztcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBPYnNlcnZlckZ1bmMoKG11dGF0aW9ucykgPT4ge1xuICAgICAgLy8gVGhlIG9ic2VydmVyVXBkYXRlIGV2ZW50IHNob3VsZCBvbmx5IGJlIHRyaWdnZXJlZFxuICAgICAgLy8gb25jZSBkZXNwaXRlIHRoZSBudW1iZXIgb2YgbXV0YXRpb25zLiAgQWRkaXRpb25hbFxuICAgICAgLy8gdHJpZ2dlcnMgYXJlIHJlZHVuZGFudCBhbmQgYXJlIHZlcnkgY29zdGx5XG4gICAgICBpZiAobXV0YXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICBzd2lwZXIuZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgfTtcblxuICAgICAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShvYnNlcnZlclVwZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChvYnNlcnZlclVwZGF0ZSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwge1xuICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRMaXN0OiB0eXBlb2Ygb3B0aW9ucy5jaGlsZExpc3QgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hpbGRMaXN0LFxuICAgICAgY2hhcmFjdGVyRGF0YTogdHlwZW9mIG9wdGlvbnMuY2hhcmFjdGVyRGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGFyYWN0ZXJEYXRhLFxuICAgIH0pO1xuXG4gICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghU3VwcG9ydC5vYnNlcnZlciB8fCAhc3dpcGVyLnBhcmFtcy5vYnNlcnZlcikgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLm9ic2VydmVQYXJlbnRzKSB7XG4gICAgICBjb25zdCBjb250YWluZXJQYXJlbnRzID0gc3dpcGVyLiRlbC5wYXJlbnRzKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lclBhcmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChjb250YWluZXJQYXJlbnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gT2JzZXJ2ZSBjb250YWluZXJcbiAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKHN3aXBlci4kZWxbMF0sIHsgY2hpbGRMaXN0OiBzd2lwZXIucGFyYW1zLm9ic2VydmVTbGlkZUNoaWxkcmVuIH0pO1xuXG4gICAgLy8gT2JzZXJ2ZSB3cmFwcGVyXG4gICAgc3dpcGVyLm9ic2VydmVyLmF0dGFjaChzd2lwZXIuJHdyYXBwZXJFbFswXSwgeyBhdHRyaWJ1dGVzOiBmYWxzZSB9KTtcbiAgfSxcbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgICBzd2lwZXIub2JzZXJ2ZXIub2JzZXJ2ZXJzID0gW107XG4gIH0sXG59O1xuXG52YXIgT2JzZXJ2ZXIkMSA9IHtcbiAgbmFtZTogJ29ic2VydmVyJyxcbiAgcGFyYW1zOiB7XG4gICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgIG9ic2VydmVQYXJlbnRzOiBmYWxzZSxcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogZmFsc2UsXG4gIH0sXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgIG9ic2VydmVyOiB7XG4gICAgICAgIGluaXQ6IE9ic2VydmVyLmluaXQuYmluZChzd2lwZXIpLFxuICAgICAgICBhdHRhY2g6IE9ic2VydmVyLmF0dGFjaC5iaW5kKHN3aXBlciksXG4gICAgICAgIGRlc3Ryb3k6IE9ic2VydmVyLmRlc3Ryb3kuYmluZChzd2lwZXIpLFxuICAgICAgICBvYnNlcnZlcnM6IFtdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5vYnNlcnZlci5pbml0KCk7XG4gICAgfSxcbiAgICBkZXN0cm95KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5vYnNlcnZlci5kZXN0cm95KCk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFZpcnR1YWwgPSB7XG4gIHVwZGF0ZShmb3JjZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgeyBzbGlkZXNQZXJWaWV3LCBzbGlkZXNQZXJHcm91cCwgY2VudGVyZWRTbGlkZXMgfSA9IHN3aXBlci5wYXJhbXM7XG4gICAgY29uc3QgeyBhZGRTbGlkZXNCZWZvcmUsIGFkZFNsaWRlc0FmdGVyIH0gPSBzd2lwZXIucGFyYW1zLnZpcnR1YWw7XG4gICAgY29uc3Qge1xuICAgICAgZnJvbTogcHJldmlvdXNGcm9tLFxuICAgICAgdG86IHByZXZpb3VzVG8sXG4gICAgICBzbGlkZXMsXG4gICAgICBzbGlkZXNHcmlkOiBwcmV2aW91c1NsaWRlc0dyaWQsXG4gICAgICByZW5kZXJTbGlkZSxcbiAgICAgIG9mZnNldDogcHJldmlvdXNPZmZzZXQsXG4gICAgfSA9IHN3aXBlci52aXJ0dWFsO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IHx8IDA7XG5cbiAgICBsZXQgb2Zmc2V0UHJvcDtcbiAgICBpZiAoc3dpcGVyLnJ0bFRyYW5zbGF0ZSkgb2Zmc2V0UHJvcCA9ICdyaWdodCc7XG4gICAgZWxzZSBvZmZzZXRQcm9wID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCc7XG5cbiAgICBsZXQgc2xpZGVzQWZ0ZXI7XG4gICAgbGV0IHNsaWRlc0JlZm9yZTtcbiAgICBpZiAoY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlc0FmdGVyID0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgKyBzbGlkZXNQZXJHcm91cCArIGFkZFNsaWRlc0JlZm9yZTtcbiAgICAgIHNsaWRlc0JlZm9yZSA9IE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlldyAvIDIpICsgc2xpZGVzUGVyR3JvdXAgKyBhZGRTbGlkZXNBZnRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVzQWZ0ZXIgPSBzbGlkZXNQZXJWaWV3ICsgKHNsaWRlc1Blckdyb3VwIC0gMSkgKyBhZGRTbGlkZXNCZWZvcmU7XG4gICAgICBzbGlkZXNCZWZvcmUgPSBzbGlkZXNQZXJHcm91cCArIGFkZFNsaWRlc0FmdGVyO1xuICAgIH1cbiAgICBjb25zdCBmcm9tID0gTWF0aC5tYXgoKGFjdGl2ZUluZGV4IHx8IDApIC0gc2xpZGVzQmVmb3JlLCAwKTtcbiAgICBjb25zdCB0byA9IE1hdGgubWluKChhY3RpdmVJbmRleCB8fCAwKSArIHNsaWRlc0FmdGVyLCBzbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gKHN3aXBlci5zbGlkZXNHcmlkW2Zyb21dIHx8IDApIC0gKHN3aXBlci5zbGlkZXNHcmlkWzBdIHx8IDApO1xuXG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlci52aXJ0dWFsLCB7XG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgICBvZmZzZXQsXG4gICAgICBzbGlkZXNHcmlkOiBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9uUmVuZGVyZWQoKSB7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgICBpZiAoc3dpcGVyLmxhenkgJiYgc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2aW91c0Zyb20gPT09IGZyb20gJiYgcHJldmlvdXNUbyA9PT0gdG8gJiYgIWZvcmNlKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc0dyaWQgIT09IHByZXZpb3VzU2xpZGVzR3JpZCAmJiBvZmZzZXQgIT09IHByZXZpb3VzT2Zmc2V0KSB7XG4gICAgICAgIHN3aXBlci5zbGlkZXMuY3NzKG9mZnNldFByb3AsIGAke29mZnNldH1weGApO1xuICAgICAgfVxuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwucmVuZGVyRXh0ZXJuYWwpIHtcbiAgICAgIHN3aXBlci5wYXJhbXMudmlydHVhbC5yZW5kZXJFeHRlcm5hbC5jYWxsKHN3aXBlciwge1xuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGZyb20sXG4gICAgICAgIHRvLFxuICAgICAgICBzbGlkZXM6IChmdW5jdGlvbiBnZXRTbGlkZXMoKSB7XG4gICAgICAgICAgY29uc3Qgc2xpZGVzVG9SZW5kZXIgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gZnJvbTsgaSA8PSB0bzsgaSArPSAxKSB7XG4gICAgICAgICAgICBzbGlkZXNUb1JlbmRlci5wdXNoKHNsaWRlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzbGlkZXNUb1JlbmRlcjtcbiAgICAgICAgfSgpKSxcbiAgICAgIH0pO1xuICAgICAgb25SZW5kZXJlZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmVwZW5kSW5kZXhlcyA9IFtdO1xuICAgIGNvbnN0IGFwcGVuZEluZGV4ZXMgPSBbXTtcbiAgICBpZiAoZm9yY2UpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmZpbmQoYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31gKS5yZW1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IHByZXZpb3VzRnJvbTsgaSA8PSBwcmV2aW91c1RvOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGkgPCBmcm9tIHx8IGkgPiB0bykge1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsLmZpbmQoYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke2l9XCJdYCkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChpID49IGZyb20gJiYgaSA8PSB0bykge1xuICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzVG8gPT09ICd1bmRlZmluZWQnIHx8IGZvcmNlKSB7XG4gICAgICAgICAgYXBwZW5kSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpID4gcHJldmlvdXNUbykgYXBwZW5kSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgIGlmIChpIDwgcHJldmlvdXNGcm9tKSBwcmVwZW5kSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGFwcGVuZEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmFwcGVuZChyZW5kZXJTbGlkZShzbGlkZXNbaW5kZXhdLCBpbmRleCkpO1xuICAgIH0pO1xuICAgIHByZXBlbmRJbmRleGVzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwucHJlcGVuZChyZW5kZXJTbGlkZShzbGlkZXNbaW5kZXhdLCBpbmRleCkpO1xuICAgIH0pO1xuICAgIHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKCcuc3dpcGVyLXNsaWRlJykuY3NzKG9mZnNldFByb3AsIGAke29mZnNldH1weGApO1xuICAgIG9uUmVuZGVyZWQoKTtcbiAgfSxcbiAgcmVuZGVyU2xpZGUoc2xpZGUsIGluZGV4KSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnZpcnR1YWw7XG4gICAgaWYgKHBhcmFtcy5jYWNoZSAmJiBzd2lwZXIudmlydHVhbC5jYWNoZVtpbmRleF0pIHtcbiAgICAgIHJldHVybiBzd2lwZXIudmlydHVhbC5jYWNoZVtpbmRleF07XG4gICAgfVxuICAgIGNvbnN0ICRzbGlkZUVsID0gcGFyYW1zLnJlbmRlclNsaWRlXG4gICAgICA/ICQocGFyYW1zLnJlbmRlclNsaWRlLmNhbGwoc3dpcGVyLCBzbGlkZSwgaW5kZXgpKVxuICAgICAgOiAkKGA8ZGl2IGNsYXNzPVwiJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9XCIgZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke2luZGV4fVwiPiR7c2xpZGV9PC9kaXY+YCk7XG4gICAgaWYgKCEkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpKSAkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgICBpZiAocGFyYW1zLmNhY2hlKSBzd2lwZXIudmlydHVhbC5jYWNoZVtpbmRleF0gPSAkc2xpZGVFbDtcbiAgICByZXR1cm4gJHNsaWRlRWw7XG4gIH0sXG4gIGFwcGVuZFNsaWRlKHNsaWRlcykge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSkgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnB1c2goc2xpZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnB1c2goc2xpZGVzKTtcbiAgICB9XG4gICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICB9LFxuICBwcmVwZW5kU2xpZGUoc2xpZGVzKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICBsZXQgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG4gICAgbGV0IG51bWJlck9mTmV3U2xpZGVzID0gMTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNsaWRlcykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0pIHN3aXBlci52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KHNsaWRlc1tpXSk7XG4gICAgICB9XG4gICAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgICAgIG51bWJlck9mTmV3U2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnVuc2hpZnQoc2xpZGVzKTtcbiAgICB9XG4gICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgY29uc3QgY2FjaGUgPSBzd2lwZXIudmlydHVhbC5jYWNoZTtcbiAgICAgIGNvbnN0IG5ld0NhY2hlID0ge307XG4gICAgICBPYmplY3Qua2V5cyhjYWNoZSkuZm9yRWFjaCgoY2FjaGVkSW5kZXgpID0+IHtcbiAgICAgICAgbmV3Q2FjaGVbcGFyc2VJbnQoY2FjaGVkSW5kZXgsIDEwKSArIG51bWJlck9mTmV3U2xpZGVzXSA9IGNhY2hlW2NhY2hlZEluZGV4XTtcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLnZpcnR1YWwuY2FjaGUgPSBuZXdDYWNoZTtcbiAgICB9XG4gICAgc3dpcGVyLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfSxcbiAgcmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcykge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBzbGlkZXNJbmRleGVzID09PSAndW5kZWZpbmVkJyB8fCBzbGlkZXNJbmRleGVzID09PSBudWxsKSByZXR1cm47XG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHNsaWRlc0luZGV4ZXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gc2xpZGVzSW5kZXhlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMuc3BsaWNlKHNsaWRlc0luZGV4ZXNbaV0sIDEpO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmNhY2hlKSB7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci52aXJ0dWFsLmNhY2hlW3NsaWRlc0luZGV4ZXNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzbGlkZXNJbmRleGVzW2ldIDwgYWN0aXZlSW5kZXgpIGFjdGl2ZUluZGV4IC09IDE7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gTWF0aC5tYXgoYWN0aXZlSW5kZXgsIDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMuc3BsaWNlKHNsaWRlc0luZGV4ZXMsIDEpO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgICBkZWxldGUgc3dpcGVyLnZpcnR1YWwuY2FjaGVbc2xpZGVzSW5kZXhlc107XG4gICAgICB9XG4gICAgICBpZiAoc2xpZGVzSW5kZXhlcyA8IGFjdGl2ZUluZGV4KSBhY3RpdmVJbmRleCAtPSAxO1xuICAgICAgYWN0aXZlSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCwgMCk7XG4gICAgfVxuICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcbiAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCwgMCk7XG4gIH0sXG4gIHJlbW92ZUFsbFNsaWRlcygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcyA9IFtdO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgIHN3aXBlci52aXJ0dWFsLmNhY2hlID0ge307XG4gICAgfVxuICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcbiAgICBzd2lwZXIuc2xpZGVUbygwLCAwKTtcbiAgfSxcbn07XG5cbnZhciBWaXJ0dWFsJDEgPSB7XG4gIG5hbWU6ICd2aXJ0dWFsJyxcbiAgcGFyYW1zOiB7XG4gICAgdmlydHVhbDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBzbGlkZXM6IFtdLFxuICAgICAgY2FjaGU6IHRydWUsXG4gICAgICByZW5kZXJTbGlkZTogbnVsbCxcbiAgICAgIHJlbmRlckV4dGVybmFsOiBudWxsLFxuICAgICAgYWRkU2xpZGVzQmVmb3JlOiAwLFxuICAgICAgYWRkU2xpZGVzQWZ0ZXI6IDAsXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgdmlydHVhbDoge1xuICAgICAgICB1cGRhdGU6IFZpcnR1YWwudXBkYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgYXBwZW5kU2xpZGU6IFZpcnR1YWwuYXBwZW5kU2xpZGUuYmluZChzd2lwZXIpLFxuICAgICAgICBwcmVwZW5kU2xpZGU6IFZpcnR1YWwucHJlcGVuZFNsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgcmVtb3ZlU2xpZGU6IFZpcnR1YWwucmVtb3ZlU2xpZGUuYmluZChzd2lwZXIpLFxuICAgICAgICByZW1vdmVBbGxTbGlkZXM6IFZpcnR1YWwucmVtb3ZlQWxsU2xpZGVzLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgcmVuZGVyU2xpZGU6IFZpcnR1YWwucmVuZGVyU2xpZGUuYmluZChzd2lwZXIpLFxuICAgICAgICBzbGlkZXM6IHN3aXBlci5wYXJhbXMudmlydHVhbC5zbGlkZXMsXG4gICAgICAgIGNhY2hlOiB7fSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgYmVmb3JlSW5pdCgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc312aXJ0dWFsYCk7XG4gICAgICBjb25zdCBvdmVyd3JpdGVQYXJhbXMgPSB7XG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICB9O1xuICAgICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5wYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCBvdmVyd3JpdGVQYXJhbXMpO1xuXG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlKSB7XG4gICAgICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci52aXJ0dWFsLnVwZGF0ZSgpO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBLZXlib2FyZCA9IHtcbiAgaGFuZGxlKGV2ZW50KSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7IHJ0bFRyYW5zbGF0ZTogcnRsIH0gPSBzd2lwZXI7XG4gICAgbGV0IGUgPSBldmVudDtcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvLyBqcXVlcnkgZml4XG4gICAgY29uc3Qga2MgPSBlLmtleUNvZGUgfHwgZS5jaGFyQ29kZTtcbiAgICAvLyBEaXJlY3Rpb25zIGxvY2tzXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgKChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYga2MgPT09IDM5KSB8fCAoc3dpcGVyLmlzVmVydGljYWwoKSAmJiBrYyA9PT0gNDApIHx8IGtjID09PSAzNCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgKChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYga2MgPT09IDM3KSB8fCAoc3dpcGVyLmlzVmVydGljYWwoKSAmJiBrYyA9PT0gMzgpIHx8IGtjID09PSAzMykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZSAmJiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJykpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLmtleWJvYXJkLm9ubHlJblZpZXdwb3J0ICYmIChrYyA9PT0gMzMgfHwga2MgPT09IDM0IHx8IGtjID09PSAzNyB8fCBrYyA9PT0gMzkgfHwga2MgPT09IDM4IHx8IGtjID09PSA0MCkpIHtcbiAgICAgIGxldCBpblZpZXcgPSBmYWxzZTtcbiAgICAgIC8vIENoZWNrIHRoYXQgc3dpcGVyIHNob3VsZCBiZSBpbnNpZGUgb2YgdmlzaWJsZSBhcmVhIG9mIHdpbmRvd1xuICAgICAgaWYgKHN3aXBlci4kZWwucGFyZW50cyhgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWApLmxlbmd0aCA+IDAgJiYgc3dpcGVyLiRlbC5wYXJlbnRzKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3N9YCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3Qgc3dpcGVyT2Zmc2V0ID0gc3dpcGVyLiRlbC5vZmZzZXQoKTtcbiAgICAgIGlmIChydGwpIHN3aXBlck9mZnNldC5sZWZ0IC09IHN3aXBlci4kZWxbMF0uc2Nyb2xsTGVmdDtcbiAgICAgIGNvbnN0IHN3aXBlckNvb3JkID0gW1xuICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3BdLFxuICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXIud2lkdGgsIHN3aXBlck9mZnNldC50b3BdLFxuICAgICAgICBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXIuaGVpZ2h0XSxcbiAgICAgICAgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVyLmhlaWdodF0sXG4gICAgICBdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXJDb29yZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcG9pbnRbMF0gPj0gMCAmJiBwb2ludFswXSA8PSB3aW5kb3dXaWR0aFxuICAgICAgICAgICYmIHBvaW50WzFdID49IDAgJiYgcG9pbnRbMV0gPD0gd2luZG93SGVpZ2h0XG4gICAgICAgICkge1xuICAgICAgICAgIGluVmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaW5WaWV3KSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICBpZiAoa2MgPT09IDMzIHx8IGtjID09PSAzNCB8fCBrYyA9PT0gMzcgfHwga2MgPT09IDM5KSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGVsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCgoa2MgPT09IDM0IHx8IGtjID09PSAzOSkgJiYgIXJ0bCkgfHwgKChrYyA9PT0gMzMgfHwga2MgPT09IDM3KSAmJiBydGwpKSBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICBpZiAoKChrYyA9PT0gMzMgfHwga2MgPT09IDM3KSAmJiAhcnRsKSB8fCAoKGtjID09PSAzNCB8fCBrYyA9PT0gMzkpICYmIHJ0bCkpIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtjID09PSAzMyB8fCBrYyA9PT0gMzQgfHwga2MgPT09IDM4IHx8IGtjID09PSA0MCkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChrYyA9PT0gMzQgfHwga2MgPT09IDQwKSBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICBpZiAoa2MgPT09IDMzIHx8IGtjID09PSAzOCkgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgna2V5UHJlc3MnLCBrYyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSByZXR1cm47XG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCBzd2lwZXIua2V5Ym9hcmQuaGFuZGxlKTtcbiAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCA9IHRydWU7XG4gIH0sXG4gIGRpc2FibGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5rZXlib2FyZC5lbmFibGVkKSByZXR1cm47XG4gICAgJChkb2N1bWVudCkub2ZmKCdrZXlkb3duJywgc3dpcGVyLmtleWJvYXJkLmhhbmRsZSk7XG4gICAgc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQgPSBmYWxzZTtcbiAgfSxcbn07XG5cbnZhciBLZXlib2FyZCQxID0ge1xuICBuYW1lOiAna2V5Ym9hcmQnLFxuICBwYXJhbXM6IHtcbiAgICBrZXlib2FyZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICBrZXlib2FyZDoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgZW5hYmxlOiBLZXlib2FyZC5lbmFibGUuYmluZChzd2lwZXIpLFxuICAgICAgICBkaXNhYmxlOiBLZXlib2FyZC5kaXNhYmxlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgaGFuZGxlOiBLZXlib2FyZC5oYW5kbGUuYmluZChzd2lwZXIpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmtleWJvYXJkLmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmtleWJvYXJkLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmtleWJvYXJkLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcblxuZnVuY3Rpb24gaXNFdmVudFN1cHBvcnRlZCgpIHtcbiAgY29uc3QgZXZlbnROYW1lID0gJ29ud2hlZWwnO1xuICBsZXQgaXNTdXBwb3J0ZWQgPSBldmVudE5hbWUgaW4gZG9jdW1lbnQ7XG5cbiAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShldmVudE5hbWUsICdyZXR1cm47Jyk7XG4gICAgaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZWxlbWVudFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaWYgKCFpc1N1cHBvcnRlZFxuICAgICYmIGRvY3VtZW50LmltcGxlbWVudGF0aW9uXG4gICAgJiYgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZVxuICAgIC8vIGFsd2F5cyByZXR1cm5zIHRydWUgaW4gbmV3ZXIgYnJvd3NlcnMgYXMgcGVyIHRoZSBzdGFuZGFyZC5cbiAgICAvLyBAc2VlIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9taW1wbGVtZW50YXRpb24taGFzZmVhdHVyZVxuICAgICYmIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoJycsICcnKSAhPT0gdHJ1ZVxuICApIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHdheSB0byB0ZXN0IHN1cHBvcnQgZm9yIHRoZSBgd2hlZWxgIGV2ZW50IGluIElFOSsuXG4gICAgaXNTdXBwb3J0ZWQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCdFdmVudHMud2hlZWwnLCAnMy4wJyk7XG4gIH1cblxuICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG59XG5jb25zdCBNb3VzZXdoZWVsID0ge1xuICBsYXN0U2Nyb2xsVGltZTogVXRpbHMubm93KCksXG4gIGV2ZW50OiAoZnVuY3Rpb24gZ2V0RXZlbnQoKSB7XG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSByZXR1cm4gJ0RPTU1vdXNlU2Nyb2xsJztcbiAgICByZXR1cm4gaXNFdmVudFN1cHBvcnRlZCgpID8gJ3doZWVsJyA6ICdtb3VzZXdoZWVsJztcbiAgfSgpKSxcbiAgbm9ybWFsaXplKGUpIHtcbiAgICAvLyBSZWFzb25hYmxlIGRlZmF1bHRzXG4gICAgY29uc3QgUElYRUxfU1RFUCA9IDEwO1xuICAgIGNvbnN0IExJTkVfSEVJR0hUID0gNDA7XG4gICAgY29uc3QgUEFHRV9IRUlHSFQgPSA4MDA7XG5cbiAgICBsZXQgc1ggPSAwO1xuICAgIGxldCBzWSA9IDA7IC8vIHNwaW5YLCBzcGluWVxuICAgIGxldCBwWCA9IDA7XG4gICAgbGV0IHBZID0gMDsgLy8gcGl4ZWxYLCBwaXhlbFlcblxuICAgIC8vIExlZ2FjeVxuICAgIGlmICgnZGV0YWlsJyBpbiBlKSB7XG4gICAgICBzWSA9IGUuZGV0YWlsO1xuICAgIH1cbiAgICBpZiAoJ3doZWVsRGVsdGEnIGluIGUpIHtcbiAgICAgIHNZID0gLWUud2hlZWxEZWx0YSAvIDEyMDtcbiAgICB9XG4gICAgaWYgKCd3aGVlbERlbHRhWScgaW4gZSkge1xuICAgICAgc1kgPSAtZS53aGVlbERlbHRhWSAvIDEyMDtcbiAgICB9XG4gICAgaWYgKCd3aGVlbERlbHRhWCcgaW4gZSkge1xuICAgICAgc1ggPSAtZS53aGVlbERlbHRhWCAvIDEyMDtcbiAgICB9XG5cbiAgICAvLyBzaWRlIHNjcm9sbGluZyBvbiBGRiB3aXRoIERPTU1vdXNlU2Nyb2xsXG4gICAgaWYgKCdheGlzJyBpbiBlICYmIGUuYXhpcyA9PT0gZS5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgIHNYID0gc1k7XG4gICAgICBzWSA9IDA7XG4gICAgfVxuXG4gICAgcFggPSBzWCAqIFBJWEVMX1NURVA7XG4gICAgcFkgPSBzWSAqIFBJWEVMX1NURVA7XG5cbiAgICBpZiAoJ2RlbHRhWScgaW4gZSkge1xuICAgICAgcFkgPSBlLmRlbHRhWTtcbiAgICB9XG4gICAgaWYgKCdkZWx0YVgnIGluIGUpIHtcbiAgICAgIHBYID0gZS5kZWx0YVg7XG4gICAgfVxuXG4gICAgaWYgKChwWCB8fCBwWSkgJiYgZS5kZWx0YU1vZGUpIHtcbiAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSkgeyAvLyBkZWx0YSBpbiBMSU5FIHVuaXRzXG4gICAgICAgIHBYICo9IExJTkVfSEVJR0hUO1xuICAgICAgICBwWSAqPSBMSU5FX0hFSUdIVDtcbiAgICAgIH0gZWxzZSB7IC8vIGRlbHRhIGluIFBBR0UgdW5pdHNcbiAgICAgICAgcFggKj0gUEFHRV9IRUlHSFQ7XG4gICAgICAgIHBZICo9IFBBR0VfSEVJR0hUO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZhbGwtYmFjayBpZiBzcGluIGNhbm5vdCBiZSBkZXRlcm1pbmVkXG4gICAgaWYgKHBYICYmICFzWCkge1xuICAgICAgc1ggPSAocFggPCAxKSA/IC0xIDogMTtcbiAgICB9XG4gICAgaWYgKHBZICYmICFzWSkge1xuICAgICAgc1kgPSAocFkgPCAxKSA/IC0xIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3Bpblg6IHNYLFxuICAgICAgc3Bpblk6IHNZLFxuICAgICAgcGl4ZWxYOiBwWCxcbiAgICAgIHBpeGVsWTogcFksXG4gICAgfTtcbiAgfSxcbiAgaGFuZGxlTW91c2VFbnRlcigpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5tb3VzZUVudGVyZWQgPSB0cnVlO1xuICB9LFxuICBoYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLm1vdXNlRW50ZXJlZCA9IGZhbHNlO1xuICB9LFxuICBoYW5kbGUoZXZlbnQpIHtcbiAgICBsZXQgZSA9IGV2ZW50O1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsO1xuXG4gICAgaWYgKCFzd2lwZXIubW91c2VFbnRlcmVkICYmICFwYXJhbXMucmVsZWFzZU9uRWRnZXMpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDsgLy8ganF1ZXJ5IGZpeFxuICAgIGxldCBkZWx0YSA9IDA7XG4gICAgY29uc3QgcnRsRmFjdG9yID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTtcblxuICAgIGNvbnN0IGRhdGEgPSBNb3VzZXdoZWVsLm5vcm1hbGl6ZShlKTtcblxuICAgIGlmIChwYXJhbXMuZm9yY2VUb0F4aXMpIHtcbiAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRhdGEucGl4ZWxYKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxZKSkgZGVsdGEgPSBkYXRhLnBpeGVsWCAqIHJ0bEZhY3RvcjtcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGF0YS5waXhlbFkpID4gTWF0aC5hYnMoZGF0YS5waXhlbFgpKSBkZWx0YSA9IGRhdGEucGl4ZWxZO1xuICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsdGEgPSBNYXRoLmFicyhkYXRhLnBpeGVsWCkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWSkgPyAtZGF0YS5waXhlbFggKiBydGxGYWN0b3IgOiAtZGF0YS5waXhlbFk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhID09PSAwKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmIChwYXJhbXMuaW52ZXJ0KSBkZWx0YSA9IC1kZWx0YTtcblxuICAgIGlmICghc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgaWYgKFV0aWxzLm5vdygpIC0gc3dpcGVyLm1vdXNld2hlZWwubGFzdFNjcm9sbFRpbWUgPiA2MCkge1xuICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICAgICAgaWYgKCghc3dpcGVyLmlzRW5kIHx8IHN3aXBlci5wYXJhbXMubG9vcCkgJiYgIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCdzY3JvbGwnLCBlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5yZWxlYXNlT25FZGdlcykgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoKCFzd2lwZXIuaXNCZWdpbm5pbmcgfHwgc3dpcGVyLnBhcmFtcy5sb29wKSAmJiAhc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsJywgZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnJlbGVhc2VPbkVkZ2VzKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHN3aXBlci5tb3VzZXdoZWVsLmxhc3RTY3JvbGxUaW1lID0gKG5ldyB3aW5kb3cuRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZyZWVtb2RlIG9yIHNjcm9sbENvbnRhaW5lcjpcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIH1cbiAgICAgIGxldCBwb3NpdGlvbiA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKSArIChkZWx0YSAqIHBhcmFtcy5zZW5zaXRpdml0eSk7XG4gICAgICBjb25zdCB3YXNCZWdpbm5pbmcgPSBzd2lwZXIuaXNCZWdpbm5pbmc7XG4gICAgICBjb25zdCB3YXNFbmQgPSBzd2lwZXIuaXNFbmQ7XG5cbiAgICAgIGlmIChwb3NpdGlvbiA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgaWYgKHBvc2l0aW9uIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkgcG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG5cbiAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgICAgaWYgKCghd2FzQmVnaW5uaW5nICYmIHN3aXBlci5pc0JlZ2lubmluZykgfHwgKCF3YXNFbmQgJiYgc3dpcGVyLmlzRW5kKSkge1xuICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoc3dpcGVyLm1vdXNld2hlZWwudGltZW91dCk7XG4gICAgICAgIHN3aXBlci5tb3VzZXdoZWVsLnRpbWVvdXQgPSBVdGlscy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9XG4gICAgICAvLyBFbWl0IGV2ZW50XG4gICAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsJywgZSk7XG5cbiAgICAgIC8vIFN0b3AgYXV0b3BsYXlcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5ICYmIHN3aXBlci5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbikgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgIC8vIFJldHVybiBwYWdlIHNjcm9sbCBvbiBlZGdlIHBvc2l0aW9uc1xuICAgICAgaWYgKHBvc2l0aW9uID09PSBzd2lwZXIubWluVHJhbnNsYXRlKCkgfHwgcG9zaXRpb24gPT09IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIGVuYWJsZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghTW91c2V3aGVlbC5ldmVudCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHRhcmdldCA9IHN3aXBlci4kZWw7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZWQgIT09ICdjb250YWluZXInKSB7XG4gICAgICB0YXJnZXQgPSAkKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZWQpO1xuICAgIH1cbiAgICB0YXJnZXQub24oJ21vdXNlZW50ZXInLCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGVNb3VzZUVudGVyKTtcbiAgICB0YXJnZXQub24oJ21vdXNlbGVhdmUnLCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGVNb3VzZUxlYXZlKTtcbiAgICB0YXJnZXQub24oTW91c2V3aGVlbC5ldmVudCwgc3dpcGVyLm1vdXNld2hlZWwuaGFuZGxlKTtcbiAgICBzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGlzYWJsZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghTW91c2V3aGVlbC5ldmVudCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCkgcmV0dXJuIGZhbHNlO1xuICAgIGxldCB0YXJnZXQgPSBzd2lwZXIuJGVsO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkICE9PSAnY29udGFpbmVyJykge1xuICAgICAgdGFyZ2V0ID0gJChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2VkKTtcbiAgICB9XG4gICAgdGFyZ2V0Lm9mZihNb3VzZXdoZWVsLmV2ZW50LCBzd2lwZXIubW91c2V3aGVlbC5oYW5kbGUpO1xuICAgIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn07XG5cbnZhciBNb3VzZXdoZWVsJDEgPSB7XG4gIG5hbWU6ICdtb3VzZXdoZWVsJyxcbiAgcGFyYW1zOiB7XG4gICAgbW91c2V3aGVlbDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICByZWxlYXNlT25FZGdlczogZmFsc2UsXG4gICAgICBpbnZlcnQ6IGZhbHNlLFxuICAgICAgZm9yY2VUb0F4aXM6IGZhbHNlLFxuICAgICAgc2Vuc2l0aXZpdHk6IDEsXG4gICAgICBldmVudHNUYXJnZWQ6ICdjb250YWluZXInLFxuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgIG1vdXNld2hlZWw6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIGVuYWJsZTogTW91c2V3aGVlbC5lbmFibGUuYmluZChzd2lwZXIpLFxuICAgICAgICBkaXNhYmxlOiBNb3VzZXdoZWVsLmRpc2FibGUuYmluZChzd2lwZXIpLFxuICAgICAgICBoYW5kbGU6IE1vdXNld2hlZWwuaGFuZGxlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgaGFuZGxlTW91c2VFbnRlcjogTW91c2V3aGVlbC5oYW5kbGVNb3VzZUVudGVyLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgaGFuZGxlTW91c2VMZWF2ZTogTW91c2V3aGVlbC5oYW5kbGVNb3VzZUxlYXZlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgbGFzdFNjcm9sbFRpbWU6IFV0aWxzLm5vdygpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZW5hYmxlZCkgc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlKCk7XG4gICAgfSxcbiAgICBkZXN0cm95KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSBzd2lwZXIubW91c2V3aGVlbC5kaXNhYmxlKCk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSB7XG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgTmF2aWdhdGlvbiBCdXR0b25zXG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb247XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgY29uc3QgeyAkbmV4dEVsLCAkcHJldkVsIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICAkcHJldkVsLmFkZENsYXNzKHBhcmFtcy5kaXNhYmxlZENsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRwcmV2RWwucmVtb3ZlQ2xhc3MocGFyYW1zLmRpc2FibGVkQ2xhc3MpO1xuICAgICAgfVxuICAgICAgJHByZXZFbFtzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgIH1cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgJG5leHRFbC5hZGRDbGFzcyhwYXJhbXMuZGlzYWJsZWRDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkbmV4dEVsLnJlbW92ZUNsYXNzKHBhcmFtcy5kaXNhYmxlZENsYXNzKTtcbiAgICAgIH1cbiAgICAgICRuZXh0RWxbc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICB9XG4gIH0sXG4gIG9uUHJldkNsaWNrKGUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gIH0sXG4gIG9uTmV4dENsaWNrKGUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb247XG4gICAgaWYgKCEocGFyYW1zLm5leHRFbCB8fCBwYXJhbXMucHJldkVsKSkgcmV0dXJuO1xuXG4gICAgbGV0ICRuZXh0RWw7XG4gICAgbGV0ICRwcmV2RWw7XG4gICAgaWYgKHBhcmFtcy5uZXh0RWwpIHtcbiAgICAgICRuZXh0RWwgPSAkKHBhcmFtcy5uZXh0RWwpO1xuICAgICAgaWYgKFxuICAgICAgICBzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzXG4gICAgICAgICYmIHR5cGVvZiBwYXJhbXMubmV4dEVsID09PSAnc3RyaW5nJ1xuICAgICAgICAmJiAkbmV4dEVsLmxlbmd0aCA+IDFcbiAgICAgICAgJiYgc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5uZXh0RWwpLmxlbmd0aCA9PT0gMVxuICAgICAgKSB7XG4gICAgICAgICRuZXh0RWwgPSBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLm5leHRFbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJhbXMucHJldkVsKSB7XG4gICAgICAkcHJldkVsID0gJChwYXJhbXMucHJldkVsKTtcbiAgICAgIGlmIChcbiAgICAgICAgc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50c1xuICAgICAgICAmJiB0eXBlb2YgcGFyYW1zLnByZXZFbCA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgJHByZXZFbC5sZW5ndGggPiAxXG4gICAgICAgICYmIHN3aXBlci4kZWwuZmluZChwYXJhbXMucHJldkVsKS5sZW5ndGggPT09IDFcbiAgICAgICkge1xuICAgICAgICAkcHJldkVsID0gc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5wcmV2RWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoID4gMCkge1xuICAgICAgJG5leHRFbC5vbignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vbk5leHRDbGljayk7XG4gICAgfVxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgJHByZXZFbC5vbignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vblByZXZDbGljayk7XG4gICAgfVxuXG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlci5uYXZpZ2F0aW9uLCB7XG4gICAgICAkbmV4dEVsLFxuICAgICAgbmV4dEVsOiAkbmV4dEVsICYmICRuZXh0RWxbMF0sXG4gICAgICAkcHJldkVsLFxuICAgICAgcHJldkVsOiAkcHJldkVsICYmICRwcmV2RWxbMF0sXG4gICAgfSk7XG4gIH0sXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7ICRuZXh0RWwsICRwcmV2RWwgfSA9IHN3aXBlci5uYXZpZ2F0aW9uO1xuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoKSB7XG4gICAgICAkbmV4dEVsLm9mZignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vbk5leHRDbGljayk7XG4gICAgICAkbmV4dEVsLnJlbW92ZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKTtcbiAgICB9XG4gICAgaWYgKCRwcmV2RWwgJiYgJHByZXZFbC5sZW5ndGgpIHtcbiAgICAgICRwcmV2RWwub2ZmKCdjbGljaycsIHN3aXBlci5uYXZpZ2F0aW9uLm9uUHJldkNsaWNrKTtcbiAgICAgICRwcmV2RWwucmVtb3ZlQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpO1xuICAgIH1cbiAgfSxcbn07XG5cbnZhciBOYXZpZ2F0aW9uJDEgPSB7XG4gIG5hbWU6ICduYXZpZ2F0aW9uJyxcbiAgcGFyYW1zOiB7XG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBudWxsLFxuICAgICAgcHJldkVsOiBudWxsLFxuXG4gICAgICBoaWRlT25DbGljazogZmFsc2UsXG4gICAgICBkaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcsXG4gICAgICBoaWRkZW5DbGFzczogJ3N3aXBlci1idXR0b24taGlkZGVuJyxcbiAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1idXR0b24tbG9jaycsXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBpbml0OiBOYXZpZ2F0aW9uLmluaXQuYmluZChzd2lwZXIpLFxuICAgICAgICB1cGRhdGU6IE5hdmlnYXRpb24udXBkYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgZGVzdHJveTogTmF2aWdhdGlvbi5kZXN0cm95LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgb25OZXh0Q2xpY2s6IE5hdmlnYXRpb24ub25OZXh0Q2xpY2suYmluZChzd2lwZXIpLFxuICAgICAgICBvblByZXZDbGljazogTmF2aWdhdGlvbi5vblByZXZDbGljay5iaW5kKHN3aXBlciksXG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24uaW5pdCgpO1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgfSxcbiAgICB0b0VkZ2UoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gICAgfSxcbiAgICBmcm9tRWRnZSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICB9LFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLm5hdmlnYXRpb24uZGVzdHJveSgpO1xuICAgIH0sXG4gICAgY2xpY2soZSkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGNvbnN0IHsgJG5leHRFbCwgJHByZXZFbCB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG4gICAgICBpZiAoXG4gICAgICAgIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRlT25DbGlja1xuICAgICAgICAmJiAhJChlLnRhcmdldCkuaXMoJHByZXZFbClcbiAgICAgICAgJiYgISQoZS50YXJnZXQpLmlzKCRuZXh0RWwpXG4gICAgICApIHtcbiAgICAgICAgbGV0IGlzSGlkZGVuO1xuICAgICAgICBpZiAoJG5leHRFbCkge1xuICAgICAgICAgIGlzSGlkZGVuID0gJG5leHRFbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICB9IGVsc2UgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgICBpc0hpZGRlbiA9ICRwcmV2RWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbmF2aWdhdGlvblNob3cnLCBzd2lwZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCduYXZpZ2F0aW9uSGlkZScsIHN3aXBlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICAgICAkbmV4dEVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgICAkcHJldkVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgUGFnaW5hdGlvbiA9IHtcbiAgdXBkYXRlKCkge1xuICAgIC8vIFJlbmRlciB8fCBVcGRhdGUgUGFnaW5hdGlvbiBidWxsZXRzL2l0ZW1zXG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBydGwgPSBzd2lwZXIucnRsO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoIXBhcmFtcy5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3Qgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgY29uc3QgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsO1xuICAgIC8vIEN1cnJlbnQvVG90YWxcbiAgICBsZXQgY3VycmVudDtcbiAgICBjb25zdCB0b3RhbCA9IHN3aXBlci5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gKHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgY3VycmVudCA9IE1hdGguY2VpbCgoc3dpcGVyLmFjdGl2ZUluZGV4IC0gc3dpcGVyLmxvb3BlZFNsaWRlcykgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgICAgIGlmIChjdXJyZW50ID4gc2xpZGVzTGVuZ3RoIC0gMSAtIChzd2lwZXIubG9vcGVkU2xpZGVzICogMikpIHtcbiAgICAgICAgY3VycmVudCAtPSAoc2xpZGVzTGVuZ3RoIC0gKHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA+IHRvdGFsIC0gMSkgY3VycmVudCAtPSB0b3RhbDtcbiAgICAgIGlmIChjdXJyZW50IDwgMCAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnYnVsbGV0cycpIGN1cnJlbnQgPSB0b3RhbCArIGN1cnJlbnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIuc25hcEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgfVxuICAgIC8vIFR5cGVzXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJ1bGxldHMgPSBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzO1xuICAgICAgbGV0IGZpcnN0SW5kZXg7XG4gICAgICBsZXQgbGFzdEluZGV4O1xuICAgICAgbGV0IG1pZEluZGV4O1xuICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplID0gYnVsbGV0cy5lcSgwKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnb3V0ZXJXaWR0aCcgOiAnb3V0ZXJIZWlnaHQnXSh0cnVlKTtcbiAgICAgICAgJGVsLmNzcyhzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnd2lkdGgnIDogJ2hlaWdodCcsIGAke3N3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUgKiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyArIDQpfXB4YCk7XG4gICAgICAgIGlmIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID4gMSAmJiBzd2lwZXIucHJldmlvdXNJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ICs9IChjdXJyZW50IC0gc3dpcGVyLnByZXZpb3VzSW5kZXgpO1xuICAgICAgICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDEpKSB7XG4gICAgICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5keW5hbWljQnVsbGV0SW5kZXggPSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpcnN0SW5kZXggPSBjdXJyZW50IC0gc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4O1xuICAgICAgICBsYXN0SW5kZXggPSBmaXJzdEluZGV4ICsgKE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzKSAtIDEpO1xuICAgICAgICBtaWRJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSAvIDI7XG4gICAgICB9XG4gICAgICBidWxsZXRzLnJlbW92ZUNsYXNzKGAke3BhcmFtcy5idWxsZXRBY3RpdmVDbGFzc30gJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW5leHQgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW5leHQtbmV4dCAke3BhcmFtcy5idWxsZXRBY3RpdmVDbGFzc30tcHJldiAke3BhcmFtcy5idWxsZXRBY3RpdmVDbGFzc30tcHJldi1wcmV2ICR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1tYWluYCk7XG4gICAgICBpZiAoJGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgYnVsbGV0cy5lYWNoKChpbmRleCwgYnVsbGV0KSA9PiB7XG4gICAgICAgICAgY29uc3QgJGJ1bGxldCA9ICQoYnVsbGV0KTtcbiAgICAgICAgICBjb25zdCBidWxsZXRJbmRleCA9ICRidWxsZXQuaW5kZXgoKTtcbiAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICRidWxsZXQuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID49IGZpcnN0SW5kZXggJiYgYnVsbGV0SW5kZXggPD0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICRidWxsZXQuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1tYWluYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgJGJ1bGxldFxuICAgICAgICAgICAgICAgIC5wcmV2KClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1wcmV2YClcbiAgICAgICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKGAke3BhcmFtcy5idWxsZXRBY3RpdmVDbGFzc30tcHJldi1wcmV2YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAkYnVsbGV0XG4gICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW5leHRgKVxuICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1uZXh0LW5leHRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgJGJ1bGxldCA9IGJ1bGxldHMuZXEoY3VycmVudCk7XG4gICAgICAgICRidWxsZXQuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgIGNvbnN0ICRmaXJzdERpc3BsYXllZEJ1bGxldCA9IGJ1bGxldHMuZXEoZmlyc3RJbmRleCk7XG4gICAgICAgICAgY29uc3QgJGxhc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzLmVxKGxhc3RJbmRleCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJ1bGxldHMuZXEoaSkuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1tYWluYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICRmaXJzdERpc3BsYXllZEJ1bGxldFxuICAgICAgICAgICAgLnByZXYoKVxuICAgICAgICAgICAgLmFkZENsYXNzKGAke3BhcmFtcy5idWxsZXRBY3RpdmVDbGFzc30tcHJldmApXG4gICAgICAgICAgICAucHJldigpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1wcmV2LXByZXZgKTtcbiAgICAgICAgICAkbGFzdERpc3BsYXllZEJ1bGxldFxuICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgLmFkZENsYXNzKGAke3BhcmFtcy5idWxsZXRBY3RpdmVDbGFzc30tbmV4dGApXG4gICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1uZXh0LW5leHRgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICBjb25zdCBkeW5hbWljQnVsbGV0c0xlbmd0aCA9IE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCk7XG4gICAgICAgIGNvbnN0IGJ1bGxldHNPZmZzZXQgPSAoKChzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRTaXplICogZHluYW1pY0J1bGxldHNMZW5ndGgpIC0gKHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldFNpemUpKSAvIDIpIC0gKG1pZEluZGV4ICogc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0U2l6ZSk7XG4gICAgICAgIGNvbnN0IG9mZnNldFByb3AgPSBydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICBidWxsZXRzLmNzcyhzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyBvZmZzZXRQcm9wIDogJ3RvcCcsIGAke2J1bGxldHNPZmZzZXR9cHhgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICAkZWwuZmluZChgLiR7cGFyYW1zLmN1cnJlbnRDbGFzc31gKS50ZXh0KHBhcmFtcy5mb3JtYXRGcmFjdGlvbkN1cnJlbnQoY3VycmVudCArIDEpKTtcbiAgICAgICRlbC5maW5kKGAuJHtwYXJhbXMudG90YWxDbGFzc31gKS50ZXh0KHBhcmFtcy5mb3JtYXRGcmFjdGlvblRvdGFsKHRvdGFsKSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3Byb2dyZXNzYmFyJykge1xuICAgICAgbGV0IHByb2dyZXNzYmFyRGlyZWN0aW9uO1xuICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNjYWxlID0gKGN1cnJlbnQgKyAxKSAvIHRvdGFsO1xuICAgICAgbGV0IHNjYWxlWCA9IDE7XG4gICAgICBsZXQgc2NhbGVZID0gMTtcbiAgICAgIGlmIChwcm9ncmVzc2JhckRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHNjYWxlWCA9IHNjYWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NhbGVZID0gc2NhbGU7XG4gICAgICB9XG4gICAgICAkZWwuZmluZChgLiR7cGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzfWApLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlWCgke3NjYWxlWH0pIHNjYWxlWSgke3NjYWxlWX0pYCkudHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnY3VzdG9tJyAmJiBwYXJhbXMucmVuZGVyQ3VzdG9tKSB7XG4gICAgICAkZWwuaHRtbChwYXJhbXMucmVuZGVyQ3VzdG9tKHN3aXBlciwgY3VycmVudCArIDEsIHRvdGFsKSk7XG4gICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIHN3aXBlciwgJGVsWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoJ3BhZ2luYXRpb25VcGRhdGUnLCBzd2lwZXIsICRlbFswXSk7XG4gICAgfVxuICAgICRlbFtzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICB9LFxuICByZW5kZXIoKSB7XG4gICAgLy8gUmVuZGVyIENvbnRhaW5lclxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmICghcGFyYW1zLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uJGVsIHx8IHN3aXBlci5wYWdpbmF0aW9uLiRlbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcblxuICAgIGNvbnN0ICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDtcbiAgICBsZXQgcGFnaW5hdGlvbkhUTUwgPSAnJztcbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJykge1xuICAgICAgY29uc3QgbnVtYmVyT2ZCdWxsZXRzID0gc3dpcGVyLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSAoc3dpcGVyLmxvb3BlZFNsaWRlcyAqIDIpKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBwYXJhbXMucmVuZGVyQnVsbGV0LmNhbGwoc3dpcGVyLCBpLCBwYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IGA8JHtwYXJhbXMuYnVsbGV0RWxlbWVudH0gY2xhc3M9XCIke3BhcmFtcy5idWxsZXRDbGFzc31cIj48LyR7cGFyYW1zLmJ1bGxldEVsZW1lbnR9PmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgPSAkZWwuZmluZChgLiR7cGFyYW1zLmJ1bGxldENsYXNzfWApO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdmcmFjdGlvbicpIHtcbiAgICAgIGlmIChwYXJhbXMucmVuZGVyRnJhY3Rpb24pIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBwYXJhbXMucmVuZGVyRnJhY3Rpb24uY2FsbChzd2lwZXIsIHBhcmFtcy5jdXJyZW50Q2xhc3MsIHBhcmFtcy50b3RhbENsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gYDxzcGFuIGNsYXNzPVwiJHtwYXJhbXMuY3VycmVudENsYXNzfVwiPjwvc3Bhbj5gXG4gICAgICAgICsgJyAvICdcbiAgICAgICAgKyBgPHNwYW4gY2xhc3M9XCIke3BhcmFtcy50b3RhbENsYXNzfVwiPjwvc3Bhbj5gO1xuICAgICAgfVxuICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicpIHtcbiAgICAgIGlmIChwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIpIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIuY2FsbChzd2lwZXIsIHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IGA8c3BhbiBjbGFzcz1cIiR7cGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzfVwiPjwvc3Bhbj5gO1xuICAgICAgfVxuICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnR5cGUgIT09ICdjdXN0b20nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIHN3aXBlci5wYWdpbmF0aW9uLiRlbFswXSk7XG4gICAgfVxuICB9LFxuICBpbml0KCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmICghcGFyYW1zLmVsKSByZXR1cm47XG5cbiAgICBsZXQgJGVsID0gJChwYXJhbXMuZWwpO1xuICAgIGlmICgkZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBpZiAoXG4gICAgICBzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzXG4gICAgICAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJ1xuICAgICAgJiYgJGVsLmxlbmd0aCA+IDFcbiAgICAgICYmIHN3aXBlci4kZWwuZmluZChwYXJhbXMuZWwpLmxlbmd0aCA9PT0gMVxuICAgICkge1xuICAgICAgJGVsID0gc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5lbCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5jbGlja2FibGVDbGFzcyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MoYCR7cGFyYW1zLm1vZGlmaWVyQ2xhc3N9JHtwYXJhbXMudHlwZX0tZHluYW1pY2ApO1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uZHluYW1pY0J1bGxldEluZGV4ID0gMDtcbiAgICAgIGlmIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIDwgMSkge1xuICAgICAgICBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInICYmIHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICRlbC5vbignY2xpY2snLCBgLiR7cGFyYW1zLmJ1bGxldENsYXNzfWAsIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBpbmRleCA9ICQodGhpcykuaW5kZXgoKSAqIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIGluZGV4ICs9IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIFV0aWxzLmV4dGVuZChzd2lwZXIucGFnaW5hdGlvbiwge1xuICAgICAgJGVsLFxuICAgICAgZWw6ICRlbFswXSxcbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoIXBhcmFtcy5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3QgJGVsID0gc3dpcGVyLnBhZ2luYXRpb24uJGVsO1xuXG4gICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5oaWRkZW5DbGFzcyk7XG4gICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzKSBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLnJlbW92ZUNsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG4gICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICRlbC5vZmYoJ2NsaWNrJywgYC4ke3BhcmFtcy5idWxsZXRDbGFzc31gKTtcbiAgICB9XG4gIH0sXG59O1xuXG52YXIgUGFnaW5hdGlvbiQxID0ge1xuICBuYW1lOiAncGFnaW5hdGlvbicsXG4gIHBhcmFtczoge1xuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBudWxsLFxuICAgICAgYnVsbGV0RWxlbWVudDogJ3NwYW4nLFxuICAgICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgIHJlbmRlckJ1bGxldDogbnVsbCxcbiAgICAgIHJlbmRlclByb2dyZXNzYmFyOiBudWxsLFxuICAgICAgcmVuZGVyRnJhY3Rpb246IG51bGwsXG4gICAgICByZW5kZXJDdXN0b206IG51bGwsXG4gICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlOiBmYWxzZSxcbiAgICAgIHR5cGU6ICdidWxsZXRzJywgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzc2Jhcicgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLFxuICAgICAgZHluYW1pY01haW5CdWxsZXRzOiAxLFxuICAgICAgZm9ybWF0RnJhY3Rpb25DdXJyZW50OiAobnVtYmVyKSA9PiBudW1iZXIsXG4gICAgICBmb3JtYXRGcmFjdGlvblRvdGFsOiAobnVtYmVyKSA9PiBudW1iZXIsXG4gICAgICBidWxsZXRDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCcsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUnLFxuICAgICAgbW9kaWZpZXJDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLScsIC8vIE5FV1xuICAgICAgY3VycmVudENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tY3VycmVudCcsXG4gICAgICB0b3RhbENsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tdG90YWwnLFxuICAgICAgaGlkZGVuQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1oaWRkZW4nLFxuICAgICAgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsJyxcbiAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzczogJ3N3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlJyxcbiAgICAgIGNsaWNrYWJsZUNsYXNzOiAnc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlJywgLy8gTkVXXG4gICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItcGFnaW5hdGlvbi1sb2NrJyxcbiAgICB9LFxuICB9LFxuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGluaXQ6IFBhZ2luYXRpb24uaW5pdC5iaW5kKHN3aXBlciksXG4gICAgICAgIHJlbmRlcjogUGFnaW5hdGlvbi5yZW5kZXIuYmluZChzd2lwZXIpLFxuICAgICAgICB1cGRhdGU6IFBhZ2luYXRpb24udXBkYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgZGVzdHJveTogUGFnaW5hdGlvbi5kZXN0cm95LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgZHluYW1pY0J1bGxldEluZGV4OiAwLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmluaXQoKTtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnJlbmRlcigpO1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgfSxcbiAgICBhY3RpdmVJbmRleENoYW5nZSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlci5wYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbmFwSW5kZXhDaGFuZ2UoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbGlkZXNMZW5ndGhDaGFuZ2UoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbmFwR3JpZExlbmd0aENoYW5nZSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIucGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIGNsaWNrKGUpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoXG4gICAgICAgIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5lbFxuICAgICAgICAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZU9uQ2xpY2tcbiAgICAgICAgJiYgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA+IDBcbiAgICAgICAgJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcylcbiAgICAgICkge1xuICAgICAgICBjb25zdCBpc0hpZGRlbiA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgncGFnaW5hdGlvblNob3cnLCBzd2lwZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdwYWdpbmF0aW9uSGlkZScsIHN3aXBlcik7XG4gICAgICAgIH1cbiAgICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFNjcm9sbGJhciA9IHtcbiAgc2V0VHJhbnNsYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IHsgc2Nyb2xsYmFyLCBydGxUcmFuc2xhdGU6IHJ0bCwgcHJvZ3Jlc3MgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7XG4gICAgICBkcmFnU2l6ZSwgdHJhY2tTaXplLCAkZHJhZ0VsLCAkZWwsXG4gICAgfSA9IHNjcm9sbGJhcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcblxuICAgIGxldCBuZXdTaXplID0gZHJhZ1NpemU7XG4gICAgbGV0IG5ld1BvcyA9ICh0cmFja1NpemUgLSBkcmFnU2l6ZSkgKiBwcm9ncmVzcztcbiAgICBpZiAocnRsKSB7XG4gICAgICBuZXdQb3MgPSAtbmV3UG9zO1xuICAgICAgaWYgKG5ld1BvcyA+IDApIHtcbiAgICAgICAgbmV3U2l6ZSA9IGRyYWdTaXplIC0gbmV3UG9zO1xuICAgICAgICBuZXdQb3MgPSAwO1xuICAgICAgfSBlbHNlIGlmICgtbmV3UG9zICsgZHJhZ1NpemUgPiB0cmFja1NpemUpIHtcbiAgICAgICAgbmV3U2l6ZSA9IHRyYWNrU2l6ZSArIG5ld1BvcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld1BvcyA8IDApIHtcbiAgICAgIG5ld1NpemUgPSBkcmFnU2l6ZSArIG5ld1BvcztcbiAgICAgIG5ld1BvcyA9IDA7XG4gICAgfSBlbHNlIGlmIChuZXdQb3MgKyBkcmFnU2l6ZSA+IHRyYWNrU2l6ZSkge1xuICAgICAgbmV3U2l6ZSA9IHRyYWNrU2l6ZSAtIG5ld1BvcztcbiAgICB9XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgaWYgKFN1cHBvcnQudHJhbnNmb3JtczNkKSB7XG4gICAgICAgICRkcmFnRWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke25ld1Bvc31weCwgMCwgMClgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRkcmFnRWwudHJhbnNmb3JtKGB0cmFuc2xhdGVYKCR7bmV3UG9zfXB4KWApO1xuICAgICAgfVxuICAgICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9IGAke25ld1NpemV9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoU3VwcG9ydC50cmFuc2Zvcm1zM2QpIHtcbiAgICAgICAgJGRyYWdFbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKDBweCwgJHtuZXdQb3N9cHgsIDApYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZHJhZ0VsLnRyYW5zZm9ybShgdHJhbnNsYXRlWSgke25ld1Bvc31weClgKTtcbiAgICAgIH1cbiAgICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gYCR7bmV3U2l6ZX1weGA7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5zY3JvbGxiYXIudGltZW91dCk7XG4gICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJGVsWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAkZWwudHJhbnNpdGlvbig0MDApO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9LFxuICBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsIHx8ICFzd2lwZXIuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgc3dpcGVyLnNjcm9sbGJhci4kZHJhZ0VsLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9LFxuICB1cGRhdGVTaXplKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzY3JvbGxiYXIgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7ICRkcmFnRWwsICRlbCB9ID0gc2Nyb2xsYmFyO1xuXG4gICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgY29uc3QgdHJhY2tTaXplID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJGVsWzBdLm9mZnNldFdpZHRoIDogJGVsWzBdLm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IGRpdmlkZXIgPSBzd2lwZXIuc2l6ZSAvIHN3aXBlci52aXJ0dWFsU2l6ZTtcbiAgICBjb25zdCBtb3ZlRGl2aWRlciA9IGRpdmlkZXIgKiAodHJhY2tTaXplIC8gc3dpcGVyLnNpemUpO1xuICAgIGxldCBkcmFnU2l6ZTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ1NpemUgPT09ICdhdXRvJykge1xuICAgICAgZHJhZ1NpemUgPSB0cmFja1NpemUgKiBkaXZpZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnU2l6ZSA9IHBhcnNlSW50KHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdTaXplLCAxMCk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9IGAke2RyYWdTaXplfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgJGRyYWdFbFswXS5zdHlsZS5oZWlnaHQgPSBgJHtkcmFnU2l6ZX1weGA7XG4gICAgfVxuXG4gICAgaWYgKGRpdmlkZXIgPj0gMSkge1xuICAgICAgJGVsWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICRlbFswXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5oaWRlKSB7XG4gICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgfVxuICAgIFV0aWxzLmV4dGVuZChzY3JvbGxiYXIsIHtcbiAgICAgIHRyYWNrU2l6ZSxcbiAgICAgIGRpdmlkZXIsXG4gICAgICBtb3ZlRGl2aWRlcixcbiAgICAgIGRyYWdTaXplLFxuICAgIH0pO1xuICAgIHNjcm9sbGJhci4kZWxbc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5sb2NrQ2xhc3MpO1xuICB9LFxuICBnZXRQb2ludGVyUG9zaXRpb24oZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgcmV0dXJuICgoZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJykgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYIHx8IGUuY2xpZW50WCk7XG4gICAgfVxuICAgIHJldHVybiAoKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScpID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWSB8fCBlLmNsaWVudFkpO1xuICB9LFxuICBzZXREcmFnUG9zaXRpb24oZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgeyBzY3JvbGxiYXIsIHJ0bFRyYW5zbGF0ZTogcnRsIH0gPSBzd2lwZXI7XG4gICAgY29uc3Qge1xuICAgICAgJGVsLFxuICAgICAgZHJhZ1NpemUsXG4gICAgICB0cmFja1NpemUsXG4gICAgICBkcmFnU3RhcnRQb3MsXG4gICAgfSA9IHNjcm9sbGJhcjtcblxuICAgIGxldCBwb3NpdGlvblJhdGlvO1xuICAgIHBvc2l0aW9uUmF0aW8gPSAoKHNjcm9sbGJhci5nZXRQb2ludGVyUG9zaXRpb24oZSkpIC0gJGVsLm9mZnNldCgpW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnXVxuICAgICAgLSAoZHJhZ1N0YXJ0UG9zICE9PSBudWxsID8gZHJhZ1N0YXJ0UG9zIDogZHJhZ1NpemUgLyAyKSkgLyAodHJhY2tTaXplIC0gZHJhZ1NpemUpO1xuICAgIHBvc2l0aW9uUmF0aW8gPSBNYXRoLm1heChNYXRoLm1pbihwb3NpdGlvblJhdGlvLCAxKSwgMCk7XG4gICAgaWYgKHJ0bCkge1xuICAgICAgcG9zaXRpb25SYXRpbyA9IDEgLSBwb3NpdGlvblJhdGlvO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgKChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpICogcG9zaXRpb25SYXRpbyk7XG5cbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocG9zaXRpb24pO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH0sXG4gIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIGNvbnN0IHsgc2Nyb2xsYmFyLCAkd3JhcHBlckVsIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgeyAkZWwsICRkcmFnRWwgfSA9IHNjcm9sbGJhcjtcbiAgICBzd2lwZXIuc2Nyb2xsYmFyLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgc3dpcGVyLnNjcm9sbGJhci5kcmFnU3RhcnRQb3MgPSAoZS50YXJnZXQgPT09ICRkcmFnRWxbMF0gfHwgZS50YXJnZXQgPT09ICRkcmFnRWwpXG4gICAgICA/IHNjcm9sbGJhci5nZXRQb2ludGVyUG9zaXRpb24oZSkgLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJ10gOiBudWxsO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uKDEwMCk7XG4gICAgJGRyYWdFbC50cmFuc2l0aW9uKDEwMCk7XG4gICAgc2Nyb2xsYmFyLnNldERyYWdQb3NpdGlvbihlKTtcblxuICAgIGNsZWFyVGltZW91dChzd2lwZXIuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0KTtcblxuICAgICRlbC50cmFuc2l0aW9uKDApO1xuICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgJGVsLmNzcygnb3BhY2l0eScsIDEpO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsYmFyRHJhZ1N0YXJ0JywgZSk7XG4gIH0sXG4gIG9uRHJhZ01vdmUoZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgeyBzY3JvbGxiYXIsICR3cmFwcGVyRWwgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7ICRlbCwgJGRyYWdFbCB9ID0gc2Nyb2xsYmFyO1xuXG4gICAgaWYgKCFzd2lwZXIuc2Nyb2xsYmFyLmlzVG91Y2hlZCkgcmV0dXJuO1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgc2Nyb2xsYmFyLnNldERyYWdQb3NpdGlvbihlKTtcbiAgICAkd3JhcHBlckVsLnRyYW5zaXRpb24oMCk7XG4gICAgJGVsLnRyYW5zaXRpb24oMCk7XG4gICAgJGRyYWdFbC50cmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5lbWl0KCdzY3JvbGxiYXJEcmFnTW92ZScsIGUpO1xuICB9LFxuICBvbkRyYWdFbmQoZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICBjb25zdCB7IHNjcm9sbGJhciB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHsgJGVsIH0gPSBzY3JvbGxiYXI7XG5cbiAgICBpZiAoIXN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkKSByZXR1cm47XG4gICAgc3dpcGVyLnNjcm9sbGJhci5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBpZiAocGFyYW1zLmhpZGUpIHtcbiAgICAgIGNsZWFyVGltZW91dChzd2lwZXIuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0KTtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQgPSBVdGlscy5uZXh0VGljaygoKSA9PiB7XG4gICAgICAgICRlbC5jc3MoJ29wYWNpdHknLCAwKTtcbiAgICAgICAgJGVsLnRyYW5zaXRpb24oNDAwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsYmFyRHJhZ0VuZCcsIGUpO1xuICAgIGlmIChwYXJhbXMuc25hcE9uUmVsZWFzZSkge1xuICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgfVxuICB9LFxuICBlbmFibGVEcmFnZ2FibGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLCB0b3VjaEV2ZW50c1RvdWNoLCB0b3VjaEV2ZW50c0Rlc2t0b3AsIHBhcmFtcyxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0ICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgY29uc3QgdGFyZ2V0ID0gJGVsWzBdO1xuICAgIGNvbnN0IGFjdGl2ZUxpc3RlbmVyID0gU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IGZhbHNlLCBjYXB0dXJlOiBmYWxzZSB9IDogZmFsc2U7XG4gICAgY29uc3QgcGFzc2l2ZUxpc3RlbmVyID0gU3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7IHBhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICBpZiAoIVN1cHBvcnQudG91Y2gpIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5zdGFydCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c0Rlc2t0b3AubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLm1vdmUsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnTW92ZSwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNUb3VjaC5lbmQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcbiAgZGlzYWJsZURyYWdnYWJsZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxiYXIsIHRvdWNoRXZlbnRzVG91Y2gsIHRvdWNoRXZlbnRzRGVza3RvcCwgcGFyYW1zLFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICBjb25zdCB0YXJnZXQgPSAkZWxbMF07XG4gICAgY29uc3QgYWN0aXZlTGlzdGVuZXIgPSBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHsgcGFzc2l2ZTogZmFsc2UsIGNhcHR1cmU6IGZhbHNlIH0gOiBmYWxzZTtcbiAgICBjb25zdCBwYXNzaXZlTGlzdGVuZXIgPSBTdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuICAgIGlmICghU3VwcG9ydC50b3VjaCkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guc3RhcnQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2gubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfVxuICB9LFxuICBpbml0KCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IHsgc2Nyb2xsYmFyLCAkZWw6ICRzd2lwZXJFbCB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuXG4gICAgbGV0ICRlbCA9ICQocGFyYW1zLmVsKTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiAkZWwubGVuZ3RoID4gMSAmJiAkc3dpcGVyRWwuZmluZChwYXJhbXMuZWwpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgJGVsID0gJHN3aXBlckVsLmZpbmQocGFyYW1zLmVsKTtcbiAgICB9XG5cbiAgICBsZXQgJGRyYWdFbCA9ICRlbC5maW5kKGAuJHtzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnQ2xhc3N9YCk7XG4gICAgaWYgKCRkcmFnRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAkZHJhZ0VsID0gJChgPGRpdiBjbGFzcz1cIiR7c3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ0NsYXNzfVwiPjwvZGl2PmApO1xuICAgICAgJGVsLmFwcGVuZCgkZHJhZ0VsKTtcbiAgICB9XG5cbiAgICBVdGlscy5leHRlbmQoc2Nyb2xsYmFyLCB7XG4gICAgICAkZWwsXG4gICAgICBlbDogJGVsWzBdLFxuICAgICAgJGRyYWdFbCxcbiAgICAgIGRyYWdFbDogJGRyYWdFbFswXSxcbiAgICB9KTtcblxuICAgIGlmIChwYXJhbXMuZHJhZ2dhYmxlKSB7XG4gICAgICBzY3JvbGxiYXIuZW5hYmxlRHJhZ2dhYmxlKCk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLnNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlKCk7XG4gIH0sXG59O1xuXG52YXIgU2Nyb2xsYmFyJDEgPSB7XG4gIG5hbWU6ICdzY3JvbGxiYXInLFxuICBwYXJhbXM6IHtcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiBudWxsLFxuICAgICAgZHJhZ1NpemU6ICdhdXRvJyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHNuYXBPblJlbGVhc2U6IHRydWUsXG4gICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItc2Nyb2xsYmFyLWxvY2snLFxuICAgICAgZHJhZ0NsYXNzOiAnc3dpcGVyLXNjcm9sbGJhci1kcmFnJyxcbiAgICB9LFxuICB9LFxuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgaW5pdDogU2Nyb2xsYmFyLmluaXQuYmluZChzd2lwZXIpLFxuICAgICAgICBkZXN0cm95OiBTY3JvbGxiYXIuZGVzdHJveS5iaW5kKHN3aXBlciksXG4gICAgICAgIHVwZGF0ZVNpemU6IFNjcm9sbGJhci51cGRhdGVTaXplLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc2V0VHJhbnNsYXRlOiBTY3JvbGxiYXIuc2V0VHJhbnNsYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc2V0VHJhbnNpdGlvbjogU2Nyb2xsYmFyLnNldFRyYW5zaXRpb24uYmluZChzd2lwZXIpLFxuICAgICAgICBlbmFibGVEcmFnZ2FibGU6IFNjcm9sbGJhci5lbmFibGVEcmFnZ2FibGUuYmluZChzd2lwZXIpLFxuICAgICAgICBkaXNhYmxlRHJhZ2dhYmxlOiBTY3JvbGxiYXIuZGlzYWJsZURyYWdnYWJsZS5iaW5kKHN3aXBlciksXG4gICAgICAgIHNldERyYWdQb3NpdGlvbjogU2Nyb2xsYmFyLnNldERyYWdQb3NpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgIGdldFBvaW50ZXJQb3NpdGlvbjogU2Nyb2xsYmFyLmdldFBvaW50ZXJQb3NpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICAgIG9uRHJhZ1N0YXJ0OiBTY3JvbGxiYXIub25EcmFnU3RhcnQuYmluZChzd2lwZXIpLFxuICAgICAgICBvbkRyYWdNb3ZlOiBTY3JvbGxiYXIub25EcmFnTW92ZS5iaW5kKHN3aXBlciksXG4gICAgICAgIG9uRHJhZ0VuZDogU2Nyb2xsYmFyLm9uRHJhZ0VuZC5iaW5kKHN3aXBlciksXG4gICAgICAgIGlzVG91Y2hlZDogZmFsc2UsXG4gICAgICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgICAgIGRyYWdUaW1lb3V0OiBudWxsLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuaW5pdCgpO1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgdXBkYXRlKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgIH0sXG4gICAgcmVzaXplKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgIH0sXG4gICAgb2JzZXJ2ZXJVcGRhdGUoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKTtcbiAgICB9LFxuICAgIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLmRlc3Ryb3koKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgUGFyYWxsYXggPSB7XG4gIHNldFRyYW5zZm9ybShlbCwgcHJvZ3Jlc3MpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHsgcnRsIH0gPSBzd2lwZXI7XG5cbiAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICBjb25zdCBydGxGYWN0b3IgPSBydGwgPyAtMSA6IDE7XG5cbiAgICBjb25zdCBwID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4JykgfHwgJzAnO1xuICAgIGxldCB4ID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LXgnKTtcbiAgICBsZXQgeSA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC15Jyk7XG4gICAgY29uc3Qgc2NhbGUgPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGUnKTtcbiAgICBjb25zdCBvcGFjaXR5ID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHknKTtcblxuICAgIGlmICh4IHx8IHkpIHtcbiAgICAgIHggPSB4IHx8ICcwJztcbiAgICAgIHkgPSB5IHx8ICcwJztcbiAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgeCA9IHA7XG4gICAgICB5ID0gJzAnO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gcDtcbiAgICAgIHggPSAnMCc7XG4gICAgfVxuXG4gICAgaWYgKCh4KS5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgeCA9IGAke3BhcnNlSW50KHgsIDEwKSAqIHByb2dyZXNzICogcnRsRmFjdG9yfSVgO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gYCR7eCAqIHByb2dyZXNzICogcnRsRmFjdG9yfXB4YDtcbiAgICB9XG4gICAgaWYgKCh5KS5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgeSA9IGAke3BhcnNlSW50KHksIDEwKSAqIHByb2dyZXNzfSVgO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gYCR7eSAqIHByb2dyZXNzfXB4YDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wYWNpdHkgIT09ICd1bmRlZmluZWQnICYmIG9wYWNpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRPcGFjaXR5ID0gb3BhY2l0eSAtICgob3BhY2l0eSAtIDEpICogKDEgLSBNYXRoLmFicyhwcm9ncmVzcykpKTtcbiAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2NhbGUgPT09ICd1bmRlZmluZWQnIHx8IHNjYWxlID09PSBudWxsKSB7XG4gICAgICAkZWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke3h9LCAke3l9LCAwcHgpYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IHNjYWxlIC0gKChzY2FsZSAtIDEpICogKDEgLSBNYXRoLmFicyhwcm9ncmVzcykpKTtcbiAgICAgICRlbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKCR7eH0sICR7eX0sIDBweCkgc2NhbGUoJHtjdXJyZW50U2NhbGV9KWApO1xuICAgIH1cbiAgfSxcbiAgc2V0VHJhbnNsYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgJGVsLCBzbGlkZXMsIHByb2dyZXNzLCBzbmFwR3JpZCxcbiAgICB9ID0gc3dpcGVyO1xuICAgICRlbC5jaGlsZHJlbignW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlXScpXG4gICAgICAuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2Zvcm0oZWwsIHByb2dyZXNzKTtcbiAgICAgIH0pO1xuICAgIHNsaWRlcy5lYWNoKChzbGlkZUluZGV4LCBzbGlkZUVsKSA9PiB7XG4gICAgICBsZXQgc2xpZGVQcm9ncmVzcyA9IHNsaWRlRWwucHJvZ3Jlc3M7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycpIHtcbiAgICAgICAgc2xpZGVQcm9ncmVzcyArPSBNYXRoLmNlaWwoc2xpZGVJbmRleCAvIDIpIC0gKHByb2dyZXNzICogKHNuYXBHcmlkLmxlbmd0aCAtIDEpKTtcbiAgICAgIH1cbiAgICAgIHNsaWRlUHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChzbGlkZVByb2dyZXNzLCAtMSksIDEpO1xuICAgICAgJChzbGlkZUVsKS5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdJylcbiAgICAgICAgLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2Zvcm0oZWwsIHNsaWRlUHJvZ3Jlc3MpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbiA9IHRoaXMucGFyYW1zLnNwZWVkKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7ICRlbCB9ID0gc3dpcGVyO1xuICAgICRlbC5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdJylcbiAgICAgIC5lYWNoKChpbmRleCwgcGFyYWxsYXhFbCkgPT4ge1xuICAgICAgICBjb25zdCAkcGFyYWxsYXhFbCA9ICQocGFyYWxsYXhFbCk7XG4gICAgICAgIGxldCBwYXJhbGxheER1cmF0aW9uID0gcGFyc2VJbnQoJHBhcmFsbGF4RWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb24nKSwgMTApIHx8IGR1cmF0aW9uO1xuICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHBhcmFsbGF4RHVyYXRpb24gPSAwO1xuICAgICAgICAkcGFyYWxsYXhFbC50cmFuc2l0aW9uKHBhcmFsbGF4RHVyYXRpb24pO1xuICAgICAgfSk7XG4gIH0sXG59O1xuXG52YXIgUGFyYWxsYXgkMSA9IHtcbiAgbmFtZTogJ3BhcmFsbGF4JyxcbiAgcGFyYW1zOiB7XG4gICAgcGFyYWxsYXg6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgIHBhcmFsbGF4OiB7XG4gICAgICAgIHNldFRyYW5zZm9ybTogUGFyYWxsYXguc2V0VHJhbnNmb3JtLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc2V0VHJhbnNsYXRlOiBQYXJhbGxheC5zZXRUcmFuc2xhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICBzZXRUcmFuc2l0aW9uOiBQYXJhbGxheC5zZXRUcmFuc2l0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgYmVmb3JlSW5pdCgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICB9LFxuICAgIGluaXQoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5wYXJhbGxheC5zZXRUcmFuc2xhdGUoKTtcbiAgICB9LFxuICAgIHNldFRyYW5zbGF0ZSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLnBhcmFsbGF4LnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIucGFyYWxsYXguc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFpvb20gPSB7XG4gIC8vIENhbGMgU2NhbGUgRnJvbSBNdWx0aS10b3VjaGVzXG4gIGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikgcmV0dXJuIDE7XG4gICAgY29uc3QgeDEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgY29uc3QgeTEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgY29uc3QgeDIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVg7XG4gICAgY29uc3QgeTIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVk7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKCh4MiAtIHgxKSAqKiAyKSArICgoeTIgLSB5MSkgKiogMikpO1xuICAgIHJldHVybiBkaXN0YW5jZTtcbiAgfSxcbiAgLy8gRXZlbnRzXG4gIG9uR2VzdHVyZVN0YXJ0KGUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgY29uc3QgeyBnZXN0dXJlIH0gPSB6b29tO1xuICAgIHpvb20uZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgem9vbS5mYWtlR2VzdHVyZU1vdmVkID0gZmFsc2U7XG4gICAgaWYgKCFTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcgfHwgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB6b29tLmZha2VHZXN0dXJlVG91Y2hlZCA9IHRydWU7XG4gICAgICBnZXN0dXJlLnNjYWxlU3RhcnQgPSBab29tLmdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSk7XG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCB8fCAhZ2VzdHVyZS4kc2xpZGVFbC5sZW5ndGgpIHtcbiAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc3dpcGVyLXNsaWRlJyk7XG4gICAgICBpZiAoZ2VzdHVyZS4kc2xpZGVFbC5sZW5ndGggPT09IDApIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICBnZXN0dXJlLiRpbWFnZUVsID0gZ2VzdHVyZS4kc2xpZGVFbC5maW5kKCdpbWcsIHN2ZywgY2FudmFzJyk7XG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbCA9IGdlc3R1cmUuJGltYWdlRWwucGFyZW50KGAuJHtwYXJhbXMuY29udGFpbmVyQ2xhc3N9YCk7XG4gICAgICBnZXN0dXJlLm1heFJhdGlvID0gZ2VzdHVyZS4kaW1hZ2VXcmFwRWwuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHBhcmFtcy5tYXhSYXRpbztcbiAgICAgIGlmIChnZXN0dXJlLiRpbWFnZVdyYXBFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXN0dXJlLiRpbWFnZUVsLnRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnpvb20uaXNTY2FsaW5nID0gdHJ1ZTtcbiAgfSxcbiAgb25HZXN0dXJlQ2hhbmdlKGUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgY29uc3QgeyBnZXN0dXJlIH0gPSB6b29tO1xuICAgIGlmICghU3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNobW92ZScgfHwgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHpvb20uZmFrZUdlc3R1cmVNb3ZlZCA9IHRydWU7XG4gICAgICBnZXN0dXJlLnNjYWxlTW92ZSA9IFpvb20uZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKTtcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgaWYgKFN1cHBvcnQuZ2VzdHVyZXMpIHtcbiAgICAgIHpvb20uc2NhbGUgPSBlLnNjYWxlICogem9vbS5jdXJyZW50U2NhbGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHpvb20uc2NhbGUgPSAoZ2VzdHVyZS5zY2FsZU1vdmUgLyBnZXN0dXJlLnNjYWxlU3RhcnQpICogem9vbS5jdXJyZW50U2NhbGU7XG4gICAgfVxuICAgIGlmICh6b29tLnNjYWxlID4gZ2VzdHVyZS5tYXhSYXRpbykge1xuICAgICAgem9vbS5zY2FsZSA9IChnZXN0dXJlLm1heFJhdGlvIC0gMSkgKyAoKCh6b29tLnNjYWxlIC0gZ2VzdHVyZS5tYXhSYXRpbykgKyAxKSAqKiAwLjUpO1xuICAgIH1cbiAgICBpZiAoem9vbS5zY2FsZSA8IHBhcmFtcy5taW5SYXRpbykge1xuICAgICAgem9vbS5zY2FsZSA9IChwYXJhbXMubWluUmF0aW8gKyAxKSAtICgoKHBhcmFtcy5taW5SYXRpbyAtIHpvb20uc2NhbGUpICsgMSkgKiogMC41KTtcbiAgICB9XG4gICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgke3pvb20uc2NhbGV9KWApO1xuICB9LFxuICBvbkdlc3R1cmVFbmQoZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBjb25zdCB7IGdlc3R1cmUgfSA9IHpvb207XG4gICAgaWYgKCFTdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBpZiAoIXpvb20uZmFrZUdlc3R1cmVUb3VjaGVkIHx8ICF6b29tLmZha2VHZXN0dXJlTW92ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoZW5kJyB8fCAoZS50eXBlID09PSAndG91Y2hlbmQnICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoIDwgMiAmJiAhRGV2aWNlLmFuZHJvaWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHpvb20uZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgICB6b29tLmZha2VHZXN0dXJlTW92ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgem9vbS5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHpvb20uc2NhbGUsIGdlc3R1cmUubWF4UmF0aW8pLCBwYXJhbXMubWluUmF0aW8pO1xuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKS50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgke3pvb20uc2NhbGV9KWApO1xuICAgIHpvb20uY3VycmVudFNjYWxlID0gem9vbS5zY2FsZTtcbiAgICB6b29tLmlzU2NhbGluZyA9IGZhbHNlO1xuICAgIGlmICh6b29tLnNjYWxlID09PSAxKSBnZXN0dXJlLiRzbGlkZUVsID0gdW5kZWZpbmVkO1xuICB9LFxuICBvblRvdWNoU3RhcnQoZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGNvbnN0IHsgZ2VzdHVyZSwgaW1hZ2UgfSA9IHpvb207XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgaWYgKGltYWdlLmlzVG91Y2hlZCkgcmV0dXJuO1xuICAgIGlmIChEZXZpY2UuYW5kcm9pZCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGltYWdlLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgaW1hZ2UudG91Y2hlc1N0YXJ0LnggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgaW1hZ2UudG91Y2hlc1N0YXJ0LnkgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gIH0sXG4gIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBjb25zdCB7IGdlc3R1cmUsIGltYWdlLCB2ZWxvY2l0eSB9ID0gem9vbTtcbiAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgIGlmICghaW1hZ2UuaXNUb3VjaGVkIHx8ICFnZXN0dXJlLiRzbGlkZUVsKSByZXR1cm47XG5cbiAgICBpZiAoIWltYWdlLmlzTW92ZWQpIHtcbiAgICAgIGltYWdlLndpZHRoID0gZ2VzdHVyZS4kaW1hZ2VFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgIGltYWdlLmhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgaW1hZ2Uuc3RhcnRYID0gVXRpbHMuZ2V0VHJhbnNsYXRlKGdlc3R1cmUuJGltYWdlV3JhcEVsWzBdLCAneCcpIHx8IDA7XG4gICAgICBpbWFnZS5zdGFydFkgPSBVdGlscy5nZXRUcmFuc2xhdGUoZ2VzdHVyZS4kaW1hZ2VXcmFwRWxbMF0sICd5JykgfHwgMDtcbiAgICAgIGdlc3R1cmUuc2xpZGVXaWR0aCA9IGdlc3R1cmUuJHNsaWRlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBnZXN0dXJlLnNsaWRlSGVpZ2h0ID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKDApO1xuICAgICAgaWYgKHN3aXBlci5ydGwpIHtcbiAgICAgICAgaW1hZ2Uuc3RhcnRYID0gLWltYWdlLnN0YXJ0WDtcbiAgICAgICAgaW1hZ2Uuc3RhcnRZID0gLWltYWdlLnN0YXJ0WTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRGVmaW5lIGlmIHdlIG5lZWQgaW1hZ2UgZHJhZ1xuICAgIGNvbnN0IHNjYWxlZFdpZHRoID0gaW1hZ2Uud2lkdGggKiB6b29tLnNjYWxlO1xuICAgIGNvbnN0IHNjYWxlZEhlaWdodCA9IGltYWdlLmhlaWdodCAqIHpvb20uc2NhbGU7XG5cbiAgICBpZiAoc2NhbGVkV2lkdGggPCBnZXN0dXJlLnNsaWRlV2lkdGggJiYgc2NhbGVkSGVpZ2h0IDwgZ2VzdHVyZS5zbGlkZUhlaWdodCkgcmV0dXJuO1xuXG4gICAgaW1hZ2UubWluWCA9IE1hdGgubWluKCgoZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMikgLSAoc2NhbGVkV2lkdGggLyAyKSksIDApO1xuICAgIGltYWdlLm1heFggPSAtaW1hZ2UubWluWDtcbiAgICBpbWFnZS5taW5ZID0gTWF0aC5taW4oKChnZXN0dXJlLnNsaWRlSGVpZ2h0IC8gMikgLSAoc2NhbGVkSGVpZ2h0IC8gMikpLCAwKTtcbiAgICBpbWFnZS5tYXhZID0gLWltYWdlLm1pblk7XG5cbiAgICBpbWFnZS50b3VjaGVzQ3VycmVudC54ID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gICAgaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuXG4gICAgaWYgKCFpbWFnZS5pc01vdmVkICYmICF6b29tLmlzU2NhbGluZykge1xuICAgICAgaWYgKFxuICAgICAgICBzd2lwZXIuaXNIb3Jpem9udGFsKClcbiAgICAgICAgJiYgKFxuICAgICAgICAgIChNYXRoLmZsb29yKGltYWdlLm1pblgpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WCkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA8IGltYWdlLnRvdWNoZXNTdGFydC54KVxuICAgICAgICAgIHx8IChNYXRoLmZsb29yKGltYWdlLm1heFgpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WCkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA+IGltYWdlLnRvdWNoZXNTdGFydC54KVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gaWYgKFxuICAgICAgICAhc3dpcGVyLmlzSG9yaXpvbnRhbCgpXG4gICAgICAgICYmIChcbiAgICAgICAgICAoTWF0aC5mbG9vcihpbWFnZS5taW5ZKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFkpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPCBpbWFnZS50b3VjaGVzU3RhcnQueSlcbiAgICAgICAgICB8fCAoTWF0aC5mbG9vcihpbWFnZS5tYXhZKSA9PT0gTWF0aC5mbG9vcihpbWFnZS5zdGFydFkpICYmIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPiBpbWFnZS50b3VjaGVzU3RhcnQueSlcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaW1hZ2UuaXNNb3ZlZCA9IHRydWU7XG4gICAgaW1hZ2UuY3VycmVudFggPSAoaW1hZ2UudG91Y2hlc0N1cnJlbnQueCAtIGltYWdlLnRvdWNoZXNTdGFydC54KSArIGltYWdlLnN0YXJ0WDtcbiAgICBpbWFnZS5jdXJyZW50WSA9IChpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LnkpICsgaW1hZ2Uuc3RhcnRZO1xuXG4gICAgaWYgKGltYWdlLmN1cnJlbnRYIDwgaW1hZ2UubWluWCkge1xuICAgICAgaW1hZ2UuY3VycmVudFggPSAoaW1hZ2UubWluWCArIDEpIC0gKCgoaW1hZ2UubWluWCAtIGltYWdlLmN1cnJlbnRYKSArIDEpICoqIDAuOCk7XG4gICAgfVxuICAgIGlmIChpbWFnZS5jdXJyZW50WCA+IGltYWdlLm1heFgpIHtcbiAgICAgIGltYWdlLmN1cnJlbnRYID0gKGltYWdlLm1heFggLSAxKSArICgoKGltYWdlLmN1cnJlbnRYIC0gaW1hZ2UubWF4WCkgKyAxKSAqKiAwLjgpO1xuICAgIH1cblxuICAgIGlmIChpbWFnZS5jdXJyZW50WSA8IGltYWdlLm1pblkpIHtcbiAgICAgIGltYWdlLmN1cnJlbnRZID0gKGltYWdlLm1pblkgKyAxKSAtICgoKGltYWdlLm1pblkgLSBpbWFnZS5jdXJyZW50WSkgKyAxKSAqKiAwLjgpO1xuICAgIH1cbiAgICBpZiAoaW1hZ2UuY3VycmVudFkgPiBpbWFnZS5tYXhZKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WSA9IChpbWFnZS5tYXhZIC0gMSkgKyAoKChpbWFnZS5jdXJyZW50WSAtIGltYWdlLm1heFkpICsgMSkgKiogMC44KTtcbiAgICB9XG5cbiAgICAvLyBWZWxvY2l0eVxuICAgIGlmICghdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgdmVsb2NpdHkucHJldlBvc2l0aW9uWCA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lng7XG4gICAgaWYgKCF2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcbiAgICBpZiAoIXZlbG9jaXR5LnByZXZUaW1lKSB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG4gICAgdmVsb2NpdHkueCA9IChpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgdmVsb2NpdHkueSA9IChpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgaWYgKE1hdGguYWJzKGltYWdlLnRvdWNoZXNDdXJyZW50LnggLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSA8IDIpIHZlbG9jaXR5LnggPSAwO1xuICAgIGlmIChNYXRoLmFicyhpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgPCAyKSB2ZWxvY2l0eS55ID0gMDtcbiAgICB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueDtcbiAgICB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcbiAgICB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG5cbiAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKCR7aW1hZ2UuY3VycmVudFh9cHgsICR7aW1hZ2UuY3VycmVudFl9cHgsMClgKTtcbiAgfSxcbiAgb25Ub3VjaEVuZCgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBjb25zdCB7IGdlc3R1cmUsIGltYWdlLCB2ZWxvY2l0eSB9ID0gem9vbTtcbiAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBpZiAoIWltYWdlLmlzVG91Y2hlZCB8fCAhaW1hZ2UuaXNNb3ZlZCkge1xuICAgICAgaW1hZ2UuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICBpbWFnZS5pc01vdmVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIGltYWdlLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBsZXQgbW9tZW50dW1EdXJhdGlvblggPSAzMDA7XG4gICAgbGV0IG1vbWVudHVtRHVyYXRpb25ZID0gMzAwO1xuICAgIGNvbnN0IG1vbWVudHVtRGlzdGFuY2VYID0gdmVsb2NpdHkueCAqIG1vbWVudHVtRHVyYXRpb25YO1xuICAgIGNvbnN0IG5ld1Bvc2l0aW9uWCA9IGltYWdlLmN1cnJlbnRYICsgbW9tZW50dW1EaXN0YW5jZVg7XG4gICAgY29uc3QgbW9tZW50dW1EaXN0YW5jZVkgPSB2ZWxvY2l0eS55ICogbW9tZW50dW1EdXJhdGlvblk7XG4gICAgY29uc3QgbmV3UG9zaXRpb25ZID0gaW1hZ2UuY3VycmVudFkgKyBtb21lbnR1bURpc3RhbmNlWTtcblxuICAgIC8vIEZpeCBkdXJhdGlvblxuICAgIGlmICh2ZWxvY2l0eS54ICE9PSAwKSBtb21lbnR1bUR1cmF0aW9uWCA9IE1hdGguYWJzKChuZXdQb3NpdGlvblggLSBpbWFnZS5jdXJyZW50WCkgLyB2ZWxvY2l0eS54KTtcbiAgICBpZiAodmVsb2NpdHkueSAhPT0gMCkgbW9tZW50dW1EdXJhdGlvblkgPSBNYXRoLmFicygobmV3UG9zaXRpb25ZIC0gaW1hZ2UuY3VycmVudFkpIC8gdmVsb2NpdHkueSk7XG4gICAgY29uc3QgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGgubWF4KG1vbWVudHVtRHVyYXRpb25YLCBtb21lbnR1bUR1cmF0aW9uWSk7XG5cbiAgICBpbWFnZS5jdXJyZW50WCA9IG5ld1Bvc2l0aW9uWDtcbiAgICBpbWFnZS5jdXJyZW50WSA9IG5ld1Bvc2l0aW9uWTtcblxuICAgIC8vIERlZmluZSBpZiB3ZSBuZWVkIGltYWdlIGRyYWdcbiAgICBjb25zdCBzY2FsZWRXaWR0aCA9IGltYWdlLndpZHRoICogem9vbS5zY2FsZTtcbiAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiB6b29tLnNjYWxlO1xuICAgIGltYWdlLm1pblggPSBNYXRoLm1pbigoKGdlc3R1cmUuc2xpZGVXaWR0aCAvIDIpIC0gKHNjYWxlZFdpZHRoIC8gMikpLCAwKTtcbiAgICBpbWFnZS5tYXhYID0gLWltYWdlLm1pblg7XG4gICAgaW1hZ2UubWluWSA9IE1hdGgubWluKCgoZ2VzdHVyZS5zbGlkZUhlaWdodCAvIDIpIC0gKHNjYWxlZEhlaWdodCAvIDIpKSwgMCk7XG4gICAgaW1hZ2UubWF4WSA9IC1pbWFnZS5taW5ZO1xuICAgIGltYWdlLmN1cnJlbnRYID0gTWF0aC5tYXgoTWF0aC5taW4oaW1hZ2UuY3VycmVudFgsIGltYWdlLm1heFgpLCBpbWFnZS5taW5YKTtcbiAgICBpbWFnZS5jdXJyZW50WSA9IE1hdGgubWF4KE1hdGgubWluKGltYWdlLmN1cnJlbnRZLCBpbWFnZS5tYXhZKSwgaW1hZ2UubWluWSk7XG5cbiAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoJHtpbWFnZS5jdXJyZW50WH1weCwgJHtpbWFnZS5jdXJyZW50WX1weCwwKWApO1xuICB9LFxuICBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgY29uc3QgeyBnZXN0dXJlIH0gPSB6b29tO1xuICAgIGlmIChnZXN0dXJlLiRzbGlkZUVsICYmIHN3aXBlci5wcmV2aW91c0luZGV4ICE9PSBzd2lwZXIuYWN0aXZlSW5kZXgpIHtcbiAgICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSknKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApJyk7XG5cbiAgICAgIHpvb20uc2NhbGUgPSAxO1xuICAgICAgem9vbS5jdXJyZW50U2NhbGUgPSAxO1xuXG4gICAgICBnZXN0dXJlLiRzbGlkZUVsID0gdW5kZWZpbmVkO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IHVuZGVmaW5lZDtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbiAgLy8gVG9nZ2xlIFpvb21cbiAgdG9nZ2xlKGUpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcblxuICAgIGlmICh6b29tLnNjYWxlICYmIHpvb20uc2NhbGUgIT09IDEpIHtcbiAgICAgIC8vIFpvb20gT3V0XG4gICAgICB6b29tLm91dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBab29tIEluXG4gICAgICB6b29tLmluKGUpO1xuICAgIH1cbiAgfSxcbiAgaW4oZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgIGNvbnN0IHsgZ2VzdHVyZSwgaW1hZ2UgfSA9IHpvb207XG5cbiAgICBpZiAoIWdlc3R1cmUuJHNsaWRlRWwpIHtcbiAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuY2xpY2tlZFNsaWRlID8gJChzd2lwZXIuY2xpY2tlZFNsaWRlKSA6IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSBnZXN0dXJlLiRzbGlkZUVsLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMnKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoYC4ke3BhcmFtcy5jb250YWluZXJDbGFzc31gKTtcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBnZXN0dXJlLiRzbGlkZUVsLmFkZENsYXNzKGAke3BhcmFtcy56b29tZWRTbGlkZUNsYXNzfWApO1xuXG4gICAgbGV0IHRvdWNoWDtcbiAgICBsZXQgdG91Y2hZO1xuICAgIGxldCBvZmZzZXRYO1xuICAgIGxldCBvZmZzZXRZO1xuICAgIGxldCBkaWZmWDtcbiAgICBsZXQgZGlmZlk7XG4gICAgbGV0IHRyYW5zbGF0ZVg7XG4gICAgbGV0IHRyYW5zbGF0ZVk7XG4gICAgbGV0IGltYWdlV2lkdGg7XG4gICAgbGV0IGltYWdlSGVpZ2h0O1xuICAgIGxldCBzY2FsZWRXaWR0aDtcbiAgICBsZXQgc2NhbGVkSGVpZ2h0O1xuICAgIGxldCB0cmFuc2xhdGVNaW5YO1xuICAgIGxldCB0cmFuc2xhdGVNaW5ZO1xuICAgIGxldCB0cmFuc2xhdGVNYXhYO1xuICAgIGxldCB0cmFuc2xhdGVNYXhZO1xuICAgIGxldCBzbGlkZVdpZHRoO1xuICAgIGxldCBzbGlkZUhlaWdodDtcblxuICAgIGlmICh0eXBlb2YgaW1hZ2UudG91Y2hlc1N0YXJ0LnggPT09ICd1bmRlZmluZWQnICYmIGUpIHtcbiAgICAgIHRvdWNoWCA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgdG91Y2hZID0gZS50eXBlID09PSAndG91Y2hlbmQnID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdWNoWCA9IGltYWdlLnRvdWNoZXNTdGFydC54O1xuICAgICAgdG91Y2hZID0gaW1hZ2UudG91Y2hlc1N0YXJ0Lnk7XG4gICAgfVxuXG4gICAgem9vbS5zY2FsZSA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgem9vbS5jdXJyZW50U2NhbGUgPSBnZXN0dXJlLiRpbWFnZVdyYXBFbC5hdHRyKCdkYXRhLXN3aXBlci16b29tJykgfHwgcGFyYW1zLm1heFJhdGlvO1xuICAgIGlmIChlKSB7XG4gICAgICBzbGlkZVdpZHRoID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgIHNsaWRlSGVpZ2h0ID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBvZmZzZXRYID0gZ2VzdHVyZS4kc2xpZGVFbC5vZmZzZXQoKS5sZWZ0O1xuICAgICAgb2Zmc2V0WSA9IGdlc3R1cmUuJHNsaWRlRWwub2Zmc2V0KCkudG9wO1xuICAgICAgZGlmZlggPSAob2Zmc2V0WCArIChzbGlkZVdpZHRoIC8gMikpIC0gdG91Y2hYO1xuICAgICAgZGlmZlkgPSAob2Zmc2V0WSArIChzbGlkZUhlaWdodCAvIDIpKSAtIHRvdWNoWTtcblxuICAgICAgaW1hZ2VXaWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBpbWFnZUhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgc2NhbGVkV2lkdGggPSBpbWFnZVdpZHRoICogem9vbS5zY2FsZTtcbiAgICAgIHNjYWxlZEhlaWdodCA9IGltYWdlSGVpZ2h0ICogem9vbS5zY2FsZTtcblxuICAgICAgdHJhbnNsYXRlTWluWCA9IE1hdGgubWluKCgoc2xpZGVXaWR0aCAvIDIpIC0gKHNjYWxlZFdpZHRoIC8gMikpLCAwKTtcbiAgICAgIHRyYW5zbGF0ZU1pblkgPSBNYXRoLm1pbigoKHNsaWRlSGVpZ2h0IC8gMikgLSAoc2NhbGVkSGVpZ2h0IC8gMikpLCAwKTtcbiAgICAgIHRyYW5zbGF0ZU1heFggPSAtdHJhbnNsYXRlTWluWDtcbiAgICAgIHRyYW5zbGF0ZU1heFkgPSAtdHJhbnNsYXRlTWluWTtcblxuICAgICAgdHJhbnNsYXRlWCA9IGRpZmZYICogem9vbS5zY2FsZTtcbiAgICAgIHRyYW5zbGF0ZVkgPSBkaWZmWSAqIHpvb20uc2NhbGU7XG5cbiAgICAgIGlmICh0cmFuc2xhdGVYIDwgdHJhbnNsYXRlTWluWCkge1xuICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlTWluWDtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2xhdGVYID4gdHJhbnNsYXRlTWF4WCkge1xuICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlTWF4WDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zbGF0ZVkgPCB0cmFuc2xhdGVNaW5ZKSB7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNaW5ZO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVNYXhZKSB7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNYXhZO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2xhdGVYID0gMDtcbiAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgIH1cbiAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke3RyYW5zbGF0ZVh9cHgsICR7dHJhbnNsYXRlWX1weCwwKWApO1xuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKCR7em9vbS5zY2FsZX0pYCk7XG4gIH0sXG4gIG91dCgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuXG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcbiAgICBjb25zdCB7IGdlc3R1cmUgfSA9IHpvb207XG5cbiAgICBpZiAoIWdlc3R1cmUuJHNsaWRlRWwpIHtcbiAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuY2xpY2tlZFNsaWRlID8gJChzd2lwZXIuY2xpY2tlZFNsaWRlKSA6IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSBnZXN0dXJlLiRzbGlkZUVsLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMnKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoYC4ke3BhcmFtcy5jb250YWluZXJDbGFzc31gKTtcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICB6b29tLnNjYWxlID0gMTtcbiAgICB6b29tLmN1cnJlbnRTY2FsZSA9IDE7XG4gICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApJyk7XG4gICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoMSknKTtcbiAgICBnZXN0dXJlLiRzbGlkZUVsLnJlbW92ZUNsYXNzKGAke3BhcmFtcy56b29tZWRTbGlkZUNsYXNzfWApO1xuICAgIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gIH0sXG4gIC8vIEF0dGFjaC9EZXRhY2ggRXZlbnRzXG4gIGVuYWJsZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoem9vbS5lbmFibGVkKSByZXR1cm47XG4gICAgem9vbS5lbmFibGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHBhc3NpdmVMaXN0ZW5lciA9IHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHN3aXBlci5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuXG4gICAgLy8gU2NhbGUgaW1hZ2VcbiAgICBpZiAoU3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oJ2dlc3R1cmVzdGFydCcsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKCdnZXN0dXJlY2hhbmdlJywgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUNoYW5nZSwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKCdnZXN0dXJlZW5kJywgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9IGVsc2UgaWYgKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLmVuZCwgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlIGltYWdlXG4gICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLm1vdmUsIGAuJHtzd2lwZXIucGFyYW1zLnpvb20uY29udGFpbmVyQ2xhc3N9YCwgem9vbS5vblRvdWNoTW92ZSk7XG4gIH0sXG4gIGRpc2FibGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgaWYgKCF6b29tLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHN3aXBlci56b29tLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHBhc3NpdmVMaXN0ZW5lciA9IHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIFN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHN3aXBlci5wYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHsgcGFzc2l2ZTogdHJ1ZSwgY2FwdHVyZTogZmFsc2UgfSA6IGZhbHNlO1xuXG4gICAgLy8gU2NhbGUgaW1hZ2VcbiAgICBpZiAoU3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKCdnZXN0dXJlc3RhcnQnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoJ2dlc3R1cmVjaGFuZ2UnLCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlQ2hhbmdlLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKCdnZXN0dXJlZW5kJywgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9IGVsc2UgaWYgKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0LCAnLnN3aXBlci1zbGlkZScsIHpvb20ub25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLm1vdmUsICcuc3dpcGVyLXNsaWRlJywgem9vbS5vbkdlc3R1cmVDaGFuZ2UsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLmVuZCwgJy5zd2lwZXItc2xpZGUnLCB6b29tLm9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBNb3ZlIGltYWdlXG4gICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCBgLiR7c3dpcGVyLnBhcmFtcy56b29tLmNvbnRhaW5lckNsYXNzfWAsIHpvb20ub25Ub3VjaE1vdmUpO1xuICB9LFxufTtcblxudmFyIFpvb20kMSA9IHtcbiAgbmFtZTogJ3pvb20nLFxuICBwYXJhbXM6IHtcbiAgICB6b29tOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIG1heFJhdGlvOiAzLFxuICAgICAgbWluUmF0aW86IDEsXG4gICAgICB0b2dnbGU6IHRydWUsXG4gICAgICBjb250YWluZXJDbGFzczogJ3N3aXBlci16b29tLWNvbnRhaW5lcicsXG4gICAgICB6b29tZWRTbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXpvb21lZCcsXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qgem9vbSA9IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgc2NhbGU6IDEsXG4gICAgICBjdXJyZW50U2NhbGU6IDEsXG4gICAgICBpc1NjYWxpbmc6IGZhbHNlLFxuICAgICAgZ2VzdHVyZToge1xuICAgICAgICAkc2xpZGVFbDogdW5kZWZpbmVkLFxuICAgICAgICBzbGlkZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgIHNsaWRlSGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgICAgICRpbWFnZUVsOiB1bmRlZmluZWQsXG4gICAgICAgICRpbWFnZVdyYXBFbDogdW5kZWZpbmVkLFxuICAgICAgICBtYXhSYXRpbzogMyxcbiAgICAgIH0sXG4gICAgICBpbWFnZToge1xuICAgICAgICBpc1RvdWNoZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNNb3ZlZDogdW5kZWZpbmVkLFxuICAgICAgICBjdXJyZW50WDogdW5kZWZpbmVkLFxuICAgICAgICBjdXJyZW50WTogdW5kZWZpbmVkLFxuICAgICAgICBtaW5YOiB1bmRlZmluZWQsXG4gICAgICAgIG1pblk6IHVuZGVmaW5lZCxcbiAgICAgICAgbWF4WDogdW5kZWZpbmVkLFxuICAgICAgICBtYXhZOiB1bmRlZmluZWQsXG4gICAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFg6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRZOiB1bmRlZmluZWQsXG4gICAgICAgIHRvdWNoZXNTdGFydDoge30sXG4gICAgICAgIHRvdWNoZXNDdXJyZW50OiB7fSxcbiAgICAgIH0sXG4gICAgICB2ZWxvY2l0eToge1xuICAgICAgICB4OiB1bmRlZmluZWQsXG4gICAgICAgIHk6IHVuZGVmaW5lZCxcbiAgICAgICAgcHJldlBvc2l0aW9uWDogdW5kZWZpbmVkLFxuICAgICAgICBwcmV2UG9zaXRpb25ZOiB1bmRlZmluZWQsXG4gICAgICAgIHByZXZUaW1lOiB1bmRlZmluZWQsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAoJ29uR2VzdHVyZVN0YXJ0IG9uR2VzdHVyZUNoYW5nZSBvbkdlc3R1cmVFbmQgb25Ub3VjaFN0YXJ0IG9uVG91Y2hNb3ZlIG9uVG91Y2hFbmQgb25UcmFuc2l0aW9uRW5kIHRvZ2dsZSBlbmFibGUgZGlzYWJsZSBpbiBvdXQnKS5zcGxpdCgnICcpLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgICAgIHpvb21bbWV0aG9kTmFtZV0gPSBab29tW21ldGhvZE5hbWVdLmJpbmQoc3dpcGVyKTtcbiAgICB9KTtcbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICB6b29tLFxuICAgIH0pO1xuXG4gICAgbGV0IHNjYWxlID0gMTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3dpcGVyLnpvb20sICdzY2FsZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHNjYWxlO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBpZiAoc2NhbGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgaW1hZ2VFbCA9IHN3aXBlci56b29tLmdlc3R1cmUuJGltYWdlRWwgPyBzd2lwZXIuem9vbS5nZXN0dXJlLiRpbWFnZUVsWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICAgIGNvbnN0IHNsaWRlRWwgPSBzd2lwZXIuem9vbS5nZXN0dXJlLiRzbGlkZUVsID8gc3dpcGVyLnpvb20uZ2VzdHVyZS4kc2xpZGVFbFswXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnem9vbUNoYW5nZScsIHZhbHVlLCBpbWFnZUVsLCBzbGlkZUVsKTtcbiAgICAgICAgfVxuICAgICAgICBzY2FsZSA9IHZhbHVlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIuem9vbS5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgc3dpcGVyLnpvb20uZGlzYWJsZSgpO1xuICAgIH0sXG4gICAgdG91Y2hTdGFydChlKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIuem9vbS5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuem9vbS5vblRvdWNoU3RhcnQoZSk7XG4gICAgfSxcbiAgICB0b3VjaEVuZChlKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIuem9vbS5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuem9vbS5vblRvdWNoRW5kKGUpO1xuICAgIH0sXG4gICAgZG91YmxlVGFwKGUpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLnpvb20udG9nZ2xlKSB7XG4gICAgICAgIHN3aXBlci56b29tLnRvZ2dsZShlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy56b29tLmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLnpvb20ub25UcmFuc2l0aW9uRW5kKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IExhenkgPSB7XG4gIGxvYWRJblNsaWRlKGluZGV4LCBsb2FkSW5EdXBsaWNhdGUgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmxhenk7XG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcblxuICAgIGNvbnN0ICRzbGlkZUVsID0gaXNWaXJ0dWFsXG4gICAgICA/IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtpbmRleH1cIl1gKVxuICAgICAgOiBzd2lwZXIuc2xpZGVzLmVxKGluZGV4KTtcblxuICAgIGxldCAkaW1hZ2VzID0gJHNsaWRlRWwuZmluZChgLiR7cGFyYW1zLmVsZW1lbnRDbGFzc306bm90KC4ke3BhcmFtcy5sb2FkZWRDbGFzc30pOm5vdCguJHtwYXJhbXMubG9hZGluZ0NsYXNzfSlgKTtcbiAgICBpZiAoJHNsaWRlRWwuaGFzQ2xhc3MocGFyYW1zLmVsZW1lbnRDbGFzcykgJiYgISRzbGlkZUVsLmhhc0NsYXNzKHBhcmFtcy5sb2FkZWRDbGFzcykgJiYgISRzbGlkZUVsLmhhc0NsYXNzKHBhcmFtcy5sb2FkaW5nQ2xhc3MpKSB7XG4gICAgICAkaW1hZ2VzID0gJGltYWdlcy5hZGQoJHNsaWRlRWxbMF0pO1xuICAgIH1cbiAgICBpZiAoJGltYWdlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICRpbWFnZXMuZWFjaCgoaW1hZ2VJbmRleCwgaW1hZ2VFbCkgPT4ge1xuICAgICAgY29uc3QgJGltYWdlRWwgPSAkKGltYWdlRWwpO1xuICAgICAgJGltYWdlRWwuYWRkQ2xhc3MocGFyYW1zLmxvYWRpbmdDbGFzcyk7XG5cbiAgICAgIGNvbnN0IGJhY2tncm91bmQgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLWJhY2tncm91bmQnKTtcbiAgICAgIGNvbnN0IHNyYyA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtc3JjJyk7XG4gICAgICBjb25zdCBzcmNzZXQgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgY29uc3Qgc2l6ZXMgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLXNpemVzJyk7XG5cbiAgICAgIHN3aXBlci5sb2FkSW1hZ2UoJGltYWdlRWxbMF0sIChzcmMgfHwgYmFja2dyb3VuZCksIHNyY3NldCwgc2l6ZXMsIGZhbHNlLCAoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3dpcGVyID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIgPT09IG51bGwgfHwgIXN3aXBlciB8fCAoc3dpcGVyICYmICFzd2lwZXIucGFyYW1zKSB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgIGlmIChiYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgJGltYWdlRWwuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgYHVybChcIiR7YmFja2dyb3VuZH1cIilgKTtcbiAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLWJhY2tncm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzcmNzZXQnLCBzcmNzZXQpO1xuICAgICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzaXplcycsIHNpemVzKTtcbiAgICAgICAgICAgICRpbWFnZUVsLnJlbW92ZUF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNyYykge1xuICAgICAgICAgICAgJGltYWdlRWwuYXR0cignc3JjJywgc3JjKTtcbiAgICAgICAgICAgICRpbWFnZUVsLnJlbW92ZUF0dHIoJ2RhdGEtc3JjJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJGltYWdlRWwuYWRkQ2xhc3MocGFyYW1zLmxvYWRlZENsYXNzKS5yZW1vdmVDbGFzcyhwYXJhbXMubG9hZGluZ0NsYXNzKTtcbiAgICAgICAgJHNsaWRlRWwuZmluZChgLiR7cGFyYW1zLnByZWxvYWRlckNsYXNzfWApLnJlbW92ZSgpO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wICYmIGxvYWRJbkR1cGxpY2F0ZSkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlT3JpZ2luYWxJbmRleCA9ICRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICAgICAgaWYgKCRzbGlkZUVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbihgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzbGlkZU9yaWdpbmFsSW5kZXh9XCJdOm5vdCguJHtzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KWApO1xuICAgICAgICAgICAgc3dpcGVyLmxhenkubG9hZEluU2xpZGUob3JpZ2luYWxTbGlkZS5pbmRleCgpLCBmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZWRTbGlkZSA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzbGlkZU9yaWdpbmFsSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShkdXBsaWNhdGVkU2xpZGUuaW5kZXgoKSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzd2lwZXIuZW1pdCgnbGF6eUltYWdlUmVhZHknLCAkc2xpZGVFbFswXSwgJGltYWdlRWxbMF0pO1xuICAgICAgfSk7XG5cbiAgICAgIHN3aXBlci5lbWl0KCdsYXp5SW1hZ2VMb2FkJywgJHNsaWRlRWxbMF0sICRpbWFnZUVsWzBdKTtcbiAgICB9KTtcbiAgfSxcbiAgbG9hZCgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgICR3cmFwcGVyRWwsIHBhcmFtczogc3dpcGVyUGFyYW1zLCBzbGlkZXMsIGFjdGl2ZUluZGV4LFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyUGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXJQYXJhbXMubGF6eTtcblxuICAgIGxldCBzbGlkZXNQZXJWaWV3ID0gc3dpcGVyUGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgaWYgKHNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgc2xpZGVzUGVyVmlldyA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xpZGVFeGlzdChpbmRleCkge1xuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICBpZiAoJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7c3dpcGVyUGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtpbmRleH1cIl1gKS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzbGlkZXNbaW5kZXhdKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2xpZGVJbmRleChzbGlkZUVsKSB7XG4gICAgICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgICAgIHJldHVybiAkKHNsaWRlRWwpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJChzbGlkZUVsKS5pbmRleCgpO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmxhenkuaW5pdGlhbEltYWdlTG9hZGVkKSBzd2lwZXIubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoU2xpZGVzVmlzaWJpbGl0eSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7c3dpcGVyUGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzfWApLmVhY2goKGVsSW5kZXgsIHNsaWRlRWwpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpc1ZpcnR1YWwgPyAkKHNsaWRlRWwpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgOiAkKHNsaWRlRWwpLmluZGV4KCk7XG4gICAgICAgIHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoc2xpZGVzUGVyVmlldyA+IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleDsgaSA8IGFjdGl2ZUluZGV4ICsgc2xpZGVzUGVyVmlldzsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZUV4aXN0KGkpKSBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoYWN0aXZlSW5kZXgpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmxvYWRQcmV2TmV4dCkge1xuICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPiAxIHx8IChwYXJhbXMubG9hZFByZXZOZXh0QW1vdW50ICYmIHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQgPiAxKSkge1xuICAgICAgICBjb25zdCBhbW91bnQgPSBwYXJhbXMubG9hZFByZXZOZXh0QW1vdW50O1xuICAgICAgICBjb25zdCBzcHYgPSBzbGlkZXNQZXJWaWV3O1xuICAgICAgICBjb25zdCBtYXhJbmRleCA9IE1hdGgubWluKGFjdGl2ZUluZGV4ICsgc3B2ICsgTWF0aC5tYXgoYW1vdW50LCBzcHYpLCBzbGlkZXMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbWluSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCAtIE1hdGgubWF4KHNwdiwgYW1vdW50KSwgMCk7XG4gICAgICAgIC8vIE5leHQgU2xpZGVzXG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIHNsaWRlc1BlclZpZXc7IGkgPCBtYXhJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlRXhpc3QoaSkpIHN3aXBlci5sYXp5LmxvYWRJblNsaWRlKGkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXYgU2xpZGVzXG4gICAgICAgIGZvciAobGV0IGkgPSBtaW5JbmRleDsgaSA8IGFjdGl2ZUluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoc2xpZGVFeGlzdChpKSkgc3dpcGVyLmxhenkubG9hZEluU2xpZGUoaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5leHRTbGlkZSA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3N3aXBlclBhcmFtcy5zbGlkZU5leHRDbGFzc31gKTtcbiAgICAgICAgaWYgKG5leHRTbGlkZS5sZW5ndGggPiAwKSBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShzbGlkZUluZGV4KG5leHRTbGlkZSkpO1xuXG4gICAgICAgIGNvbnN0IHByZXZTbGlkZSA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3N3aXBlclBhcmFtcy5zbGlkZVByZXZDbGFzc31gKTtcbiAgICAgICAgaWYgKHByZXZTbGlkZS5sZW5ndGggPiAwKSBzd2lwZXIubGF6eS5sb2FkSW5TbGlkZShzbGlkZUluZGV4KHByZXZTbGlkZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cbnZhciBMYXp5JDEgPSB7XG4gIG5hbWU6ICdsYXp5JyxcbiAgcGFyYW1zOiB7XG4gICAgbGF6eToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBsb2FkUHJldk5leHQ6IGZhbHNlLFxuICAgICAgbG9hZFByZXZOZXh0QW1vdW50OiAxLFxuICAgICAgbG9hZE9uVHJhbnNpdGlvblN0YXJ0OiBmYWxzZSxcblxuICAgICAgZWxlbWVudENsYXNzOiAnc3dpcGVyLWxhenknLFxuICAgICAgbG9hZGluZ0NsYXNzOiAnc3dpcGVyLWxhenktbG9hZGluZycsXG4gICAgICBsb2FkZWRDbGFzczogJ3N3aXBlci1sYXp5LWxvYWRlZCcsXG4gICAgICBwcmVsb2FkZXJDbGFzczogJ3N3aXBlci1sYXp5LXByZWxvYWRlcicsXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgbGF6eToge1xuICAgICAgICBpbml0aWFsSW1hZ2VMb2FkZWQ6IGZhbHNlLFxuICAgICAgICBsb2FkOiBMYXp5LmxvYWQuYmluZChzd2lwZXIpLFxuICAgICAgICBsb2FkSW5TbGlkZTogTGF6eS5sb2FkSW5TbGlkZS5iaW5kKHN3aXBlciksXG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGJlZm9yZUluaXQoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcykge1xuICAgICAgICBzd2lwZXIucGFyYW1zLnByZWxvYWRJbWFnZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXQoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkICYmICFzd2lwZXIucGFyYW1zLmxvb3AgJiYgc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgPT09IDApIHtcbiAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmICFzd2lwZXIucGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc2l6ZSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsYmFyRHJhZ01vdmUoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRyYW5zaXRpb25TdGFydCgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQgfHwgKCFzd2lwZXIucGFyYW1zLmxhenkubG9hZE9uVHJhbnNpdGlvblN0YXJ0ICYmICFzd2lwZXIubGF6eS5pbml0aWFsSW1hZ2VMb2FkZWQpKSB7XG4gICAgICAgICAgc3dpcGVyLmxhenkubG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRW5kKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuZW5hYmxlZCAmJiAhc3dpcGVyLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCkge1xuICAgICAgICBzd2lwZXIubGF6eS5sb2FkKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbi8qIGVzbGludCBuby1iaXR3aXNlOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dcIjogW1wiPj5cIl0gfV0gKi9cblxuY29uc3QgQ29udHJvbGxlciA9IHtcbiAgTGluZWFyU3BsaW5lOiBmdW5jdGlvbiBMaW5lYXJTcGxpbmUoeCwgeSkge1xuICAgIGNvbnN0IGJpbmFyeVNlYXJjaCA9IChmdW5jdGlvbiBzZWFyY2goKSB7XG4gICAgICBsZXQgbWF4SW5kZXg7XG4gICAgICBsZXQgbWluSW5kZXg7XG4gICAgICBsZXQgZ3Vlc3M7XG4gICAgICByZXR1cm4gKGFycmF5LCB2YWwpID0+IHtcbiAgICAgICAgbWluSW5kZXggPSAtMTtcbiAgICAgICAgbWF4SW5kZXggPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChtYXhJbmRleCAtIG1pbkluZGV4ID4gMSkge1xuICAgICAgICAgIGd1ZXNzID0gbWF4SW5kZXggKyBtaW5JbmRleCA+PiAxO1xuICAgICAgICAgIGlmIChhcnJheVtndWVzc10gPD0gdmFsKSB7XG4gICAgICAgICAgICBtaW5JbmRleCA9IGd1ZXNzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXhJbmRleCA9IGd1ZXNzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4SW5kZXg7XG4gICAgICB9O1xuICAgIH0oKSk7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMubGFzdEluZGV4ID0geC5sZW5ndGggLSAxO1xuICAgIC8vIEdpdmVuIGFuIHggdmFsdWUgKHgyKSwgcmV0dXJuIHRoZSBleHBlY3RlZCB5MiB2YWx1ZTpcbiAgICAvLyAoeDEseTEpIGlzIHRoZSBrbm93biBwb2ludCBiZWZvcmUgZ2l2ZW4gdmFsdWUsXG4gICAgLy8gKHgzLHkzKSBpcyB0aGUga25vd24gcG9pbnQgYWZ0ZXIgZ2l2ZW4gdmFsdWUuXG4gICAgbGV0IGkxO1xuICAgIGxldCBpMztcblxuICAgIHRoaXMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZSh4Mikge1xuICAgICAgaWYgKCF4MikgcmV0dXJuIDA7XG5cbiAgICAgIC8vIEdldCB0aGUgaW5kZXhlcyBvZiB4MSBhbmQgeDMgKHRoZSBhcnJheSBpbmRleGVzIGJlZm9yZSBhbmQgYWZ0ZXIgZ2l2ZW4geDIpOlxuICAgICAgaTMgPSBiaW5hcnlTZWFyY2godGhpcy54LCB4Mik7XG4gICAgICBpMSA9IGkzIC0gMTtcblxuICAgICAgLy8gV2UgaGF2ZSBvdXIgaW5kZXhlcyBpMSAmIGkzLCBzbyB3ZSBjYW4gY2FsY3VsYXRlIGFscmVhZHk6XG4gICAgICAvLyB5MiA6PSAoKHgy4oiSeDEpIMOXICh5M+KIknkxKSkgw7cgKHgz4oiSeDEpICsgeTFcbiAgICAgIHJldHVybiAoKCh4MiAtIHRoaXMueFtpMV0pICogKHRoaXMueVtpM10gLSB0aGlzLnlbaTFdKSkgLyAodGhpcy54W2kzXSAtIHRoaXMueFtpMV0pKSArIHRoaXMueVtpMV07XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8geHh4OiBmb3Igbm93IGkgd2lsbCBqdXN0IHNhdmUgb25lIHNwbGluZSBmdW5jdGlvbiB0byB0b1xuICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uKGMpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSBzd2lwZXIucGFyYW1zLmxvb3BcbiAgICAgICAgPyBuZXcgQ29udHJvbGxlci5MaW5lYXJTcGxpbmUoc3dpcGVyLnNsaWRlc0dyaWQsIGMuc2xpZGVzR3JpZClcbiAgICAgICAgOiBuZXcgQ29udHJvbGxlci5MaW5lYXJTcGxpbmUoc3dpcGVyLnNuYXBHcmlkLCBjLnNuYXBHcmlkKTtcbiAgICB9XG4gIH0sXG4gIHNldFRyYW5zbGF0ZShzZXRUcmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgY29udHJvbGxlZCA9IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgbGV0IG11bHRpcGxpZXI7XG4gICAgbGV0IGNvbnRyb2xsZWRUcmFuc2xhdGU7XG4gICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjKSB7XG4gICAgICAvLyB0aGlzIHdpbGwgY3JlYXRlIGFuIEludGVycG9sYXRlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBzbmFwR3JpZHNcbiAgICAgIC8vIHggaXMgdGhlIEdyaWQgb2YgdGhlIHNjcm9sbGVkIHNjcm9sbGVyIGFuZCB5IHdpbGwgYmUgdGhlIGNvbnRyb2xsZWQgc2Nyb2xsZXJcbiAgICAgIC8vIGl0IG1ha2VzIHNlbnNlIHRvIGNyZWF0ZSB0aGlzIG9ubHkgb25jZSBhbmQgcmVjYWxsIGl0IGZvciB0aGUgaW50ZXJwb2xhdGlvblxuICAgICAgLy8gdGhlIGZ1bmN0aW9uIGRvZXMgYSBsb3Qgb2YgdmFsdWUgY2FjaGluZyBmb3IgcGVyZm9ybWFuY2VcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGU7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmJ5ID09PSAnc2xpZGUnKSB7XG4gICAgICAgIHN3aXBlci5jb250cm9sbGVyLmdldEludGVycG9sYXRlRnVuY3Rpb24oYyk7XG4gICAgICAgIC8vIGkgYW0gbm90IHN1cmUgd2h5IHRoZSB2YWx1ZXMgaGF2ZSB0byBiZSBtdWx0aXBsaWNhdGVkIHRoaXMgd2F5LCB0cmllZCB0byBpbnZlcnQgdGhlIHNuYXBHcmlkXG4gICAgICAgIC8vIGJ1dCBpdCBkaWQgbm90IHdvcmsgb3V0XG4gICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAtc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lLmludGVycG9sYXRlKC10cmFuc2xhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRyb2xsZWRUcmFuc2xhdGUgfHwgc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmJ5ID09PSAnY29udGFpbmVyJykge1xuICAgICAgICBtdWx0aXBsaWVyID0gKGMubWF4VHJhbnNsYXRlKCkgLSBjLm1pblRyYW5zbGF0ZSgpKSAvIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gKCh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpICogbXVsdGlwbGllcikgKyBjLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmludmVyc2UpIHtcbiAgICAgICAgY29udHJvbGxlZFRyYW5zbGF0ZSA9IGMubWF4VHJhbnNsYXRlKCkgLSBjb250cm9sbGVkVHJhbnNsYXRlO1xuICAgICAgfVxuICAgICAgYy51cGRhdGVQcm9ncmVzcyhjb250cm9sbGVkVHJhbnNsYXRlKTtcbiAgICAgIGMuc2V0VHJhbnNsYXRlKGNvbnRyb2xsZWRUcmFuc2xhdGUsIHN3aXBlcik7XG4gICAgICBjLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBjLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbGxlZCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY29udHJvbGxlZFtpXSAhPT0gYnlDb250cm9sbGVyICYmIGNvbnRyb2xsZWRbaV0gaW5zdGFuY2VvZiBTd2lwZXIpIHtcbiAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGNvbnRyb2xsZWRbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sbGVkIGluc3RhbmNlb2YgU3dpcGVyICYmIGJ5Q29udHJvbGxlciAhPT0gY29udHJvbGxlZCkge1xuICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkKTtcbiAgICB9XG4gIH0sXG4gIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgY29udHJvbGxlZCA9IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgbGV0IGk7XG4gICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oYykge1xuICAgICAgYy5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBzd2lwZXIpO1xuICAgICAgaWYgKGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgIGMudHJhbnNpdGlvblN0YXJ0KCk7XG4gICAgICAgIGlmIChjLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgVXRpbHMubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgYy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYy4kd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoKCkgPT4ge1xuICAgICAgICAgIGlmICghY29udHJvbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChjLnBhcmFtcy5sb29wICYmIHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgYy5sb29wRml4KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGMudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbGxlZCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjb250cm9sbGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWRbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sbGVkIGluc3RhbmNlb2YgU3dpcGVyICYmIGJ5Q29udHJvbGxlciAhPT0gY29udHJvbGxlZCkge1xuICAgICAgc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oY29udHJvbGxlZCk7XG4gICAgfVxuICB9LFxufTtcbnZhciBDb250cm9sbGVyJDEgPSB7XG4gIG5hbWU6ICdjb250cm9sbGVyJyxcbiAgcGFyYW1zOiB7XG4gICAgY29udHJvbGxlcjoge1xuICAgICAgY29udHJvbDogdW5kZWZpbmVkLFxuICAgICAgaW52ZXJzZTogZmFsc2UsXG4gICAgICBieTogJ3NsaWRlJywgLy8gb3IgJ2NvbnRhaW5lcidcbiAgICB9LFxuICB9LFxuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICBjb250cm9sbGVyOiB7XG4gICAgICAgIGNvbnRyb2w6IHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5jb250cm9sLFxuICAgICAgICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uOiBDb250cm9sbGVyLmdldEludGVycG9sYXRlRnVuY3Rpb24uYmluZChzd2lwZXIpLFxuICAgICAgICBzZXRUcmFuc2xhdGU6IENvbnRyb2xsZXIuc2V0VHJhbnNsYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc2V0VHJhbnNpdGlvbjogQ29udHJvbGxlci5zZXRUcmFuc2l0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgdXBkYXRlKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCkgcmV0dXJuO1xuICAgICAgaWYgKHN3aXBlci5jb250cm9sbGVyLnNwbGluZSkge1xuICAgICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGRlbGV0ZSBzd2lwZXIuY29udHJvbGxlci5zcGxpbmU7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXNpemUoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSByZXR1cm47XG4gICAgICBpZiAoc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICAgIHN3aXBlci5jb250cm9sbGVyLnNwbGluZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgZGVsZXRlIHN3aXBlci5jb250cm9sbGVyLnNwbGluZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCkgcmV0dXJuO1xuICAgICAgaWYgKHN3aXBlci5jb250cm9sbGVyLnNwbGluZSkge1xuICAgICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGRlbGV0ZSBzd2lwZXIuY29udHJvbGxlci5zcGxpbmU7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRUcmFuc2xhdGUodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHJldHVybjtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcik7XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHJldHVybjtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLnNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGExMXkgPSB7XG4gIG1ha2VFbEZvY3VzYWJsZSgkZWwpIHtcbiAgICAkZWwuYXR0cigndGFiSW5kZXgnLCAnMCcpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGFkZEVsUm9sZSgkZWwsIHJvbGUpIHtcbiAgICAkZWwuYXR0cigncm9sZScsIHJvbGUpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGFkZEVsTGFiZWwoJGVsLCBsYWJlbCkge1xuICAgICRlbC5hdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGRpc2FibGVFbCgkZWwpIHtcbiAgICAkZWwuYXR0cignYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIGVuYWJsZUVsKCRlbCkge1xuICAgICRlbC5hdHRyKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpO1xuICAgIHJldHVybiAkZWw7XG4gIH0sXG4gIG9uRW50ZXJLZXkoZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuICAgIGlmIChlLmtleUNvZGUgIT09IDEzKSByZXR1cm47XG4gICAgY29uc3QgJHRhcmdldEVsID0gJChlLnRhcmdldCk7XG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwgJiYgJHRhcmdldEVsLmlzKHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpKSB7XG4gICAgICBpZiAoIShzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLmxhc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmExMXkubm90aWZ5KHBhcmFtcy5uZXh0U2xpZGVNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwgJiYgJHRhcmdldEVsLmlzKHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwpKSB7XG4gICAgICBpZiAoIShzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgICAgfVxuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICBzd2lwZXIuYTExeS5ub3RpZnkocGFyYW1zLmZpcnN0U2xpZGVNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5hMTF5Lm5vdGlmeShwYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbiAmJiAkdGFyZ2V0RWwuaXMoYC4ke3N3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzc31gKSkge1xuICAgICAgJHRhcmdldEVsWzBdLmNsaWNrKCk7XG4gICAgfVxuICB9LFxuICBub3RpZnkobWVzc2FnZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gc3dpcGVyLmExMXkubGl2ZVJlZ2lvbjtcbiAgICBpZiAobm90aWZpY2F0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIG5vdGlmaWNhdGlvbi5odG1sKCcnKTtcbiAgICBub3RpZmljYXRpb24uaHRtbChtZXNzYWdlKTtcbiAgfSxcbiAgdXBkYXRlTmF2aWdhdGlvbigpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICAgIGNvbnN0IHsgJG5leHRFbCwgJHByZXZFbCB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgc3dpcGVyLmExMXkuZGlzYWJsZUVsKCRwcmV2RWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmExMXkuZW5hYmxlRWwoJHByZXZFbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgICBzd2lwZXIuYTExeS5kaXNhYmxlRWwoJG5leHRFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuYTExeS5lbmFibGVFbCgkbmV4dEVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHVwZGF0ZVBhZ2luYXRpb24oKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5lYWNoKChidWxsZXRJbmRleCwgYnVsbGV0RWwpID0+IHtcbiAgICAgICAgY29uc3QgJGJ1bGxldEVsID0gJChidWxsZXRFbCk7XG4gICAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkYnVsbGV0RWwpO1xuICAgICAgICBzd2lwZXIuYTExeS5hZGRFbFJvbGUoJGJ1bGxldEVsLCAnYnV0dG9uJyk7XG4gICAgICAgIHN3aXBlci5hMTF5LmFkZEVsTGFiZWwoJGJ1bGxldEVsLCBwYXJhbXMucGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2UucmVwbGFjZSgve3tpbmRleH19LywgJGJ1bGxldEVsLmluZGV4KCkgKyAxKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcblxuICAgIHN3aXBlci4kZWwuYXBwZW5kKHN3aXBlci5hMTF5LmxpdmVSZWdpb24pO1xuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcbiAgICBsZXQgJG5leHRFbDtcbiAgICBsZXQgJHByZXZFbDtcbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbCkge1xuICAgICAgJG5leHRFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWw7XG4gICAgfVxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsKSB7XG4gICAgICAkcHJldkVsID0gc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbDtcbiAgICB9XG4gICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkbmV4dEVsKTtcbiAgICAgIHN3aXBlci5hMTF5LmFkZEVsUm9sZSgkbmV4dEVsLCAnYnV0dG9uJyk7XG4gICAgICBzd2lwZXIuYTExeS5hZGRFbExhYmVsKCRuZXh0RWwsIHBhcmFtcy5uZXh0U2xpZGVNZXNzYWdlKTtcbiAgICAgICRuZXh0RWwub24oJ2tleWRvd24nLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICB9XG4gICAgaWYgKCRwcmV2RWwpIHtcbiAgICAgIHN3aXBlci5hMTF5Lm1ha2VFbEZvY3VzYWJsZSgkcHJldkVsKTtcbiAgICAgIHN3aXBlci5hMTF5LmFkZEVsUm9sZSgkcHJldkVsLCAnYnV0dG9uJyk7XG4gICAgICBzd2lwZXIuYTExeS5hZGRFbExhYmVsKCRwcmV2RWwsIHBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKTtcbiAgICAgICRwcmV2RWwub24oJ2tleWRvd24nLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICB9XG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aCkge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLm9uKCdrZXlkb3duJywgYC4ke3N3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzc31gLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmExMXkubGl2ZVJlZ2lvbiAmJiBzd2lwZXIuYTExeS5saXZlUmVnaW9uLmxlbmd0aCA+IDApIHN3aXBlci5hMTF5LmxpdmVSZWdpb24ucmVtb3ZlKCk7XG5cbiAgICBsZXQgJG5leHRFbDtcbiAgICBsZXQgJHByZXZFbDtcbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbCkge1xuICAgICAgJG5leHRFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWw7XG4gICAgfVxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsKSB7XG4gICAgICAkcHJldkVsID0gc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbDtcbiAgICB9XG4gICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICRuZXh0RWwub2ZmKCdrZXlkb3duJywgc3dpcGVyLmExMXkub25FbnRlcktleSk7XG4gICAgfVxuICAgIGlmICgkcHJldkVsKSB7XG4gICAgICAkcHJldkVsLm9mZigna2V5ZG93bicsIHN3aXBlci5hMTF5Lm9uRW50ZXJLZXkpO1xuICAgIH1cblxuICAgIC8vIFBhZ2luYXRpb25cbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoKSB7XG4gICAgICBzd2lwZXIucGFnaW5hdGlvbi4kZWwub2ZmKCdrZXlkb3duJywgYC4ke3N3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzc31gLCBzd2lwZXIuYTExeS5vbkVudGVyS2V5KTtcbiAgICB9XG4gIH0sXG59O1xudmFyIEExMXkgPSB7XG4gIG5hbWU6ICdhMTF5JyxcbiAgcGFyYW1zOiB7XG4gICAgYTExeToge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIG5vdGlmaWNhdGlvbkNsYXNzOiAnc3dpcGVyLW5vdGlmaWNhdGlvbicsXG4gICAgICBwcmV2U2xpZGVNZXNzYWdlOiAnUHJldmlvdXMgc2xpZGUnLFxuICAgICAgbmV4dFNsaWRlTWVzc2FnZTogJ05leHQgc2xpZGUnLFxuICAgICAgZmlyc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBmaXJzdCBzbGlkZScsXG4gICAgICBsYXN0U2xpZGVNZXNzYWdlOiAnVGhpcyBpcyB0aGUgbGFzdCBzbGlkZScsXG4gICAgICBwYWdpbmF0aW9uQnVsbGV0TWVzc2FnZTogJ0dvIHRvIHNsaWRlIHt7aW5kZXh9fScsXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgYTExeToge1xuICAgICAgICBsaXZlUmVnaW9uOiAkKGA8c3BhbiBjbGFzcz1cIiR7c3dpcGVyLnBhcmFtcy5hMTF5Lm5vdGlmaWNhdGlvbkNsYXNzfVwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiPjwvc3Bhbj5gKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgT2JqZWN0LmtleXMoYTExeSkuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAgICAgc3dpcGVyLmExMXlbbWV0aG9kTmFtZV0gPSBhMTF5W21ldGhvZE5hbWVdLmJpbmQoc3dpcGVyKTtcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5hMTF5LmluaXQoKTtcbiAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgICB9LFxuICAgIHRvRWRnZSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCk7XG4gICAgfSxcbiAgICBmcm9tRWRnZSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgICBzd2lwZXIuYTExeS51cGRhdGVOYXZpZ2F0aW9uKCk7XG4gICAgfSxcbiAgICBwYWdpbmF0aW9uVXBkYXRlKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICAgIHN3aXBlci5hMTF5LnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICB9LFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgICAgc3dpcGVyLmExMXkuZGVzdHJveSgpO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBIaXN0b3J5ID0ge1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkpIHJldHVybjtcbiAgICBpZiAoIXdpbmRvdy5oaXN0b3J5IHx8ICF3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgIHN3aXBlci5wYXJhbXMuaGlzdG9yeS5lbmFibGVkID0gZmFsc2U7XG4gICAgICBzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoaXN0b3J5ID0gc3dpcGVyLmhpc3Rvcnk7XG4gICAgaGlzdG9yeS5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgaGlzdG9yeS5wYXRocyA9IEhpc3RvcnkuZ2V0UGF0aFZhbHVlcygpO1xuICAgIGlmICghaGlzdG9yeS5wYXRocy5rZXkgJiYgIWhpc3RvcnkucGF0aHMudmFsdWUpIHJldHVybjtcbiAgICBoaXN0b3J5LnNjcm9sbFRvU2xpZGUoMCwgaGlzdG9yeS5wYXRocy52YWx1ZSwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgc3dpcGVyLmhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHN3aXBlci5oaXN0b3J5LnNldEhpc3RvcnlQb3BTdGF0ZSk7XG4gICAgfVxuICB9LFxuICBzZXRIaXN0b3J5UG9wU3RhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBzd2lwZXIuaGlzdG9yeS5wYXRocyA9IEhpc3RvcnkuZ2V0UGF0aFZhbHVlcygpO1xuICAgIHN3aXBlci5oaXN0b3J5LnNjcm9sbFRvU2xpZGUoc3dpcGVyLnBhcmFtcy5zcGVlZCwgc3dpcGVyLmhpc3RvcnkucGF0aHMudmFsdWUsIGZhbHNlKTtcbiAgfSxcbiAgZ2V0UGF0aFZhbHVlcygpIHtcbiAgICBjb25zdCBwYXRoQXJyYXkgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkuc3BsaXQoJy8nKS5maWx0ZXIoKHBhcnQpID0+IHBhcnQgIT09ICcnKTtcbiAgICBjb25zdCB0b3RhbCA9IHBhdGhBcnJheS5sZW5ndGg7XG4gICAgY29uc3Qga2V5ID0gcGF0aEFycmF5W3RvdGFsIC0gMl07XG4gICAgY29uc3QgdmFsdWUgPSBwYXRoQXJyYXlbdG90YWwgLSAxXTtcbiAgICByZXR1cm4geyBrZXksIHZhbHVlIH07XG4gIH0sXG4gIHNldEhpc3Rvcnkoa2V5LCBpbmRleCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuaGlzdG9yeS5pbml0aWFsaXplZCB8fCAhc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHJldHVybjtcbiAgICBjb25zdCBzbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoaW5kZXgpO1xuICAgIGxldCB2YWx1ZSA9IEhpc3Rvcnkuc2x1Z2lmeShzbGlkZS5hdHRyKCdkYXRhLWhpc3RvcnknKSk7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgdmFsdWUgPSBgJHtrZXl9LyR7dmFsdWV9YDtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gd2luZG93Lmhpc3Rvcnkuc3RhdGU7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyB2YWx1ZSB9LCBudWxsLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHZhbHVlIH0sIG51bGwsIHZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIHNsdWdpZnkodGV4dCkge1xuICAgIHJldHVybiB0ZXh0LnRvU3RyaW5nKClcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgIC5yZXBsYWNlKC9bXlxcdy1dKy9nLCAnJylcbiAgICAgIC5yZXBsYWNlKC8tLSsvZywgJy0nKVxuICAgICAgLnJlcGxhY2UoL14tKy8sICcnKVxuICAgICAgLnJlcGxhY2UoLy0rJC8sICcnKTtcbiAgfSxcbiAgc2Nyb2xsVG9TbGlkZShzcGVlZCwgdmFsdWUsIHJ1bkNhbGxiYWNrcykge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoaSk7XG4gICAgICAgIGNvbnN0IHNsaWRlSGlzdG9yeSA9IEhpc3Rvcnkuc2x1Z2lmeShzbGlkZS5hdHRyKCdkYXRhLWhpc3RvcnknKSk7XG4gICAgICAgIGlmIChzbGlkZUhpc3RvcnkgPT09IHZhbHVlICYmICFzbGlkZS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBzbGlkZS5pbmRleCgpO1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbygwLCBzcGVlZCwgcnVuQ2FsbGJhY2tzKTtcbiAgICB9XG4gIH0sXG59O1xuXG52YXIgSGlzdG9yeSQxID0ge1xuICBuYW1lOiAnaGlzdG9yeScsXG4gIHBhcmFtczoge1xuICAgIGhpc3Rvcnk6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVwbGFjZVN0YXRlOiBmYWxzZSxcbiAgICAgIGtleTogJ3NsaWRlcycsXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgaGlzdG9yeToge1xuICAgICAgICBpbml0OiBIaXN0b3J5LmluaXQuYmluZChzd2lwZXIpLFxuICAgICAgICBzZXRIaXN0b3J5OiBIaXN0b3J5LnNldEhpc3RvcnkuYmluZChzd2lwZXIpLFxuICAgICAgICBzZXRIaXN0b3J5UG9wU3RhdGU6IEhpc3Rvcnkuc2V0SGlzdG9yeVBvcFN0YXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc2Nyb2xsVG9TbGlkZTogSGlzdG9yeS5zY3JvbGxUb1NsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgZGVzdHJveTogSGlzdG9yeS5kZXN0cm95LmJpbmQoc3dpcGVyKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdCgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmhpc3RvcnkuaW5pdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmhpc3RvcnkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLmhpc3RvcnkuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgc3dpcGVyLmhpc3Rvcnkuc2V0SGlzdG9yeShzd2lwZXIucGFyYW1zLmhpc3Rvcnkua2V5LCBzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBIYXNoTmF2aWdhdGlvbiA9IHtcbiAgb25IYXNoQ2FuZ2UoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBuZXdIYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICAgIGNvbnN0IGFjdGl2ZVNsaWRlSGFzaCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLWhhc2gnKTtcbiAgICBpZiAobmV3SGFzaCAhPT0gYWN0aXZlU2xpZGVIYXNoKSB7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtaGFzaD1cIiR7bmV3SGFzaH1cIl1gKS5pbmRleCgpO1xuICAgICAgaWYgKHR5cGVvZiBuZXdJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4KTtcbiAgICB9XG4gIH0sXG4gIHNldEhhc2goKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCB8fCAhc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24ucmVwbGFjZVN0YXRlICYmIHdpbmRvdy5oaXN0b3J5ICYmIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIChgIyR7c3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtaGFzaCcpfWAgfHwgJycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICBjb25zdCBoYXNoID0gc2xpZGUuYXR0cignZGF0YS1oYXNoJykgfHwgc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5Jyk7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gaGFzaCB8fCAnJztcbiAgICB9XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCB8fCAoc3dpcGVyLnBhcmFtcy5oaXN0b3J5ICYmIHN3aXBlci5wYXJhbXMuaGlzdG9yeS5lbmFibGVkKSkgcmV0dXJuO1xuICAgIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgY29uc3QgaGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICBpZiAoaGFzaCkge1xuICAgICAgY29uc3Qgc3BlZWQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgICAgICBjb25zdCBzbGlkZUhhc2ggPSBzbGlkZS5hdHRyKCdkYXRhLWhhc2gnKSB8fCBzbGlkZS5hdHRyKCdkYXRhLWhpc3RvcnknKTtcbiAgICAgICAgaWYgKHNsaWRlSGFzaCA9PT0gaGFzaCAmJiAhc2xpZGUuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2xpZGUuaW5kZXgoKTtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi53YXRjaFN0YXRlKSB7XG4gICAgICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCBzd2lwZXIuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLndhdGNoU3RhdGUpIHtcbiAgICAgICQod2luZG93KS5vZmYoJ2hhc2hjaGFuZ2UnLCBzd2lwZXIuaGFzaE5hdmlnYXRpb24ub25IYXNoQ2FuZ2UpO1xuICAgIH1cbiAgfSxcbn07XG52YXIgSGFzaE5hdmlnYXRpb24kMSA9IHtcbiAgbmFtZTogJ2hhc2gtbmF2aWdhdGlvbicsXG4gIHBhcmFtczoge1xuICAgIGhhc2hOYXZpZ2F0aW9uOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHJlcGxhY2VTdGF0ZTogZmFsc2UsXG4gICAgICB3YXRjaFN0YXRlOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICBoYXNoTmF2aWdhdGlvbjoge1xuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGluaXQ6IEhhc2hOYXZpZ2F0aW9uLmluaXQuYmluZChzd2lwZXIpLFxuICAgICAgICBkZXN0cm95OiBIYXNoTmF2aWdhdGlvbi5kZXN0cm95LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc2V0SGFzaDogSGFzaE5hdmlnYXRpb24uc2V0SGFzaC5iaW5kKHN3aXBlciksXG4gICAgICAgIG9uSGFzaENhbmdlOiBIYXNoTmF2aWdhdGlvbi5vbkhhc2hDYW5nZS5iaW5kKHN3aXBlciksXG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGluaXQoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCkge1xuICAgICAgICBzd2lwZXIuaGFzaE5hdmlnYXRpb24uaW5pdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5oYXNoTmF2aWdhdGlvbi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRW5kKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIuaGFzaE5hdmlnYXRpb24uaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgc3dpcGVyLmhhc2hOYXZpZ2F0aW9uLnNldEhhc2goKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufTtcblxuLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG5cbmNvbnN0IEF1dG9wbGF5ID0ge1xuICBydW4oKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCAkYWN0aXZlU2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICBsZXQgZGVsYXkgPSBzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRlbGF5O1xuICAgIGlmICgkYWN0aXZlU2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1hdXRvcGxheScpKSB7XG4gICAgICBkZWxheSA9ICRhY3RpdmVTbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JykgfHwgc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS50aW1lb3V0KTtcbiAgICBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9IFV0aWxzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnJldmVyc2VEaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlUHJldihzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlUHJldihzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIHN3aXBlci5zbGlkZU5leHQoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgfSBlbHNlIGlmICghc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZU5leHQoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oMCwgc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH0sXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIuYXV0b3BsYXkudGltZW91dCAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IHRydWU7XG4gICAgc3dpcGVyLmVtaXQoJ2F1dG9wbGF5U3RhcnQnKTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIHN0b3AoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIuYXV0b3BsYXkudGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkudGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS50aW1lb3V0KTtcbiAgICAgIHN3aXBlci5hdXRvcGxheS50aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IGZhbHNlO1xuICAgIHN3aXBlci5lbWl0KCdhdXRvcGxheVN0b3AnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgcGF1c2Uoc3BlZWQpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkudGltZW91dCkgY2xlYXJUaW1lb3V0KHN3aXBlci5hdXRvcGxheS50aW1lb3V0KTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gdHJ1ZTtcbiAgICBpZiAoc3BlZWQgPT09IDAgfHwgIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkud2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfSxcbn07XG5cbnZhciBBdXRvcGxheSQxID0ge1xuICBuYW1lOiAnYXV0b3BsYXknLFxuICBwYXJhbXM6IHtcbiAgICBhdXRvcGxheToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBkZWxheTogMzAwMCxcbiAgICAgIHdhaXRGb3JUcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG4gICAgICBzdG9wT25MYXN0U2xpZGU6IGZhbHNlLFxuICAgICAgcmV2ZXJzZURpcmVjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgIHJ1bjogQXV0b3BsYXkucnVuLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc3RhcnQ6IEF1dG9wbGF5LnN0YXJ0LmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc3RvcDogQXV0b3BsYXkuc3RvcC5iaW5kKHN3aXBlciksXG4gICAgICAgIHBhdXNlOiBBdXRvcGxheS5wYXVzZS5iaW5kKHN3aXBlciksXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLiR3cmFwcGVyRWwpIHJldHVybjtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLmF1dG9wbGF5Lm9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5hdXRvcGxheS5vblRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2lwZXIuYXV0b3BsYXkucnVuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmVuYWJsZWQpIHtcbiAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBiZWZvcmVUcmFuc2l0aW9uU3RhcnQoc3BlZWQsIGludGVybmFsKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICAgIGlmIChpbnRlcm5hbCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZShzcGVlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2xpZGVyRmlyc3RNb3ZlKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS5zdG9wKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IEZhZGUgPSB7XG4gIHNldFRyYW5zbGF0ZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2xpZGVzIH0gPSBzd2lwZXI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0ICRzbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgbGV0IHR4ID0gLW9mZnNldDtcbiAgICAgIGlmICghc3dpcGVyLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB0eCAtPSBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgbGV0IHR5ID0gMDtcbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIHR5ID0gdHg7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNsaWRlT3BhY2l0eSA9IHN3aXBlci5wYXJhbXMuZmFkZUVmZmVjdC5jcm9zc0ZhZGVcbiAgICAgICAgPyBNYXRoLm1heCgxIC0gTWF0aC5hYnMoJHNsaWRlRWxbMF0ucHJvZ3Jlc3MpLCAwKVxuICAgICAgICA6IDEgKyBNYXRoLm1pbihNYXRoLm1heCgkc2xpZGVFbFswXS5wcm9ncmVzcywgLTEpLCAwKTtcbiAgICAgICRzbGlkZUVsXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgIG9wYWNpdHk6IHNsaWRlT3BhY2l0eSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoJHt0eH1weCwgJHt0eX1weCwgMHB4KWApO1xuICAgIH1cbiAgfSxcbiAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgeyBzbGlkZXMsICR3cmFwcGVyRWwgfSA9IHN3aXBlcjtcbiAgICBzbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSAmJiBkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgbGV0IGV2ZW50VHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICBzbGlkZXMudHJhbnNpdGlvbkVuZCgoKSA9PiB7XG4gICAgICAgIGlmIChldmVudFRyaWdnZXJlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB0cmlnZ2VyRXZlbnRzID0gWyd3ZWJraXRUcmFuc2l0aW9uRW5kJywgJ3RyYW5zaXRpb25lbmQnXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyRXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgJHdyYXBwZXJFbC50cmlnZ2VyKHRyaWdnZXJFdmVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59O1xuXG52YXIgRWZmZWN0RmFkZSA9IHtcbiAgbmFtZTogJ2VmZmVjdC1mYWRlJyxcbiAgcGFyYW1zOiB7XG4gICAgZmFkZUVmZmVjdDoge1xuICAgICAgY3Jvc3NGYWRlOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICBmYWRlRWZmZWN0OiB7XG4gICAgICAgIHNldFRyYW5zbGF0ZTogRmFkZS5zZXRUcmFuc2xhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICBzZXRUcmFuc2l0aW9uOiBGYWRlLnNldFRyYW5zaXRpb24uYmluZChzd2lwZXIpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBiZWZvcmVJbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZhZGUnKSByZXR1cm47XG4gICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31mYWRlYCk7XG4gICAgICBjb25zdCBvdmVyd3JpdGVQYXJhbXMgPSB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogdHJ1ZSxcbiAgICAgIH07XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIub3JpZ2luYWxQYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmFkZScpIHJldHVybjtcbiAgICAgIHN3aXBlci5mYWRlRWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZhZGUnKSByZXR1cm47XG4gICAgICBzd2lwZXIuZmFkZUVmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgQ3ViZSA9IHtcbiAgc2V0VHJhbnNsYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgJGVsLCAkd3JhcHBlckVsLCBzbGlkZXMsIHdpZHRoOiBzd2lwZXJXaWR0aCwgaGVpZ2h0OiBzd2lwZXJIZWlnaHQsIHJ0bFRyYW5zbGF0ZTogcnRsLCBzaXplOiBzd2lwZXJTaXplLFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5jdWJlRWZmZWN0O1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICBsZXQgd3JhcHBlclJvdGF0ZSA9IDA7XG4gICAgbGV0ICRjdWJlU2hhZG93RWw7XG4gICAgaWYgKHBhcmFtcy5zaGFkb3cpIHtcbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgJGN1YmVTaGFkb3dFbCA9ICR3cmFwcGVyRWwuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuICAgICAgICBpZiAoJGN1YmVTaGFkb3dFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAkY3ViZVNoYWRvd0VsID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xuICAgICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKCRjdWJlU2hhZG93RWwpO1xuICAgICAgICB9XG4gICAgICAgICRjdWJlU2hhZG93RWwuY3NzKHsgaGVpZ2h0OiBgJHtzd2lwZXJXaWR0aH1weGAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkY3ViZVNoYWRvd0VsID0gJGVsLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKTtcbiAgICAgICAgaWYgKCRjdWJlU2hhZG93RWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJGN1YmVTaGFkb3dFbCA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItY3ViZS1zaGFkb3dcIj48L2Rpdj4nKTtcbiAgICAgICAgICAkZWwuYXBwZW5kKCRjdWJlU2hhZG93RWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgIGxldCBzbGlkZUluZGV4ID0gaTtcbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IHBhcnNlSW50KCRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICAgIH1cbiAgICAgIGxldCBzbGlkZUFuZ2xlID0gc2xpZGVJbmRleCAqIDkwO1xuICAgICAgbGV0IHJvdW5kID0gTWF0aC5mbG9vcihzbGlkZUFuZ2xlIC8gMzYwKTtcbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgc2xpZGVBbmdsZSA9IC1zbGlkZUFuZ2xlO1xuICAgICAgICByb3VuZCA9IE1hdGguZmxvb3IoLXNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigkc2xpZGVFbFswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgIGxldCB0eCA9IDA7XG4gICAgICBsZXQgdHkgPSAwO1xuICAgICAgbGV0IHR6ID0gMDtcbiAgICAgIGlmIChzbGlkZUluZGV4ICUgNCA9PT0gMCkge1xuICAgICAgICB0eCA9IC1yb3VuZCAqIDQgKiBzd2lwZXJTaXplO1xuICAgICAgICB0eiA9IDA7XG4gICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMSkgJSA0ID09PSAwKSB7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgICAgdHogPSAtcm91bmQgKiA0ICogc3dpcGVyU2l6ZTtcbiAgICAgIH0gZWxzZSBpZiAoKHNsaWRlSW5kZXggLSAyKSAlIDQgPT09IDApIHtcbiAgICAgICAgdHggPSBzd2lwZXJTaXplICsgKHJvdW5kICogNCAqIHN3aXBlclNpemUpO1xuICAgICAgICB0eiA9IHN3aXBlclNpemU7XG4gICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMykgJSA0ID09PSAwKSB7XG4gICAgICAgIHR4ID0gLXN3aXBlclNpemU7XG4gICAgICAgIHR6ID0gKDMgKiBzd2lwZXJTaXplKSArIChzd2lwZXJTaXplICogNCAqIHJvdW5kKTtcbiAgICAgIH1cbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgdHggPSAtdHg7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIHR5ID0gdHg7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZVgoJHtpc0hvcml6b250YWwgPyAwIDogLXNsaWRlQW5nbGV9ZGVnKSByb3RhdGVZKCR7aXNIb3Jpem9udGFsID8gc2xpZGVBbmdsZSA6IDB9ZGVnKSB0cmFuc2xhdGUzZCgke3R4fXB4LCAke3R5fXB4LCAke3R6fXB4KWA7XG4gICAgICBpZiAocHJvZ3Jlc3MgPD0gMSAmJiBwcm9ncmVzcyA+IC0xKSB7XG4gICAgICAgIHdyYXBwZXJSb3RhdGUgPSAoc2xpZGVJbmRleCAqIDkwKSArIChwcm9ncmVzcyAqIDkwKTtcbiAgICAgICAgaWYgKHJ0bCkgd3JhcHBlclJvdGF0ZSA9ICgtc2xpZGVJbmRleCAqIDkwKSAtIChwcm9ncmVzcyAqIDkwKTtcbiAgICAgIH1cbiAgICAgICRzbGlkZUVsLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgICAgaWYgKHBhcmFtcy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgLy8gU2V0IHNoYWRvd3NcbiAgICAgICAgbGV0IHNoYWRvd0JlZm9yZSA9IGlzSG9yaXpvbnRhbCA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICBsZXQgc2hhZG93QWZ0ZXIgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XG4gICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QmVmb3JlID0gJChgPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJHtpc0hvcml6b250YWwgPyAnbGVmdCcgOiAndG9wJ31cIj48L2Rpdj5gKTtcbiAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoc2hhZG93QmVmb3JlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QWZ0ZXIgPSAkKGA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0ke2lzSG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJ31cIj48L2Rpdj5gKTtcbiAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSBzaGFkb3dCZWZvcmVbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KC1wcm9ncmVzcywgMCk7XG4gICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heChwcm9ncmVzcywgMCk7XG4gICAgICB9XG4gICAgfVxuICAgICR3cmFwcGVyRWwuY3NzKHtcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOiBgNTAlIDUwJSAtJHtzd2lwZXJTaXplIC8gMn1weGAsXG4gICAgICAnLW1vei10cmFuc2Zvcm0tb3JpZ2luJzogYDUwJSA1MCUgLSR7c3dpcGVyU2l6ZSAvIDJ9cHhgLFxuICAgICAgJy1tcy10cmFuc2Zvcm0tb3JpZ2luJzogYDUwJSA1MCUgLSR7c3dpcGVyU2l6ZSAvIDJ9cHhgLFxuICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBgNTAlIDUwJSAtJHtzd2lwZXJTaXplIC8gMn1weGAsXG4gICAgfSk7XG5cbiAgICBpZiAocGFyYW1zLnNoYWRvdykge1xuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAkY3ViZVNoYWRvd0VsLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoMHB4LCAkeyhzd2lwZXJXaWR0aCAvIDIpICsgcGFyYW1zLnNoYWRvd09mZnNldH1weCwgJHstc3dpcGVyV2lkdGggLyAyfXB4KSByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDBkZWcpIHNjYWxlKCR7cGFyYW1zLnNoYWRvd1NjYWxlfSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd0FuZ2xlID0gTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLSAoTWF0aC5mbG9vcihNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAvIDkwKSAqIDkwKTtcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDEuNSAtIChcbiAgICAgICAgICAoTWF0aC5zaW4oKHNoYWRvd0FuZ2xlICogMiAqIE1hdGguUEkpIC8gMzYwKSAvIDIpXG4gICAgICAgICAgKyAoTWF0aC5jb3MoKHNoYWRvd0FuZ2xlICogMiAqIE1hdGguUEkpIC8gMzYwKSAvIDIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNjYWxlMSA9IHBhcmFtcy5zaGFkb3dTY2FsZTtcbiAgICAgICAgY29uc3Qgc2NhbGUyID0gcGFyYW1zLnNoYWRvd1NjYWxlIC8gbXVsdGlwbGllcjtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcGFyYW1zLnNoYWRvd09mZnNldDtcbiAgICAgICAgJGN1YmVTaGFkb3dFbC50cmFuc2Zvcm0oYHNjYWxlM2QoJHtzY2FsZTF9LCAxLCAke3NjYWxlMn0pIHRyYW5zbGF0ZTNkKDBweCwgJHsoc3dpcGVySGVpZ2h0IC8gMikgKyBvZmZzZXR9cHgsICR7LXN3aXBlckhlaWdodCAvIDIgLyBzY2FsZTJ9cHgpIHJvdGF0ZVgoLTkwZGVnKWApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB6RmFjdG9yID0gKEJyb3dzZXIuaXNTYWZhcmkgfHwgQnJvd3Nlci5pc1VpV2ViVmlldykgPyAoLXN3aXBlclNpemUgLyAyKSA6IDA7XG4gICAgJHdyYXBwZXJFbFxuICAgICAgLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoMHB4LDAsJHt6RmFjdG9yfXB4KSByb3RhdGVYKCR7c3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gMCA6IHdyYXBwZXJSb3RhdGV9ZGVnKSByb3RhdGVZKCR7c3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXdyYXBwZXJSb3RhdGUgOiAwfWRlZylgKTtcbiAgfSxcbiAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgeyAkZWwsIHNsaWRlcyB9ID0gc3dpcGVyO1xuICAgIHNsaWRlc1xuICAgICAgLnRyYW5zaXRpb24oZHVyYXRpb24pXG4gICAgICAuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JylcbiAgICAgIC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jdWJlRWZmZWN0LnNoYWRvdyAmJiAhc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAkZWwuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH1cbiAgfSxcbn07XG5cbnZhciBFZmZlY3RDdWJlID0ge1xuICBuYW1lOiAnZWZmZWN0LWN1YmUnLFxuICBwYXJhbXM6IHtcbiAgICBjdWJlRWZmZWN0OiB7XG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICBzaGFkb3c6IHRydWUsXG4gICAgICBzaGFkb3dPZmZzZXQ6IDIwLFxuICAgICAgc2hhZG93U2NhbGU6IDAuOTQsXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgY3ViZUVmZmVjdDoge1xuICAgICAgICBzZXRUcmFuc2xhdGU6IEN1YmUuc2V0VHJhbnNsYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc2V0VHJhbnNpdGlvbjogQ3ViZS5zZXRUcmFuc2l0aW9uLmJpbmQoc3dpcGVyKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgYmVmb3JlSW5pdCgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5lZmZlY3QgIT09ICdjdWJlJykgcmV0dXJuO1xuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Y3ViZWApO1xuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9M2RgKTtcbiAgICAgIGNvbnN0IG92ZXJ3cml0ZVBhcmFtcyA9IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc2xpZGVzUGVyQ29sdW1uOiAxLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgcmVzaXN0YW5jZVJhdGlvOiAwLFxuICAgICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogdHJ1ZSxcbiAgICAgIH07XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIub3JpZ2luYWxQYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY3ViZScpIHJldHVybjtcbiAgICAgIHN3aXBlci5jdWJlRWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2N1YmUnKSByZXR1cm47XG4gICAgICBzd2lwZXIuY3ViZUVmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgRmxpcCA9IHtcbiAgc2V0VHJhbnNsYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgeyBzbGlkZXMsIHJ0bFRyYW5zbGF0ZTogcnRsIH0gPSBzd2lwZXI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0ICRzbGlkZUVsID0gc2xpZGVzLmVxKGkpO1xuICAgICAgbGV0IHByb2dyZXNzID0gJHNsaWRlRWxbMF0ucHJvZ3Jlc3M7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mbGlwRWZmZWN0LmxpbWl0Um90YXRpb24pIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigkc2xpZGVFbFswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgY29uc3Qgcm90YXRlID0gLTE4MCAqIHByb2dyZXNzO1xuICAgICAgbGV0IHJvdGF0ZVkgPSByb3RhdGU7XG4gICAgICBsZXQgcm90YXRlWCA9IDA7XG4gICAgICBsZXQgdHggPSAtb2Zmc2V0O1xuICAgICAgbGV0IHR5ID0gMDtcbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIHR5ID0gdHg7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgICAgcm90YXRlWCA9IC1yb3RhdGVZO1xuICAgICAgICByb3RhdGVZID0gMDtcbiAgICAgIH0gZWxzZSBpZiAocnRsKSB7XG4gICAgICAgIHJvdGF0ZVkgPSAtcm90YXRlWTtcbiAgICAgIH1cblxuICAgICAgJHNsaWRlRWxbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQocHJvZ3Jlc3MpKSArIHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZsaXBFZmZlY3Quc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgIGxldCBzaGFkb3dCZWZvcmUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgbGV0IHNoYWRvd0FmdGVyID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoYDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LSR7c3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCd9XCI+PC9kaXY+YCk7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNoYWRvd0FmdGVyID0gJChgPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJHtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAncmlnaHQnIDogJ2JvdHRvbSd9XCI+PC9kaXY+YCk7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0FmdGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApO1xuICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApO1xuICAgICAgfVxuICAgICAgJHNsaWRlRWxcbiAgICAgICAgLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoJHt0eH1weCwgJHt0eX1weCwgMHB4KSByb3RhdGVYKCR7cm90YXRlWH1kZWcpIHJvdGF0ZVkoJHtyb3RhdGVZfWRlZylgKTtcbiAgICB9XG4gIH0sXG4gIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHsgc2xpZGVzLCBhY3RpdmVJbmRleCwgJHdyYXBwZXJFbCB9ID0gc3dpcGVyO1xuICAgIHNsaWRlc1xuICAgICAgLnRyYW5zaXRpb24oZHVyYXRpb24pXG4gICAgICAuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JylcbiAgICAgIC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlICYmIGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICBsZXQgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgaWYgKGV2ZW50VHJpZ2dlcmVkKSByZXR1cm47XG4gICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgLy8gaWYgKCEkKHRoaXMpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzcykpIHJldHVybjtcbiAgICAgICAgZXZlbnRUcmlnZ2VyZWQgPSB0cnVlO1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJFdmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCddO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJFdmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAkd3JhcHBlckVsLnRyaWdnZXIodHJpZ2dlckV2ZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn07XG5cbnZhciBFZmZlY3RGbGlwID0ge1xuICBuYW1lOiAnZWZmZWN0LWZsaXAnLFxuICBwYXJhbXM6IHtcbiAgICBmbGlwRWZmZWN0OiB7XG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICBsaW1pdFJvdGF0aW9uOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIFV0aWxzLmV4dGVuZChzd2lwZXIsIHtcbiAgICAgIGZsaXBFZmZlY3Q6IHtcbiAgICAgICAgc2V0VHJhbnNsYXRlOiBGbGlwLnNldFRyYW5zbGF0ZS5iaW5kKHN3aXBlciksXG4gICAgICAgIHNldFRyYW5zaXRpb246IEZsaXAuc2V0VHJhbnNpdGlvbi5iaW5kKHN3aXBlciksXG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxuICBvbjoge1xuICAgIGJlZm9yZUluaXQoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmxpcCcpIHJldHVybjtcbiAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWZsaXBgKTtcbiAgICAgIHN3aXBlci5jbGFzc05hbWVzLnB1c2goYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfTNkYCk7XG4gICAgICBjb25zdCBvdmVyd3JpdGVQYXJhbXMgPSB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgICAgdmlydHVhbFRyYW5zbGF0ZTogdHJ1ZSxcbiAgICAgIH07XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zKTtcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIub3JpZ2luYWxQYXJhbXMsIG92ZXJ3cml0ZVBhcmFtcyk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnZmxpcCcpIHJldHVybjtcbiAgICAgIHN3aXBlci5mbGlwRWZmZWN0LnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2ZsaXAnKSByZXR1cm47XG4gICAgICBzd2lwZXIuZmxpcEVmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgQ292ZXJmbG93ID0ge1xuICBzZXRUcmFuc2xhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICB3aWR0aDogc3dpcGVyV2lkdGgsIGhlaWdodDogc3dpcGVySGVpZ2h0LCBzbGlkZXMsICR3cmFwcGVyRWwsIHNsaWRlc1NpemVzR3JpZCxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY292ZXJmbG93RWZmZWN0O1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzd2lwZXIudHJhbnNsYXRlO1xuICAgIGNvbnN0IGNlbnRlciA9IGlzSG9yaXpvbnRhbCA/IC10cmFuc2Zvcm0gKyAoc3dpcGVyV2lkdGggLyAyKSA6IC10cmFuc2Zvcm0gKyAoc3dpcGVySGVpZ2h0IC8gMik7XG4gICAgY29uc3Qgcm90YXRlID0gaXNIb3Jpem9udGFsID8gcGFyYW1zLnJvdGF0ZSA6IC1wYXJhbXMucm90YXRlO1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHBhcmFtcy5kZXB0aDtcbiAgICAvLyBFYWNoIHNsaWRlIG9mZnNldCBmcm9tIGNlbnRlclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBzbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0ICRzbGlkZUVsID0gc2xpZGVzLmVxKGkpO1xuICAgICAgY29uc3Qgc2xpZGVTaXplID0gc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgICAgY29uc3Qgc2xpZGVPZmZzZXQgPSAkc2xpZGVFbFswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIGNvbnN0IG9mZnNldE11bHRpcGxpZXIgPSAoKGNlbnRlciAtIHNsaWRlT2Zmc2V0IC0gKHNsaWRlU2l6ZSAvIDIpKSAvIHNsaWRlU2l6ZSkgKiBwYXJhbXMubW9kaWZpZXI7XG5cbiAgICAgIGxldCByb3RhdGVZID0gaXNIb3Jpem9udGFsID8gcm90YXRlICogb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICBsZXQgcm90YXRlWCA9IGlzSG9yaXpvbnRhbCA/IDAgOiByb3RhdGUgKiBvZmZzZXRNdWx0aXBsaWVyO1xuICAgICAgLy8gdmFyIHJvdGF0ZVogPSAwXG4gICAgICBsZXQgdHJhbnNsYXRlWiA9IC10cmFuc2xhdGUgKiBNYXRoLmFicyhvZmZzZXRNdWx0aXBsaWVyKTtcblxuICAgICAgbGV0IHRyYW5zbGF0ZVkgPSBpc0hvcml6b250YWwgPyAwIDogcGFyYW1zLnN0cmV0Y2ggKiAob2Zmc2V0TXVsdGlwbGllcik7XG4gICAgICBsZXQgdHJhbnNsYXRlWCA9IGlzSG9yaXpvbnRhbCA/IHBhcmFtcy5zdHJldGNoICogKG9mZnNldE11bHRpcGxpZXIpIDogMDtcblxuICAgICAgLy8gRml4IGZvciB1bHRyYSBzbWFsbCB2YWx1ZXNcbiAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVYKSA8IDAuMDAxKSB0cmFuc2xhdGVYID0gMDtcbiAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVZKSA8IDAuMDAxKSB0cmFuc2xhdGVZID0gMDtcbiAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVaKSA8IDAuMDAxKSB0cmFuc2xhdGVaID0gMDtcbiAgICAgIGlmIChNYXRoLmFicyhyb3RhdGVZKSA8IDAuMDAxKSByb3RhdGVZID0gMDtcbiAgICAgIGlmIChNYXRoLmFicyhyb3RhdGVYKSA8IDAuMDAxKSByb3RhdGVYID0gMDtcblxuICAgICAgY29uc3Qgc2xpZGVUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGVYfXB4LCR7dHJhbnNsYXRlWX1weCwke3RyYW5zbGF0ZVp9cHgpICByb3RhdGVYKCR7cm90YXRlWH1kZWcpIHJvdGF0ZVkoJHtyb3RhdGVZfWRlZylgO1xuXG4gICAgICAkc2xpZGVFbC50cmFuc2Zvcm0oc2xpZGVUcmFuc2Zvcm0pO1xuICAgICAgJHNsaWRlRWxbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQob2Zmc2V0TXVsdGlwbGllcikpICsgMTtcbiAgICAgIGlmIChwYXJhbXMuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgIGxldCAkc2hhZG93QmVmb3JlRWwgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgbGV0ICRzaGFkb3dBZnRlckVsID0gaXNIb3Jpem9udGFsID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuICAgICAgICBpZiAoJHNoYWRvd0JlZm9yZUVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICRzaGFkb3dCZWZvcmVFbCA9ICQoYDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LSR7aXNIb3Jpem9udGFsID8gJ2xlZnQnIDogJ3RvcCd9XCI+PC9kaXY+YCk7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKCRzaGFkb3dCZWZvcmVFbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRzaGFkb3dBZnRlckVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICRzaGFkb3dBZnRlckVsID0gJChgPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJHtpc0hvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbSd9XCI+PC9kaXY+YCk7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKCRzaGFkb3dBZnRlckVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJHNoYWRvd0JlZm9yZUVsLmxlbmd0aCkgJHNoYWRvd0JlZm9yZUVsWzBdLnN0eWxlLm9wYWNpdHkgPSBvZmZzZXRNdWx0aXBsaWVyID4gMCA/IG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgICBpZiAoJHNoYWRvd0FmdGVyRWwubGVuZ3RoKSAkc2hhZG93QWZ0ZXJFbFswXS5zdHlsZS5vcGFjaXR5ID0gKC1vZmZzZXRNdWx0aXBsaWVyKSA+IDAgPyAtb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGNvcnJlY3QgcGVyc3BlY3RpdmUgZm9yIElFMTBcbiAgICBpZiAoU3VwcG9ydC5wb2ludGVyRXZlbnRzIHx8IFN1cHBvcnQucHJlZml4ZWRQb2ludGVyRXZlbnRzKSB7XG4gICAgICBjb25zdCB3cyA9ICR3cmFwcGVyRWxbMF0uc3R5bGU7XG4gICAgICB3cy5wZXJzcGVjdGl2ZU9yaWdpbiA9IGAke2NlbnRlcn1weCA1MCVgO1xuICAgIH1cbiAgfSxcbiAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbikge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLnNsaWRlc1xuICAgICAgLnRyYW5zaXRpb24oZHVyYXRpb24pXG4gICAgICAuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JylcbiAgICAgIC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfSxcbn07XG5cbnZhciBFZmZlY3RDb3ZlcmZsb3cgPSB7XG4gIG5hbWU6ICdlZmZlY3QtY292ZXJmbG93JyxcbiAgcGFyYW1zOiB7XG4gICAgY292ZXJmbG93RWZmZWN0OiB7XG4gICAgICByb3RhdGU6IDUwLFxuICAgICAgc3RyZXRjaDogMCxcbiAgICAgIGRlcHRoOiAxMDAsXG4gICAgICBtb2RpZmllcjogMSxcbiAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBjcmVhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBVdGlscy5leHRlbmQoc3dpcGVyLCB7XG4gICAgICBjb3ZlcmZsb3dFZmZlY3Q6IHtcbiAgICAgICAgc2V0VHJhbnNsYXRlOiBDb3ZlcmZsb3cuc2V0VHJhbnNsYXRlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgc2V0VHJhbnNpdGlvbjogQ292ZXJmbG93LnNldFRyYW5zaXRpb24uYmluZChzd2lwZXIpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBiZWZvcmVJbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2NvdmVyZmxvdycpIHJldHVybjtcblxuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Y292ZXJmbG93YCk7XG4gICAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc30zZGApO1xuXG4gICAgICBzd2lwZXIucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gJ2NvdmVyZmxvdycpIHJldHVybjtcbiAgICAgIHN3aXBlci5jb3ZlcmZsb3dFZmZlY3Quc2V0VHJhbnNsYXRlKCk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSAnY292ZXJmbG93JykgcmV0dXJuO1xuICAgICAgc3dpcGVyLmNvdmVyZmxvd0VmZmVjdC5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgVGh1bWJzID0ge1xuICBpbml0KCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgeyB0aHVtYnM6IHRodW1ic1BhcmFtcyB9ID0gc3dpcGVyLnBhcmFtcztcbiAgICBjb25zdCBTd2lwZXJDbGFzcyA9IHN3aXBlci5jb25zdHJ1Y3RvcjtcbiAgICBpZiAodGh1bWJzUGFyYW1zLnN3aXBlciBpbnN0YW5jZW9mIFN3aXBlckNsYXNzKSB7XG4gICAgICBzd2lwZXIudGh1bWJzLnN3aXBlciA9IHRodW1ic1BhcmFtcy5zd2lwZXI7XG4gICAgICBVdGlscy5leHRlbmQoc3dpcGVyLnRodW1icy5zd2lwZXIub3JpZ2luYWxQYXJhbXMsIHtcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIFV0aWxzLmV4dGVuZChzd2lwZXIudGh1bWJzLnN3aXBlci5wYXJhbXMsIHtcbiAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFV0aWxzLmlzT2JqZWN0KHRodW1ic1BhcmFtcy5zd2lwZXIpKSB7XG4gICAgICBzd2lwZXIudGh1bWJzLnN3aXBlciA9IG5ldyBTd2lwZXJDbGFzcyhVdGlscy5leHRlbmQoe30sIHRodW1ic1BhcmFtcy5zd2lwZXIsIHtcbiAgICAgICAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcbiAgICAgIH0pKTtcbiAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuICAgIHN3aXBlci50aHVtYnMuc3dpcGVyLiRlbC5hZGRDbGFzcyhzd2lwZXIucGFyYW1zLnRodW1icy50aHVtYnNDb250YWluZXJDbGFzcyk7XG4gICAgc3dpcGVyLnRodW1icy5zd2lwZXIub24oJ3RhcCcsIHN3aXBlci50aHVtYnMub25UaHVtYkNsaWNrKTtcbiAgfSxcbiAgb25UaHVtYkNsaWNrKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgaWYgKCF0aHVtYnNTd2lwZXIpIHJldHVybjtcbiAgICBjb25zdCBjbGlja2VkSW5kZXggPSB0aHVtYnNTd2lwZXIuY2xpY2tlZEluZGV4O1xuICAgIGNvbnN0IGNsaWNrZWRTbGlkZSA9IHRodW1ic1N3aXBlci5jbGlja2VkU2xpZGU7XG4gICAgaWYgKGNsaWNrZWRTbGlkZSAmJiAkKGNsaWNrZWRTbGlkZSkuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy50aHVtYnMuc2xpZGVUaHVtYkFjdGl2ZUNsYXNzKSkgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgY2xpY2tlZEluZGV4ID09PSAndW5kZWZpbmVkJyB8fCBjbGlja2VkSW5kZXggPT09IG51bGwpIHJldHVybjtcbiAgICBsZXQgc2xpZGVUb0luZGV4O1xuICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHNsaWRlVG9JbmRleCA9IHBhcnNlSW50KCQodGh1bWJzU3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVRvSW5kZXggPSBjbGlja2VkSW5kZXg7XG4gICAgfVxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIGxldCBjdXJyZW50SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlcy5lcShjdXJyZW50SW5kZXgpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IHN3aXBlci5zbGlkZXMuZXEoY3VycmVudEluZGV4KS5wcmV2QWxsKGBbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3NsaWRlVG9JbmRleH1cIl1gKS5lcSgwKS5pbmRleCgpO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gc3dpcGVyLnNsaWRlcy5lcShjdXJyZW50SW5kZXgpLm5leHRBbGwoYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7c2xpZGVUb0luZGV4fVwiXWApLmVxKDApLmluZGV4KCk7XG4gICAgICBpZiAodHlwZW9mIHByZXZJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHNsaWRlVG9JbmRleCA9IG5leHRJbmRleDtcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBuZXh0SW5kZXggPT09ICd1bmRlZmluZWQnKSBzbGlkZVRvSW5kZXggPSBwcmV2SW5kZXg7XG4gICAgICBlbHNlIGlmIChuZXh0SW5kZXggLSBjdXJyZW50SW5kZXggPCBjdXJyZW50SW5kZXggLSBwcmV2SW5kZXgpIHNsaWRlVG9JbmRleCA9IG5leHRJbmRleDtcbiAgICAgIGVsc2Ugc2xpZGVUb0luZGV4ID0gcHJldkluZGV4O1xuICAgIH1cbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICB9LFxuICB1cGRhdGUoaW5pdGlhbCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgaWYgKCF0aHVtYnNTd2lwZXIpIHJldHVybjtcblxuICAgIGNvbnN0IHNsaWRlc1BlclZpZXcgPSB0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJ1xuICAgICAgPyB0aHVtYnNTd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKVxuICAgICAgOiB0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXc7XG5cbiAgICBpZiAoc3dpcGVyLnJlYWxJbmRleCAhPT0gdGh1bWJzU3dpcGVyLnJlYWxJbmRleCkge1xuICAgICAgbGV0IGN1cnJlbnRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgIGxldCBuZXdUaHVtYnNJbmRleDtcbiAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgaWYgKHRodW1ic1N3aXBlci5zbGlkZXMuZXEoY3VycmVudFRodW1ic0luZGV4KS5oYXNDbGFzcyh0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgdGh1bWJzU3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICB0aHVtYnNTd2lwZXIuX2NsaWVudExlZnQgPSB0aHVtYnNTd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICAgICAgICAgIGN1cnJlbnRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5kIGFjdHVhbCB0aHVtYnMgaW5kZXggdG8gc2xpZGUgdG9cbiAgICAgICAgY29uc3QgcHJldlRodW1ic0luZGV4ID0gdGh1bWJzU3dpcGVyLnNsaWRlcy5lcShjdXJyZW50VGh1bWJzSW5kZXgpLnByZXZBbGwoYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7c3dpcGVyLnJlYWxJbmRleH1cIl1gKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICBjb25zdCBuZXh0VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRUaHVtYnNJbmRleCkubmV4dEFsbChgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzd2lwZXIucmVhbEluZGV4fVwiXWApLmVxKDApLmluZGV4KCk7XG4gICAgICAgIGlmICh0eXBlb2YgcHJldlRodW1ic0luZGV4ID09PSAndW5kZWZpbmVkJykgbmV3VGh1bWJzSW5kZXggPSBuZXh0VGh1bWJzSW5kZXg7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBuZXh0VGh1bWJzSW5kZXggPT09ICd1bmRlZmluZWQnKSBuZXdUaHVtYnNJbmRleCA9IHByZXZUaHVtYnNJbmRleDtcbiAgICAgICAgZWxzZSBpZiAobmV4dFRodW1ic0luZGV4IC0gY3VycmVudFRodW1ic0luZGV4ID09PSBjdXJyZW50VGh1bWJzSW5kZXggLSBwcmV2VGh1bWJzSW5kZXgpIG5ld1RodW1ic0luZGV4ID0gY3VycmVudFRodW1ic0luZGV4O1xuICAgICAgICBlbHNlIGlmIChuZXh0VGh1bWJzSW5kZXggLSBjdXJyZW50VGh1bWJzSW5kZXggPCBjdXJyZW50VGh1bWJzSW5kZXggLSBwcmV2VGh1bWJzSW5kZXgpIG5ld1RodW1ic0luZGV4ID0gbmV4dFRodW1ic0luZGV4O1xuICAgICAgICBlbHNlIG5ld1RodW1ic0luZGV4ID0gcHJldlRodW1ic0luZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VGh1bWJzSW5kZXggPSBzd2lwZXIucmVhbEluZGV4O1xuICAgICAgfVxuICAgICAgaWYgKHRodW1ic1N3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyAmJiB0aHVtYnNTd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMuaW5kZXhPZihuZXdUaHVtYnNJbmRleCkgPCAwKSB7XG4gICAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgaWYgKG5ld1RodW1ic0luZGV4ID4gY3VycmVudFRodW1ic0luZGV4KSB7XG4gICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4IC0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgKyAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4ICsgTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuZXdUaHVtYnNJbmRleCA+IGN1cnJlbnRUaHVtYnNJbmRleCkge1xuICAgICAgICAgIG5ld1RodW1ic0luZGV4ID0gbmV3VGh1bWJzSW5kZXggLSBzbGlkZXNQZXJWaWV3ICsgMTtcbiAgICAgICAgfVxuICAgICAgICB0aHVtYnNTd2lwZXIuc2xpZGVUbyhuZXdUaHVtYnNJbmRleCwgaW5pdGlhbCA/IDAgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFjdGl2YXRlIHRodW1ic1xuICAgIGxldCB0aHVtYnNUb0FjdGl2YXRlID0gMTtcbiAgICBjb25zdCB0aHVtYkFjdGl2ZUNsYXNzID0gc3dpcGVyLnBhcmFtcy50aHVtYnMuc2xpZGVUaHVtYkFjdGl2ZUNsYXNzO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHRodW1ic1RvQWN0aXZhdGUgPSBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgfVxuXG4gICAgdGh1bWJzU3dpcGVyLnNsaWRlcy5yZW1vdmVDbGFzcyh0aHVtYkFjdGl2ZUNsYXNzKTtcbiAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wIHx8IHRodW1ic1N3aXBlci5wYXJhbXMudmlydHVhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aHVtYnNUb0FjdGl2YXRlOyBpICs9IDEpIHtcbiAgICAgICAgdGh1bWJzU3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7c3dpcGVyLnJlYWxJbmRleCArIGl9XCJdYCkuYWRkQ2xhc3ModGh1bWJBY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGh1bWJzVG9BY3RpdmF0ZTsgaSArPSAxKSB7XG4gICAgICAgIHRodW1ic1N3aXBlci5zbGlkZXMuZXEoc3dpcGVyLnJlYWxJbmRleCArIGkpLmFkZENsYXNzKHRodW1iQWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG52YXIgVGh1bWJzJDEgPSB7XG4gIG5hbWU6ICd0aHVtYnMnLFxuICBwYXJhbXM6IHtcbiAgICB0aHVtYnM6IHtcbiAgICAgIHN3aXBlcjogbnVsbCxcbiAgICAgIHNsaWRlVGh1bWJBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS10aHVtYi1hY3RpdmUnLFxuICAgICAgdGh1bWJzQ29udGFpbmVyQ2xhc3M6ICdzd2lwZXItY29udGFpbmVyLXRodW1icycsXG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgVXRpbHMuZXh0ZW5kKHN3aXBlciwge1xuICAgICAgdGh1bWJzOiB7XG4gICAgICAgIHN3aXBlcjogbnVsbCxcbiAgICAgICAgaW5pdDogVGh1bWJzLmluaXQuYmluZChzd2lwZXIpLFxuICAgICAgICB1cGRhdGU6IFRodW1icy51cGRhdGUuYmluZChzd2lwZXIpLFxuICAgICAgICBvblRodW1iQ2xpY2s6IFRodW1icy5vblRodW1iQ2xpY2suYmluZChzd2lwZXIpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBiZWZvcmVJbml0KCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGNvbnN0IHsgdGh1bWJzIH0gPSBzd2lwZXIucGFyYW1zO1xuICAgICAgaWYgKCF0aHVtYnMgfHwgIXRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICAgIHN3aXBlci50aHVtYnMuaW5pdCgpO1xuICAgICAgc3dpcGVyLnRodW1icy51cGRhdGUodHJ1ZSk7XG4gICAgfSxcbiAgICBzbGlkZUNoYW5nZSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBpZiAoIXN3aXBlci50aHVtYnMuc3dpcGVyKSByZXR1cm47XG4gICAgICBzd2lwZXIudGh1bWJzLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgdXBkYXRlKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKCk7XG4gICAgfSxcbiAgICByZXNpemUoKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgaWYgKCFzd2lwZXIudGh1bWJzLnN3aXBlcikgcmV0dXJuO1xuICAgICAgc3dpcGVyLnRodW1icy51cGRhdGUoKTtcbiAgICB9LFxuICAgIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICAgIGlmICghc3dpcGVyLnRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICAgIHN3aXBlci50aHVtYnMudXBkYXRlKCk7XG4gICAgfSxcbiAgICBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgICAgY29uc3QgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgICBpZiAoIXRodW1ic1N3aXBlcikgcmV0dXJuO1xuICAgICAgdGh1bWJzU3dpcGVyLnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgICBjb25zdCB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICAgIGlmICghdGh1bWJzU3dpcGVyKSByZXR1cm47XG4gICAgICBpZiAoc3dpcGVyLnRodW1icy5zd2lwZXJDcmVhdGVkICYmIHRodW1ic1N3aXBlcikge1xuICAgICAgICB0aHVtYnNTd2lwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuXG4vLyBTd2lwZXIgQ2xhc3NcblxuY29uc3QgY29tcG9uZW50cyA9IFtcbiAgRGV2aWNlJDEsXG4gIFN1cHBvcnQkMSxcbiAgQnJvd3NlciQxLFxuICBSZXNpemUsXG4gIE9ic2VydmVyJDEsXG4gIFZpcnR1YWwkMSxcbiAgS2V5Ym9hcmQkMSxcbiAgTW91c2V3aGVlbCQxLFxuICBOYXZpZ2F0aW9uJDEsXG4gIFBhZ2luYXRpb24kMSxcbiAgU2Nyb2xsYmFyJDEsXG4gIFBhcmFsbGF4JDEsXG4gIFpvb20kMSxcbiAgTGF6eSQxLFxuICBDb250cm9sbGVyJDEsXG4gIEExMXksXG4gIEhpc3RvcnkkMSxcbiAgSGFzaE5hdmlnYXRpb24kMSxcbiAgQXV0b3BsYXkkMSxcbiAgRWZmZWN0RmFkZSxcbiAgRWZmZWN0Q3ViZSxcbiAgRWZmZWN0RmxpcCxcbiAgRWZmZWN0Q292ZXJmbG93LFxuICBUaHVtYnMkMVxuXTtcblxuaWYgKHR5cGVvZiBTd2lwZXIudXNlID09PSAndW5kZWZpbmVkJykge1xuICBTd2lwZXIudXNlID0gU3dpcGVyLkNsYXNzLnVzZTtcbiAgU3dpcGVyLmluc3RhbGxNb2R1bGUgPSBTd2lwZXIuQ2xhc3MuaW5zdGFsbE1vZHVsZTtcbn1cblxuU3dpcGVyLnVzZShjb21wb25lbnRzKTtcblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==