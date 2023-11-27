import type { FC } from 'react';
import { Avatar, Button, Card, Timeline } from 'antd';

import type { ActivityInfo } from '../types';

interface ActivityInfoProps {
  /* Card title */
  label: string;

  /* Activity data */
  data: ActivityInfo['data'];
}

const ActivityInfo: FC<ActivityInfoProps> = ({ label, data }) => {
  const items = data.map(({ date, description, label, icons }, index) => ({
    label: date,
    children: (
      <div key={`activity-item=${index}`}>
        <p className="md semi-bold">{label}</p>
        <p className="sm secondary">{description}</p>
        {icons && (
          <div className="icons">
            {icons.map(({ label, color }, index) => (
              <Avatar
                style={{ backgroundColor: color }}
                key={`avatar-${index}`}>
                {label}
              </Avatar>
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="activity-container">
      <Card title={label} extra={<Button>View More</Button>}>
        <div className="content">
          <Timeline mode="right" items={items} />
        </div>
      </Card>
    </div>
  );
};

export default ActivityInfo;
