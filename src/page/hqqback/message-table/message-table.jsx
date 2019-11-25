import React, {Component} from 'react'

import {
  Table,
  Button,
  Icon
} from 'antd'

export default () => {
  const dataSource = [
    {
      name: "zhengkun",
      tell: '123456',
      company: 'test',
      office: 'sdd',
      qq: '112345678',
      weChat: 'weichat',
      email: '1@qq.com',
      createTime: '1234-12-12',
      other: '其他'
    }, {
      name: "zhengkun2",
      tell: '123456',
      company: 'test',
      office: 'sdd',
      qq: '112345678',
      weChat: 'weichat',
      email: '1@qq.com',
      createTime: '1234-12-12',
      other: '其他'
    }
  ]
  const columns = [
    {
      title: "姓名",
      dataIndex: 'name'
    }, {
      title: "电话",
      dataIndex: 'tell'
    }, {
      title: '公司/单位',
      dataIndex: "company"
    }, {
      title: '职位',
      dataIndex: 'office'
    }, {
      title: 'QQ',
      dataIndex: 'qq'
    }, {
      title: '微信',
      dataIndex: 'weChat'
    }, {
      title: '邮箱',
      dataIndex: 'email'
    }, {
      title: '备注',
      dataIndex: 'other'
    }, {
      title: '提交时间',
      dataIndex: 'createTime'
    }, {
      title: '操作',
      dataIndex: ''
    }
  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  }


  return (
    <>
      <div className="table-operate">
        <Button
          type="primary"
          shape="round"
          icon="download"
          size="default"
        >
          下载选中
        </Button>
        <Button
          type="danger"
          shape="round"
          icon="delete"
          size="default"
        >
          删除选中
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      >
      </Table>
    </>
  )
}