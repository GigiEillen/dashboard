import { useState } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';

import Home from './components/Home';
import { LIGHT_COLOR, MAIN_COLOR, SIDER_OPTIONS } from './constants';

import './App.scss';

const { Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: MAIN_COLOR,
          colorInfo: MAIN_COLOR,
          colorTextPlaceholder: LIGHT_COLOR,
          colorBgLayout: '#fff',
        },
      }}>
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
    </ConfigProvider>
  );
}

export default App;
