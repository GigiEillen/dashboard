import { useState, type FC, type SetStateAction, type Dispatch } from 'react';
import { Button, Select, DatePicker, Modal, Checkbox } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import type {
  CheckboxOptionType,
  CheckboxValueType,
} from 'antd/es/checkbox/Group';

import type { OnPeriodFilterChange, PeriodFilter, WidgetList } from '../types';
import {
  PERIOD_BY_OPTIONS,
  PERIOD_OPTIONS,
  PERIOD_UNIT_OPTIONS,
} from './constants';

import './WidgetHeader.scss';

const CheckboxGroup = Checkbox.Group;

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

  /**
   * Widget List
   */
  widgets: WidgetList;

  /**
   * Selected Widgets
   */
  widgetSelection: CheckboxValueType[];

  /**
   * Setter function for widgetSelection
   */
  setWidgetSelection: Dispatch<SetStateAction<CheckboxValueType[]>>;
}

const WidgetHeader: FC<WidgetHeaderProps> = ({
  periodFilter,
  onPeriodFilterChange,
  widgets,
  widgetSelection,
  setWidgetSelection,
}) => {
  const { period, periodBy, periodUnit, dateRange } = periodFilter;

  const initialSelection = widgets.map(
    ({ id, label }): CheckboxOptionType => ({ value: id, label }),
  );

  const [open, setOpen] = useState(false);

  const [selection, setSelection] =
    useState<CheckboxValueType[]>(widgetSelection);

  const onClick = () => setOpen(true);

  const onSave = () => {
    setWidgetSelection(selection);
    setOpen(false);
  };

  return (
    <div className="widget-header-content">
      <div className="title">
        <h4 className="semi-bold">Sleek Sky</h4>
        <Button type="primary" icon={<AppstoreOutlined />} onClick={onClick}>
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
      <Modal
        title="Add / Remove Widgets"
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="save" type="primary" onClick={onSave}>
            Save
          </Button>,
        ]}>
        <CheckboxGroup
          options={initialSelection}
          value={selection}
          onChange={setSelection}
        />
      </Modal>
    </div>
  );
};

export default WidgetHeader;
