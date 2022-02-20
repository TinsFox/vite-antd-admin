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
    page: <Login />,
    meta: {
      title: '登录',
    },
    children: [
      {
        path: '2',
        page: <Home />,
        meta: {
          title: '二级导航',
        },
      },
    ],
  },
];

export default routes;
