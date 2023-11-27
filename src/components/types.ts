import { RangePickerProps } from 'antd/es/date-picker';

import { MeasureStatus, MeasureType } from './enums';

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

interface Measure {
  /**
   * Measure Type
   */
  type: MeasureType;

  /**
   * Measure status, visible to the user based on colors
   */
  status: MeasureStatus;

  /**
   * Measure label if existent
   */
  label?: string;

  /**
   * Measure single value for info type.
   * Multiple values for rate type
   */
  value?: string | string[];
}

interface Widget {
  /**
   * Widget Id.
   */
  id: string;

  /**
   * Widget title
   */
  label: string;

  /**
   * Widget only measure value.
   */
  value?: number;

  /**
   * Measure list
   */
  measures: Measure[];
}

export type WidgetList = Array<Widget>;

/**
 * USer configuration and information response format
 */
export interface UserConfig {
  groups: Array<{ value: string; label: string }>;
}

interface Dataset {
  /**
   * Chart group type (E.g. "line", "bar", etc.)
   */
  type: string;

  /**
   * Legend label
   */
  label: string;

  /**
   * Data to be displayed order by unit
   */
  data: number[];
}

interface OverviewContent {
  /**
   * Section label. This should be used for Menu items.
   */
  label: string;

  /**
   * Chart Dataset list
   */
  datasets?: Dataset[];

  /**
   * Chart x Axis labels (unit)
   */
  labels?: string[];

  /**
   * Additional stats
   */
  stats?: { label: string; value: string | number }[];

  /**
   * Column definition in case a table needs to be displayed
   */
  columns?: { title: string; dataIndex: string; key: string }[];

  /**
   * Table data in case a table needs to be displayed.
   *
   * Each record key should match column key prop in order to display values in the correct column
   */
  rows?: Record<string, unknown>[];
}

export type BusinessOverviewData = Record<string, OverviewContent>;

export interface BaseCardInfo {
  /**
   * Card title
   */
  label: string;
}

export interface ProgressInfo {
  type: 'progress';
  data: {
    /* Progress bar label */
    label: string;
    /* Progress bar value, this will be converted to percentage based on goal */
    value: number;
    /* Progress goal */
    goal: number;
    /* Prefix value as currency */
    prefix?: string;
    /* Unit value */
    unit?: string;
  }[];
}

export interface ListInfo {
  type: 'list';
  data: {
    /* List title */
    label: string;
    /* Measure values */
    values: { label: string; value: string; rate: string; status: string }[];
  }[];
}

export interface ChartInfo {
  type: 'chart';
  data: {
    /* Dataset list */
    datasets: Dataset[];

    /* x Axis labels (unit) */
    labels: string[];

    /* Period information */
    description: string;

    /* Rate info */
    rate: string;

    /* rate status */
    status: string;
  };
}

export interface ActivityInfo {
  type: 'activity';
  data: {
    date: string;
    label: string;
    description: string;
    icons?: { label: string; color: string }[];
  }[];
}

type CardInfoData = BaseCardInfo &
  (ProgressInfo | ListInfo | ChartInfo | ActivityInfo);

export type CardsInfoData = Record<string, CardInfoData>;
