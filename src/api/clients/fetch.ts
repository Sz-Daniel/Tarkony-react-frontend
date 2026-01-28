import { useQuery } from '@tanstack/react-query';
import { Query } from '../types/type';

import { axiosGraphQLwQuery } from './graphql';
import { axiosRest } from './rest';

const STALE_TIME_WEEKLY = 1000 * 60 * 60 * 24 * 7;

/** Using useQuery for REST API calls(axiosRest) with origin GraphQL fallback(axiosGraphQLwQuery)
 * @param query Object containing:
 * cacheName: cache name,
 * restURL: endpoint for REST API calls,
 * graphField: query field (described in return),
 * graphQuery: GraphQL query string,
 * @param TDTOBody Query response's useful body, without adapter default response type
 * @param TDTO Query response with data, type fields
 * @param adapter Optional function to format the query response data into a usable structure
 * @param TDisplay Adapter converts TDTOBody to TDisplay
 * @returns always with TDisplay
 */
export function useFetchtoCache<TDTO, TDTOData, TDisplay = TDTOData>(
  query: Query,
  adapter?: (data: TDTOData) => TDisplay,
  refreshTime = STALE_TIME_WEEKLY,
) {
  return useQuery({
    queryKey: [query.cacheName],
    queryFn: async () => {
      console.log('FETCHING', query);
      try {
        const result = await axiosRest<TDisplay>(query.restURL);
        return result as TDisplay;
      } catch (error) {
        const DTO = await axiosGraphQLwQuery<TDTO>(query.graphqlQuery);
        const DTOBody = (DTO.data as any)[query.graphqlField] as TDTOData;
        console.log('Before adapter' + query.cacheName, DTO);
        const result = adapter ? adapter(DTOBody) : DTOBody;
        console.log('After adapter' + query.cacheName, result);
        return result as TDisplay;
      }
    },
    select(data) {
      console.log('Result', query);
      console.table([data]);
      return data;
    },
    retry: true,
    throwOnError: (error, query) => {
      return false;
    },
    staleTime: refreshTime,
  });
}
