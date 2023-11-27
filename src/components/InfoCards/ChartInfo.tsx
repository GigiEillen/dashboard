import type { FC } from 'react';
import { Button, Card } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import type { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';

import type { ChartInfo } from '../types';
import { CHART_OPTIONS } from './constants';

interface ChartInfoProps {
  /**
   * Card title
   */
  label: string;

  /**
   * Chart data and additional information
   */
  data: ChartInfo['data'];
}

const ChartInfo: FC<ChartInfoProps> = ({ label, data }) => {
  const { datasets, description, labels, rate, status } = data;
  return (
    <div className="chart-info-container">
      <Card
        title={
          <>
            <div className="title">
              <h6>{label}</h6>
              <div className={status}>
                {status === 'active' ? <UpOutlined /> : <DownOutlined />}
                <p className="sm medium">{rate}</p>
              </div>
            </div>
            <p className="md medium secondary">{description}</p>
          </>
        }>
        <div className="chart-container">
          <Chart
            data={{ datasets, labels } as ChartData}
            type="line"
            options={CHART_OPTIONS as ChartOptions}
          />
        </div>
        <div className="footer">
          <Button>View More</Button>
        </div>
      </Card>
    </div>
  );
};

export default ChartInfo;
1;
