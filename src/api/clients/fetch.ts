import { useQuery } from '@tanstack/react-query';

import { graphClient, restClient } from './axios';
import { Query } from '../types_/type';

const STALE_TIME_WEEKLY = 1000 * 60 * 60 * 24 * 7;

/** Using useQuery with axiosRest with axiosGraphQLwQuery fallback
 * @param query Object containing:
 * cacheName: cache name,
 * restURL: endpoint for REST API calls,
 * graphField: query field (described in return),
 * graphQuery: GraphQL query string,
 * @param adapter Optional function to format the query response data into a usable structure
 * @returns The data corresponding to the query key, filtered to return only the array; optionally reformats the data structure via the adapter for easier use
 */
export function useFetchtoCache<TQuery, TQueryBody, TResponse = TQueryBody>(
  query: Query,
  adapter?: (data: TQueryBody) => TResponse,
  refreshTime = STALE_TIME_WEEKLY,
) {
  return useQuery({
    queryKey: [query.cacheName],
    queryFn: async () => {
      console.log('TEST', query);
      try {
        console.log('TEST REST');
        const result = await axiosRest<TResponse>(query.restURL);
        return result;
      } catch (error) {
        console.log('TEST GRAPH');
        const responseRaw = await axiosGraphQLwQuery<TQuery>(
          query.graphqlQuery,
        );
        //console.log('RAW' + query.cacheName, responseRaw);
        const raw = (responseRaw.data as any)[query.graphqlField] as TQueryBody;

        const result = adapter ? adapter(raw) : raw;
        return result;
      }
    },
    select(data) {
      console.log('RESULT ' + query.cacheName, data);
      return data;
    },
    retry: true,
    throwOnError: (error, query) => {
      //console.log('Error: ' + query.options.queryKey, { error, query });
      return false;
    },
    staleTime: refreshTime,
  });
}

//Axios setup with GET for REST API with endpoint
export async function axiosRest<TResponse>(endpoint: string) {
  try {
    if (
      import.meta.env.VITE_BACKEND_URL === 'offline' ||
      endpoint === 'empty'
    ) {
      console.info(
        'There is no active backend server with REST API connection.\n Switching to legacy with GraphQL.',
      );
      throw new Error('Server Offline');
    }
    const response = await restClient.get(endpoint); // relatív útvonal
    if (response.data.errors) {
      throw new Error(JSON.stringify(response.data.errors));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}

//Axios setup with POST for GraphQL API with Query
export async function axiosGraphQLwQuery<TQuery>(query: string) {
  try {
    const response = await graphClient.post('', { query });
    if (response.data.errors) {
      //console.log('GraphQL Error', response.data.errors);
      throw new Error(JSON.stringify(response.data.errors));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}
