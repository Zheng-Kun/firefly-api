webpackHotUpdate("common",{

/***/ "./src/page/home/home.js":
/*!*******************************!*\
  !*** ./src/page/home/home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_component_fe_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/fe-config */ "./src/common/component/fe-config.js");
/* harmony import */ var _common_component_ffv_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/ffv-header/header */ "./src/common/component/ffv-header/header.js");
/* harmony import */ var _common_component_ffv_alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/component/ffv-alert/alert */ "./src/common/component/ffv-alert/alert.js");
/* harmony import */ var _big_list_big_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./big-list/big-list */ "./src/page/home/big-list/big-list.js");
/* harmony import */ var _common_component_ffv_slide_show_ffv_slide_show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/component/ffv-slide-show/ffv-slide-show */ "./src/common/component/ffv-slide-show/ffv-slide-show.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 入口文件d
// require("expose-loader?$!jquery");







var Home =
/*#__PURE__*/
function () {
  function Home() {
    _classCallCheck(this, Home);

    this.$headerContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#header-box");
    this.$appContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#app-box");
    this.$footerContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#footer-box");
    this.$swiperContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#rotation-box");
    this.swiperData = [{
      href: "http://www.baidu.com",
      backgroundImg: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348776.jpg?max_age=2592000"
    }, {
      href: "",
      backgroundImg: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348778.jpg?max_age=2592000" //叮咛，罗大佑

    }, {
      href: "",
      backgroundImg: "https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1348060.jpg?max_age=2592000" // Feedback

    }, {
      href: "",
      backgroundImg: "http://p1.music.126.net/vgq5QsWdkqGWJCVzyWZ0sw==/109951164122932289.jpg" // 水果姐新单

    }, {
      href: "",
      backgroundImg: "http://p1.music.126.net/lBgqi8iSwqEvojdzn9djgA==/109951164122936281.jpg" // 情深深雨蒙蒙

    }]; // 环境变量配置

    new _common_component_fe_config__WEBPACK_IMPORTED_MODULE_1__["default"]({
      // env: "pro",
      env: 'dev'
    });
    console.log("render home page!!!");

    this._render();
  }

  _createClass(Home, [{
    key: "_render",
    value: function _render() {
      /**
       * 渲染Header
       */
      var header = new _common_component_ffv_header_header__WEBPACK_IMPORTED_MODULE_2__["default"]({
        $container: this.$headerContainer
      });
      new _common_component_ffv_slide_show_ffv_slide_show__WEBPACK_IMPORTED_MODULE_5__["default"]({
        $container: this.$swiperContainer,
        data: this.swiperData
      });
      /**
       * 渲染视频列表
       */

      new _big_list_big_list__WEBPACK_IMPORTED_MODULE_4__["default"](); // new Alert();
    }
  }]);

  return Home;
}();


new Home();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9ob21lL2hvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsIiRoZWFkZXJDb250YWluZXIiLCIkIiwiJGFwcENvbnRhaW5lciIsIiRmb290ZXJDb250YWluZXIiLCIkc3dpcGVyQ29udGFpbmVyIiwic3dpcGVyRGF0YSIsImhyZWYiLCJiYWNrZ3JvdW5kSW1nIiwiQ29uZmlnIiwiZW52IiwiY29uc29sZSIsImxvZyIsIl9yZW5kZXIiLCJoZWFkZXIiLCJIZWFkZXIiLCIkY29udGFpbmVyIiwiU2xpZGVTaG93IiwiZGF0YSIsIkJpZ0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQkEsSTs7O0FBQ25CLGtCQUFhO0FBQUE7O0FBQ1gsU0FBS0MsZ0JBQUwsR0FBd0JDLDZDQUFDLENBQUMsYUFBRCxDQUF6QjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJELDZDQUFDLENBQUMsVUFBRCxDQUF0QjtBQUNBLFNBQUtFLGdCQUFMLEdBQXdCRiw2Q0FBQyxDQUFDLGFBQUQsQ0FBekI7QUFDQSxTQUFLRyxnQkFBTCxHQUF3QkgsNkNBQUMsQ0FBQyxlQUFELENBQXpCO0FBQ0EsU0FBS0ksVUFBTCxHQUFrQixDQUFDO0FBQ2pCQyxVQUFJLEVBQUMsc0JBRFk7QUFFakJDLG1CQUFhLEVBQUU7QUFGRSxLQUFELEVBR2hCO0FBQ0FELFVBQUksRUFBRSxFQUROO0FBRUFDLG1CQUFhLEVBQUUsZ0ZBRmYsQ0FFZ0c7O0FBRmhHLEtBSGdCLEVBTWY7QUFDREQsVUFBSSxFQUFFLEVBREw7QUFFREMsbUJBQWEsRUFBRSxnRkFGZCxDQUUrRjs7QUFGL0YsS0FOZSxFQVNmO0FBQ0RELFVBQUksRUFBQyxFQURKO0FBRURDLG1CQUFhLEVBQUUseUVBRmQsQ0FFd0Y7O0FBRnhGLEtBVGUsRUFZZjtBQUNERCxVQUFJLEVBQUMsRUFESjtBQUVEQyxtQkFBYSxFQUFFLHlFQUZkLENBRXdGOztBQUZ4RixLQVplLENBQWxCLENBTFcsQ0FzQlg7O0FBQ0EsUUFBSUMsbUVBQUosQ0FBVztBQUNUO0FBQ0FDLFNBQUcsRUFBRTtBQUZJLEtBQVg7QUFLQUMsV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7O0FBQ0EsU0FBS0MsT0FBTDtBQUNEOzs7OzhCQUVRO0FBQ1A7OztBQUdBLFVBQUlDLE1BQU0sR0FBRyxJQUFJQywyRUFBSixDQUFXO0FBQ3RCQyxrQkFBVSxFQUFFLEtBQUtmO0FBREssT0FBWCxDQUFiO0FBSUEsVUFBSWdCLHVGQUFKLENBQWM7QUFDWkQsa0JBQVUsRUFBRSxLQUFLWCxnQkFETDtBQUVaYSxZQUFJLEVBQUUsS0FBS1o7QUFGQyxPQUFkO0FBS0E7Ozs7QUFHQSxVQUFJYSwwREFBSixHQWhCTyxDQWtCUDtBQUdEOzs7Ozs7O0FBR0gsSUFBSW5CLElBQUosRyIsImZpbGUiOiJjb21tb24uNzIxNDc3ZmQ3MTFlYTljZDE1NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWFpeWPo+aWh+S7tmRcclxuLy8gcmVxdWlyZShcImV4cG9zZS1sb2FkZXI/JCFqcXVlcnlcIik7XHJcblxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvZmUtY29uZmlnXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9mZnYtaGVhZGVyL2hlYWRlclwiXHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9mZnYtYWxlcnQvYWxlcnRcIlxyXG5pbXBvcnQgQmlnTGlzdCBmcm9tIFwiLi9iaWctbGlzdC9iaWctbGlzdFwiXHJcbmltcG9ydCBTbGlkZVNob3cgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvZmZ2LXNsaWRlLXNob3cvZmZ2LXNsaWRlLXNob3dcIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21le1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLiRoZWFkZXJDb250YWluZXIgPSAkKFwiI2hlYWRlci1ib3hcIik7XHJcbiAgICB0aGlzLiRhcHBDb250YWluZXIgPSAkKFwiI2FwcC1ib3hcIik7XHJcbiAgICB0aGlzLiRmb290ZXJDb250YWluZXIgPSAkKFwiI2Zvb3Rlci1ib3hcIik7XHJcbiAgICB0aGlzLiRzd2lwZXJDb250YWluZXIgPSAkKFwiI3JvdGF0aW9uLWJveFwiKTtcclxuICAgIHRoaXMuc3dpcGVyRGF0YSA9IFt7XHJcbiAgICAgIGhyZWY6XCJodHRwOi8vd3d3LmJhaWR1LmNvbVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1nOiBcImh0dHBzOi8veS5ndGltZy5jbi9tdXNpYy9jb21tb24vdXBsb2FkL01VU0lDX0ZPQ1VTLzEzNDg3NzYuanBnP21heF9hZ2U9MjU5MjAwMFwiXHJcbiAgICB9LHtcclxuICAgICAgaHJlZjogXCJcIixcclxuICAgICAgYmFja2dyb3VuZEltZzogXCJodHRwczovL3kuZ3RpbWcuY24vbXVzaWMvY29tbW9uL3VwbG9hZC9NVVNJQ19GT0NVUy8xMzQ4Nzc4LmpwZz9tYXhfYWdlPTI1OTIwMDBcIiAvL+WPruWSm++8jOe9l+Wkp+S9kVxyXG4gICAgfSwge1xyXG4gICAgICBocmVmOiBcIlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1nOiBcImh0dHBzOi8veS5ndGltZy5jbi9tdXNpYy9jb21tb24vdXBsb2FkL01VU0lDX0ZPQ1VTLzEzNDgwNjAuanBnP21heF9hZ2U9MjU5MjAwMFwiIC8vIEZlZWRiYWNrXHJcbiAgICB9LCB7XHJcbiAgICAgIGhyZWY6XCJcIixcclxuICAgICAgYmFja2dyb3VuZEltZzogXCJodHRwOi8vcDEubXVzaWMuMTI2Lm5ldC92Z3E1UXNXZGtxR1dKQ1Z6eVdaMHN3PT0vMTA5OTUxMTY0MTIyOTMyMjg5LmpwZ1wiIC8vIOawtOaenOWnkOaWsOWNlVxyXG4gICAgfSwge1xyXG4gICAgICBocmVmOlwiXCIsXHJcbiAgICAgIGJhY2tncm91bmRJbWc6IFwiaHR0cDovL3AxLm11c2ljLjEyNi5uZXQvbEJncWk4aVN3cUV2b2pkem45ZGpnQT09LzEwOTk1MTE2NDEyMjkzNjI4MS5qcGdcIiAvLyDmg4Xmt7Hmt7Hpm6jokpnokplcclxuICAgIH1dXHJcblxyXG4gICAgLy8g546v5aKD5Y+Y6YeP6YWN572uXHJcbiAgICBuZXcgQ29uZmlnKHtcclxuICAgICAgLy8gZW52OiBcInByb1wiLFxyXG4gICAgICBlbnY6ICdkZXYnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInJlbmRlciBob21lIHBhZ2UhISFcIilcclxuICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgX3JlbmRlcigpe1xyXG4gICAgLyoqXHJcbiAgICAgKiDmuLLmn5NIZWFkZXJcclxuICAgICAqL1xyXG4gICAgbGV0IGhlYWRlciA9IG5ldyBIZWFkZXIoe1xyXG4gICAgICAkY29udGFpbmVyOiB0aGlzLiRoZWFkZXJDb250YWluZXIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgU2xpZGVTaG93KHtcclxuICAgICAgJGNvbnRhaW5lcjogdGhpcy4kc3dpcGVyQ29udGFpbmVyLFxyXG4gICAgICBkYXRhOiB0aGlzLnN3aXBlckRhdGEsXHJcbiAgICB9KVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riy5p+T6KeG6aKR5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIG5ldyBCaWdMaXN0KCk7XHJcblxyXG4gICAgLy8gbmV3IEFsZXJ0KCk7XHJcblxyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5uZXcgSG9tZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=