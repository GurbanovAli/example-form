import axios from 'axios';
import { stringify } from 'qs';

import { apiErrorHandler } from './errorHandler';

const apiService = axios.create({
  baseURL: '',
  responseType: 'json',
  paramsSerializer: (params) =>
    stringify(params, {
      arrayFormat: 'brackets',
      encode: false,
    }),
});

apiService.interceptors.request.use(
  (request) => {
    request.headers = request.headers || {};

    return request;
  },
  (error) => Promise.reject(error)
);

apiService.interceptors.response.use((res) => res, apiErrorHandler);

export default apiService;
