import { FC } from 'react';
import { Button, Card, Progress } from 'antd';

import type { ProgressInfo } from '../types';

interface GoalsProps {
  /**
   * Card title
   */
  label: string;

  /**
   * Data to be displayed
   */
  data: ProgressInfo['data'];
}

const Goals: FC<GoalsProps> = ({ label, data }) => (
  <div className="goals-container">
    <Card title={label} extra={<Button>{`Edit ${label}`}</Button>}>
      {data.map(({ goal, label, value, prefix, unit }, index) => (
        <div className="progress-container" key={`progress-status-${index}`}>
          <div className="label">
            <p className="sm medium secondary">{label}</p>
            <p className="sm medium secondary">{`${
              prefix ?? ''
            }${new Intl.NumberFormat('en').format(goal)} ${unit ?? ''}`}</p>
          </div>
          <div>
            <Progress percent={(value * 100) / goal} size={45} />
          </div>
        </div>
      ))}
    </Card>
  </div>
);

export default Goals;
