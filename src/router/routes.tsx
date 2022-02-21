import Home from '../pages/home';
import Login from '../pages/login';

const routes: RouteConfig[] = [
  {
    path: '/home',
    page: <Home />,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    meta: {
      title: '登录',
    },
    children: [
      {
        path: '2',
        meta: {
          title: '二级导航',
        },
        children: [
          {
            path: '23',
            page: <Login />,
            meta: {
              title: '三级导航',
            },
          },
          {
            path: '232',
            page: <Login />,
            meta: {
              title: '三级导航2',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
