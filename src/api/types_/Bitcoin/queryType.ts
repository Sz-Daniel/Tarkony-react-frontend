import { HistoricalPrices } from '../type';

export type HistoricalPricesQuery = {
  data: {
    itemPrices: HistoricalPrices;
  };
};
