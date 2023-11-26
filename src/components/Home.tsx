import { useState } from 'react';

import WidgetHeader from './WidgetHeader';
import type { OnPeriodFilterChange, PeriodFilter } from './types';

const Home = () => {
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>({
    period: '0',
    periodBy: '0',
    periodUnit: '0',
  });

  const onPeriodFilterChange: OnPeriodFilterChange = (key) => (newValue) => {
    setPeriodFilter((prevState) => ({ ...prevState, [key]: newValue }));
  };

  return (
    <div className="home-container">
      <WidgetHeader
        periodFilter={periodFilter}
        onPeriodFilterChange={onPeriodFilterChange}
      />
    </div>
  );
};

export default Home;
