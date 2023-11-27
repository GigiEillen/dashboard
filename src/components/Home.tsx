import { useState, useEffect } from 'react';
import { Spin } from 'antd';

import BusinessOverview from './BusinessOverview';
import Header from './Header';
import InfoCards from './InfoCards';
import WidgetHeader from './WidgetHeader';
import Widgets from './Widgets';
import type {
  OnPeriodFilterChange,
  PeriodFilter,
  UserConfig,
  WidgetList,
} from './types';

import widgetListResponse from '../data/widgetList.json';
import userConfiguration from '../data/userConfiguration.json';

const Home = () => {
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>({
    period: '0',
    periodBy: '0',
    periodUnit: '0',
  });

  const [widgets, setWidgets] = useState<WidgetList>();
  const [userConfig, setUserConfig] = useState<UserConfig>();
  const [selectedGroup, setSelectedGroup] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setUserConfig(userConfiguration);
      setSelectedGroup(userConfiguration.groups[0]?.value);
    }, 300);
  }, []);

  useEffect(() => {
    setWidgets(undefined);

    // Simulating calls based on filters
    setTimeout(() => {
      setWidgets(widgetListResponse as WidgetList);
    }, 500);
  }, [periodFilter]);

  const onPeriodFilterChange: OnPeriodFilterChange = (key) => (newValue) => {
    setPeriodFilter((prevState) => ({ ...prevState, [key]: newValue }));
  };

  const onGroupChange = (newValue: string) => {
    setSelectedGroup(newValue);
  };

  return (
    <div className="home-container">
      {userConfig ? (
        <Header
          groupList={userConfig.groups}
          group={selectedGroup}
          onGroupChange={onGroupChange}
        />
      ) : (
        <Spin />
      )}
      <WidgetHeader
        periodFilter={periodFilter}
        onPeriodFilterChange={onPeriodFilterChange}
      />
      {widgets ? <Widgets widgets={widgets} /> : <Spin />}
      <BusinessOverview id="chart-status" />
      <InfoCards />
      <BusinessOverview id="history" />
    </div>
  );
};

export default Home;
