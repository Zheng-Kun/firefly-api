import React, {Component,Fragment} from "react"
// import Editor from 'wangeditor'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import {Drawer ,Form, Input, Icon, Radio, Button} from 'antd'
const {TextArea} = Input
console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ))

export default class FormConfig extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      drawerVisible: false,
      formDesc: "<h2>哈哈</h2>",
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
          icon: 'mail'
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

  showDrawer() {
    this.setState({
      drawerVisible: true
    })
  }

  closeDrawer() {
    this.setState({
      drawerVisible: false
    })
  }

  onSubmit() {

  }

  render() {
    const itemConfig = this.state.formArgument.map(item => {
      return (
        <Form.Item label={item.cnName} key={item.key}>
          {/* <Input
            prefix={<Icon type={item.icon} style={{ color: 'rgba(0,0,0,.25)'}}/>}
          /> */}
          <Radio.Group defaultValue={item.type} buttonStyle="solid">
            <Radio.Button value={1}>必填</Radio.Button>
            <Radio.Button value={0}>可选</Radio.Button>
            <Radio.Button value={-1} title="不会展示在表单中">不可见</Radio.Button>
          </Radio.Group>
        </Form.Item>
      )
    })
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    // console.log(itemConfig, this.state.formArgument)
    return (
      <Fragment>
        <Button 
          type="primary" 
          shape="round"
          icon="setting"
          onClick={this.showDrawer.bind(this)}
        >
          Setting
        </Button>
        <Drawer
          title="表单配置"
          width={750}
          onClose={this.onClose}
          visible={this.state.drawerVisible}
        >
          <Form {...formItemLayout}>
            <Form.Item label="描述">
              {/* <TextArea
                autosize={{minRows: 2, maxRows: 6}}
                placeholder="请输入表单上面的描述文字（支持富文本）"
                value={this.state.formDesc}
              /> */}
              <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                config={{
                  toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo' ],
                  // removePlugins: [ 'EasyImage', 'ImageToolbar', 'Image' ]
                  heading: {
                    options: [
                      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                      { model: 'heading1', view: 'h1', title: 'H1', class: 'ck-heading_heading1' },
                      { model: 'heading2', view: 'h2', title: 'H2', class: 'ck-heading_heading2' },
                      { model: 'heading3', view: 'h3', title: 'H3', class: 'ck-heading_heading3' }
                    ]
                  }
                }}
                onInit={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log( 'Editor is ready to use!', editor );
                  console.log(Array.from( editor.ui.componentFactory.names() ));
                } }
                onChange={ ( event, editor ) => {
                  const data = editor.getData();  
                  console.log( { event, editor, data } );
                } }
                onBlur={ editor => {
                  console.log( 'Blur.', editor );
                } }
                onFocus={ editor => {
                  console.log( 'Focus.', editor );
                } }
              />
            </Form.Item>
            {itemConfig}
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
              zIndex: 1,
            }}
          >
            <Button onClick={this.closeDrawer.bind(this)} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onSubmit.bind(this)} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </Fragment>
    )
  }

  componentDidUpdate() {
    
  }
  componentDidMount() {
  }
}