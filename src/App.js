import React from 'react';
import "antd/dist/antd.css";
import {Avatar, Layout, Menu, Breadcrumb} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {UserOutlined} from '@ant-design/icons';
import Title from "antd/es/typography/Title";
import './App.css';

const {SubMenu} = Menu;


function App() {
  const {Header, Footer, Sider, Content} = Layout;
  return (
    <div className="App">
      <Layout>
        <Header style={{padding: 10}}>
          <Avatar style={{float: 'right'}} size="small" icon={<UserOutlined/>}/>
          <Title style={{color: 'white', textAlign: 'left'}} level={3}>Ant Design</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
              <Menu.Item key="Dashboard">
                Dashboard
              </Menu.Item>
              <SubMenu key="sub1" title={<span><MailOutlined/><span>About us</span></span>}>
                <Menu.ItemGroup key="AboutUS" title="Country">
                  <Menu.Item key="location1">Location 1</Menu.Item>
                  <Menu.Item key="location2">Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{padding: '0 50px'}}>
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{background: '#fff', padding: 24, minHeight: 580}} className="site-layout-content">Content</div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by GK</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
