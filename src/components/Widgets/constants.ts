import type { FC } from 'react';
import {
  CalendarOutlined,
  DollarOutlined,
  FileTextOutlined,
  FireOutlined,
  LikeOutlined,
  StarOutlined,
  TagsOutlined,
  TeamOutlined,
} from '@ant-design/icons';

import { MeasureStatus } from '../enums';

export const MEASURE_COLOR_LOOKUP: Record<MeasureStatus, string> = {
  [MeasureStatus.DEFAULT]: 'secondary',
  [MeasureStatus.ACTIVE]: 'active',
  [MeasureStatus.EXPIRED]: 'expired',
};

export const MEASURE_ICON_LOOKUP: Record<string, FC> = {
  aceOpportunities: FireOutlined,
  grossSoftwareSales: DollarOutlined,
  privateOffers: FileTextOutlined,
  activeSubscriptions: TeamOutlined,
  resellerAuth: LikeOutlined,
  listing: TagsOutlined,
  freeTrials: StarOutlined,
  daysSalesOut: CalendarOutlined,
};
