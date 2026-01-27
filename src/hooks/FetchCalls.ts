import { useFetchtoCache } from '../api/clients/fetch';

// Categories
import { categoriesQuery } from '../api/queries/itemsQuery';
import {
  CategoriesData,
  ItemCategoriesDTO,
} from '../api/types/Items/queryType';
export function useCategoryFetch() {
  return useFetchtoCache<ItemCategoriesDTO, CategoriesData>(categoriesQuery);
}

//ItemBase
import { itemBaseQuery } from '../api/queries/itemsQuery';
import { ItemBaseData, ItemBaseDTO } from '../api/types/Items/queryType';
import { itemBaseAdapter } from '../api/adapters/itemsAdapter';
import { ItemBaseDisplay } from '../api/types/Items/responseType';
export function useItemBaseListFetch() {
  return useFetchtoCache<ItemBaseDTO, ItemBaseData[], ItemBaseDisplay[]>(
    itemBaseQuery,
    itemBaseAdapter,
  );
}

//ItemDetails
import { itemDetailsQuery } from '../api/queries/itemsQuery';
import { ItemDetailData, ItemDetailDTO } from '../api/types/Items/queryType';
import { itemDetailsAdapter } from '../api/adapters/itemsAdapter';
import { ItemDetailDisplay } from '../api/types/Items/responseType';
export function useItemDetailFetch(itemId: string) {
  return useFetchtoCache<ItemDetailDTO, ItemDetailData, ItemDetailDisplay>(
    itemDetailsQuery(itemId),
    itemDetailsAdapter,
  );
}

//ItemSingle
import { itemSingleQuery } from '../api/queries/itemSingleQuery';
import {
  ItemSingleData,
  ItemSingleDTO,
} from '../api/types/ItemSingle/queryType';
import { itemSingleAdapter } from '../api/adapters/itemSingleAdapter';
import { ItemSingleDisplay } from '../api/types/ItemSingle/responseType';
export function useItemSingleFetch(normalizedName: string) {
  return useFetchtoCache<ItemSingleDTO, ItemSingleData, ItemSingleDisplay>(
    itemSingleQuery(normalizedName),
    itemSingleAdapter,
  );
}

// Bitcoin
import { bitcoinQuery } from '../api/queries/bitcoinQuery';
import { HistoricalPricesDTO } from '../api/types/Bitcoin/queryType';
import { HistoricalPrices } from '../api/types/type';
export function useBitcoinFetch() {
  return useFetchtoCache<HistoricalPricesDTO, HistoricalPrices[]>(bitcoinQuery);
}
