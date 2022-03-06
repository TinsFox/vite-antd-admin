import axios from 'axios';
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface ResponseType<T = unknown> {
  code: number;
  msg: string;
  data: T;
}
const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse<ResponseType>) => {
    const { data, status } = response;
    if (status >= 200 && status < 400) {
      const { data: body, code, msg } = data;
      if (code !== 200) {
        if (code === 508 || code === 5012 || code === 50014) {
        }
        return Promise.reject(new Error(msg || 'Error'));
      } else {
        return body;
      }
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
export default service;
