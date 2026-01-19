import { bitcoinAdapter } from '../api/adapters/bitcoinAdapter';
import {
  itemBaseAdapter,
  itemDetailsAdapter,
} from '../api/adapters/itemsAdapter';
import {
  singleItemAdapter,
  singleItemPricesAdapter,
} from '../api/adapters/itemSingleAdapter';
import { useFetchIntoCache } from '../api/clients/graphql';
import { bitcoinQuery } from '../api/queries/bitcoinQuery';
import {
  singleItemPricesQuery,
  singleItemQuery,
} from '../api/queries/itemSingleQuery';
import {
  categoriesQuery,
  itemBaseQuery,
  itemDetailsQuery,
} from '../api/queries/itemsQuery';
import {
  PriceHistoryQueryType,
  PriceHistoryResponseType,
} from '../api/types/Bitcoin/queryType';

import type {
  CategoryType,
  ItemBaseQueryType,
  ItemDetailQueryType,
} from '../api/types/Items/queryType';
import type {
  ItemBaseResultType,
  ItemDetailResultType,
} from '../api/types/Items/responseType';
import type {
  SingleItemPricesQueryType,
  SingleItemQueryType,
} from '../api/types/ItemSingle/queryType';
import type {
  SingleItemPricesResultType,
  SingleItemResultType,
} from '../api/types/ItemSingle/responseType';

//param for weekly-daily etc
const STALE_TIME_WEEKLY = 1000 * 60 * 60 * 24 * 7;
const STALE_TIME_DAILY = 1000 * 60 * 60 * 24;

//use this pattern to data for destructed data
//const item = isSuccess && data && data.length > 0 ? data[0] as ItemDetailResultType : null;

export function useCategoryGraphQuery() {
  return useFetchIntoCache<CategoryType[]>(categoriesQuery);
}
export function useItemDetailGraphQuery(itemId: string) {
  return useFetchIntoCache<ItemDetailQueryType, ItemDetailResultType>(
    itemDetailsQuery(itemId),
    itemDetailsAdapter,
  );
}
export function useItemBaseListGraphQuery() {
  return useFetchIntoCache<ItemBaseQueryType[], ItemBaseResultType[]>(
    itemBaseQuery,
    itemBaseAdapter,
  );
}
export function useSingleItemGraphQuery(normalizedNameProp: string) {
  return useFetchIntoCache<SingleItemQueryType, SingleItemResultType>(
    singleItemQuery(normalizedNameProp),
    singleItemAdapter,
  );
}
export function useBitcoinGraphQuery() {
  return useFetchIntoCache<PriceHistoryQueryType[], PriceHistoryResponseType[]>(
    bitcoinQuery,
    bitcoinAdapter,
  );
}
