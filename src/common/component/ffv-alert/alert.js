import './alert.less';

export default class Alert{
  constructor(props){
    Object.assign(this,{
      type: "success", // success error notice
      message: "Hello! this is Firefly video",
      delay: 3000,
    },props)

    this._render();
  }

  _render(){
    $("body").append(`<span id="global-alert" class="${this.type}">${this.message}</span>`);
  }
}