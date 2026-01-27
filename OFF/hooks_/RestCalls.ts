/*
import { useFetchRestIntoCache } from '../api/clients/rest';
import { CategoryType } from '../api/types_/Items/queryType__';
import {
  ItemBaseResultType,
  ItemDetailResultType,
} from '../api/types_/Items/responseType__';

//param for weekly-daily etc
const STALE_TIME_WEEKLY = 1000 * 60 * 60 * 24 * 7;
const STALE_TIME_DAILY = 1000 * 60 * 60 * 24;

//use this pattern to data for destructed data
//const item = isSuccess && data && data.length > 0 ? data[0] as ItemDetailResultType : null;

export function useCategoryRestQuery() {
  return useFetchRestIntoCache<CategoryType>(
    'api/Frontend/Categories',
    'categoriesQuery',
  );
}
export function useItemBaseListRestQuery() {
  return useFetchRestIntoCache<ItemBaseResultType>(
    'api/Frontend/ItemBase',
    'itemBaseQuery',
  );
}
export function useItemDetailRestQuery(itemId: string) {
  return useFetchRestIntoCache<ItemDetailResultType>(
    `api/Frontend/ItemDetail/${itemId}`,
    `itemDetailQuery-${itemId}`,
  );
}

/** local http://localhost:5128/
 * export function useItemDetailRestQuery(itemId: string) {
  return useFetchRestIntoCache<ItemDetailResultType>(
    itemDetailsQuery(itemId),
    itemDetailsAdapter
  );
}
export function useItemBaseListRestQuery() {
  return useFetchRestIntoCache<ItemBaseResultType[]>(
    itemBaseQuery,
    itemBaseAdapter
  );
}
export function useSingleItemGRestQuery(normalizedNameProp: string) {
  return useFetchRestIntoCache<SingleItemResultType>(
    singleItemQuery(normalizedNameProp),
    singleItemAdapter
  );
}
 */
