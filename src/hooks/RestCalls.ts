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

//param for weekly-daily etc
const STALE_TIME_WEEKLY = 1000 * 60 * 60 * 24 * 7;
const STALE_TIME_DAILY = 1000 * 60 * 60 * 24;

//use this pattern to data for destructed data
//const item = isSuccess && data && data.length > 0 ? data[0] as ItemDetailResultType : null;

export function useCategoryRestQuery() {
  return useFetchRestIntoCache<CategoryType>(
    'https://tarkony-asp-aqa9axgghrdmb0cx.westeurope-01.azurewebsites.net/api/Frontend/Categories',
    'categoriesQuery'
  );
}
export function useItemBaseListRestQuery() {
  return useFetchRestIntoCache<ItemBaseResultType>(
    'https://tarkony-asp-aqa9axgghrdmb0cx.westeurope-01.azurewebsites.netapi/Frontend/ItemBase',
    'itemBaseQuery'
  );
}
export function useItemDetailRestQuery(itemId: string) {
  return useFetchRestIntoCache<ItemDetailResultType>(
    `https://tarkony-asp-aqa9axgghrdmb0cx.westeurope-01.azurewebsites.net/api/Frontend/ItemDetail/${itemId}`,
    `itemDetailQuery-${itemId}`
  );
}

/**
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
