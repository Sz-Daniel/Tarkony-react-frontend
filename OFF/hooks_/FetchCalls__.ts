//Elsődlegesen a Backend elérhetőséget használja
/*
import {
  useBitcoinGraphQuery,
  useCategoryGraphQuery,
  useItemBaseListGraphQuery,
  useItemDetailGraphQuery,
} from './GraphCalls';
import {
  useCategoryRestQuery,
  useItemBaseListRestQuery,
  useItemDetailRestQuery,
} from './RestCalls';

//de ha nem elérhető átvált a forrás API-ra
export function useCategoryFetch() {
  const RestFetch = useCategoryRestQuery();
  const QueryFetch = useCategoryGraphQuery();
  if (RestFetch.isError) return QueryFetch;
  return RestFetch;
}

export function useItemBaseListFetch() {
  const RestFetch = useItemBaseListRestQuery();
  const QueryFetch = useItemBaseListGraphQuery();
  if (RestFetch.isError) return QueryFetch;
  return RestFetch;
}

//useItemDetailGraphQuery(itemId);
export function useItemDetailFetch(itemId: string) {
  const RestFetch = useItemDetailRestQuery(itemId);
  const QueryFetch = useItemDetailGraphQuery(itemId);
  if (RestFetch.isError) return QueryFetch;
  return RestFetch;
}

export function useSingleItemFetch() {
  const RestFetch = useItemBaseListRestQuery();
  const QueryFetch = useItemBaseListGraphQuery();
  if (RestFetch.isError) return QueryFetch;
  return RestFetch;
}

export function useBitcoinFetch() {

  const QueryFetch = useBitcoinGraphQuery();
  return QueryFetch;
}
*/
