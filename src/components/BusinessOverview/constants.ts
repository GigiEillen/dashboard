import { OVERVIEW_MENU } from './enums';

export const BUSINESS_OVERVIEW_OPTIONS = [
  {
    label: 'Opportunities',
    key: OVERVIEW_MENU.OPPORTUNITIES_KEY,
  },
  {
    label: 'GSS',
    key: OVERVIEW_MENU.GSS_KEY,
  },
  {
    label: 'Private Offers',
    key: OVERVIEW_MENU.PRIVATE_OFFERS_KEY,
  },
  {
    label: 'Active Subscribers',
    key: OVERVIEW_MENU.ACTIVE_SUBS_KEY,
  },
];

export const BUSINESS_OVERVIEW_PERIODS = [
  {
    label: 'Year to date (YTD)',
    value: '0',
  },
  {
    label: 'T12M',
    value: '1',
  },
  {
    label: 'Last Year',
    value: '2',
  },
];

export const CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  scaleShowGridLines: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: false,
    },
  },
};
