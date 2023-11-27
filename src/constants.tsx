import {
  AimOutlined,
  BarChartOutlined,
  BulbOutlined,
  DashboardOutlined,
  GiftOutlined,
  HomeOutlined,
  ShopOutlined,
  TagOutlined,
  TeamOutlined,
} from '@ant-design/icons';

export const MAIN_COLOR = '#7f56d9';
export const LIGHT_COLOR = '#F4EBFF';

export const SIDER_OPTIONS = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: 'Home',
  },
  {
    key: 'prods',
    icon: <ShopOutlined />,
    label: 'Products',
  },
  {
    key: 'metering',
    icon: <DashboardOutlined />,
    label: 'Metering',
  },
  {
    key: 'offers',
    icon: <GiftOutlined />,
    label: 'Offers',
  },
  {
    key: 'Opportunities',
    icon: <BulbOutlined />,
    label: 'Opportunities',
  },
  {
    key: 'customers',
    icon: <TeamOutlined />,
    label: 'Customers',
  },
  {
    key: 'reports',
    icon: <BarChartOutlined />,
    label: 'Reports',
  },
  {
    key: 'copilot',
    icon: <AimOutlined />,
    label: 'Copilot',
  },
  {
    key: 'coSelling',
    icon: <TagOutlined />,
    label: 'Co-Selling',
  },
];
