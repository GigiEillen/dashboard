import type { FC } from 'react';
import { Button, Select, DatePicker } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

import type { OnPeriodFilterChange, PeriodFilter } from '../types';
import {
  PERIOD_BY_OPTIONS,
  PERIOD_OPTIONS,
  PERIOD_UNIT_OPTIONS,
} from './constants';

import './WidgetHeader.scss';

const { RangePicker } = DatePicker;

interface WidgetHeaderProps {
  /**
   * Period filter values
   */
  periodFilter: PeriodFilter;

  /**
   * Function to be called when any filter value changes.
   */
  onPeriodFilterChange: OnPeriodFilterChange;
}

const WidgetHeader: FC<WidgetHeaderProps> = ({
  periodFilter,
  onPeriodFilterChange,
}) => {
  const { period, periodBy, periodUnit, dateRange } = periodFilter;

  return (
    <div className="widget-header-content">
      <div className="title">
        <h4 className="semi-bold">Sleek Sky</h4>
        <Button type="primary" icon={<AppstoreOutlined />}>
          Add / Remove widgets
        </Button>
      </div>
      <div className="filter">
        <Select
          value={periodUnit}
          onChange={onPeriodFilterChange('periodUnit')}
          options={PERIOD_UNIT_OPTIONS}
          className="period-unit"
        />
        <div>
          <RangePicker
            value={dateRange}
            onChange={onPeriodFilterChange('dateRange')}
          />
        </div>
        <p className="sm medium">Compared to</p>
        <Select
          value={period}
          onChange={onPeriodFilterChange('period')}
          options={PERIOD_OPTIONS}
          className="period"
        />
        <Select
          value={periodBy}
          onChange={onPeriodFilterChange('periodBy')}
          options={PERIOD_BY_OPTIONS}
          className="period-by"
        />
      </div>
    </div>
  );
};

export default WidgetHeader;
