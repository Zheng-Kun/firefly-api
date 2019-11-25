console.log( "hqqfront")
import axios from 'axios'
import { List, InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import React,{useState, useEffect} from 'react'
import Config from '../../common/component/fe-config'

// 环境变量配置
new Config({
  env: "pro",
});

export default function HqqFront () {
  return (
    // name: {
    //   type: String,
    //   require: true
    // },
    // tell: {
    //   type: String,
    //   require: true
    // },
    // company: {
    //   type: String,
    // },
    // office: {
    //   type: String,
    // },
    // qq: {
    //   type: String
    // },
    // weChat: {
    //   type: String
    // },
    // email: {
    //   type: String,
    //   // require:
    // },
    // other: {
    //   type: String
    // }
    <List>
      <InputItem>
      </InputItem>
    </List> 
  )
}