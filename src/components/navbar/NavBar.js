import React, { Component } from 'react'
import { Row, Col, Button, Avatar, Dropdown, Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/logo.png'

class NavBar extends Component {
  handleLogout = () => {
    this.props.logout()
    this.props.history.push('/login')
    window.location.reload(true);
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/friends">
            ดูรายชื่อเพื่อน
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/changepassword">
            เปลี่ยนรหัสผ่าน
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link onClick={() => this.handleLogout()} to='#'>
            ออกจากระบบ
          </Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Row style={{ height: '100%' }} type="flex" align="middle">
        <Col span={4} style={{ height: '100%' }} type="flex" align="end">
          <Link to="/">
            <img src={logo} alt="Logo Fakebook" style={{ height: '5vh' }} />
          </Link>
        </Col>
        <Col span={20}>
          <Row type="flex" justify="end">
            <Col span={4} type="flex" align="end">
              <Avatar

              />
            </Col>
            <Dropdown overlay={menu}>
              <Col span={6} type="flex" align="start">
                <Link to="/my-profile">
                  <Button type="link">{"Name"}</Button>
                </Link>
              </Col>
            </Dropdown>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default NavBar