
import axios from 'axios'
import { List, InputItem, Toast, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import React,{useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import Config from '../../common/component/fe-config'
import './hqqfrot.less'
if (module.hot) { module.hot.accept() } // 热更新

// 环境变量配置
new Config({
  env: "pro",
  // env: 'dev'
});

export default function HqqFront () {
  const [userMsg, setUserMsg] = useState({
    name: '',
    tell: '',
    company: '',
    office: '',
    qq: '',
    weixin: '',
    email: '',
    other: ''
  });
  const [formDesc, setFormDesc] = useState("")
  const [formArgument, setFormArgument] = useState(
    [
      // [
      //   'name',
      //   {
      //     cnName: "姓名",
      //     type: 1,
      //     inputType: 'text',
      //     icon: "user",
      //     error: false
      //   }
      // ]
    ]
  )
  const [isDisabled, setIsDisable] = useState(true)
  useEffect(() => {
    axios.post(window.config.host + "/api/hqqRouter/getFormConf")
    .then(resp => {
      if(resp.data.code == 200){
        setFormDesc(resp.data.data.formDesc)
        const configArrMap = []
        resp.data.data.formArgument.forEach(item => {
          if(item.type !== -1){
            configArrMap.push([
              item.key,
              Object.assign({},item, {
                error: false
              })
            ])
          }
        })

        setFormArgument(configArrMap)
      } else {
        Toast.fail(resp.data.message, 2)
      }
    }, err => {
      Toast.fail(resp.data.message, 2)
    })
  }, [])

  function handleInputChange(key, value) {
    setUserMsg(Object.assign({}, userMsg, {
      [key]: value.trim()
    }))

    const config = JSON.parse(JSON.stringify(formArgument))
    // console.log(config.findIndex(item => item[0] == key), 'dddddddddddddddddddddd')
    // console.log(config[config.findIndex(item => item[0] == key)][1])
    const emailReg = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
    switch(key){
      case 'tell':
        if(value.trim().length < 11){
          config[config.findIndex(item => item[0] == key)][1].error = true
        } else {
          config[config.findIndex(item => item[0] == key)][1].error = false
        }
        break
      case 'email':
        if (!emailReg.test(value)) {
          config[config.findIndex(item => item[0] == key)][1].error = true
        } else {
          config[config.findIndex(item => item[0] == key)][1].error = false
        }
        break
      default:
        if (value.trim().length == 0 && config[config.findIndex(item => item[0] == key)][1]["type"] == 1) {
          config[config.findIndex(item => item[0] == key)][1].error = true
        } else {
          config[config.findIndex(item => item[0] == key)][1].error = false
        }
    }
    setFormArgument(config)
    setIsDisable(handleButtonStatus(config))
  }

  function handleButtonStatus(config) {
    console.log(userMsg)
    for(let i = 0; i < config.length; i++){
      const item = config[i]
      console.log(item[1].error, item[1].type, userMsg[item[0]].trim().length)
      if(item[1].error == true){
        return true
      }
      if(item[1].type == 1 && userMsg[item[0]].trim().length <= 0){
        return true
      }
    }
    return false
  }

  function onSubmit()  {
    axios.post(window.config.host + "/api/hqqRouter/addMessage", userMsg).then(
      resp => {
        if(resp.data.code == '200'){
          Toast.success("提交成功", 2)
        }
      }
    )
  }
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: formDesc
        }}
      ></div>
      <List>
        {formArgument.map(item => (
          <InputItem
            onChange={(value) => {handleInputChange(item[0], value)}}
            error={item[1].error}
            onErrorClick={_=>{
              Toast.info(item[1].errorInfo, 2, null, false)
            }}
            type={item[1].inputType}
            extra={item[1].type == 1 ? (<span className="require">*</span>) : ""}
          >
            {item[1].cnName}
          </InputItem>
        ))}
      </List> 
      <Button
        type="primary"
        disabled={isDisabled}
        onClick={onSubmit}
      >提交</Button>
    </>
  )
}
ReactDom.render(
  <HqqFront />,
  document.getElementById("body-box")
)