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
