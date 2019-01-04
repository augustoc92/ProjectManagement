import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';

export default class NavBar extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="mail">
          <Link to="/clients">
          <Icon type="mail" />
            Clients
          </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/projects">
          <Icon type="appstore" />
            Projects
          </Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link to="/resources">
          <Icon type="appstore" />
            Resources
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
