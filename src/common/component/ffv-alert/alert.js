import './alert.less';
import $ from "jquery";

export default class Alert{
  constructor(props){
    Object.assign(this,{
      type: "success", // success error notice
      message: "Hello! this is Firefly video",
      delay: 3000,
    },props)

    this.delay += 1000;

    this._render();
  }

  _render(){
    let $html = `<span id="global-alert" class="${this.type} show">${this.message}</span>`
    $("body").append($html);
    setTimeout(($) => {
      document.getElementById("global-alert").classList.remove("show");
    }, this.delay + 1000);

    setTimeout(($) => {
      document.getElementById("global-alert").parentNode.removeChild(document.getElementById("global-alert"));
    }, this.delay + 2000);
  }


}