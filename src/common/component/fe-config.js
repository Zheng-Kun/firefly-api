export default class Config{
  constructor(props){
    Object.assign(this,{
      env: "dev", // pro
    },props)

    this._init();
  }


  _init(){
    if(this.env == "dev"){
      this.host = "http://localhost:1302"; // 开发环境
    }else{
      this.host = "http://47.112.12.123:1302"; //生产环境
    }

    window.config = this;
  }
}