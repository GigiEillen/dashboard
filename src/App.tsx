import { useState } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';

import Home from './components/Home';
import { MAIN_COLOR, SIDER_OPTIONS } from './constants';

import './App.scss';

const { Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['home']);

  const onSelect = ({ selectedKeys }: { selectedKeys: string[] }) => {
    setSelectedKeys(selectedKeys);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: MAIN_COLOR,
          colorInfo: MAIN_COLOR,
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
            selectedKeys={selectedKeys}
            mode="inline"
            items={SIDER_OPTIONS}
            onSelect={onSelect}
          />
        </Sider>
        <Home />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
