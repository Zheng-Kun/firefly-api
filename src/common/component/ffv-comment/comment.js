import Cookie from "js-cookie";
import Alert from "../ffv-alert/alert";
import axios from "axios"



import template from "./comment.hbs"
import templateItem from "./comment-item.hbs"
import "./comment.less"
export default class Comment{
  constructor(props){
    Object.assign(this, {
      $container: null,
    }, props);
    this.author = Cookie.get("un");
    this.vid = this._getSearchObj().vid;
    this._render()
  }

  _render(){
    if(!this.author){
      new Alert({
        message: "请登陆后再评论",
        type: "error"
      })
    }
    axios.post(window.config.host + '/api/comment/getComment', {
      vid: this.vid
    }).then(resp => {
      this.data = resp.data.data;
      let elComment = template(this.data);
      this.$container[0].innerHTML = elComment;
      this._bind();
    })

  }

  _bind(){
    $("#comment-box comment-commit-btn").on("click", ev => {
      let content = $("#comment-box .comment-input").val();
      if (!this.author){
        new Alert({
          message: "游客无法评论喔，请先登陆",
          type: "error"
        })
        return;
      }
      if(!content){
        new Alert({
          message: "评论内容为空",
          type: "error"
        })
        return;
      }

      axios.post(window.config.host + '/api/comment/setComment', {
        vid: this.vid,
        author: this.author,
        content: content
      }).then(resp => {
        if(resp.data.code == 200){
          new Alert({
            message: "评论成功",
            type: "success"
          })
        }

        let CommentItem = templateItem({...resp.data.data});
        let dom = new DOMParser(commentItem, "text/html");

        document.querySelector("#comment-box .comment-list").insertBefore(dom, document.querySelector("#comment-box .comment-list").children[0]);

      })

      
    })
  }

  _getSearchObj() {
    let searchStr = location.search.substr(1);
    let obj = {};
    let searchArr = searchStr.split("&");
    for (let i = 0; i < searchArr.length; i++) {
      let key = searchArr[i].split("=")[0];
      let value = searchArr[i].split("=")[1];
      obj[key] = value;
    }
    return obj;
  }

}