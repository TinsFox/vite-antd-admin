import BasicLayout from '@/components/Layout';
import BlankLayout from '@/components/Layout/BlankLayout';
import Home from '../pages/home';
import Login from '../pages/login';

const routes: RouteConfig[] = [
  {
    path: '/',
    page: <BlankLayout />,
    children: [
      {
        path: '/login',
        page: <Login />,
        meta: {
          title: '登陆',
        },
      },
      {
        path: '/',
        page: <BasicLayout />,
        children: [
          {
            path: 'dashboard',
            page: <Home />,
            meta: {
              title: '三级导航',
            },
          },
          {
            path: 'table',
            page: <Login />,
            meta: {
              title: 'table',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
