import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Sider({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="vertical"
      theme="dark"
      style={{ width:250 }}
    >
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
  );
}

export default Sider;
