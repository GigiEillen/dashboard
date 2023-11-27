import { useEffect, useState, useMemo, type FC } from 'react';
import { Card, Divider, Menu, Select, Table } from 'antd';
import type { ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import businessOverview from '../../data/businessOverview.json';
import finalBusinessOverview from '../../data/finalBusinessOverview.json';
import type { BusinessOverviewData } from '../types';
import { BUSINESS_OVERVIEW_PERIODS, CHART_OPTIONS } from './constants';

import './BusinessOverview.scss';

interface BusinessOverviewProps {
  /**
   * Prop id, this should be used to make calls to the service and retrieve specific configuration.
   * Just for demo purposes I'm going to use an if close instead.
   */
  id: string;
}

const BusinessOverview: FC<BusinessOverviewProps> = ({ id }) => {
  const [selection, setSelection] = useState<string[]>();
  const [period, setPeriod] = useState('0');
  const [responseData, setResponseData] = useState<BusinessOverviewData>();

  const menuOptions = useMemo(
    () =>
      responseData
        ? Object.entries(responseData).map(([key, { label }]) => ({
            key,
            label,
          }))
        : undefined,
    [responseData],
  );

  useEffect(() => {
    setTimeout(() => {
      if (id === 'chart-status') {
        setResponseData(businessOverview);
      } else {
        setResponseData(finalBusinessOverview);
      }
    }, 200);
  }, [id]);

  useEffect(() => {
    const menuKey = menuOptions?.[0].key;
    if (menuKey) {
      setSelection([menuKey]);
    }
  }, [menuOptions]);

  const onClick = ({ key }: { key: string }) => {
    setSelection([key]);
  };

  const { datasets, labels, stats, columns, rows } =
    responseData?.[selection?.[0] ?? ''] ?? {};

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
          items={menuOptions}
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
        {stats && (
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
        )}
        {columns && rows && (
          <Table columns={columns} dataSource={rows} pagination={false} />
        )}
      </Card>
    </div>
  );
};

export default BusinessOverview;
