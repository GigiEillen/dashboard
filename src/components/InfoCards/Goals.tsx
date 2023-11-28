import { FC, useState } from 'react';
import { Button, Card, Input, Modal, Progress } from 'antd';

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

const Goals: FC<GoalsProps> = ({ label, data }) => {
  const [open, setOpen] = useState(false);

  const onClick = () => setOpen(true);
  const onCancel = () => setOpen(false);

  return (
    <div className="goals-container">
      <Card
        title={label}
        extra={<Button onClick={onClick}>{`Edit ${label}`}</Button>}>
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
      <Modal
        title={`Edit ${label}`}
        open={open}
        okText="Save"
        onOk={onCancel}
        onCancel={onCancel}>
        {data.map(({ goal, label, prefix }, index) => (
          <div className="field-container" key={`edit-goal-${index}`}>
            <p className="sm medium secondary">{label}</p>
            <Input prefix={prefix} value={goal} />
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default Goals;
