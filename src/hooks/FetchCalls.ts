import { SingleItemQueryType } from '@/api/types/ItemSingle/queryType';
import { useFetchRestIntoCache } from '../api/clients/rest';
import {
  CategoryType,
  ItemBaseQueryType,
  ItemDetailQueryType,
} from '../api/types/Items/queryType';
import { SingleItemResultType } from '@/api/types/ItemSingle/responseType';
import {
  ItemBaseResultType,
  ItemDetailResultType,
} from '@/api/types/Items/responseType';
import { useFetchIntoCache } from '@/api/clients/graphql';
import { itemDetailsQuery } from '@/api/queries/itemsQuery';
import { itemDetailsAdapter } from '@/api/adapters/itemsAdapter';

//param for weekly-daily etc
const STALE_TIME_WEEKLY = 1000 * 60 * 60 * 24 * 7;
const STALE_TIME_DAILY = 1000 * 60 * 60 * 24;

//use this pattern to data for destructed data
//const item = isSuccess && data && data.length > 0 ? data[0] as ItemDetailResultType : null;

export function useCategoryQuery() {
  return useFetchRestIntoCache<CategoryType>(
    'http://localhost:5128/api/Frontend/Categories',
    'categoriesQuery'
  );
}
export function useItemBaseListQuery() {
  return useFetchRestIntoCache<ItemBaseResultType>(
    'http://localhost:5128/api/Frontend/ItemBase',
    'itemBaseQuery'
  );
}
export function useItemDetailQuery(itemId: string) {
  const restResult = useFetchRestIntoCache<ItemDetailResultType>(
    `http://localhost:5128/api/Frontend/ItemDetail/${itemId}`,
    `itemDetailQuery-${itemId}`
  );
  const graphqlResult = useFetchIntoCache<
    ItemDetailQueryType,
    ItemDetailResultType
  >(itemDetailsQuery(itemId), itemDetailsAdapter);
}
