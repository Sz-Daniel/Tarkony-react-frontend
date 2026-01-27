import { graphClient } from './axios';

//Axios setup with POST for GraphQL API with Query
export async function axiosGraphQLwQuery<TDTO>(query: string) {
  try {
    const response = await graphClient.post('', { query });
    if (response.data.errors) {
      throw new Error(JSON.stringify(response.data.errors));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}
