import React from 'react';
import styles from './NewLayout.css';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const { Header, Content, Footer, Sider } = Layout;

function NewLayout({ children, location }) {
  return (
    <Layout>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="/">
            <Link to="/"><Icon type="home" />Home</Link>
          </Menu.Item>
          <Menu.Item key="/List">
            <Link to="/List"><Icon type="home" />后端技术</Link>
          </Menu.Item>
          <Menu.Item key="/techs">
            <Link to="/techs"><Icon type="home" />前端技术</Link>
          </Menu.Item>
          <Menu.Item key="/Linux">
            <Link to="/Linux"><Icon type="home" />Linux运维技术</Link>
          </Menu.Item>

          <Menu.Item key="/about">
            <Link to="/about"><Icon type="question-circle-o" />About</Link>
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>

        <Content style={{ margin: '24px 16px 0', overflow: 'inherit',wordWrap: 'break-word' }}>
          <div style={{ padding: 24, background: '#fff' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          GTX HQL FOREVER
        </Footer>
      </Layout>
    </Layout>
  );
}

export default NewLayout;
