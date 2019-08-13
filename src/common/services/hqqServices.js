import {getJson,postJson} from '../utils/ajax'


export default{
  getMessageList() {
    return  postJson('/api/hqqRouter/getHqqMsgList', null)
  },

  addMessage(props) {
    props = Object.assign({
      name: '',
      tell: '',
      company: '',
      office: '',
      qq: '',
      weChat: '',
      email: '',
      other: ''
    }, props)
    return postJson('/api/hqqRouter/addMessage', props)
  },

  deleteMessage(props) {
    props = Object.assign({
      delIdArr: []
    })
    return postJson('/api/hqqRouter/delMsgById', props)
  },

  setFormConfig(props) {
    props = Object.assign({
      formDesc: '',
      fromArgumentArr: [] // [[name, 1], [tell, 0], [company, -1]] // 1: 必填 0：选填 -1： 不展示
    })
    return postJson('/api/hqqRouter/setFormConf', props)
  },

  getFormConfig(props) {
    return postJson('/api/hqqRouter/getFormConf', null)
  }
}
