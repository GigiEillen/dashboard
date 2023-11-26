import { RangePickerProps } from 'antd/es/date-picker';

/**
 * Period filter values
 */
export interface PeriodFilter {
  /**
   * Period unit item Id.
   */
  periodUnit: string;

  /**
   * Period item Id.
   */
  period: string;

  /**
   * Period by item Id.
   */
  periodBy: string;

  /**
   * Period date range selection
   */
  dateRange?: RangePickerProps['value'];
}

/**
 * Function type definition for filter value changes
 */
export type OnPeriodFilterChange = (
  key: keyof PeriodFilter,
) => (newValue: string | RangePickerProps['value']) => void;
