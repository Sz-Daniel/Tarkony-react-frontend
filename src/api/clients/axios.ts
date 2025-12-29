import axios from 'axios';

//Initalize Axios client
export const graphClient = axios.create({
  baseURL: 'https://api.tarkov.dev/graphql',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const restClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
