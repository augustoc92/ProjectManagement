import React from 'react'
import {
  Layout
} from 'antd'
import 'antd/dist/antd.css';
import DetailsForm from '../../Forms/ProjectForm'

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
    return (
    <DetailsForm selectedRow={selectedRow} />
    )
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
