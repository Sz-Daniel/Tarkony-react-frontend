import { restClient } from './axios';

//Axios setup with GET for REST API with endpoint
export async function axiosRest<TDisplay>(endpoint: string) {
  try {
    if (
      import.meta.env.VITE_BACKEND_URL === 'offline' ||
      !import.meta.env.VITE_BACKEND_URL ||
      endpoint === 'empty' ||
      !endpoint
    ) {
      console.info(
        'There is no active backend server with REST API connection.\nSwitching to origin with GraphQL.',
      );
      throw new Error('Server Offline');
    }
    const response = await restClient.get(endpoint);
    if (response.data.errors) {
      throw new Error(JSON.stringify(response.data.errors));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
}
