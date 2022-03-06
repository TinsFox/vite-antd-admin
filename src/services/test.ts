import service from '@/utils/request';
export interface User {
  name: string;
}
export const user = () => {
  return service.request<User>({
    url: '/user',
    method: 'get',
  });
};
