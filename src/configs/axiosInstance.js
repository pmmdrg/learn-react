import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://663a35eb1ae792804bee7c09.mockapi.io/api/v1/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
