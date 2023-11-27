import { useState } from 'react';
import { Layout, Menu } from 'antd';

import Home from './components/Home';
import { SIDER_OPTIONS } from './constants';

import './App.scss';

const { Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <div className={`logo ${collapsed ? 'collapsed' : ''}`}>
          <img src="src\assets\logo.JPG" />
          <div>
            <h6>Dashboard</h6>
            <p className="sm">AWS</p>
          </div>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['home']}
          mode="inline"
          items={SIDER_OPTIONS}
        />
      </Sider>
      <Home />
    </Layout>
  );
}

export default App;
