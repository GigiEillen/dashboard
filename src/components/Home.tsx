import { useState, useEffect } from 'react';
import { Spin } from 'antd';

import WidgetHeader from './WidgetHeader';
import Widgets from './Widgets';
import type { OnPeriodFilterChange, PeriodFilter, WidgetList } from './types';

import widgetListResponse from '../data/widgetList.json';

const Home = () => {
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>({
    period: '0',
    periodBy: '0',
    periodUnit: '0',
  });

  const [widgets, setWidgets] = useState<WidgetList>();

  const onPeriodFilterChange: OnPeriodFilterChange = (key) => (newValue) => {
    setPeriodFilter((prevState) => ({ ...prevState, [key]: newValue }));
  };

  useEffect(() => {
    setWidgets(undefined);

    // Simulating call based on filters
    setTimeout(() => {
      setWidgets(widgetListResponse as WidgetList);
    }, 500);
  }, [periodFilter]);

  return (
    <div className="home-container">
      <WidgetHeader
        periodFilter={periodFilter}
        onPeriodFilterChange={onPeriodFilterChange}
      />
      {widgets ? <Widgets widgets={widgets} /> : <Spin />}
    </div>
  );
};

export default Home;
