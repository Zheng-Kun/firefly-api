import React, {Component} from "react"

import {Form, Input, Icon, Radio} from 'antd'
const {TextArea} = Input

export default class FormConfig extends Component {
  constructor() {
    this.state = {
      formDesc: "",
      formArgument: [
        {
          key: 'name',
          cnName: "姓名",
          type: 1,
          icon: "user"
        },
        {
          key: 'tell',
          cnName: "电话",
          type: 1,
          icon: 'phone'
        },
        {
          key: 'company',
          cnName: "公司/单位",
          type: 0,
          icon: 'global'
        },
        {
          key: 'office',
          cnName: '职位',
          type: 0,
          icon: 'solution'
        },
        {
          key: 'qq',
          cnName: 'QQ',
          type: 0,
          icon: 'qq'
        },
        {
          key: 'weixin',
          cnName: '微信',
          type: 0,
          icon: 'wechat'
        },
        {
          key: 'email',
          cnName: '邮箱',
          type: 0,
          icon: mail
        },
        {
          key: 'other',
          cnName: '备注',
          type: 0,
          icon: 'smile'
        }
      ]
    }
  }

  render() {
    const itemConfig = this.state.formArgument.forEach(item => {
      return (
        <Form.Item label={item.cnName}>
          <Input
            prefix={<Icon type={item.icon} style={{ color: 'rgba(0,0,0,.25)'}}/>}
          />
          <Radio.Group defaultValue="1" buttonStyle="solid">
            <Radio.Button value="1">必填</Radio.Button>
            <Radio.Button value="0">可选</Radio.Button>
            <Radio.Button value="-1" title="不会展示在表单中">不可见</Radio.Button>
          </Radio.Group>
        </Form.Item>
      )
    })
    return (
      <Form>
        <Form.Item label="描述">
          <TextArea
            autosize={{minRows: 2, maxRow: 6}}
            placeholder="请输入表单上面的描述文字（支持富文本）"
            value={this.state.formDesc}
          />
        </Form.Item>
      </Form>
    )
  }
}