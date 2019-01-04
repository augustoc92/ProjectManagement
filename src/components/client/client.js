import React from 'react'
import SideBar from '../shared/SideBar'
import CustomTable from '../shared/CustomTable'
import styles from './client.module.css'
import { Icon, Modal } from 'antd'


class Clients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recordId: 0,
      modalVisible: false,
    }
  }

  componentDidMount() {
    const { getClients } = this.props
    getClients()
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
    const { data, cols, collapsed } = this.props
    const { modalVisible, recordId } = this.state
    const title = "Clients"
    return (
      <div className={styles.container}>
        <CustomTable
          title={title}
          data={data}
          cols={cols}
          pagination={false}
          onRow={this.onRow}
        />
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
          <span role="presentation" onClick={() => this.addNewItem()} className={`${styles.float} ${!collapsed ? styles.floatExpanded : ''}`}>
            <Icon type={'plus'} className={styles.myFloat} />
          </span>
          <SideBar formName="client" />
        </div>
      )
  }
}

export default Clients
