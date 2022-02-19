import { transformRequest, transformResponse } from './helpers/data';
import { processHeaders } from './helpers/headers';
import { bulidURL } from './helpers/url';
import type { AxiosRequestConfig, AxiosResponse } from './types';
import xhr from './core/xhr';
async function request(config: AxiosRequestConfig): Promise<AxiosResponse> {
  processConfig(config);
  const res = await xhr(config);
  return transformResponseData(res);
}
export default request;

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config);
  config.headers = transformHeaders(config);
  config.data = transformRequestData(config);
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config;
  return bulidURL(url, params);
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data);
}
function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data);
  return res;
}
