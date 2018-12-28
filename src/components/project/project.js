import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'

class Project extends React.Component {
  componentDidMount() {
    const { getProjects } = this.props
    getProjects()
  }

  render() {
    const { data, cols } = this.props
    return (
      <div>
        <h1> Projects </h1>
        <Table
          dataSource={data}
          columns={cols}
          pagination={false}
        />
      </div>
      )
  }
}

export default Project
