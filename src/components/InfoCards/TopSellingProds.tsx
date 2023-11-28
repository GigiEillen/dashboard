import type { FC } from 'react';

import { Avatar, Card, List } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import type { ListInfo } from '../types';

interface TopSellingProdsProps {
  /**
   * Card title
   */
  label: string;

  /**
   * Lists
   */
  data: ListInfo['data'];
}

const TopSellingProds: FC<TopSellingProdsProps> = ({ label, data }) => (
  <div className="top-selling-prods-container">
    <Card title={<h6>{label}</h6>}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={({ label, values }, index) => (
          <List.Item>
            <div className="item-container">
              <div className="header">
                <Avatar>{index + 1}</Avatar>
                <h5>{label}</h5>
              </div>
              <div className="values">
                {values.map(({ label, value, rate, status }, valIdx) => (
                  <div key={`row-${index}-value${valIdx}`}>
                    <p className="sm medium secondary">{label}</p>
                    <div className="measure">
                      <h4 className="semi-bold">{value}</h4>
                      <div className={status}>
                        {status === 'active' ? (
                          <UpOutlined />
                        ) : (
                          <DownOutlined />
                        )}
                        <p className="sm medium">{rate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </List.Item>
        )}
      />
    </Card>
  </div>
);

export default TopSellingProds;
