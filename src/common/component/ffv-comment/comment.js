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
    // this.author = Cookie.get("un");
    this.vid = this._getSearchObj().vid;
    this._render()
  }

  _render(){
    axios.post(window.config.host + '/api/comment/getComment', {
      vid: this.vid
    }).then(resp => {
      this.data = resp.data.data;
      let commentCounts = this.data.length;
      console.log("comment",this.data);
      for(let i = 0; i < this.data.length; i ++){
        this.data[i]["createTime"] = this._parseDate(this.data[i]["createTime"]).fullDateTime;
      }
      let elComment = template({
        data: this.data,
        commentCounts: commentCounts,
      });
      this.$container[0].innerHTML = elComment;
      this._bind();
    })

  }

  _bind(){
    document.querySelector("#comment-box .comment-commit-btn").addEventListener("click", ev => {
      let content = document.querySelector("#comment-box .comment-input").value;
      this.author = Cookie.get("un");
      if (!this.author) {
        new Alert({
          message: "游客无法评论喔，请先登陆",
          type: "error"
        })
        return;
      }
      if (!content) {
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
        if (resp.data.code == 200) {
          new Alert({
            message: "评论成功",
            type: "success"
          })
        }

        let commentItem = templateItem({
          ...resp.data.data
        });

        let elLi = document.createElement("li");
        elLi.classList.add("comment-item");
        elLi.innerHTML = commentItem;
        // let dom = new DOMParser(commentItem, "text/html");

        document.querySelector("#comment-box .comment-list").insertBefore(elLi, document.querySelector("#comment-box .comment-list").children[0]);

        document.querySelector("#comment-box .comment-input").value = "";

        if (document.querySelector("#comment-box .empty-content")){
          document.querySelector("#comment-box .empty-content").style.display = "none";
        }

        let commentCounts =  Number(document.querySelector("#comment-box .comment-counts").innerText) + 1;
        document.querySelector("#comment-box .comment-counts").innerText = commentCounts;

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

  _parseDate(str){

    let dateObj = {}
    dateObj.year = str.substr(0, 4);
    dateObj.month = str.substr(5, 2);
    dateObj.day = str.substr(8, 2);

    dateObj.hour = Number(str.substr(11, 8).split(":")[0]) + 8;
    dateObj.minute = str.substr(11, 8).split(":")[1];
    dateObj.second = str.substr(11, 8).split(":")[2];

    dateObj.fullDate = `${dateObj.year}年${dateObj.month}月${dateObj.day}日`;
    dateObj.fullTime = `${dateObj.hour}:${dateObj.minute}:${dateObj.second}`;

    dateObj.fullDateTime = dateObj.fullDate + " " +dateObj.fullTime;

    return dateObj;


  }

}