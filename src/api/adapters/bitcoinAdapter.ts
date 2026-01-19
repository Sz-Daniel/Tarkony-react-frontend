import {
  PriceHistoryQueryType,
  PriceHistoryResponseType,
} from '../types/Bitcoin/queryType';

export function bitcoinAdapter(
  data: PriceHistoryQueryType[],
): PriceHistoryResponseType[] {
  return data.map((bitcoinData: PriceHistoryQueryType) => {
    return {
      offerCount: bitcoinData.offerCount ?? 0,
      offerCountMin: bitcoinData.offerCountMin ?? 0,
      timestamp: new Date(Number(bitcoinData.timestamp) ?? 0),
      priceMin: bitcoinData.priceMin ?? 0,
      price: bitcoinData.price ?? 0,
    };
  });
}
//visualization
