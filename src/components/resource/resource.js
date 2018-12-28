import React from 'react'
import { Table } from 'antd'

class Resource extends React.Component {
  componentDidMount() {
    const { getResources } = this.props
    getResources()
  }

  render() {
    const { data, cols } = this.props
    return (
      <div>
        <h1> Resource </h1>
        <Table
          dataSource={data}
          columns={cols}
          pagination={false}
        />
      </div>
      )
  }
}

export default Resource
