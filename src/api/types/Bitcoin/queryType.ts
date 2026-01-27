import { HistoricalPrices } from '../../types/type';

export type HistoricalPricesDTO = {
  data: {
    itemPrices: HistoricalPrices;
  };
};
