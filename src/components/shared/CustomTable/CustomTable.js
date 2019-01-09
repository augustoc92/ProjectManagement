import React from 'react'
import { Table } from 'antd'
import styles from './CustomTable.module.css'
import 'antd/dist/antd.css'

export default class CustomTable extends React.Component {

  createTitle = () => {
    const { title } = this.props
    return (
      <h1>
        { title }
      </h1>
    )
  }

  render() {
    const { data, cols, onRow} = this.props
    return (
      <div>
        <Table
          dataSource={data}
          title={() => this.createTitle()}
          columns={cols}
          pagination={false}
          onRow={onRow}
          className={styles.custom}
        />
      </div>
      )
  }
}
