import { type FC, useState } from 'react';
import { Avatar, Badge, Button, Select } from 'antd';
import {
  BellFilled,
  MessageFilled,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';

import MessagesModal from './MessagesModal';

import './Header.scss';

interface HeaderProps {
  /**
   * Selected group or organization
   */
  group: string;

  /**
   * Function to be called when changing group selection
   */
  onGroupChange: (newValue: string) => void;

  /**
   * Group dropdown items
   */
  groupList: Array<{ label: string; value: string }>;
}

const Header: FC<HeaderProps> = ({ group, onGroupChange, groupList }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-content">
      <Button type="text" icon={<SearchOutlined />} />
      <div className="user-section">
        <Button type="primary">Environment: Development</Button>
        <div>
          <Select
            value={group}
            onChange={onGroupChange}
            options={groupList}
            className="group-dropdown"
          />
        </div>
        <div>
          <Badge count={8} offset={[-5, 0]}>
            <Button
              type="text"
              shape="circle"
              icon={<BellFilled style={{ fontSize: '20px' }} />}
            />
          </Badge>
        </div>
        <div>
          <Badge count={5} offset={[-5, 0]}>
            <Button
              type="text"
              shape="circle"
              icon={<MessageFilled style={{ fontSize: '20px' }} />}
              onClick={() => setOpen(true)}
            />
          </Badge>
        </div>
        <div>
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        </div>
      </div>
      <MessagesModal open={open} closeModal={() => setOpen(false)} />
    </div>
  );
};

export default Header;
