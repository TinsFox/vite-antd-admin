import { User } from './test';
import request from '@/utils/request';
export interface User {
  name: string;
}
export const user = () => {
  return request<User>({
    url: '/user',
    method: 'get',
  });
};
