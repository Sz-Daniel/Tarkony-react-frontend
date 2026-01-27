/*
import { bitcoinAdapter } from '../api/adapters/bitcoinAdapter';
import {
  itemBaseAdapter,
  itemDetailsAdapter,
} from '../api/adapters/itemsAdapter';
import { singleItemAdapter } from '../api/adapters/itemSingleAdapter';
import { useFetchGraphQLIntoCache } from '../api/clients/graphql';
import { bitcoinQuery } from '../api/queries/bitcoinQuery';
import { singleItemQuery } from '../api/queries/itemSingleQuery';
import {
  categoriesQuery,
  itemBaseQuery,
  itemDetailsQuery,
} from '../api/queries/itemsQuery';
import {
  PriceHistoryQueryType,
  PriceHistoryResponseType,
} from '../api/types_/Bitcoin/queryType__';
import {
  CategoryType,
  ItemBaseQueryType,
  ItemDetailQueryType,
} from '../api/types_/Items/queryType__';
import {
  ItemBaseResultType,
  ItemDetailResultType,
} from '../api/types_/Items/responseType__';
import { SingleItemQueryType } from '../api/types_/ItemSingle/queryType__';
import { SingleItemResultType } from '../api/types_/ItemSingle/responseType__';

import { PriceHistoryQuery } from '../../../../../junk/20260122/HE/api_/types__/Bitcoin/queryType';

//param for weekly-daily etc
const STALE_TIME_WEEKLY = 1000 * 60 * 60 * 24 * 7;
const STALE_TIME_DAILY = 1000 * 60 * 60 * 24;

//use this pattern to data for destructed data
//const item = isSuccess && data && data.length > 0 ? data[0] as ItemDetailResultType : null;

export function useCategoryGraphQuery() {
  return useFetchGraphQLIntoCache<CategoryType[]>(categoriesQuery);
}
export function useItemDetailGraphQuery(itemId: string) {
  return useFetchGraphQLIntoCache<ItemDetailQueryType, ItemDetailResultType>(
    itemDetailsQuery(itemId),
    itemDetailsAdapter,
  );
}
export function useItemBaseListGraphQuery() {
  return useFetchGraphQLIntoCache<ItemBaseQueryType[], ItemBaseResultType[]>(
    itemBaseQuery,
    itemBaseAdapter,
  );
}
export function useSingleItemGraphQuery(normalizedNameProp: string) {
  return useFetchGraphQLIntoCache<SingleItemQueryType, SingleItemResultType>(
    singleItemQuery(normalizedNameProp),
    singleItemAdapter,
  );
}
export function useBitcoinGraphQuery_() {
  return useFetchGraphQLIntoCache<
    PriceHistoryQueryType[],
    PriceHistoryResponseType[]
  >(bitcoinQuery, bitcoinAdapter);
}
export function useBitcoinGraphQuery() {
  return useFetchGraphQLIntoCache<PriceHistoryQuery[]>(bitcoinQuery);
}
*/
