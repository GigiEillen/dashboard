import { useState, useMemo } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { ConfigProvider, Layout, Menu } from 'antd';

import { MAIN_COLOR, SIDER_OPTIONS } from './constants';

import './App.scss';

const { Sider } = Layout;

function App() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['home']);

  const onSelect = ({ selectedKeys }: { selectedKeys: string[] }) => {
    setSelectedKeys(selectedKeys);
  };

  const items = useMemo(
    () =>
      SIDER_OPTIONS.map(({ key, ...rest }) => ({
        ...rest,
        key,
        onClick: () => navigate(`/${key}`),
      })),
    [navigate],
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: MAIN_COLOR,
          colorInfo: MAIN_COLOR,
          colorBgLayout: '#fff',
          fontFamily: 'Inter',
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
            items={items}
            onSelect={onSelect}
          />
        </Sider>
        <Outlet />
        <Navigate to="/home" />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
