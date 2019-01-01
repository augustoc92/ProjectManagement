import React from 'react'
import { Table, Modal, Icon } from 'antd'
import SideBar from '../shared/SideBar'
import 'antd/dist/antd.css'

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recordId: 0,
      modalVisible: false,
    }
  }

  componentDidMount() {
    const { getProjects } = this.props
    getProjects()
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
    })
  }

  hideModal = () => {
    this.setState({
      modalVisible: false,
    })
  }

  deleteItem = () => {
    const { recordId } = this.state
    const { removeItem } = this.props
    removeItem(recordId)
    this.hideModal()
  }

  onRow = record => ({
    onDoubleClick: (event) => {
      const {
        collapsed,
        toggleSideBar,
        selectRow,
      } = this.props
      if (collapsed) {
        toggleSideBar(collapsed)
      }
      selectRow(record)
      event.preventDefault()
    },
    onContextMenu: (event) => {
      event.preventDefault()
      this.setState({
        recordId: record.id
      })
      this.showModal()
    }
  })

  addNewItem = () => {
    const {
      toggleSideBar,
      selectRow,
      collapsed,
      cols
    } = this.props
    const emptyObject = {}
    cols.forEach((item) => {
      emptyObject[item.key] = undefined
    })
    selectRow(emptyObject)
    if (collapsed) {
      toggleSideBar(collapsed)
    }
  }

  render() {
    const { data, cols } = this.props
    const { modalVisible, recordId } = this.state 
    return (
      <div>
        <h1> Projects </h1>
        <Table
          dataSource={data}
          columns={cols}
          pagination={false}
          onRow={this.onRow}
        />
      <Icon type={'plus'} onClick={() => this.addNewItem()} />
      <Modal
          title="Delete item"
          visible={modalVisible}
          onOk={this.deleteItem}
          onCancel={this.hideModal}
          okText="Confirm"
          cancelText="Cancel"
        >
          <p>
            Are you sure? If you delete this, you will not be able to get it back
          </p>
          <p>
            Item with id:
            {' '}
            {recordId}
          </p>
        </Modal>
        <SideBar />
      </div>
      )
  }
}

export default Project
