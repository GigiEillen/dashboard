import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

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
  const [widgetSelection, setWidgetSelection] = useState<CheckboxValueType[]>(
    [],
  );

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
      setWidgetSelection(widgetListResponse.map(({ id }) => id));
    }, 500);
  }, [periodFilter]);

  const onPeriodFilterChange: OnPeriodFilterChange = (key) => (newValue) => {
    setPeriodFilter((prevState) => ({ ...prevState, [key]: newValue }));
  };

  const onGroupChange = (newValue: string) => {
    setSelectedGroup(newValue);
  };

  const filteredWidgets = widgets?.filter(({ id }) =>
    widgetSelection.includes(id),
  );

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

      {widgets && filteredWidgets ? (
        <>
          <WidgetHeader
            periodFilter={periodFilter}
            onPeriodFilterChange={onPeriodFilterChange}
            widgets={widgets}
            widgetSelection={widgetSelection}
            setWidgetSelection={setWidgetSelection}
          />
          <Widgets widgets={filteredWidgets} />
        </>
      ) : (
        <Spin />
      )}
      <BusinessOverview id="chart-status" />
      <InfoCards />
      <BusinessOverview id="history" />
    </div>
  );
};

export default Home;
