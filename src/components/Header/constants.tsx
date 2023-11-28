import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';

export const USER_DROPDOWN_OPTIONS = [
  {
    key: '1',
    label: (
      <div style={{ display: 'flex', columnGap: '10px', paddingTop: '5px' }}>
        <Avatar icon={<UserOutlined />} />
        <div>
          <p className="md semi-bold">Daniel Pliego</p>
          <p className="xs medium secondary">daniel@sleeksky.com</p>
        </div>
      </div>
    ),
  },
  { type: 'divider' },
  {
    key: '2',
    label: 'Edit profile',
    icon: <UserOutlined />,
  },
  { type: 'divider' },
  {
    key: '3',
    label: 'Organization Settings',
    icon: <SettingOutlined />,
  },
  { type: 'divider' },
  {
    key: '4',
    label: 'Logout',
    icon: <LogoutOutlined />,
  },
];
