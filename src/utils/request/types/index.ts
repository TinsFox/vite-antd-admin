import type { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "../types";

export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}
export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise
}

export interface AxiosRequestConfig {
  url?: string
  // ...
}
