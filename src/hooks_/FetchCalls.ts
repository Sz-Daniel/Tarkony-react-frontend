import { useFetchtoCache } from '../api/clients/fetch';

// Categories
import { categoriesQuery } from '../api/queries/_';
import {
  CategoriesData,
  ItemCategoriesQuery,
} from '../api/types_/Items/queryType';
export function useCategoryFetch() {
  return useFetchtoCache<ItemCategoriesQuery, CategoriesData>(categoriesQuery);
}

//ItemBase
import { itemBaseQuery } from '../api/queries/_';
import { ItemBaseData, ItemBaseQuery } from '../api/types_/Items/queryType';
import { itemBaseAdapter } from '../api/adapters/_';
import { ItemBaseResponse } from '../api/types_/Items/responseType';
export function useItemBaseListFetch() {
  return useFetchtoCache<ItemBaseQuery, ItemBaseData[], ItemBaseResponse[]>(
    itemBaseQuery,
    itemBaseAdapter,
  );
}

//ItemDetails
import { itemDetailsQuery } from '../api/queries/_';
import { ItemDetailData, ItemDetailQuery } from '../api/types_/Items/queryType';
import { itemDetailsAdapter } from '../api/adapters/_';
import { ItemDetailResponse } from '../api/types_/Items/responseType';
export function useItemDetailFetch(itemId: string) {
  return useFetchtoCache<ItemDetailQuery, ItemDetailData, ItemDetailResponse>(
    itemDetailsQuery(itemId),
    itemDetailsAdapter,
  );
}

//ItemSingle
import { itemSingleQuery } from '../api/queries/_';
import {
  ItemSingleData,
  ItemSingleQuery,
} from '../api/types_/ItemSingle/queryType';
import { itemSingleAdapter } from '../api/adapters/_';
import { ItemSingleResponse } from '../api/types_/ItemSingle/responseType';
export function useItemSingleFetch(normalizedName: string) {
  return useFetchtoCache<ItemSingleQuery, ItemSingleData, ItemSingleResponse>(
    itemSingleQuery(normalizedName),
    itemSingleAdapter,
  );
}
// Bitcoin
import { bitcoinQuery } from '../api/queries/_';
import { HistoricalPricesQuery } from '../api/types_/Bitcoin/queryType';
import { HistoricalPrices } from '../api/types_/type';
export function useBitcoinFetch() {
  return useFetchtoCache<HistoricalPricesQuery, HistoricalPrices>(bitcoinQuery);
}
