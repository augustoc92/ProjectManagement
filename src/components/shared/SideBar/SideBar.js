import React from 'react'
import {
  Layout
} from 'antd'
import 'antd/dist/antd.css';
import styles from './SideBar.module.css'
import ProjectForm from '../../Forms/ProjectForm'
import ClientForm from '../../Forms/ClientForm'
import ResourcesForm from '../../Forms/ResourcesForm'

const { Sider } = Layout

export default class DetailsSideBar extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
  }

  escFunction = (event) => {
    const { toggleSideBar, collapsed } = this.props
    if (event.keyCode === 27 && !collapsed) {
      toggleSideBar(collapsed)
    }
  }

  checkForm = () => {
    const { selectedRow } = this.props
    const { formName } = this.props
      switch (formName) {
      case 'project':
        return (
          <ProjectForm selectedRow={selectedRow} />
          )
      case 'client':
        return (
          <ClientForm selectedRow={selectedRow} />
          )
      case 'resources':
        return (
          <ResourcesForm selectedRow={selectedRow} />
          )
        default:
          return null
      }
  }

  render() {
    const {
      collapsed
    } = this.props
    return (
      <Sider
        collapsed={collapsed}
        reverseArrow
        collapsedWidth={0}
        width={390}
        className={styles.sideBar}
      >
        <div>
          Details
          <div>
            { this.checkForm() }
          </div>
        </div>
      </Sider>
    )
  }
}
