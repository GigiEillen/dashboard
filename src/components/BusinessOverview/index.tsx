import { useEffect, useState } from 'react';
import { Card, Divider, Menu, Select } from 'antd';
import type { ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import businessOverview from '../../data/businessOverview.json';
import type { BusinessOverviewData } from '../types';
import {
  BUSINESS_OVERVIEW_OPTIONS,
  BUSINESS_OVERVIEW_PERIODS,
  CHART_OPTIONS,
} from './constants';
import { OVERVIEW_MENU } from './enums';

import './BusinessOverview.scss';

const BusinessOverview = () => {
  const [selection, setSelection] = useState<string[]>([
    OVERVIEW_MENU.OPPORTUNITIES_KEY,
  ]);
  const [period, setPeriod] = useState('0');
  const [responseData, setResponseData] = useState<BusinessOverviewData>();

  useEffect(() => {
    setTimeout(() => {
      setResponseData(businessOverview);
    }, 200);
  }, []);

  const onClick = ({ key }: { key: string }) => {
    setSelection([key]);
  };

  const { datasets, labels, stats } = responseData?.[selection[0]] ?? {};

  return (
    <div className="business-overview-container">
      <Card
        title="Business Overview"
        extra={
          <Select
            value={period}
            onChange={setPeriod}
            options={BUSINESS_OVERVIEW_PERIODS}
            className="period"
          />
        }>
        <Divider style={{ margin: 0 }} />
        <Menu
          onClick={onClick}
          selectedKeys={selection}
          mode="horizontal"
          items={BUSINESS_OVERVIEW_OPTIONS}
        />
        {datasets && (
          <div className="chart-container">
            <Chart
              data={{ datasets, labels } as ChartData}
              type="line"
              options={CHART_OPTIONS as ChartOptions}
            />
          </div>
        )}
        <div className="stats-container">
          {stats?.map(({ label, value }, index) => (
            <div key={`stats-${index}`} className="stats-container">
              <div className="stat">
                <h3 className="semi-bold">{value}</h3>
                <p className="md medium secondary">{label}</p>
              </div>
              {index < stats.length - 1 && <p className="line-border">|</p>}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BusinessOverview;
