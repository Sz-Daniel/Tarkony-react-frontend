export type PriceHistoryQueryType = {
  offerCount: number;
  offerCountMin: number;
  timestamp: string;
  priceMin: number;
  price: number;
};
export type PriceHistoryResponseType = {
  offerCount: number;
  offerCountMin: number;
  timestamp: Date;
  priceMin: number;
  price: number;
};
