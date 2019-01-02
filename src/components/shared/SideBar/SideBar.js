import React from 'react'
import {
  Layout
} from 'antd'
import 'antd/dist/antd.css';
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
    console.log(formName)
      switch (formName) {
      case 'projects':
        return (
          <ProjectForm selectedRow={selectedRow} route={formName} />
          )
      case 'clients':
        return (
          <ClientForm selectedRow={selectedRow} route={formName} />
          )
      case 'resources':
        return (
          <ResourcesForm selectedRow={selectedRow} route={formName} />
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
      >
        <div>
          { this.checkForm() }
        </div>
      </Sider>
    )
  }
}
