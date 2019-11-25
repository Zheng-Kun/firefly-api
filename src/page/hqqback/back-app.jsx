import React, {Component, Fragment} from 'react'
import ConfigFrom from './config-form/config-form'
import MessageTable from './message-table/message-table'

export default class BackApp extends Component{
  render() {
    return (
      <Fragment>
        <ConfigFrom />
        <MessageTable />
      </Fragment>  
    )
  }
} 