import React from 'react';
import { Switch } from 'react-router-dom'

import { Layout } from 'antd';
import NavBar from './components/navbar/NavBar'
import PrivateRoute from './components/routes/PrivateRoute';

const { Header, Content } = Layout;

export default class App extends React.Component {
  render() {
    const role = 'guest'
    console.log(role)
    return (
      <div className="App">
        <Layout>
          <Header style={{ height: 'max-content', lineHeight: '0' }} >
            <NavBar />
          </Header>
          <Content style={{ height: '95vh' }}>
            <Switch>
              <PrivateRoute handleAppLogin={this.login} role={role} />
            </Switch>
          </Content>
        </Layout>
      </div>
    )
  }
}