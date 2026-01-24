import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { restClient } from './axios';

const STALE_TIME_WEEKLY = 1000 * 60 * 60 * 24 * 7;

export function useFetchRestIntoCache<TQuery>(
  apiUrl: string,
  cacheName: string,
  refreshTime = STALE_TIME_WEEKLY,
) {
  return useQuery({
    queryKey: [cacheName],
    queryFn: async () => {
      const raw = await fetchRest(apiUrl);
      const useableField = raw as TQuery;
      //console.log('Rest', 'Result:' + ' useFetchIntoCache', useableField);
      const obj = useableField;
      return obj;
    },
    retry: true,
    throwOnError: (error, query) => {
      //console.log('Error: ' + query.options.queryKey, { error, query });
      return false;
    },
    staleTime: refreshTime,
  });
}

//Axios setup for GET, only-one type what we need
export async function fetchRest(endpoint: string) {
  try {
    console.info('Backend', import.meta.env.VITE_BACKEND_URL);
    const response = await restClient.get(endpoint); // relatív útvonal
    if (response.data.errors) {
      throw new Error(JSON.stringify(response.data.errors));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}
