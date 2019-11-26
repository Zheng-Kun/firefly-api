import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import json2csv from 'json2csv'
// import {Parser} from 'json2csv'
import ExportExcel from 'json-to-excel-fs'
import {
  Table,
  Button,
  Icon,
  message
} from 'antd'
import moment from 'moment'
import './message-table.less'

export default function MessageTable() {
  // const dataSource = [
  //   {
  //     name: "zhengkun",
  //     tell: '123456',
  //     company: 'test',
  //     office: 'sdd',
  //     qq: '112345678',
  //     weChat: 'weichat',
  //     email: '1@qq.com',
  //     createTime: '1234-12-12',
  //     other: '其他'
  //   }, {
  //     name: "zhengkun2",
  //     tell: '123456',
  //     company: 'test',
  //     office: 'sdd',
  //     qq: '112345678',
  //     weChat: 'weichat',
  //     email: '1@qq.com',
  //     createTime: '1234-12-12',
  //     other: '其他'
  //   }
  // ]
  const [tableData, setTableData] = useState([])
  const [selectedIds, setSelectedIds] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
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
      dataIndex: 'weixin'
    }, {
      title: '邮箱',
      dataIndex: 'email'
    }, {
      title: '备注',
      dataIndex: 'other'
    }, {
      title: '提交时间',
      dataIndex: 'createTime'
    }
  ]


  function deleteSelected() {
    axios.post(window.config.host + "/api/hqqRouter/delMsgById",{delIdArr: selectedIds}).then(resp => {
      if(resp.data.code == 200){
        getMseList()
        message.success("删除成功")
      }
    })
  }

  function downloadSelected() {
    const fields = [
      "name",
      "tell",
      "company",
      "office",
      "qq",
      "weixin",
      "email",
      "createTime",
      "other"
    ]
    // const parser = new Parser({fields})
    // const csv = parser.parse(selectedRows)
    // // const csv = json2csv({
    // //   data: JSON.stringify(selectedRows),
    // //   fields
    // // })
    // myDownloadFile(csv, "MessageTable.csv")

    new ExportExcel({data: selectedRows, fileName: 'MessageTable'}).downloadFile()

  }

  function myDownloadFile(content, filename) {
    let eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    let blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedIds(selectedRowKeys)
      setSelectedRows(selectedRows)
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({

    }),
  }

  useEffect(() => {
    getMseList()
  }, []);

  function getMseList() {
    axios.post(window.config.host + "/api/hqqRouter/getHqqMsgList").then(resp => {
      console.log(resp.data)
      if(resp.data.code == 200){
        resp.data.data.forEach(item => {
          item.createTime = moment(item.createTime).format("YYYY-MM-DD HH:mm:ss")
        })
        setTableData(resp.data.data)
      } else {
        message.error(resp.data.message)
      }
    }, resp => {
      message.error(resp.code)
    })
  }

  return (
    <>
      <div className="table-operate">
        <Button
          className="btn"
          type="primary"
          shape="round"
          icon="download"
          size="default"
          onClick={downloadSelected}
        >
          下载选中
        </Button>
        <Button
          className="btn"
          type="danger"
          shape="round"
          icon="delete"
          size="default"
          onClick={deleteSelected}
        >
          删除选中
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
        rowKey="_id"
      >
      </Table>
    </>
  )
}