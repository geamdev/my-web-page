import axios from 'axios';

const BASE_URL = process.env.VITE_URL_BACKEND;

export const client = () => {
  const configAxios = {
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios.create(configAxios);
};
