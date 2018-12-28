import React from 'react'
import { Table } from 'antd'

class Clients extends React.Component {
  componentDidMount() {
    const { getClients } = this.props
    getClients()
  }

  render() {
    const { data, cols } = this.props
    return (
      <div>
        <h1> Clients </h1>
        <Table
          dataSource={data}
          columns={cols}
          pagination={false}
        />
      </div>
      )
  }
}

export default Clients
