import { FC } from 'react';
import { Avatar, Card } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import { MeasureStatus, MeasureType } from '../enums';
import type { WidgetList } from '../types';
import { MEASURE_COLOR_LOOKUP, MEASURE_ICON_LOOKUP } from './constants';

import './Widgets.scss';

interface WidgetsProps {
  /**
   * Active widget List
   */
  widgets: WidgetList;
}

const Widgets: FC<WidgetsProps> = ({ widgets }) => (
  <div className="widgets-container">
    {widgets.map(({ id, label, measures, value }) => {
      const IconComponent = MEASURE_ICON_LOOKUP[id];
      return (
        <div className="widget" key={id}>
          <Card className="widget-card">
            <div className="title">
              {IconComponent && <Avatar icon={<IconComponent />} />}
              <p className="large semi-bold">{label}</p>
            </div>
            {value && <h2 className="widget-value semi-bold">{value}</h2>}
            <div className="measures">
              {measures?.map(({ status, type, label, value }, measureIdx) => (
                <div key={`${id}-measure-${measureIdx}`}>
                  {label && (
                    <p className={`sm medium ${MEASURE_COLOR_LOOKUP[status]}`}>
                      {label}
                    </p>
                  )}
                  {type === MeasureType.INFO && (
                    <h3 className="semi-bold">{value}</h3>
                  )}
                  {type === MeasureType.RATE && Array.isArray(value) && (
                    <div
                      className={`rate-value ${MEASURE_COLOR_LOOKUP[status]}`}>
                      {value.map((rateValue, index) => (
                        <div
                          key={`${id}-measure-${measureIdx}-value${index}`}
                          className="value">
                          {status === MeasureStatus.ACTIVE ? (
                            <UpOutlined />
                          ) : (
                            <DownOutlined />
                          )}
                          <p className="sm medium">{rateValue}</p>
                          {index < value.length - 1 && (
                            <p className="line-border">|</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      );
    })}
  </div>
);

export default Widgets;
