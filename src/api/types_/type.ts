export interface Query {
  cacheName: string;
  restURL: string;
  graphqlField: string;
  graphqlQuery: string;
}

export type HistoricalPrices = {
  offerCount: number;
  offerCountMin: number;
  timestamp: string;
  priceMin: number;
  price: number;
};
