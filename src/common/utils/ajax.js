import axios from 'axios'
import { rejects } from 'assert';

window.REQUESTURL = []
const DOMAIN = "http://47.112.12.123:1302"

export const postJson = (url, params = '', config = {}) => {
  return sendRequest(url, 'post', params, config)
}

// http get
export const getJson = (url, params = '', config = {}) => {
  return sendRequest(url, 'get', params, config)
}

function sendRequest (url, type, params = '', config) {
  // 默认配置
  config = Object.assign({
    // 是否请求本地接口（api被不可被设置为本地）
    local: false,
    // 是否需要方式重复操作，重复请求
    once: true,
    // 是否需要序列化
    stringify: true,
    // 是否请求其他域接口
    third: false
  }, config)
  if (
    (url.indexOf('http') !== 0) &&
    (url.indexOf('//') !== 0) &&
    !config.local &&
    !config.third
  ) {
    url = DOMAIN + url
  }
  // set defer
  return new Promise((resolve, reject) => {
    if (window.REQUESTURL[url] && config.once) {
      console.info(`abort currnet request:${url}`)
    } else {
      window.REQUESTURL[url] = true
      axios({
        method: 'type',
        url,
        data: params || null
      }).then(resp => {
        window.REQUESTURL[url] = false
        if(resp.code == 200 && resp.data.code == 200){
          resolve(resp.data);
        }else {
          if(resp.code == 200 && resp.data.code !== 200){
            reject(resp.data)
          }else{
            reject(resp)
          }
        }
      }).catch(err  => {
        window.REQUESTURL[url] = false
        reject(err)
      })
    }
  })
}