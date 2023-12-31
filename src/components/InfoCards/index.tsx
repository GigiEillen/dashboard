import { useEffect, useState } from 'react';

import response from '../../data/infoCards.json';
import type { CardsInfoData } from '../types';
import ActivityInfo from './ActivityInfo';
import ChartInfo from './ChartInfo';
import Goals from './Goals';
import TopSellingProds from './TopSellingProds';

import './InfoCards.scss';

const InfoCards = () => {
  const [cardsInfo, setCardsInfo] = useState<CardsInfoData>();

  useEffect(() => {
    setTimeout(() => {
      setCardsInfo(response as CardsInfoData);
    }, 200);
  }, []);

  return (
    <div className="info-cards-container">
      {cardsInfo &&
        Object.entries(cardsInfo).map(([key, card]) => {
          const { label } = card;

          return card.type === 'progress' ? (
            <Goals key={key} label={label} data={card.data} />
          ) : card.type === 'list' ? (
            <TopSellingProds key={key} label={label} data={card.data} />
          ) : card.type === 'chart' ? (
            <ChartInfo key={key} label={label} data={card.data} />
          ) : (
            <ActivityInfo key={key} label={label} data={card.data} />
          );
        })}
    </div>
  );
};

export default InfoCards;
