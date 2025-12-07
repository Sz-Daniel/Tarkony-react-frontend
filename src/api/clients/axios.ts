import axios from 'axios';

const token = 'JWT_TOKEN_A_LOGINBŐL';
//Initalize Axios client
export const graphClient = axios.create({
  baseURL: 'https://api.tarkov.dev/graphql',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const restClient = axios.create({
  headers: {
    //"Authorization": `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
